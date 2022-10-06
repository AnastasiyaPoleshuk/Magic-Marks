import { Dispatch } from 'redux';
import StatusCodes from 'http-status-codes';
import updateMarks from '../../api/updateMarks';
import { IUpdateMarks } from '../../types/interfaces';
import { UpdateMarksAction } from '../actions/UserAction';

const UpdateMarksThunk = (data: IUpdateMarks) => {
  return async function (dispatch: Dispatch) {
    const response = await updateMarks(data);
    if (response.status === StatusCodes.OK) {
      dispatch(UpdateMarksAction(response.resultData));
    }
  };
};

export default UpdateMarksThunk;
