import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import LoginForm from '../../components/LoginForm/LoginForm';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { IStore } from '../../types/interfaces';
import './Main.scss';
import path from '../../assets/main-image.png';
import { ModalContext } from '../../context/ModalContext';
import CONSTANTS from '../../utils/constants';
import ErrorModalData from '../../components/ErrorModalData/ErrorModalData';

const Main = () => {
  const {
    loginModal, registrationModal, errorModal, openModal,
  } = useContext(ModalContext);
  const loginUser = useSelector((state: IStore) => { return state.loginUser.login; });
  const { t } = useTranslation();

  return (
    <main className="container">
      <div className="main">
        <h5 className="description description-top">{t('labels.mainPage.previewText')}</h5>
        <div className="title-blok">
          <div className="title title__part-one">
            Magic
            <span>{t('labels.mainPage.previewTextTwo')}</span>
          </div>
          <div className="title title__part-two">Marks</div>
        </div>
        <div className="description-block">
          <div className="description-block__wrapp">
            <p className="description description-bottom">
              {t('labels.mainPage.description')}
            </p>
            {
              loginUser.isAuth
                ? <NavLink to="/subjects" className="subjects__btn">{t('common.dairy')}</NavLink>
                : <button type="button" className="log-in__btn" onClick={() => { return openModal(CONSTANTS.LOGIN__MODAL); }}>{t('common.login')}</button>
            }
          </div>
          <img src={path} alt="main img" className="main-img" />
        </div>
      </div>
      {loginModal
      && (
      <ModalWindow type={CONSTANTS.LOGIN__MODAL}>
        <LoginForm />
      </ModalWindow>
      )}
      {registrationModal
      && (
      <ModalWindow type={CONSTANTS.REGISTRATION__MODAL}>
        <RegistrationForm />
      </ModalWindow>
      )}
      {errorModal
      && (
      <ModalWindow type={CONSTANTS.ERROR__MODAL}>
        <ErrorModalData />
      </ModalWindow>
      )}

    </main>
  );
};
export default Main;
