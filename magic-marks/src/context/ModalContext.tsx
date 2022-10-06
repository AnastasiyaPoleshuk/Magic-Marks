/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import CONSTANTS from '../utils/constants';

interface IModalContext {
    loginModal: boolean,
    addMarkModal: boolean,
    openModal: (type: string) => void,
    closeModal: (type: string) => void,
}

export const ModalContext = createContext<IModalContext>({
  loginModal: false,
  addMarkModal: false,
  openModal: () => {},
  closeModal: () => {},
});

export const ModalState = ({ children }: {children: React.ReactNode}) => {
  const [loginModal, setLoginModal] = useState(false);
  const [addMarkModal, setAddMarkModal] = useState(false);

  const openModal = (type: string) => {
    switch (type) {
      case CONSTANTS.LOGIN__MODAL:
        setLoginModal(true);
        break;
      case CONSTANTS.MARKS__MODAL:
        setAddMarkModal(true);
        break;
      default:
        break;
    }
  };
  const closeModal = (type: string) => {
    switch (type) {
      case CONSTANTS.LOGIN__MODAL:
        setLoginModal(false);
        break;
      case CONSTANTS.MARKS__MODAL:
        setAddMarkModal(false);
        break;
      default:
        break;
    }
  };
  return (
    <ModalContext.Provider value={{
      loginModal, addMarkModal, openModal, closeModal,
    }}
    >
      {children}
    </ModalContext.Provider>
  );
};
