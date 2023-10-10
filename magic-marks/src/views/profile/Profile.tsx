import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { IStore } from '../../types/interfaces';
import { ModalContext } from '../../context/ModalContext';
import CONSTANTS from '../../utils/constants';
import path from '../../assets/profile-img.png';
import './Profile.scss';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import LogoutModal from '../../components/LogoutModal/LogoutModal';
import Loader from '../../components/Loader/Loader';

const Profile = () => {
  const navigate = useNavigate();
  const loginUser = useSelector((state: IStore) => { return state.loginUser.login; });
  const user = useSelector((state: IStore) => { return state.user.user; });
  const { isLoading: isLoadingState } = useSelector((state: IStore) => { return state.isLoading; });
  const { t } = useTranslation();
  const { logoutModal, openModal } = useContext(ModalContext);
  const [isLoading, setIsLoading] = useState(isLoadingState);

  useEffect(() => {
    if (!loginUser.isAuth) {
      navigate('/');
    }
  }, [loginUser.isAuth]);

  useEffect(() => {
    setIsLoading(isLoadingState);
  }, [isLoadingState]);

  return (
    <section className="container">
      <div className="profile">
        <div className="profile__wrapp">
          <h1 className="profile__title">{t('labels.ProfilePage.profile')}</h1>
          <div className="profile__info-block">
            <img src={path} alt="profile img" className="profile__img" />
            <div className="profile__info-block-right">
              <div className="profile__block-first">
                <h2 className="profile__info profile__first-name">{user.FirstName}</h2>
                <h2 className="profile__info profile__last-name">{user.LastName}</h2>
              </div>
              <div className="profile__block">
                <h3 className="profile__info profile__class">
                  {t('labels.ProfilePage.grade')}
                  {': '}
                  <span>{user.Class}</span>
                </h3>
                <h3 className=" profile__info profile__average">
                  {t('labels.ProfilePage.average')}
                  {': '}
                  <span>{user.AverageMark}</span>
                </h3>
              </div>
              <div className="profile__block">
                <button type="button" className="profile__info profile__edit-btn">{t('labels.ProfilePage.edit')}</button>
                <button type="button" className="profile__info profile__edit-btn" onClick={() => { return openModal(CONSTANTS.LOGOUT__MODAL); }}>{t('labels.ProfilePage.exit')}</button>
              </div>

            </div>
          </div>
        </div>
      </div>
      {logoutModal
      && (
      <ModalWindow type={CONSTANTS.LOGOUT__MODAL}>
        <LogoutModal />
      </ModalWindow>
      )}
      {
        isLoading && <Loader />
      }
    </section>
  );
};

export default Profile;
