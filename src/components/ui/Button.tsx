import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'social';
  icon?: ReactNode;
  children: ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
}

export default function Button({
  variant = 'primary',
  icon,
  children,
  fullWidth = true,
  loading = false,
  disabled,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-base font-semibold transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'bg-black text-white hover:bg-gray-800 active:scale-[0.98]',
    secondary: 'bg-white text-black border border-gray-200 hover:bg-gray-50 active:scale-[0.98]',
    social: 'bg-white text-black border border-gray-200 hover:bg-gray-50 active:scale-[0.98] font-medium'
  };

  const widthStyle = fullWidth ? 'w-full' : 'w-fit';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyle} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="inline-block w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : icon ? (
        <span className="flex-shrink-0">{icon}</span>
      ) : null}
      <span>{children}</span>
    </button>
  );
}
