import {
  MouseEvent,
} from 'react';

import ListboxOption, { Option } from './components/ListboxOption';

interface ListboxProps {
  options: Option[];
  className?: string;
  id: string;
  style?: object;
  onClose(): void; 
}

export default function Listbox(
  { className, id, options, style, onClose }: ListboxProps) {

    const handleSetSelected = (option: string) => {
      console.log('handleSetSelected option: ', option);
      // const indexOfSelected = isSelected.indexOf(option);
      // const newIsSelected = isSelected;
      // if (indexOfSelected === -1) {
      //   newIsSelected.push(option);
      // } else {
      //   newIsSelected.splice(indexOfSelected, 1);
      // }
  
      // setIsSelected([...newIsSelected]);
    };

    const handleListboxOptionClick = (
      event: MouseEvent<HTMLLIElement>,
      option: string,
    ) => {
      event.preventDefault();
      event.stopPropagation();
  
      handleSetSelected(option);
    };

    const handleListboxOptionKeyDown = (event: KeyboardEvent, option: Option) => {
      console.log('event: ', event);
      console.log('handleListboxOptionKeyDown option: ', option);
      event.preventDefault();
      event.stopPropagation();
  
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowDown') {
        // const indexOfOption = options.indexOf(option);
  
        // if (options.length === indexOfOption + 1) {
        //   listboxOptionsRefs.current[0]?.focus();
        // } else {
        //   listboxOptionsRefs.current[indexOfOption + 1]?.focus();
        // }
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
      } else if (event.key === 'Enter') {
        // handleSetSelected(option);
      }
    };

    return (
      <ul
        id={id}
        role="listbox"
        style={style}
        className={`
        ${className}
          absolute
          bg-white
          rounded-md
          shadow
          shadow-zinc-300
          max-h-36
          overflow-auto
          p-px`}
      >
        {options.map((option) => {
              return (
                <ListboxOption
                  key={option.label}
                  option={option}
                  // ref={el => (listboxOptionsRefs.current[index] = el)}
                  selected={option.selected}
                  onClick={handleListboxOptionClick}
                  onKeyDown={() => handleListboxOptionKeyDown}
                />
              );
            })}
      </ul>
    );
  }
