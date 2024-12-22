import { ReactNode, useState, useId, useRef } from 'react';
import { createPortal } from 'react-dom';

import Button from '../../elements/Button/Button';
import Dialog from './components/Dialog';

interface ModalProps {
  children: ReactNode;
  title: string;
  triggerButtonText: string;
}

export default function Modal(props: ModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);

  const uniqueId = useId();

  const handleModalClose = () => {
    setIsOpen(false);

    if (triggerButtonRef && triggerButtonRef.current) {
      triggerButtonRef.current.focus();
    }
  };

  const { children, title, triggerButtonText } = props;

  return (
    <>
      <Button
        ariaControls={`modal-${uniqueId}`}
        ariaExpanded={isOpen}
        ref={triggerButtonRef}
        type="modal-trigger"
        onClick={() => setIsOpen(true)}
        onKeyUp={() => setIsOpen(true)}
        onTouchEnd={() => setIsOpen(true)}
      >
        {triggerButtonText}
      </Button>
      {isOpen &&
        createPortal(
          <Dialog
            id={`modal-wrapper-${uniqueId}`}
            title={title}
            onClose={handleModalClose}
          >
            {children}
          </Dialog>,
          document.body,
        )}
    </>
  );
}
