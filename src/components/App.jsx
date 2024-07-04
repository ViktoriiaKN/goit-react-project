import { useState} from 'react';
import Modal from './Modal/Modal';

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && <Modal/>}
    </div>
  );
};
