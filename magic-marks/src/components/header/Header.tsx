import { NavLink } from 'react-router-dom';
import './Header.scss';
import { useSelector } from 'react-redux';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import path from '../../assets/logo.png';
import pathProfile from '../../assets/profile-img.png';
import { IStore } from '../../types/interfaces';
import ModalWindow from '../ModalWindow/ModalWindow';
import LoginForm from '../LoginForm/LoginForm';
import { ModalContext } from '../../context/ModalContext';
import CONSTANTS from '../../utils/constants';

const Header = () => {
  const loginUser = useSelector((state: IStore) => { return state.loginUser.login; });
  const { loginModal, openModal } = useContext(ModalContext);
  const [lang, setLang] = useState(CONSTANTS.DEFAULT__LANG);
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    if (language === CONSTANTS.DEFAULT__LANG) {
      setLang(CONSTANTS.LANG__EN);
    } else {
      setLang(CONSTANTS.DEFAULT__LANG);
    }
    i18n.changeLanguage(lang);
  };

  return (
    <header className="header">
      <div className="header__container container">
        <NavLink to="/" className="btn-home">
          <img src={path} alt="logo" className="logo" />
        </NavLink>
        <nav className={`${loginUser.isAuth ? 'menu' : null}`}>
          {
            loginUser.isAuth && (<NavLink to="/subjects" className="menu__item menu__subjects">{t('common.dairy')}</NavLink>)
          }
          <button type="button" className="menu__item menu__lang" onClick={() => { return changeLanguage(lang); }}>{t('common.lang')}</button>
          {
            loginUser.isAuth
              ? <NavLink to="/profile" className="menu__item"><img src={pathProfile} alt="logo" className="menu__profile" /></NavLink>
              : <button type="button" className="menu__item menu__login" onClick={() => { return openModal(CONSTANTS.LOGIN__MODAL); }}>{t('common.login')}</button>
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
