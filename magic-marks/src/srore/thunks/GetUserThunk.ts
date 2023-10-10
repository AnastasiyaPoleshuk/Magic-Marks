import { Dispatch } from 'redux';
import StatusCodes from 'http-status-codes';
import getUser from '../../api/getUser';
import { IGetUser } from '../../types/interfaces';
import { GetUserAction } from '../actions/UserAction';
import LoadingAction from '../actions/LoadingAction';

const GetUserThunk = (data: IGetUser) => {
  return async function (dispatch: Dispatch) {
    dispatch(LoadingAction(true));
    const response = await getUser(data);

    if (response.status === StatusCodes.OK) {
      dispatch(GetUserAction(response.resultData));
    }
    dispatch(LoadingAction(false));
  };
};

export default GetUserThunk;
