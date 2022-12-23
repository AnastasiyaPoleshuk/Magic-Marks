/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import CONSTANTS from '../utils/constants';
import locales from '../locales/ru-Ru/index';

interface IModalContext {
    loginModal: boolean,
    logoutModal: boolean,
    registrationModal: boolean,
    addMarkModal: boolean,
    deleteMarkModal: boolean,
    errorModal: boolean,
    errorMessage: string,
    openModal: (type: string) => void,
    closeModal: (type: string) => void,
    changeMessage: (type: string) => void,
}

export const ModalContext = createContext<IModalContext>({
  loginModal: false,
  logoutModal: false,
  registrationModal: false,
  addMarkModal: false,
  deleteMarkModal: false,
  errorModal: false,
  errorMessage: locales.labels.SubjectsPage.defaultError,
  openModal: () => {},
  closeModal: () => {},
  changeMessage: () => {},
});

export const ModalState = ({ children }: {children: React.ReactNode}) => {
  const [loginModal, setLoginModal] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [registrationModal, setRegistrationModal] = useState(false);
  const [addMarkModal, setAddMarkModal] = useState(false);
  const [deleteMarkModal, setDeleteMarkModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState(locales.labels.SubjectsPage.defaultError);

  const openModal = (type: string) => {
    switch (type) {
      case CONSTANTS.LOGIN__MODAL:
        setLoginModal(true);
        break;
      case CONSTANTS.LOGOUT__MODAL:
        setLogoutModal(true);
        break;
      case CONSTANTS.REGISTRATION__MODAL:
        setRegistrationModal(true);
        break;
      case CONSTANTS.MARKS__MODAL:
        setAddMarkModal(true);
        break;
      case CONSTANTS.MARKS_DELETE__MODAL:
        setDeleteMarkModal(true);
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
      case CONSTANTS.LOGOUT__MODAL:
        setLogoutModal(false);
        break;
      case CONSTANTS.REGISTRATION__MODAL:
        setRegistrationModal(false);
        break;
      case CONSTANTS.MARKS__MODAL:
        setAddMarkModal(false);
        break;
      case CONSTANTS.MARKS_DELETE__MODAL:
        setDeleteMarkModal(false);
        break;
      case CONSTANTS.ERROR__MODAL:
        setErrorModal(false);
        break;
      default:
        break;
    }
  };

  const changeMessage = (mess: string) => {
    setErrorMessage(mess);
  };

  return (
    <ModalContext.Provider value={{
      loginModal,
      logoutModal,
      registrationModal,
      addMarkModal,
      deleteMarkModal,
      errorModal,
      errorMessage,
      openModal,
      closeModal,
      changeMessage,
    }}
    >
      {children}
    </ModalContext.Provider>
  );
};
