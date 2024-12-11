import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

import { hashifyHref } from './utilities/utility-functions';
import { buttonClasses } from '../sharedClasses';

import Image from '../Image/Image';

export type ActionLinkStyle = 'primary' | 'secondary';

type TypeProps =
  | {
      href: string;
      newWindowText?: string;
      style: ActionLinkStyle;
      text: string;
      type: 'button';
    }
  | {
      mainId: string;
      text: string;
      type: 'bypass-block';
    }
  | {
      ariaLabel: string;
      href: string;
      imageSrc: string;
      newWindowText?: string;
      type: 'image';
    }
  | {
      href: string;
      newWindowText?: string;
      text: string;
      type: 'text';
    };

type LinkProps = TypeProps;

export default function Link(props: LinkProps) {
  const { type } = props;

  if ((type === 'image' || type === 'text') && props.href === '#') {
    throw new Error(
      '# is not a valid Link href. Enter a valid URL or use a Button instead.',
    );
  }

  const hasNewWindow =
    (type === 'text' || type === 'button') &&
    props?.newWindowText !== undefined;

  let classNames;
  let innerMarkup;
  let href;
  switch (type) {
    case 'button':
      classNames = `${buttonClasses[props.style]} ${buttonClasses.button}`;
      href = props.href;
      innerMarkup = hasNewWindow ? (
        <span className="inline-flex items-center gap-2 decoration-primary-500 underline decoration-2 text-primary-500 hover:text-primary-600 hover:decoration-primary-500">
          {props.text}
          <span className="sr-only">{props?.newWindowText}</span>
          <FaArrowUpRightFromSquare size={14} />
        </span>
      ) : (
        props.text
      );
      break;

    case 'bypass-block':
      classNames =
        'absolute -left-96 top-auto w-px h-px overflow-hidden focus:static focus:w-auto focus:h-auto';
      href = hashifyHref(props.mainId);
      innerMarkup = <span>{props.text}</span>;
      break;

    case 'image':
      href = props.href;
      innerMarkup = <Image src={props?.imageSrc} type="decorative" />;
      break;

    case 'text':
      classNames =
        'underline decoration-2 decoration-primary-600 text-primary-500 hover:text-primary-500 hover:decoration-primary-500';
      href = props.href;
      innerMarkup = hasNewWindow ? (
        <span className="inline-flex items-center gap-2 underline decoration-2 decoration-primary-600 text-primary-500 hover:text-primary-500 hover:decoration-primary-500">
          {props.text}
          <span className="sr-only">{props?.newWindowText}</span>
          <FaArrowUpRightFromSquare size={14} />
        </span>
      ) : (
        props.text
      );
  }

  return (
    <a
      aria-label={type === 'image' ? props.ariaLabel : undefined}
      className={classNames}
      href={href}
      target={hasNewWindow ? '_blank' : undefined}
    >
      {innerMarkup}
    </a>
  );
}
