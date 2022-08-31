import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/" className="btn-home" />
      <div className="menu-btn">
        menu
      </div>
    </header>
  );
};

export default Header;
