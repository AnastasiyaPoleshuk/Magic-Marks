import { useSelector } from 'react-redux';
import { IStore } from '../../types/interfaces';

const SubjectsList = (props: { animateBook: any; }) => {
  const user = useSelector((state: IStore) => { return state.user.user; });
  const { animateBook } = props;
  return (
    <ul className="subject__container" onClick={(event) => { return animateBook(event); }}>
      {user.Subjects.map((subject) => {
        return (
          <li className="item" key={subject.SubjectId}>
            <div className="subject-name" id={`${subject.SubjectId}`}>{subject.SubjectName}</div>
            <div className="average-mark">{subject.AverageMark}</div>
          </li>
        );
      })}
    </ul>
  );
};

export default SubjectsList;
