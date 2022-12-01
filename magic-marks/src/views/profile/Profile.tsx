import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IStore } from '../../types/interfaces';
import locales from '../../locales/ru-Ru';
import path from '../../assets/profile-img.png';
import './styles/Profile.scss';
import './styles/Profile.tablet.scss';
import './styles/Profile.mobile.scss';

const Profile = () => {
  const navigate = useNavigate();
  const loginUser = useSelector((state: IStore) => { return state.loginUser.login; });
  const user = useSelector((state: IStore) => { return state.user.user; });

  useEffect(() => {
    if (!loginUser.isAuth) {
      navigate('/');
    }
  }, [loginUser.isAuth]);

  return (
    <section className="container">
      <div className="profile">
        <div className="profile__wrapp">
          <h1 className="profile__title">{locales.labels.ProfilePage.profile}</h1>
          <div className="profile__info-block">
            <img src={path} alt="profile img" className="profile__img" />
            <div className="profile__info-block-right">
              <div className="profile__block-first">
                <h2 className="profile__info profile__first-name">{user.FirstName}</h2>
                <h2 className="profile__info profile__last-name">{user.LastName}</h2>
              </div>
              <div className="profile__block">
                <h3 className="profile__info profile__class">
                  {locales.labels.ProfilePage.grade}
                  {': '}
                  <span>{user.Class}</span>
                </h3>
                <h3 className=" profile__info profile__average">
                  {locales.labels.ProfilePage.average}
                  {': '}
                  <span>{user.AverageMark}</span>
                </h3>
              </div>
              <div className="profile__block">
                <button type="button" className="profile__info profile__edit-btn">{locales.labels.ProfilePage.edit}</button>
                <button type="button" className="profile__info profile__edit-btn">{locales.labels.ProfilePage.exit}</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
