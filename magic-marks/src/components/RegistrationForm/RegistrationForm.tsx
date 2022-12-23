import {
  useContext, useEffect, useState,
} from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AnyAction } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { ILoginUser, IRegistrationFormData, IStore } from '../../types/interfaces';
import CreateUserThunk from '../../srore/thunks/CreateUserThunk';
import LoginThunk from '../../srore/thunks/LoginThunk';
import GetUserThunk from '../../srore/thunks/GetUserThunk';
import { ModalContext } from '../../context/ModalContext';
import CONSTANTS from '../../utils/constants';
import path from '../../assets/login-img.png';
import './RegistrationForm.scss';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IRegistrationFormData>();
  const [loginData, setLoginData] = useState<ILoginUser>({ email: '', password: '' });
  const { closeModal, openModal, changeMessage } = useContext(ModalContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginUser = useSelector((state: IStore) => { return state.loginUser.login; });
  const createUserFailed = useSelector((state: IStore) => { return state.createUser.error; });
  const createdUser = useSelector((state: IStore) => { return state.createUser.registration; });
  const { t } = useTranslation();

  useEffect(
    () => {
      if (createUserFailed.isError) {
        changeMessage(createUserFailed.errorMessage);
        openModal(CONSTANTS.ERROR__MODAL);
      }
    },
    [createUserFailed.isError],
  );

  useEffect(
    () => {
      if (createdUser.isUserCreated) {
        dispatch(LoginThunk(loginData) as unknown as AnyAction)
          .then(() => {
            reset();
          });
      }
    },
    [createdUser.isUserCreated],
  );

  useEffect(
    () => {
      if (loginUser.isAuth) {
        closeModal(`${CONSTANTS.REGISTRATION__MODAL}`);
        dispatch(GetUserThunk({ token: loginUser.token }) as unknown as AnyAction);
        navigate('/subjects');
      }
    },
    [loginUser.isAuth],
  );

  const onSubmit: SubmitHandler<IRegistrationFormData> = (data) => {
    setLoginData({
      email: data.email,
      password: data.password,
    });
    dispatch(CreateUserThunk(data) as unknown as AnyAction);
  };

  const openLoginForm = () => {
    closeModal(CONSTANTS.REGISTRATION__MODAL);
    openModal(CONSTANTS.LOGIN__MODAL);
  };

  return (
    <div className="">
      <div className="registration-form__container">
        <img src={path} alt="login pic" className="login-form__img" />
        <form action="#" className="form" onSubmit={handleSubmit(onSubmit)}>

          <h2 className="login-form__title">{t('common.registration')}</h2>
          <p className="login-form__openRegistration" onClick={() => { return openLoginForm(); }}>{t('labels.registrationForm.openLoginForm')}</p>
          <input
            className={`login-form__input ${errors.email ? 'input-error' : null}`}
            placeholder={`${t('common.email')}`}
            {...register('email', { required: true, pattern: /([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}/ })}
          />
          <p className={`form-error ${errors.email ? null : 'none'}`}>
            *field must contain email
          </p>

          <input
            placeholder={`${t('labels.registrationForm.firstName')}`}
            className={`login-form__input ${errors.firstName ? 'input-error' : null}`}
            {...register('firstName', { required: true, minLength: 3 })}
          />

          <p className={`form-error ${errors.firstName ? null : 'none'}`}>
            *Required field of at least three characters
          </p>

          <input
            placeholder={`${t('labels.registrationForm.lastName')}`}
            className={`login-form__input ${errors.lastName ? 'input-error' : null}`}
            {...register('lastName', { required: true, minLength: 3 })}
          />

          <p className={`form-error ${errors.lastName ? null : 'none'}`}>
            *Required field of at least three characters
          </p>

          <input
            placeholder={`${t('labels.registrationForm.grade')}`}
            className={`login-form__input ${errors.class ? 'input-error' : null}`}
            {...register('class', { required: true, maxLength: 2 })}
          />

          <p className={`form-error ${errors.class ? null : 'none'}`}>
            *Required field of no more than two characters
          </p>

          <input
            type="password"
            placeholder={`${t('common.password')}`}
            className={`login-form__input ${errors.password ? 'input-error' : null}`}
            {...register('password', { required: true, minLength: 3 })}
          />

          <p className={`form-error ${errors.password ? null : 'none'}`}>
            *Required field of at least three characters
          </p>

          <div className="form-btn__wrapper">
            <input type="submit" value={`${t('common.submit')}`} className="form-btn" />
            <input type="button" onClick={() => { return closeModal(CONSTANTS.REGISTRATION__MODAL); }} value={`${t('common.cancel')}`} className="form-btn" />
          </div>
        </form>

      </div>
    </div>
  );
};

export default RegistrationForm;
