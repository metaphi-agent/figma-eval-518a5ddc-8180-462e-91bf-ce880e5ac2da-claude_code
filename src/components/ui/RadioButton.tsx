import clsx from 'clsx'

interface RadioButtonProps {
  checked: boolean
  onChange: () => void
  disabled?: boolean
  label?: string | React.ReactNode
  name?: string
}

export function RadioButton({ checked, onChange, disabled, label, name }: RadioButtonProps) {
  return (
    <label className={clsx(
      'flex items-center gap-3 cursor-pointer',
      disabled && 'cursor-not-allowed opacity-50'
    )}>
      <button
        type="button"
        role="radio"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange()}
        className={clsx(
          'w-5 h-5 rounded-full border-[1.5px] border-black flex items-center justify-center transition-colors duration-150'
        )}
      >
        {checked && (
          <span className="w-[11px] h-[11px] rounded-full bg-black" />
        )}
      </button>
      {label && <span className="text-black">{label}</span>}
    </label>
  )
}
