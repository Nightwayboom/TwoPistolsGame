import React from 'react';
import './Modal.css';

type ModalProps = {
  active: number | null;
  setActive: (value: boolean) => void;
  children: React.ReactNode;
};

function ModalWindow({ active, setActive, children }: ModalProps): JSX.Element {


  return (
    <button type='button' className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div
        className={active ? 'modal__content active' : 'modal__conten'}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </button>
  );
}

export default ModalWindow;
