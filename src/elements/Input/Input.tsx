import {
  useId,
  forwardRef,
  ReactNode,
  ChangeEvent,
  KeyboardEvent,
  FocusEvent,
  RefObject
} from 'react';

type InputType = 'email' | 'file' | 'search' | 'text' | 'url';
type InputRole = 'combobox';
type InputHasPopup = 'listbox';

interface InputProps {
  ariaControls?: string;
  ariaExpanded?: boolean;
  ariaHaspopup?: InputHasPopup;
  ariaInvalid?: boolean;
  classNames?: string;
  errorText?: string;
  helperText?: ReactNode;
  iconLeading?: ReactNode;
  iconTrailing?: ReactNode;
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  role?: InputRole;
  type: InputType;
  value?: string;
  onChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
  onKeyDown?(
    event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void;
  onFocus?(event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>): void;
}
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      ariaControls,
      ariaExpanded,
      ariaHaspopup,
      ariaInvalid,
      classNames,
      errorText,
      helperText,
      // iconLeading,
      iconTrailing,
      id,
      label,
      placeholder,
      required,
      role,
      type,
      value,
      onChange,
      onKeyDown,
      onFocus,
    }: InputProps,
    ref,
  ) => {
    const uniqueId = useId();

    return (
      <div className="flex flex-col gap-1">
        <label className="font-medium" htmlFor={id}>
          {label}
        </label>
        <div className="flex items-center justify-start">
          <input
            id={id}
            className={`border-zinc-400
              shadow
              shadow-zinc-300
              rounded-md
              p-1
              pl-4
              pr-8
              overflow-x-clip${classNames && ' ' + classNames}`}
            type={type}
            value={value}
            placeholder={placeholder ? placeholder : undefined}
            required={required}
            aria-controls={ariaControls || undefined}
            aria-describedby={`${uniqueId}-helper`}
            aria-expanded={ariaExpanded || undefined}
            aria-haspopup={ariaHaspopup || undefined}
            aria-invalid={ariaInvalid ? true : undefined}
            aria-required={required ? true : undefined}
            ref={ref as RefObject<HTMLInputElement>}
            role={role || undefined}
            onChange={(event) => onChange(event)}
            onKeyDown={onKeyDown ? (event) => onKeyDown(event) : undefined}
            onFocus={onFocus ? (event) => onFocus(event) : undefined}
          />
          {iconTrailing && (
            <span className="relative -left-5">{iconTrailing}</span>
          )}
        </div>
        <span className="text-sm" id={`${uniqueId}-helper`}>
          {errorText ? errorText : helperText}
        </span>
      </div>
    );
  },
);

Input.displayName = 'Input';
export default Input;
