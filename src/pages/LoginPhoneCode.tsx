import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CodeInput, BackButton } from '../components/ui'
import { StarDecoration } from '../components/ui/StarDecoration'

interface LoginPhoneCodeProps {
  error?: boolean
  filled?: boolean
}

export default function LoginPhoneCode({ error = false, filled = false }: LoginPhoneCodeProps) {
  const navigate = useNavigate()
  const [code, setCode] = useState<string[]>(filled ? ['2', '5', '0', '1', '7'] : Array(5).fill(''))
  const [hasError, setHasError] = useState(error)
  const [timer, setTimer] = useState(20)
  const [canResend, setCanResend] = useState(false)

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(t => t - 1)
      }, 1000)
      return () => clearInterval(interval)
    } else {
      setCanResend(true)
    }
  }, [timer])

  const handleComplete = (enteredCode: string) => {
    // Simulate verification - accept any code except 25017
    if (enteredCode === '25017') {
      setHasError(true)
    } else {
      setHasError(false)
      navigate('/')
    }
  }

  const handleResend = () => {
    if (canResend) {
      setTimer(20)
      setCanResend(false)
      setCode(Array(5).fill(''))
      setHasError(false)
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="mobile-container flex flex-col min-h-screen px-5 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <BackButton />
        <StarDecoration variant="filled" className="w-12 h-12" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h1 className="text-[32px] font-bold text-black mb-2">
          Enter code
        </h1>
        <p className="text-[#808080] mb-10">
          We've sent an SMS with an activation<br />
          code to your phone <span className="text-black font-medium">+33 2 94 27 84 11</span>
        </p>

        {/* Code Input */}
        <div className="mb-4">
          <CodeInput
            value={code}
            onChange={setCode}
            onComplete={handleComplete}
            error={hasError}
          />
        </div>

        {/* Error Message */}
        {hasError && (
          <p className="text-center text-[#E64646] mt-4">
            Wrong code, please try again
          </p>
        )}
      </div>

      {/* Resend Timer */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <button
          onClick={handleResend}
          disabled={!canResend}
          className={`font-medium ${canResend ? 'text-black' : 'text-[#808080]'}`}
        >
          Send code again
        </button>
        {!canResend && (
          <span className="text-[#808080]">{formatTime(timer)}</span>
        )}
      </div>

      {/* Keyboard placeholder */}
      <div className="bg-[#D3D6DC] rounded-t-lg p-2 -mx-5 -mb-8">
        <div className="grid grid-cols-3 gap-1">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
            <button
              key={num}
              onClick={() => {
                const emptyIndex = code.findIndex(c => !c)
                if (emptyIndex !== -1) {
                  const newCode = [...code]
                  newCode[emptyIndex] = String(num)
                  setCode(newCode)
                  setHasError(false)
                  if (emptyIndex === 4) {
                    handleComplete(newCode.join(''))
                  }
                }
              }}
              className="h-12 flex flex-col items-center justify-center bg-white rounded-lg shadow-sm active:bg-gray-100"
            >
              <span className="text-xl font-medium">{num}</span>
              {num === 2 && <span className="text-[10px] text-gray-500">ABC</span>}
              {num === 3 && <span className="text-[10px] text-gray-500">DEF</span>}
              {num === 4 && <span className="text-[10px] text-gray-500">GHI</span>}
              {num === 5 && <span className="text-[10px] text-gray-500">JKL</span>}
              {num === 6 && <span className="text-[10px] text-gray-500">MNO</span>}
              {num === 7 && <span className="text-[10px] text-gray-500">PQRS</span>}
              {num === 8 && <span className="text-[10px] text-gray-500">TUV</span>}
              {num === 9 && <span className="text-[10px] text-gray-500">WXYZ</span>}
            </button>
          ))}
          <button className="h-12 flex items-center justify-center text-gray-500">
            +*#
          </button>
          <button
            onClick={() => {
              const emptyIndex = code.findIndex(c => !c)
              if (emptyIndex !== -1) {
                const newCode = [...code]
                newCode[emptyIndex] = '0'
                setCode(newCode)
                setHasError(false)
                if (emptyIndex === 4) {
                  handleComplete(newCode.join(''))
                }
              }
            }}
            className="h-12 flex items-center justify-center bg-white rounded-lg shadow-sm active:bg-gray-100"
          >
            <span className="text-xl font-medium">0</span>
          </button>
          <button
            onClick={() => {
              const lastFilledIndex = code.map((c, i) => c ? i : -1).filter(i => i !== -1).pop()
              if (lastFilledIndex !== undefined && lastFilledIndex >= 0) {
                const newCode = [...code]
                newCode[lastFilledIndex] = ''
                setCode(newCode)
                setHasError(false)
              }
            }}
            className="h-12 flex items-center justify-center"
          >
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 5L5.5 9M5.5 9L9.5 13M5.5 9H18.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
