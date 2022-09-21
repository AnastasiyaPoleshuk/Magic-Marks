import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import LoginForm from '../../components/LoginForm/LoginForm';
import { IStore } from '../../types/interfaces';
import locales from '../../locales/ru-Ru';
import './Main.scss';
import path from '../../assets/main-image.png';

const Main = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const loginUser = useSelector((state: IStore) => { return state.loginUser.login; });

  const toggleModal = () => {
    console.log(locales);

    setIsOpenModal(!isOpenModal);
  };

  return (
    <main className="container">
      <div className="main">
        <h5 className="description description-top">{locales.labels.mainPage.previewText}</h5>
        <div className="title-blok">
          <div className="title title__part-one">
            Magic
            <span>{locales.labels.mainPage.previewTextTwo}</span>
          </div>
          <div className="title title__part-two">Marks</div>
        </div>
        <div className="description-block">
          <div className="description-block__wrapp">
            <p className="description description-bottom">
              {locales.labels.mainPage.description}
            </p>
            {
              loginUser.isAuth
                ? <NavLink to="/subjects" className="subjects__btn">{locales.common.dairy}</NavLink>
                : <button type="button" className="log-in__btn" onClick={toggleModal}>{locales.common.login}</button>
            }
          </div>
          <img src={path} alt="main img" className="main-img" />
        </div>
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
