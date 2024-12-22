import { ReactNode, useId, useRef, useEffect } from 'react';
import Button from '../../elements/Button/Button';

interface ModalProps {
  children: ReactNode;
  id?: string;
  title: string;
  onClose(): void;
}

export default function Modal(props: ModalProps) {
  const { children, id, title, onClose } = props;

  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const uniqueId = useId();

  useEffect(() => {
    if (closeButtonRef && closeButtonRef.current)
      closeButtonRef.current.focus();
  }, []);

  return (
    <div
      id={id || `modal-wrapper-${uniqueId}`}
      className="z-50"
      aria-labelledby={`modal-title-${uniqueId}`}
      aria-modal="true"
      role="dialog"
    >
      <div className="flex justify-between">
        <h1 id={`modal-title-${uniqueId}`}>{title}</h1>
        <Button
          ariaLabel="Close"
          ariaDescribedby={`modal-title-${uniqueId}`}
          icon="close"
          ref={closeButtonRef}
          type="icon-only"
          onClick={onClose}
          onKeyUp={onClose}
          onTouchEnd={onClose}
        />
      </div>
      {children}
      <div className="flex justify-end">
        <Button
          ariaDescribedby={`modal-title-${uniqueId}`}
          type="text"
          onClick={onClose}
          onKeyUp={onClose}
          onTouchEnd={onClose}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
