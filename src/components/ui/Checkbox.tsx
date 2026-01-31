import clsx from 'clsx'

interface CheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  label?: string | React.ReactNode
}

export function Checkbox({ checked, onChange, disabled, label }: CheckboxProps) {
  return (
    <label className={clsx(
      'flex items-center gap-3 cursor-pointer',
      disabled && 'cursor-not-allowed opacity-50'
    )}>
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={clsx(
          'w-5 h-5 rounded-full flex items-center justify-center transition-colors duration-150',
          checked ? 'bg-black' : 'bg-black'
        )}
      >
        {checked && (
          <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3L3.5 5.5L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
      {label && <span className="text-sm text-black">{label}</span>}
    </label>
  )
}
