import { ButtonHTMLAttributes, ReactNode } from 'react'
import clsx from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'social'
  size?: 'default' | 'small'
  fullWidth?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'center'
  children: ReactNode
  isLoading?: boolean
}

export function Button({
  variant = 'primary',
  size = 'default',
  fullWidth = true,
  icon,
  iconPosition = 'left',
  children,
  className,
  disabled,
  isLoading,
  ...props
}: ButtonProps) {
  const baseStyles = 'flex items-center justify-center font-semibold transition-all duration-150 rounded-[10px] active:scale-[0.98]'

  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800 disabled:bg-gray-400',
    secondary: 'bg-white text-black border border-[#747474] hover:bg-gray-50 disabled:border-gray-300 disabled:text-gray-400',
    social: 'bg-white text-black border border-[#D8DADC] hover:bg-gray-50 disabled:border-gray-200 disabled:text-gray-400'
  }

  const sizes = {
    default: 'h-14 px-6 text-base',
    small: 'h-12 px-4 text-sm'
  }

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        (disabled || isLoading) && 'cursor-not-allowed opacity-70',
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full" />
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="mr-3">{icon}</span>}
          {icon && iconPosition === 'center' && <span className="mr-3">{icon}</span>}
          {children}
        </>
      )}
    </button>
  )
}
