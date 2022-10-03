/* eslint-disable no-unused-expressions */
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';
import { AnyAction } from 'redux';
import { useNavigate } from 'react-router-dom';
import { IStore } from '../../types/interfaces';
import locales from '../../locales/ru-Ru';
import BookAnimation from './animation/BookAnimation';
import './Subjects.scss';
import GetMarksThunk from '../../srore/thunks/GetMarksThunk';

const Subjects = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = useSelector((state: IStore) => { return state.loginUser.login; });
  const user = useSelector((state: IStore) => { return state.user.user; });
  const marks = useSelector((state: IStore) => { return state.marks.marks; });
  const pages = useRef<HTMLDivElement>(document.createElement('div'));
  const [isMarks, setIsMarks] = useState(false);
  const [currentPage, setCurrentPage] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!loginUser.isAuth) {
      navigate('/');
    }
  }, [loginUser.isAuth]);

  useEffect(() => {
    isMarks ? '' : setIsMarks(true);
    if (isMarks) {
      BookAnimation(currentPage as HTMLElement, pages.current.children);
    }
  }, [marks]);

  // eslint-disable-next-line consistent-return
  function getAnimationData(event: React.MouseEvent<HTMLUListElement, MouseEvent>) {
    const elem = event.target as HTMLElement;

    if (!elem.classList.contains('subject-name')) {
      return null;
    }
    setCurrentPage(elem);
    dispatch(GetMarksThunk({
      token: loginUser.token,
      subjectId: elem.id,
    }) as unknown as AnyAction);
  }

  return (
    <section className="container">
      <div className="subjects">
        <div className="title-container">
          <h2 className="title">{locales.common.dairy}</h2>
          <div className="average">{user.AverageMark}</div>
        </div>
        <div className="book__container">
          <div className="left-side">
            <ul className="subject__container" onClick={(event) => { return getAnimationData(event); }}>
              {user.Subjects.map((subject) => {
                return (
                  <li className="item" key={subject.SubjectId}>
                    <div className="subject-name" id={`${subject.SubjectId}`}>{subject.SubjectName}</div>
                    <div className="average-mark">{subject.AverageMark}</div>
                  </li>
                );
              })}
            </ul>
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
                    <div className="l-side" />
                    <div className="r-side">
                      <div className="content">{marks.Marks.join(' ')}</div>
                    </div>
                  </div>
                );
              })}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Subjects;
