/* eslint-disable no-unused-expressions */
import { useContext, useEffect, useState } from 'react';
import { AnyAction } from 'redux';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ILoginUser, IStore } from '../../types/interfaces';
import LoginThunk from '../../srore/thunks/LoginThunk';
import './LoginForm.scss';
import path from '../../assets/login-img.png';
import GetUserThunk from '../../srore/thunks/GetUserThunk';
import { ModalContext } from '../../context/ModalContext';
import CONSTANTS from '../../utils/constants';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginUser>();
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);
  const { closeModal, openModal } = useContext(ModalContext);
  const dispatch = useDispatch();
  const loginUser = useSelector((state: IStore) => { return state.loginUser.login; });
  const { t } = useTranslation();

  useEffect(
    () => {
      if (loginUser.isAuth) {
        closeModal(`${CONSTANTS.LOGIN__MODAL}`);
        dispatch(GetUserThunk({ token: loginUser.token }) as unknown as AnyAction);
        navigate('/subjects');
      }
      setIsAuth(loginUser.isAuth);
    },
    [loginUser.isAuth],
  );

  const onSubmit: SubmitHandler<ILoginUser> = (data) => {
    dispatch(LoginThunk(data) as unknown as AnyAction)
      .then(() => {
        reset();
      });
  };

  const openRegistrationForm = () => {
    closeModal(CONSTANTS.LOGIN__MODAL);
    openModal(CONSTANTS.REGISTRATION__MODAL);
  };

  return (
    <div className="">
      <div className="login-form__container">
        <img src={path} alt="login pic" className="login-form__img" />
        <form action="#" className="form" onSubmit={handleSubmit(onSubmit)}>

          <h2 className="login-form__title">{t('common.login')}</h2>
          <p className="login-form__openRegistration" onClick={() => { return openRegistrationForm(); }}>{t('labels.loginForm.openRegistrationForm')}</p>
          <input
            className={`login-form__input ${errors.email ? 'input-error' : null}`}
            placeholder={`${t('common.email')}`}
            {...register('email', { required: true, pattern: /([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}/ })}
          />
          <p className={`form-error ${errors.email ? 'open' : null}`}>
            {t('labels.loginForm.emailError')}
          </p>

          <input
            type="password"
            placeholder={`${t('common.password')}`}
            className={`login-form__input ${errors.password ? 'input-error' : null}`}
            {...register('password', { required: true, minLength: 3 })}
          />

          <p className={`form-error ${errors.password ? 'open' : null}`}>
            {t('labels.loginForm.passwordError')}
          </p>

          {
            isAuth && (
            <p className="wrong-data">
              {t('labels.loginForm.loginError')}
            </p>
            )
          }

          <div className="form-btn__wrapper">
            <input type="submit" value={`${t('common.submit')}`} className="form-btn" />
            <input type="button" onClick={() => { return closeModal(CONSTANTS.LOGIN__MODAL); }} value={`${t('common.cancel')}`} className="form-btn" />
          </div>
        </form>

      </div>
    </div>
  );
};

export default LoginForm;
