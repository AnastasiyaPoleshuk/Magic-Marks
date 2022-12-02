import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalContext } from '../../context/ModalContext';
import CONSTANTS from '../../utils/constants';
import path from '../../assets/subject-page-img.png';
import './MarksList.scss';

interface MarksListProps {
  marks: string
}

const MarksList = ({ marks }: MarksListProps) => {
  const { openModal } = useContext(ModalContext);
  const { t } = useTranslation();

  const disableState = () => {
    if (marks) {
      return false;
    }
    return true;
  };

  return (
    <div className="content">
      <h2 className="marks-title">{t('common.marks')}</h2>
      <article className="marks">{marks}</article>
      <div className="marks__buttons">
        <button type="submit" className="marks__button" onClick={() => { return openModal(CONSTANTS.MARKS__MODAL); }}>{t('common.add')}</button>
        <button type="submit" className="marks__button" disabled={disableState()} onClick={() => { return openModal(CONSTANTS.MARKS_DELETE__MODAL); }}>{t('common.delete')}</button>
      </div>
      <img src={path} alt="" className="marks-list__img" />
    </div>
  );
};

export default MarksList;
