import './Footer.scss';
import path from '../../assets/footer-img.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={path} alt="" className="footer-img" />
      <div className="footer-item">&copy;2022</div>
      <a href="https://github.com/AnastasiyaPoleshuk" className="footer-item">Anastasiya Poleshuk</a>
    </footer>
  );
};

export default Footer;
