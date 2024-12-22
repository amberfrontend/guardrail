import {
  ReactNode,
  RefObject,
  MouseEvent,
  KeyboardEvent,
  TouchEvent,
} from 'react';
import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaAngleUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaArrowUp,
  FaArrowUpRightFromSquare,
  FaClosedCaptioning,
  FaCloudArrowDown,
  FaCloudArrowUp,
  FaShare,
  FaBackward,
  FaForward,
  FaMagnifyingGlass,
  FaPause,
  FaPlay,
  FaPlus,
  FaXmark,
} from 'react-icons/fa6';

import { buttonClasses } from '../sharedClasses';

type IconButtonIcon =
  | 'arrowDown'
  | 'arrowLeft'
  | 'arrowRight'
  | 'arrowUp'
  | 'backward'
  | 'chevronDown'
  | 'chevronLeft'
  | 'chevronRight'
  | 'chevronUp'
  | 'close'
  | 'closedCaptioning'
  | 'cloudArrowDown'
  | 'cloudArrowUp'
  | 'forward'
  | 'newWindow'
  | 'pause'
  | 'play'
  | 'plus'
  | 'search'
  | 'share';

type IconButtonSize = 'medium' | 'large';

type TypeProps =
  | {
      ariaLabel: string;
      icon: IconButtonIcon;
      type: 'icon-only';
      size?: IconButtonSize;
    }
  | {
      ariaControls: string;
      ariaExpanded: boolean;
      ariaLabel?: string;
      children: ReactNode;
      type: 'modal-trigger';
    }
  | {
      children: string;
      type: 'text';
    };

type SharedProps = {
  ariaDescribedby?: string;
  disabled?: boolean;
  ref?: RefObject<HTMLButtonElement | null>;
  onClick(): void;
  onKeyUp(): void;
  onTouchEnd(): void;
};

type ButtonProps = TypeProps & SharedProps;

export default function Button(props: ButtonProps) {
  const { ariaDescribedby, disabled, type, ref, onClick, onKeyUp, onTouchEnd } =
    props;

  const handleOnClick = (event: MouseEvent) => {
    if (disabled) {
      event.stopPropagation();
      event.preventDefault();
      return;
    }

    onClick();
  };

  const handleOnKeyDown = (event: KeyboardEvent) => {
    if (disabled) {
      event.stopPropagation();
      event.preventDefault();
      return;
    }

    if (event.code === 'Enter' || event.code === 'Space') {
      onKeyUp();
    }
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (disabled) {
      event.stopPropagation();
      event.preventDefault();
      return;
    }

    onTouchEnd();
  };

  let inner;
  let typeProps;

  if (type === 'icon-only') {
    const { ariaLabel, icon, size = 'medium' } = props;
    typeProps = { ariaLabel, icon, size };

    const iconComponents = {
      arrowDown: FaArrowDown,
      arrowLeft: FaArrowLeft,
      arrowRight: FaArrowRight,
      arrowUp: FaArrowUp,
      backward: FaBackward,
      chevronDown: FaAngleDown,
      chevronLeft: FaAngleLeft,
      chevronRight: FaAngleRight,
      chevronUp: FaAngleUp,
      close: FaXmark,
      closedCaptioning: FaClosedCaptioning,
      cloudArrowDown: FaCloudArrowDown,
      cloudArrowUp: FaCloudArrowUp,
      forward: FaForward,
      newWindow: FaArrowUpRightFromSquare,
      pause: FaPause,
      play: FaPlay,
      plus: FaPlus,
      search: FaMagnifyingGlass,
      share: FaShare,
    };

    const IconComponent = iconComponents[icon];

    const iconSizes = {
      medium: 24,
      large: 44,
    };

    inner = <IconComponent size={iconSizes[size]} />;
  } else if (type === 'modal-trigger') {
    const { ariaControls, ariaExpanded, children } = props;
    typeProps = { ariaControls, ariaExpanded, children };

    inner = children;
  } else if (type === 'text') {
    const { children } = props;
    inner = children;
  }

  return (
    <button
      aria-describedby={ariaDescribedby || undefined}
      aria-disabled={disabled || undefined}
      className={`${buttonClasses['button']}`}
      ref={ref}
      onClick={handleOnClick}
      onKeyUp={handleOnKeyDown}
      onTouchEnd={handleTouchEnd}
      {...typeProps}
    >
      {inner}
    </button>
  );
}
