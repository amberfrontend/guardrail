import { useId } from 'react';

interface FileUploadProps {
  ariaInvalid?: boolean;
  errorText?: string;
  helperText?: string;
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChange(value: string): void;
}

export default function FileUpload({
  ariaInvalid,
  errorText,
  helperText,
  id,
  label,
  placeholder,
  required,
  value,
  onChange,
}: FileUploadProps) {
  const uniqueId = useId();

  return (
    <div className="flex flex-col gap-1 mb-4">
      <label className="font-medium" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className="border-zinc-400 border-solid border rounded pl-2 pt-4 pb-4"
        type="file"
        value={value}
        placeholder={placeholder ? placeholder : undefined}
        required={required}
        aria-describedby={`${uniqueId}-helper`}
        aria-required={required ? true : undefined}
        aria-invalid={ariaInvalid ? true : undefined}
        onChange={(event) => onChange(event.target.value)}
      />
      <span className="text-sm" id={`${uniqueId}-helper`}>
        {errorText ? errorText : helperText}
      </span>
    </div>
  );
}
