import { Dispatch } from 'redux';
import StatusCodes from 'http-status-codes';
import createUser from '../../api/createUser';
import { IRegistrationFormData } from '../../types/interfaces';
import { CreateUserAction, CreateUserFailedAction } from '../actions/UserAction';
import LoadingAction from '../actions/LoadingAction';

const CreateUserThunk = (data: IRegistrationFormData) => {
  return async function (dispatch: Dispatch) {
    dispatch(LoadingAction(true));
    const response = await createUser(data);
    switch (response.status) {
      case StatusCodes.OK:
        dispatch(CreateUserAction(response.resultData));
        break;
      case StatusCodes.BAD_REQUEST:
        dispatch(CreateUserFailedAction(response.resultData));
        break;
      default:
        break;
    }
    dispatch(LoadingAction(false));
  };
};

export default CreateUserThunk;
