/* eslint-disable no-unused-expressions */
import { useContext, useEffect, useState } from 'react';
import { AnyAction } from 'redux';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ILoginUser, IStore } from '../../types/interfaces';
import LoginThunk from '../../srore/thunks/LoginThunk';
import locales from '../../locales/ru-Ru';
import './LoginForm.scss';
import './LoginForm.mobile.scss';
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
  const { closeModal } = useContext(ModalContext);
  const dispatch = useDispatch();
  const loginUser = useSelector((state: IStore) => { return state.loginUser.login; });

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

  return (
    <div className="">
      <div className="login-form__container">
        <img src={path} alt="login pic" className="login-form__img" />
        <form action="#" className="form" onSubmit={handleSubmit(onSubmit)}>

          <h2 className="login-form__title">{locales.common.login}</h2>

          <input
            className={`login-form__input ${errors.email ? 'input-error' : null}`}
            placeholder="Email"
            {...register('email', { required: true, pattern: /([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}/ })}
          />
          <p className={`form-error ${errors.email ? 'open' : null}`}>
            {locales.labels.loginForm.emailError}
          </p>

          <input
            type="password"
            placeholder="Пароль"
            className={`login-form__input ${errors.password ? 'input-error' : null}`}
            {...register('password', { required: true, minLength: 3 })}
          />

          <p className={`form-error ${errors.password ? 'open' : null}`}>
            {locales.labels.loginForm.passwordError}
          </p>

          {
            isAuth && (
            <p className="wrong-data">
              {locales.labels.loginForm.loginError}
            </p>
            )
          }

          <div className="form-btn__wrapper">
            <input type="submit" value={locales.common.submit} className="form-btn" />
            <input type="button" onClick={() => { return closeModal(CONSTANTS.LOGIN__MODAL); }} value={locales.common.cancel} className="form-btn" />
          </div>
        </form>

      </div>
    </div>
  );
};

export default LoginForm;
