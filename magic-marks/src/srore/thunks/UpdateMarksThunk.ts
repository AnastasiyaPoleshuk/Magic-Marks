import { Dispatch } from 'redux';
import StatusCodes from 'http-status-codes';
import updateMarks from '../../api/updateMarks';
import { IUpdateMarks } from '../../types/interfaces';
import { UpdateMarksAction } from '../actions/UserAction';
import LoadingAction from '../actions/LoadingAction';

const UpdateMarksThunk = (data: IUpdateMarks) => {
  return async function (dispatch: Dispatch) {
    dispatch(LoadingAction(true));
    const response = await updateMarks(data);
    if (response.status === StatusCodes.OK) {
      dispatch(UpdateMarksAction(response.resultData));
    }
    dispatch(LoadingAction(false));
  };
};

export default UpdateMarksThunk;
