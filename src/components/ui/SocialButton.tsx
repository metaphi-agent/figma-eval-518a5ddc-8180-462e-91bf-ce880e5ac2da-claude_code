import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

type SocialProvider = 'google' | 'apple' | 'email' | 'facebook' | 'github' | 'dropbox' | 'linkedin' | 'microsoft' | 'instagram'

interface SocialButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  provider: SocialProvider
  variant?: 'full' | 'icon-only'
  text?: string
}

const providerConfig: Record<SocialProvider, { icon: string; label: string }> = {
  google: { icon: './assets/icons/google.svg', label: 'Google' },
  apple: { icon: './assets/icons/apple.svg', label: 'Apple' },
  email: { icon: './assets/icons/mail.svg', label: 'Email' },
  facebook: { icon: './assets/icons/facebook.svg', label: 'Facebook' },
  github: { icon: './assets/icons/github.svg', label: 'Github' },
  dropbox: { icon: './assets/icons/dropbox.svg', label: 'Dropbox' },
  linkedin: { icon: './assets/icons/linkedin.svg', label: 'LinkedIn' },
  microsoft: { icon: './assets/icons/microsoft.svg', label: 'Microsoft' },
  instagram: { icon: './assets/icons/instagram.svg', label: 'Instagram' }
}

export function SocialButton({
  provider,
  variant = 'full',
  text,
  className,
  ...props
}: SocialButtonProps) {
  const config = providerConfig[provider]
  const displayText = text || `Continue with ${config.label}`

  if (variant === 'icon-only') {
    return (
      <button
        type="button"
        className={clsx(
          'flex-1 h-14 flex items-center justify-center rounded-[10px] border border-[#D8DADC] bg-white',
          'hover:bg-gray-50 transition-colors duration-150 active:scale-[0.98]',
          className
        )}
        {...props}
      >
        <img src={config.icon} alt={config.label} className="w-6 h-6" />
      </button>
    )
  }

  return (
    <button
      type="button"
      className={clsx(
        'w-full h-14 flex items-center px-5 rounded-[28px] border border-[#D8DADC] bg-white',
        'hover:bg-gray-50 transition-colors duration-150 active:scale-[0.98]',
        className
      )}
      {...props}
    >
      <img src={config.icon} alt="" className="w-5 h-5" />
      <span className="flex-1 text-center font-medium text-black">{displayText}</span>
    </button>
  )
}
