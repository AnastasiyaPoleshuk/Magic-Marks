import { useState } from 'react';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import LoginForm from '../../components/LoginForm/LoginForm';
import './Main.scss';
import path from '../../assets/main-img.png';

const Main = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <main className="container">
      <div className="main">
        <div className="title-blok">
          <h1 className="title">Welcome to Magic Marks!</h1>
          <button type="button" className="log-in__btn" onClick={toggleModal}>Log in</button>
        </div>
        <img src={path} alt="main img" className="main-img" />
      </div>
      {isOpenModal
      && (
      <ModalWindow close={toggleModal}>
        <LoginForm close={toggleModal} />
      </ModalWindow>
      )}

    </main>
  );
};
export default Main;
