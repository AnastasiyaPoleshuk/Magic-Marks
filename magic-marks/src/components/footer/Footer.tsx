import dayjs from 'dayjs';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer-item">
          &copy;
          {dayjs().year()}
        </div>
        <a href="https://github.com/AnastasiyaPoleshuk" className="footer-item footer-item__link">Anastasiya Poleshuk</a>
      </div>
    </footer>
  );
};

export default Footer;
