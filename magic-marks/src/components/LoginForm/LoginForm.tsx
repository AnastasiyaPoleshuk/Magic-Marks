import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ILoginFormData, IStore } from '../../types/interfaces';
import LoginThunk from '../../srore/thunks/LoginThunk';
import './LoginForm.scss';
import path from '../../assets/login-img.png';
// import UserAction from '../../srore/actions/UserAction';

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
  } = useForm<ILoginFormData>();
  const [isCorrectData, setCorrectData] = useState(true);
  const dispatch = useDispatch();
  const loginUser = useSelector((state: IStore) => { return state.loginUser.login; });

  const onSubmit: SubmitHandler<ILoginFormData> = (data) => {
    // @ts-ignore
    dispatch(LoginThunk(data));
    console.log(loginUser);

    if (loginUser.isAuth) {
      reset();
      close();
    } else {
      setCorrectData(loginUser.isAuth);
    }
  };

  return (
    <div className="">
      <div className="login-form__container">
        <img src={path} alt="login pic" className="login-form__img" />
        <form action="#" className="form" onSubmit={handleSubmit(onSubmit)}>

          <h2 className="login-form__title">Login</h2>

          <input
            className={`login-form__input ${errors.email ? 'input-error' : null}`}
            placeholder="Email"
            {...register('email', { required: true, pattern: /([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}/ })}
          />
          <p className={`form-error ${errors.email ? 'open' : null}`}>
            *field must contain email
          </p>

          <input
            type="password"
            placeholder="Password"
            className={`login-form__input ${errors.password ? 'input-error' : null}`}
            {...register('password', { required: true, minLength: 3 })}
          />

          <p className={`form-error ${errors.password ? 'open' : null}`}>
            *Required field of at least three characters
          </p>

          {
            !isCorrectData && (
            <p className="wrong-data">
              Wrong Email or password
            </p>
            )
          }

          <div className="form-btn__wrapper">
            <input type="submit" value="Ok" className="form-btn" />
            <input type="button" onClick={close} value="Cancel" className="form-btn" />
          </div>
        </form>

      </div>
    </div>
  );
};

export default LoginForm;
