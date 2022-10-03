import { Dispatch } from 'redux';
import StatusCodes from 'http-status-codes';
import getMarks from '../../api/getMarks';
import { IGetMarks } from '../../types/interfaces';
import { GetMarksAction } from '../actions/UserAction';

const GetMarksThunk = (data: IGetMarks) => {
  return async function (dispatch: Dispatch) {
    const response = await getMarks(data);
    if (response.status === StatusCodes.OK) {
      dispatch(GetMarksAction(response.resultData));
    }
  };
};

export default GetMarksThunk;
