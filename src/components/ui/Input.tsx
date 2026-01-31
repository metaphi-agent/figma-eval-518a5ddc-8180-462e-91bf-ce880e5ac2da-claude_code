import { InputHTMLAttributes, useState, forwardRef } from 'react'
import clsx from 'clsx'

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  error?: string
  showPasswordToggle?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  showPasswordToggle,
  icon,
  iconPosition = 'right',
  className,
  type = 'text',
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false)
  const inputType = showPasswordToggle && type === 'password'
    ? (showPassword ? 'text' : 'password')
    : type

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm text-black mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && iconPosition === 'left' && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}
        <input
          ref={ref}
          type={inputType}
          className={clsx(
            'w-full h-14 px-4 rounded-[10px] border bg-white text-black placeholder:text-gray-400',
            'outline-none transition-all duration-150',
            'focus:border-black focus:ring-1 focus:ring-black',
            error ? 'border-[#E64646]' : 'border-[#D8DADC]',
            icon && iconPosition === 'left' && 'pl-12',
            (showPasswordToggle || (icon && iconPosition === 'right')) && 'pr-12',
            className
          )}
          {...props}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? (
              <img src="./assets/icons/eye-show.svg" alt="Show password" className="w-5 h-5" />
            ) : (
              <img src="./assets/icons/eye-hide.svg" alt="Hide password" className="w-5 h-5" />
            )}
          </button>
        )}
        {icon && iconPosition === 'right' && !showPasswordToggle && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2">
            {icon}
          </span>
        )}
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-[#E64646]">{error}</p>
      )}
    </div>
  )
})

Input.displayName = 'Input'
