import { useContext, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import { ModalContext } from '../../context/ModalContext';
import locales from '../../locales/ru-Ru';
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

  return (
    <div className="marks-form__container">
      <form action="#" className="marks-form" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="modal-title">{locales.labels.SubjectsPage.addMark}</h3>

        <input
          type="number"
          className={`marks-form__input ${errors.marks ? 'input-error' : null}`}
          placeholder={locales.common.marks}
          {...register('marks', { required: true, min: 1, max: 10 })}
        />
        <p className={`form-error ${errors.marks ? 'open' : null}`}>
          {locales.labels.SubjectsPage.marksError}
        </p>
        <div className="form-btn__wrapper">
          <input type="submit" value={locales.common.ok} className="form-btn" />
          <input type="button" onClick={() => { return closeModal(CONSTANTS.MARKS__MODAL); }} value={locales.common.cancel} className="form-btn" />
        </div>
      </form>
      <img src={path} alt="marks-modal-img" className="marks-modal-img" />
    </div>
  );
};

export default AddMarkForm;
