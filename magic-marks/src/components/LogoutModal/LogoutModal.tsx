import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { ModalContext } from '../../context/ModalContext';
import { LoginUserAction } from '../../srore/actions/UserAction';
import CONSTANTS from '../../utils/constants';
import './LogoutModal.scss';

const LogoutModal = () => {
  const { closeModal } = useContext(ModalContext);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(LoginUserAction({
      accsess_token: '',
      isAuthenticated: false,
    }));
    closeModal(CONSTANTS.LOGOUT__MODAL);
  };

  return (
    <div className="error-block">
      <h2 className="error-block__title">{t('labels.logoutForm.title')}</h2>
      <p className="error-block__description">{t('labels.logoutForm.text')}</p>
      <div className="form-btn__wrapper">
        <input type="submit" value={`${t('labels.logoutForm.ok')}`} className="form-btn" onClick={() => { return logout(); }} />
        <input type="button" onClick={() => { return closeModal(CONSTANTS.LOGOUT__MODAL); }} value={`${t('common.cancel')}`} className="form-btn" />
      </div>
    </div>
  );
};

export default LogoutModal;
