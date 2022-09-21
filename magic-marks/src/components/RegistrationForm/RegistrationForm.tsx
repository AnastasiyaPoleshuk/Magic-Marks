import { SubmitHandler, useForm } from 'react-hook-form';
// import { useDispatch, useSelector } from 'react-redux';
import { IRegistrationFormData } from '../../types/interfaces';
// import LoginThunk from '../../srore/thunks/LoginThunk';
import './RegistrationForm.scss';
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
  } = useForm<IRegistrationFormData>();
  // const dispatch = useDispatch();
  // const user = useSelector((state: IStore) => { return state.loginUser; });

  const onSubmit: SubmitHandler<IRegistrationFormData> = () => {
    reset();
    close();
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
          <p className={`form-error ${errors.email ? null : 'none'}`}>
            *field must contain email
          </p>

          <input
            placeholder="First name"
            className={`login-form__input ${errors.firstName ? 'input-error' : null}`}
            {...register('firstName', { required: true, minLength: 3 })}
          />

          <p className={`form-error ${errors.firstName ? null : 'none'}`}>
            *Required field of at least three characters
          </p>

          <input
            placeholder="Last name"
            className={`login-form__input ${errors.lastName ? 'input-error' : null}`}
            {...register('lastName', { required: true, minLength: 3 })}
          />

          <p className={`form-error ${errors.lastName ? null : 'none'}`}>
            *Required field of at least three characters
          </p>

          <input
            placeholder="Grade"
            className={`login-form__input ${errors.grade ? 'input-error' : null}`}
            {...register('grade', { required: true, maxLength: 2 })}
          />

          <p className={`form-error ${errors.grade ? null : 'none'}`}>
            *Required field of no more than two characters
          </p>

          <input
            type="password"
            placeholder="Password"
            className={`login-form__input ${errors.password ? 'input-error' : null}`}
            {...register('password', { required: true, minLength: 3 })}
          />

          <p className={`form-error ${errors.password ? null : 'none'}`}>
            *Required field of at least three characters
          </p>

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
