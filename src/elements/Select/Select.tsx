import { useId, ChangeEvent } from 'react';

export type Option = {
  label: string;
  value: string;
};

interface SelectProps {
  label: string;
  multiple?: boolean;
  options: Option[];
  value: string;
  onChange(value: string): void;
}

export default function Select({
  label,
  multiple,
  options,
  value,
  onChange,
}: SelectProps) {
  const uniqueId = useId();

  const handleChange = onChange
    ? (event: ChangeEvent<HTMLSelectElement>) => onChange(event.target.value)
    : undefined;

  return (
    <div className="flex flex-col gap-1 mb-4">
      <label className="font-medium" htmlFor={`${uniqueId}-select`}>
        {label}
      </label>
      <select
        className="border-zinc-400 border-solid border rounded p-1"
        id={`${uniqueId}-select`}
        value={value}
        multiple={multiple}
        onChange={handleChange}
      >
        <option key={`${uniqueId}-empty`} value="">
          -- Select {label} --
        </option>
        {options.map((option) => {
          return (
            <option
              key={option.value}
              id={`${uniqueId}-${option.value}`}
              value={option.value}
              selected={value === option.value}
            >
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
