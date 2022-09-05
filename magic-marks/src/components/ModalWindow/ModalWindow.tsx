import React from 'react';
import './ModalWindow.scss';

interface IProps {
  close: () => void,
  children: React.ReactNode,
}

const ModalWindow = (props: IProps) => {
  const { close, children } = props;
  return (
    <section className="overlay" onClick={close}>
      <div className="modal-window" onClick={(e) => { return e.stopPropagation(); }}>
        {children}
      </div>
    </section>
  );
};

export default ModalWindow;
