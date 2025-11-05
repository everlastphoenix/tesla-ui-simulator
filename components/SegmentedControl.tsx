import React from 'react';

interface SegmentedControlProps<T extends string> {
  options: { value: T; label: string | React.ReactNode }[];
  value: T;
  onChange: (value: T) => void;
  disabled?: boolean;
}

export const SegmentedControl = <T extends string>({ options, value, onChange, disabled }: SegmentedControlProps<T>): React.ReactElement => {
  return (
    <div className={`flex items-center p-1 rounded-lg bg-gray-200/75 ${disabled ? 'opacity-50' : ''}`}>
      {options.map((option) => (
        <button
          key={option.value as string}
          onClick={() => !disabled && onChange(option.value)}
          disabled={disabled}
          className={`px-4 py-2.5 text-sm font-medium rounded-md ${
            value === option.value ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-600 hover:text-gray-900'
          } transition-all duration-200`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
