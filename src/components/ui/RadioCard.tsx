import { ReactNode } from 'react';

interface RadioCardProps {
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
}

export default function RadioCard({
  name,
  value,
  checked,
  onChange,
  title,
  description,
  children
}: RadioCardProps) {
  return (
    <label className={`flex items-start gap-4 p-5 rounded-2xl border-2 transition-all duration-150 cursor-pointer
      ${checked ? 'border-black bg-white' : 'border-gray-200 bg-white hover:border-gray-300'}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        className="sr-only"
      />
      <div className="flex-1">
        <div className="font-semibold text-base text-black">{title}</div>
        {description && (
          <div className="mt-1 text-sm text-gray-500">{description}</div>
        )}
        {children}
      </div>
      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all duration-150
        ${checked ? 'border-black' : 'border-gray-300'}`}>
        {checked && (
          <div className="w-3 h-3 rounded-full bg-black"></div>
        )}
      </div>
    </label>
  );
}
