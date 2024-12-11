import { forwardRef, MouseEvent, KeyboardEvent } from 'react';
import { FaCheck } from 'react-icons/fa';

export interface Option {
  label: string;
  selected: boolean;
}

interface ListboxOptionProps {
  option: Option;
  selected: boolean;
  onClick(event: MouseEvent<HTMLLIElement>, option: string): void;
  onKeyDown(event: KeyboardEvent, option: string): void;
}

const ListboxOption = forwardRef<HTMLLIElement, ListboxOptionProps>(
  (props, ref) => {
    const { option, selected, onClick, onKeyDown } = props;

    return (
      <li
        key={option.label}
        role="option"
        aria-selected={selected}
        tabIndex={-1}
        className={`
          ${selected && 'bg-zinc-100'}
          flex
          gap-1
          cursor-pointer
          text-sm
          p-2
          pl-3
          m-1
          rounded`}
        ref={ref}
        onClick={(event) => onClick(event, option.label)}
        onKeyDown={(event) => onKeyDown(event, option.label)}
      >
        <div className="w-4">
          {selected ? <FaCheck /> : null}
        </div>
        {option.label}
      </li>
    );
  },
);

ListboxOption.displayName = 'ListboxOption';
export default ListboxOption;
