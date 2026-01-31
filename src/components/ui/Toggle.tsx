import clsx from 'clsx'

interface ToggleProps {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  label?: string
}

export function Toggle({ checked, onChange, disabled, label }: ToggleProps) {
  return (
    <label className={clsx(
      'flex items-center justify-between cursor-pointer',
      disabled && 'cursor-not-allowed opacity-50'
    )}>
      {label && <span className="text-black">{label}</span>}
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={clsx(
          'relative inline-flex h-[26px] w-11 shrink-0 rounded-full transition-colors duration-200',
          checked ? 'bg-black' : 'bg-[#DDDDDD]'
        )}
      >
        <span
          className={clsx(
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200',
            'absolute top-[3px]',
            checked ? 'translate-x-[21px]' : 'translate-x-[3px]'
          )}
        />
      </button>
    </label>
  )
}
