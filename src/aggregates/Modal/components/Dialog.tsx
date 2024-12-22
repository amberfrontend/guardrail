import { ReactNode, useEffect, useRef } from 'react';
import Button from '../../../elements/Button/Button';

interface DialogProps {
  children: ReactNode;
  id: string;
  title: string;
  onClose(): void;
}

export default function Dialog(props: DialogProps) {
  const { children, id, title, onClose } = props;

  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (closeButtonRef && closeButtonRef.current)
      closeButtonRef.current.focus();
  }, []);

  return (
    <>
      <div className="bg-black opacity-50 fixed inset-x-0 inset-y-0 z-40" />
      <div
        id={`modal-wrapper-${id}`}
        className="shadow-zinc-300 shadow bg-white p-4 relative z-50"
        aria-labelledby={`modal-title-${id}`}
        aria-modal="true"
        role="dialog"
      >
        <div className="flex justify-between">
          <h1 id={`modal-title-${id}`} className="font-medium text-lg">
            {title}
          </h1>
          <Button
            ariaLabel="Close"
            ariaDescribedby={`modal-title-${id}`}
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
            ariaDescribedby={`modal-title-${id}`}
            type="text"
            onClick={onClose}
            onKeyUp={onClose}
            onTouchEnd={onClose}
          >
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
}
