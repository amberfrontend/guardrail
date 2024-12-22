import Modal from './aggregates/Modal/Modal';

import './App.css';

function App() {
  return (
    <>
      <button>Button</button>
      <Modal title="Modal title" triggerButtonText="Open">
        Stuff inside modal
      </Modal>
    </>
  );
}

export default App;
