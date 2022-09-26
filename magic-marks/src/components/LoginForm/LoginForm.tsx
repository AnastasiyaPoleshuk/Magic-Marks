import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ILoginUser, IStore } from '../../types/interfaces';
import LoginThunk from '../../srore/thunks/LoginThunk';
import locales from '../../locales/ru-Ru';
import './LoginForm.scss';
import path from '../../assets/login-img.png';

interface IProps {
  close: () => void,
}

const LoginForm = (props: IProps) => {
  const { close } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILoginUser>();
  const navigate = useNavigate();
  const [isCorrectData, setCorrectData] = useState(true);
  const dispatch = useDispatch();
  const loginUser = useSelector((state: IStore) => { return state.loginUser.login; });

  useEffect(() => {
    if (loginUser.isAuth) {
      close();
      navigate('/subjects');
    } else {
      setCorrectData(loginUser.isAuth);
    }
  }, [loginUser.isAuth]);

  const onSubmit: SubmitHandler<ILoginUser> = (data) => {
    // @ts-ignore
    dispatch(LoginThunk(data)).then(() => {
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
            !isCorrectData && (
            <p className="wrong-data">
              {locales.labels.loginForm.loginError}
            </p>
            )
          }

          <div className="form-btn__wrapper">
            <input type="submit" value={locales.common.submit} className="form-btn" />
            <input type="button" onClick={close} value={locales.common.cancel} className="form-btn" />
          </div>
        </form>

      </div>
    </div>
  );
};

export default LoginForm;
