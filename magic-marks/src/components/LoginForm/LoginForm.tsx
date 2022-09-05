import './LoginForm.scss';
import path from '../../assets/login-img.png';

interface IProps {
  close: () => void,
}

const LoginForm = (props: IProps) => {
  const { close } = props;
  return (
    <div className="login-form__container">
      <img src={path} alt="login pic" className="login-form__img" />
      <form action="">
        <h2 className="login-form__title">Login</h2>

        <input type="email" name="email" placeholder="Email" className="login-form__input" />
        <input type="text" name="first-name" placeholder="First name" className="login-form__input" />
        <input type="text" name="last-name" placeholder="Last name" className="login-form__input" />
        <input type="text" name="grade" placeholder="Grade" className="login-form__input" />
        <input type="password" name="password" placeholder="Password" className="login-form__input" />

        <div className="form-btn__wrapper">
          <input type="submit" value="Ok" className="form-btn" />
          <input type="button" onClick={close} value="Cancel" className="form-btn" />
        </div>
      </form>

    </div>
  );
};

export default LoginForm;
