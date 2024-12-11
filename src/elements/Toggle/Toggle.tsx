import { KeyboardEvent, useId, useState } from 'react';
import { FaCheck, FaXmark } from 'react-icons/fa6';

interface ToggleLabels {
  primary: string;
  off: string;
  on: string;
}

interface ToggleProps {
  id?: string;
  helperText?: string;
  labels: ToggleLabels;
  renderChecked?: boolean;
  onChange(): void;
}

export default function Toggle({
  id,
  helperText,
  labels,
  renderChecked = false,
  onChange,
}: ToggleProps) {
  const [isChecked, setIsChecked] = useState(renderChecked);

  const uniqueId = useId();

  const handleToggle = () => {
    setIsChecked(!isChecked);
    onChange();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Space') handleToggle();
  };

  const trackClasses = isChecked
    ? 'justify-end border-primary-500 bg-primary-500'
    : 'justify-start border-neutral-300 bg-neutral-300';

  return (
    <div className="cursor-pointer relative mb-2">
      <div className="flex flex-col">
        <div id={`${uniqueId}-label`} className="mb-1 font-medium text-sm">
          {labels.primary}
        </div>
        <div className="flex items-center gap-2">
          <div aria-hidden="true" className="text-xs">
            {labels.off}
          </div>
          <button
            aria-checked={isChecked}
            aria-labelledby={`${uniqueId}-label`}
            aria-describedby={`${uniqueId}-helper`}
            className={`flex items-center border-2 focus:outline focus:outline-2 focus:outline-primary-500 outline-offset-1 rounded-2xl flex ${trackClasses} w-11 h-7 p-px`}
            id={id || uniqueId}
            role="switch"
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            onTouchStart={handleToggle}
          >
            <div className="flex items-center justify-center bg-white rounded-full w-5 h-5">
              {isChecked ? <FaCheck /> : <FaXmark />}
            </div>
          </button>
          <div aria-hidden="true" className="text-xs">
            {labels.on}
          </div>
        </div>
      </div>
      <div id={`${uniqueId}-helper`}>{helperText}</div>
    </div>
  );
}
