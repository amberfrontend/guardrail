import {
  useState,
  useId,
  useEffect,
  useRef,
  ChangeEvent,
  KeyboardEvent,
  FocusEvent,
} from 'react';
import { createPortal } from 'react-dom';
import { FaCaretDown } from 'react-icons/fa';

import Input from '../../elements/Input/Input';
import Listbox from '../Listbox/Listbox';
import { Option } from '../Listbox/components/ListboxOption';

// import { useCloseOnOutsideClick } from '../../utilities/useCloseOnOutsideClick';

interface ComboboxProps {
  label: string;
  multiselect?: boolean;
  options: Option[];
  onSelected(option: string): void;
}

export default function Combobox({
  label,
  options,
  // onSelected,
}: ComboboxProps) {
  const [inputValue, setInputValue] = useState('');
  const [isListboxOpen, setIsListboxOpen] = useState(false);
  
  const comboboxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputPosition = useRef({ left: 0, top: 0, width: 0 });
  // const listboxOptionsRefs = useRef<Array<HTMLLIElement | null>>([]);

  const uniqueId = useId();

  // useCloseOnOutsideClick([comboboxRef, inputRef, listboxRef], () =>
  //   setIsListboxOpen(false),
  // );

  useEffect(() => {
    if (inputRef && inputRef.current) {
      const boundingRect = inputRef.current.getBoundingClientRect();
      const TOP_GAP = 4;
      const EXTRA_WIDTH = 32;
      const top = boundingRect.top + boundingRect.height + TOP_GAP;
      const width = boundingRect.width + EXTRA_WIDTH;

      inputPosition.current = {
        left: boundingRect.left,
        top: top,
        width: width,
      };
    }
  }, [inputRef]);

  // useEffect(() => {
  //   listboxOptionsRefs.current = listboxOptionsRefs.current.slice(
  //     0,
  //     options.length,
  //   );
  // }, [options]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log('event: ', event);
    // if (event.key === 'Escape') {
    //   setIsListboxOpen(false);
    // } else if (event.key === 'ArrowDown') {
    //   if (!isListboxOpen) setIsListboxOpen(true);
    //   listboxOptionsRefs.current[0]?.focus();
    // }
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    if (!event.defaultPrevented) {
      setIsListboxOpen(true);
    }
  };

  return (
    <div ref={comboboxRef}>
      <Input
        ariaControls={`${uniqueId}-listbox`}
        ariaExpanded={isListboxOpen}
        ariaHaspopup="listbox"
        aria-activedescendant="id-of-option"
        classNames="w-28"
        iconTrailing={<FaCaretDown />}
        id={`${uniqueId}-input`}
        label={label}
        type="text"
        ref={inputRef}
        role="combobox"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        onFocus={handleFocus}
      />
      <div id={`${uniqueId}-listbox-wrapper`} />
      {isListboxOpen &&
        createPortal(
          <Listbox
            id={`${uniqueId}-listbox`}
            // ref={listboxRef}
            style={{
              left: `${inputPosition.current.left}px`,
              top: `${inputPosition.current.top}px`,
              minWidth: `${inputPosition.current.width}px`,
            }}
            options={options}
            onClose={() => setIsListboxOpen(false)}
          >
            {/* {options.map((option, index) => {
              return (
                <ListboxOption
                  key={option}
                  option={option}
                  // ref={el => (listboxOptionsRefs.current[index] = el)}
                  selected={isSelected.includes(option)}
                  onClick={handleListboxOptionClick}
                  onKeyDown={handleListboxOptionKeyDown}
                />
              );
            })} */}
          </Listbox>,
          document.body,
        )}
    </div>
  );
}
