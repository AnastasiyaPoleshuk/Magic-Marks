import './Menu.scss';
import path from '../../assets/menu-item.png';

const Menu = () => {
  return (
    <section className="menu__container">
      <div className="menu__box">
        <h2 className="menu__header">Magic Marks</h2>
        <nav className="menu__body">
          <ul>
            <li className="menu__item">Profile</li>
            <li className="menu__item">Journal</li>
          </ul>
        </nav>
        <img src={path} alt="menu pic" className="menu__img" />
      </div>
    </section>
  );
};

export default Menu;
