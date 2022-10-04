import { NavLink } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  return (
    <section className="not-found">
      <p className="title">Page not found</p>
      <NavLink to="/" className="home__btn">
        {/* <NavLink to={isAuth ? '/' : '/welcome'} className="home__btn"> */}
        Home &#8617;
      </NavLink>
    </section>
  );
};

export default NotFound;
