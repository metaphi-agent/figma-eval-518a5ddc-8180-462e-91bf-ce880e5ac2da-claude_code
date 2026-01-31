import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CodeInput, BackButton } from '../components/ui'
import { StarDecoration } from '../components/ui/StarDecoration'

export default function SignUp5() {
  const navigate = useNavigate()
  const [code, setCode] = useState<string[]>(Array(5).fill(''))
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
    // Simulate verification
    setTimeout(() => {
      navigate('/signup/success')
    }, 500)
  }

  const handleResend = () => {
    if (canResend) {
      setTimer(20)
      setCanResend(false)
      setCode(Array(5).fill(''))
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
          code to your email <span className="text-black font-medium">sam_smith@gmail.com</span>
        </p>

        {/* Code Input */}
        <div className="mb-auto">
          <CodeInput
            value={code}
            onChange={setCode}
            onComplete={handleComplete}
          />
        </div>
      </div>

      {/* Resend Timer */}
      <div className="flex items-center justify-center gap-2 pb-8">
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
    </div>
  )
}
