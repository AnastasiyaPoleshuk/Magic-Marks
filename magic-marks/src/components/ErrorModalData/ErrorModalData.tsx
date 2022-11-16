import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import locales from '../../locales/ru-Ru';
import CONSTANTS from '../../utils/constants';
import './ErrorModalData.scss';
import './ErrorModalData.mobile.scss';

const ErrorModalData = () => {
  const { errorMessage, closeModal } = useContext(ModalContext);

  return (
    <div className="error-block">
      <h2 className="error-block__title">{locales.common.oops}</h2>
      <p className="error-block__description">{errorMessage}</p>
      <button type="button" className="error-block__close" onClick={() => { return closeModal(CONSTANTS.ERROR__MODAL); }}>{locales.common.cancel}</button>
    </div>
  );
};

export default ErrorModalData;
