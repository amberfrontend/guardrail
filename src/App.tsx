import { useState, useRef, useId } from 'react';
import { createPortal } from 'react-dom';

import Button from './elements/Button/Button';
import Modal from './aggregates/Modal/Modal';

import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [focusTriggerButton, setFocusTriggerButton] = useState(false);

  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);

  const uniqueId = useId();

  const handleModalClose = () => {
    setIsModalOpen(false);
    setFocusTriggerButton(true);
  };

  return (
    <>
      <Button
        ariaControls={`modal-${uniqueId}`}
        ariaExpanded={isModalOpen}
        ref={triggerButtonRef}
        moveFocus={focusTriggerButton}
        type="modal-trigger"
        onClick={() => setIsModalOpen(true)}
        onKeyUp={() => setIsModalOpen(true)}
        onTouchEnd={() => setIsModalOpen(true)}
      >
        Open
      </Button>
      {isModalOpen &&
        createPortal(
          <Modal
            id={`modal-${uniqueId}`}
            title="Modal title"
            onClose={handleModalClose}
          >
            Stuff
          </Modal>,
          document.body,
        )}
    </>
  );
}

export default App;
