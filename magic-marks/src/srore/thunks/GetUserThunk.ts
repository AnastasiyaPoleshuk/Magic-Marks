import { Dispatch } from 'redux';
import StatusCodes from 'http-status-codes';
import getUser from '../../api/getUser';
import { IGetUser } from '../../types/interfaces';
import { GetUserAction } from '../actions/UserAction';

const GetUserThunk = (data: IGetUser) => {
  return async function (dispatch: Dispatch) {
    const response = await getUser(data);

    if (response.status === StatusCodes.OK) {
      dispatch(GetUserAction(response.resultData));
    }
  };
};

export default GetUserThunk;
