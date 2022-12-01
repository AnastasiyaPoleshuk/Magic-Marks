import { NavLink } from 'react-router-dom';
import './styles/Header.scss';
import './styles/Header.tablet.scss';
import './styles/Header.mobile.scss';
import { useSelector } from 'react-redux';
import { useContext } from 'react';
import path from '../../assets/logo.png';
import pathProfile from '../../assets/profile-img.png';
import { IStore } from '../../types/interfaces';
import ModalWindow from '../ModalWindow/ModalWindow';
import LoginForm from '../LoginForm/LoginForm';
import locales from '../../locales/ru-Ru';
import { ModalContext } from '../../context/ModalContext';
import CONSTANTS from '../../utils/constants';

const Header = () => {
  const loginUser = useSelector((state: IStore) => { return state.loginUser.login; });
  const { loginModal, openModal } = useContext(ModalContext);

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
              : <button type="button" className="menu__item menu__login" onClick={() => { return openModal(CONSTANTS.LOGIN__MODAL); }}>{locales.common.login}</button>
          }
        </nav>
      </div>
      {loginModal
      && (
      <ModalWindow type={CONSTANTS.LOGIN__MODAL}>
        <LoginForm />
      </ModalWindow>
      )}
    </header>
  );
};

export default Header;
