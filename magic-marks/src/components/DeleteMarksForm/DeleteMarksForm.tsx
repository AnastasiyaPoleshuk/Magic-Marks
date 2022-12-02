import { useContext, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { useTranslation } from 'react-i18next';
import { ModalContext } from '../../context/ModalContext';
import UpdateMarksThunk from '../../srore/thunks/UpdateMarksThunk';
import GetUserThunk from '../../srore/thunks/GetUserThunk';
import { IStore } from '../../types/interfaces';
import CONSTANTS from '../../utils/constants';
import path from '../../assets/marks-modal-img.png';
import './DeleteMarksForm.scss';
import DropdownList from './DropdownList/DropdownList';

const DeleteMarksForm = () => {
  const { openModal, closeModal, changeMessage } = useContext(ModalContext);
  const {
    handleSubmit,
    reset,

  } = useForm<{marks: number}>();
  const dispatch = useDispatch();
  const token = useSelector((state: IStore) => { return state.loginUser.login.token; });
  const marks = useSelector((state: IStore) => { return state.marks.marks; });
  const [deletedMark, setDeletedMark] = useState<string>('');
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(GetUserThunk({ token }) as unknown as AnyAction);
  }, [marks]);

  const chooseMark = (mark: string) => {
    setDeletedMark(mark);
  };

  const onSubmit: SubmitHandler<{marks: number}> = () => {
    const index = marks.Marks.indexOf(+deletedMark);

    if (index === -1) {
      changeMessage(t('labels.SubjectsPage.wrongValueError'));
      openModal(CONSTANTS.ERROR__MODAL);
    } else {
      marks.Marks.splice(index, 1);
      const requestData = {
        token,
        subjectId: marks.SubjectId,
        marks: marks.Marks,
      };

      dispatch(UpdateMarksThunk(requestData) as unknown as AnyAction)
        .then(() => {
          reset();
          closeModal(CONSTANTS.MARKS_DELETE__MODAL);
        })
        .catch(() => {
          openModal(CONSTANTS.ERROR__MODAL);
        });
    }
  };

  return (
    <div className="marks-form__container">
      <img src={path} alt="marks-modal-img" className="marks-modal-img" />
      <form action="#" className="marks-form" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="modal-title">{t('labels.SubjectsPage.deleteMark')}</h3>
        <DropdownList chooseMark={chooseMark} />
        <div className="form-btn__wrapper">
          <input type="submit" value={`${t('common.delete')}`} className="form-btn" />
          <input type="button" onClick={() => { return closeModal(CONSTANTS.MARKS_DELETE__MODAL); }} value={`${t('common.cancel')}`} className="form-btn" />
        </div>
      </form>
    </div>
  );
};

export default DeleteMarksForm;
