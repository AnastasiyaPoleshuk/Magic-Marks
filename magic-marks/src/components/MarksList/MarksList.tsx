import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';
import locales from '../../locales/ru-Ru/index';
import CONSTANTS from '../../utils/constants';
import path from '../../assets/subject-page-img.png';
import './MarksList.scss';

interface MarksListProps {
  marks: string
}

const MarksList = ({ marks }: MarksListProps) => {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="content">
      <h2 className="marks-title">{locales.common.marks}</h2>
      <article className="marks">{marks}</article>
      <div className="marks__buttons">
        <button type="submit" className="marks__button" onClick={() => { return openModal(CONSTANTS.MARKS__MODAL); }}>{locales.common.add}</button>
        <button type="submit" className="marks__button" onClick={() => { return openModal(CONSTANTS.MARKS_DELETE__MODAL); }}>{locales.common.delete}</button>
      </div>
      <img src={path} alt="" className="marks-list__img" />
    </div>
  );
};

export default MarksList;
