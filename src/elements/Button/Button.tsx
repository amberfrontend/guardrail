import { ReactNode, MouseEvent, KeyboardEvent, TouchEvent } from 'react';
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

type ButtonStyle = 'primary' | 'secondary' | 'utility';

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
      type: 'overlay-trigger';
    };

type SharedProps = {
  disabled?: boolean;
  style?: ButtonStyle;
  onClick(): void;
  onKeyDown(): void;
  onTouchStart(): void;
};

type ButtonProps = TypeProps & SharedProps;

export default function Button(props: ButtonProps) {
  const {
    disabled,
    type,
    style = 'primary',
    onClick,
    onKeyDown,
    onTouchStart,
  } = props;

  const handleOnClick = (event: MouseEvent) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    onClick();
  };

  const handleOnKeyDown = (event: KeyboardEvent) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    onKeyDown();
  };

  const handleTouchStart = (event: TouchEvent) => {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    onTouchStart();
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
  } else if (type === 'overlay-trigger') {
    const { ariaControls, ariaExpanded, children } = props;
    typeProps = { ariaControls, ariaExpanded, children };

    inner = children;
  }

  return (
    <button
      aria-disabled={disabled || undefined}
      className={`${buttonClasses['button']} ${buttonClasses[style]}`}
      onClick={handleOnClick}
      onKeyDown={handleOnKeyDown}
      onTouchStart={handleTouchStart}
      {...typeProps}
    >
      {inner}
    </button>
  );
}
