import { NavLink } from 'react-router-dom';
import './Header.scss';
import path from '../../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/" className="btn-home">
        <img src={path} alt="logo" className="logo" />
      </NavLink>
      <div className="menu-btn">
        <div className="burger-menu" />
      </div>
    </header>
  );
};

export default Header;
