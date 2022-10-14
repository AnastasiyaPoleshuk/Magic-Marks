/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import CONSTANTS from '../utils/constants';

interface IModalContext {
    loginModal: boolean,
    addMarkModal: boolean,
    errorModal: boolean,
    openModal: (type: string) => void,
    closeModal: (type: string) => void,
}

export const ModalContext = createContext<IModalContext>({
  loginModal: false,
  addMarkModal: false,
  errorModal: false,
  openModal: () => {},
  closeModal: () => {},
});

export const ModalState = ({ children }: {children: React.ReactNode}) => {
  const [loginModal, setLoginModal] = useState(false);
  const [addMarkModal, setAddMarkModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);

  const openModal = (type: string) => {
    switch (type) {
      case CONSTANTS.LOGIN__MODAL:
        setLoginModal(true);
        break;
      case CONSTANTS.MARKS__MODAL:
        setAddMarkModal(true);
        break;
      case CONSTANTS.ERROR__MODAL:
        setErrorModal(true);
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
      case CONSTANTS.ERROR__MODAL:
        setErrorModal(false);
        break;
      default:
        break;
    }
  };
  return (
    <ModalContext.Provider value={{
      loginModal, addMarkModal, errorModal, openModal, closeModal,
    }}
    >
      {children}
    </ModalContext.Provider>
  );
};
