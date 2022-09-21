import { NavLink } from 'react-router-dom';
import './Header.scss';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import path from '../../assets/logo-1.png';
import pathProfile from '../../assets/profile-img.png';
import { IStore } from '../../types/interfaces';
import ModalWindow from '../ModalWindow/ModalWindow';
import LoginForm from '../LoginForm/LoginForm';
import locales from '../../locales/ru-Ru';

const Header = () => {
  const loginUser = useSelector((state: IStore) => { return state.loginUser.login; });
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  return (
    <header className="header">
      <div className="header__container container">
        <NavLink to="/" className="btn-home">
          <img src={path} alt="logo" className="logo" />
        </NavLink>
        <nav className={`${loginUser.isAuth ? 'menu' : null}`}>
          {
            loginUser.isAuth && (<NavLink to="/subjects" className="menu__item menu__subjects">{locales.common.dairy}</NavLink>)
          }
          {
            loginUser.isAuth
              ? <NavLink to="/profile" className="menu__item"><img src={pathProfile} alt="logo" className="menu__profile" /></NavLink>
              : <button type="button" className="menu__item menu__login" onClick={toggleModal}>{locales.common.login}</button>
          }
        </nav>
      </div>
      {isOpenModal
      && (
      <ModalWindow close={toggleModal}>
        <LoginForm close={toggleModal} />
      </ModalWindow>
      )}
    </header>
  );
};

export default Header;
