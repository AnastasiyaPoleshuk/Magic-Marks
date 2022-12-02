/* eslint-disable react/no-this-in-sfc */
import { ChangeEvent, useContext, useEffect } from 'react';
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
import './AddMarkForm.scss';

const AddMarkForm = () => {
  const { openModal, closeModal } = useContext(ModalContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{marks: number}>();
  const dispatch = useDispatch();
  const token = useSelector((state: IStore) => { return state.loginUser.login.token; });
  const marks = useSelector((state: IStore) => { return state.marks.marks; });
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(GetUserThunk({ token }) as unknown as AnyAction);
  }, [marks]);

  const onSubmit: SubmitHandler<{marks: number}> = (data) => {
    const requestData = {
      token,
      subjectId: marks.SubjectId,
      marks: [...marks.Marks, +data.marks],
    };

    dispatch(UpdateMarksThunk(requestData) as unknown as AnyAction)
      .then(() => {
        reset();
        closeModal(CONSTANTS.MARKS__MODAL);
      })
      .catch(() => {
        openModal(CONSTANTS.ERROR__MODAL);
      });
  };

  const validateMark = (event: ChangeEvent<HTMLInputElement>) => {
    const mark = event.target as HTMLInputElement;

    if (+mark.value > 10) {
      mark.value = `${+mark.value - 1}`;
    } else if (+mark.value <= 0) {
      mark.value = `${1}`;
    }
  };

  return (
    <div className="marks-form__container">
      <form action="#" className="marks-form" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="modal-title">{t('labels.SubjectsPage.addMark')}</h3>

        <input
          type="number"
          className={`marks-form__input ${errors.marks ? 'input-error' : null}`}
          placeholder={`${t('common.marks')}`}
          {...register('marks', { required: true, min: 1, max: 10 })}
          onChange={(event) => { validateMark(event); }}
        />
        <p className={`form-error ${errors.marks ? 'open' : null}`}>
          {t('labels.SubjectsPage.marksError')}
        </p>
        <div className="form-btn__wrapper">
          <input type="submit" value={`${t('common.ok')}`} className="form-btn" />
          <input type="button" onClick={() => { return closeModal(CONSTANTS.MARKS__MODAL); }} value={`${t('common.cancel')}`} className="form-btn" />
        </div>
      </form>
      <img src={path} alt="marks-modal-img" className="marks-modal-img" />
    </div>
  );
};

export default AddMarkForm;
