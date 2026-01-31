import { useRef, useState, KeyboardEvent, ClipboardEvent } from 'react'
import clsx from 'clsx'

interface CodeInputProps {
  length?: number
  value: string[]
  onChange: (value: string[]) => void
  error?: boolean
  onComplete?: (code: string) => void
}

export function CodeInput({ length = 5, value, onChange, error, onComplete }: CodeInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (index: number, inputValue: string) => {
    const newValue = [...value]
    const digit = inputValue.replace(/\D/g, '').slice(-1)
    newValue[index] = digit
    onChange(newValue)

    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus()
    }

    if (newValue.every(v => v) && newValue.length === length) {
      onComplete?.(newValue.join(''))
    }
  }

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
    if (e.key === 'ArrowRight' && index < length - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length)
    const newValue = [...value]
    pastedData.split('').forEach((char, i) => {
      if (i < length) {
        newValue[i] = char
      }
    })
    onChange(newValue)

    const nextEmptyIndex = newValue.findIndex(v => !v)
    if (nextEmptyIndex !== -1) {
      inputRefs.current[nextEmptyIndex]?.focus()
    } else {
      inputRefs.current[length - 1]?.focus()
      if (newValue.every(v => v)) {
        onComplete?.(newValue.join(''))
      }
    }
  }

  return (
    <div className="flex gap-3 justify-center">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={el => inputRefs.current[index] = el}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value[index] || ''}
          onChange={e => handleChange(index, e.target.value)}
          onKeyDown={e => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className={clsx(
            'w-14 h-16 text-center text-2xl font-medium rounded-xl border-2 outline-none transition-all duration-150',
            error
              ? 'border-[#E64646] text-[#E64646]'
              : value[index]
                ? 'border-black text-black'
                : 'border-[#D8DADC] text-black',
            'focus:border-black focus:ring-1 focus:ring-black'
          )}
        />
      ))}
    </div>
  )
}
