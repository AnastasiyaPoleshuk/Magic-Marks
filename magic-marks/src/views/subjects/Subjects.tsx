/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
import { useDispatch, useSelector } from 'react-redux';
import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import { AnyAction } from 'redux';
import { useNavigate } from 'react-router-dom';
import { IStore } from '../../types/interfaces';
import locales from '../../locales/ru-Ru';
import BookAnimation from './animation/BookAnimation';
import GetMarksThunk from '../../srore/thunks/GetMarksThunk';
import SubjectsList from '../../components/SubjectsList/SubjectsList';
import MarksList from '../../components/MarksList/MarksList';
import './styles/Subjects.scss';
import './styles/Subjects.tablet.scss';
import './styles/Subjects.mobile.scss';
import { ModalContext } from '../../context/ModalContext';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import AddMarkForm from '../../components/AddMarkForm/AddMarkForm';
import DeleteMarksForm from '../../components/DeleteMarksForm/DeleteMarksForm';
import CONSTANTS from '../../utils/constants';
import ErrorModalData from '../../components/ErrorModalData/ErrorModalData';

const Subjects = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = useSelector((state: IStore) => { return state.loginUser.login; });
  const user = useSelector((state: IStore) => { return state.user.user; });
  const marks = useSelector((state: IStore) => { return state.marks.marks; });
  const pages = useRef<HTMLDivElement>(document.createElement('div'));
  const [isMarks, setIsMarks] = useState(false);
  const [currentPage, setCurrentPage] = useState<HTMLElement | null>(null);
  const { addMarkModal, deleteMarkModal, errorModal } = useContext(ModalContext);

  useEffect(() => {
    if (!loginUser.isAuth) {
      navigate('/');
    }
  }, [loginUser.isAuth]);

  useEffect(() => {
    isMarks ? null : setIsMarks(true);
    if (isMarks) {
      BookAnimation(currentPage as HTMLElement, pages.current.children);
    }
  }, [marks]);

  const getAnimationData = (event: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
    const elem = event.target as HTMLElement;

    if (!elem.classList.contains('subject-name')) {
      return null;
    }
    setCurrentPage(elem);
    dispatch(GetMarksThunk({
      token: loginUser.token,
      subjectId: elem.id,
    }) as unknown as AnyAction);
  };

  return (
    <section className="container">
      <div className="subjects">
        <div className="title-container">
          <h2 className="title">{locales.common.dairy}</h2>
          <div className="average">{user.AverageMark}</div>
        </div>
        <div className="book__container">
          <div className="left-side">
            <h3 className="subjects-title">{locales.labels.SubjectsPage.subjects}</h3>
            <SubjectsList animateBook={getAnimationData} />
          </div>
          <div className="right-side" ref={pages}>
            <div className="page" id="page-0">
              <div className="l-side" />
              <div className="r-side" />
            </div>
            {isMarks
              && user.Subjects.map((subject) => {
                return (
                  <div className="page" id={`page-${subject.SubjectId}`} key={subject.SubjectId}>
                    <div className="l-side">
                      <SubjectsList animateBook={getAnimationData} />
                    </div>
                    <div className="r-side">
                      <MarksList marks={marks.Marks.join(' ')} />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      {addMarkModal
      && (
      <ModalWindow type={CONSTANTS.MARKS__MODAL}>
        <AddMarkForm />
      </ModalWindow>
      )}
      {deleteMarkModal
      && (
      <ModalWindow type={CONSTANTS.MARKS_DELETE__MODAL}>
        <DeleteMarksForm />
      </ModalWindow>
      )}
      {errorModal
      && (
      <ModalWindow type={CONSTANTS.ERROR__MODAL}>
        <ErrorModalData />
      </ModalWindow>
      )}
    </section>
  );
};

export default Subjects;
