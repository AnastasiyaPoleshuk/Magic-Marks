import { Dispatch } from 'redux';
import StatusCodes from 'http-status-codes';
import getMarks from '../../api/getMarks';
import { IGetMarks } from '../../types/interfaces';
import { GetMarksAction } from '../actions/UserAction';
import LoadingAction from '../actions/LoadingAction';

const GetMarksThunk = (data: IGetMarks) => {
  return async function (dispatch: Dispatch) {
    dispatch(LoadingAction(true));
    const response = await getMarks(data);
    if (response.status === StatusCodes.OK) {
      dispatch(GetMarksAction(response.resultData));
    }
    dispatch(LoadingAction(false));
  };
};

export default GetMarksThunk;
