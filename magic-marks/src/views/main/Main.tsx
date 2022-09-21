import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import LoginForm from '../../components/LoginForm/LoginForm';
import { IStore } from '../../types/interfaces';
import './Main.scss';
import path from '../../assets/main-image.png';

const Main = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const loginUser = useSelector((state: IStore) => { return state.loginUser.login; });

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <main className="container">
      <div className="main">
        <h5 className="description description-top">Веб-приложение для достижения целей</h5>
        <div className="title-blok">
          <div className="title title__part-one">
            Magic
            <span>Контролируй свою успеваемость</span>
          </div>
          <div className="title title__part-two">Marks</div>
        </div>
        <div className="description-block">
          <div className="description-block__wrapp">
            <p className="description description-bottom">
              Приложение позволяет просматривать оценки,
              отслеживать успеваемость как по каждому предмету в отдельности,
              так общую успеваемость по всем предметам
            </p>
            {
              loginUser.isAuth
                ? <NavLink to="/subjects" className="subjects__btn">Дневник</NavLink>
                : <button type="button" className="log-in__btn" onClick={toggleModal}>Войти</button>
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
