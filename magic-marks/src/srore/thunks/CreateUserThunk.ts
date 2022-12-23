import { Dispatch } from 'redux';
import StatusCodes from 'http-status-codes';
import createUser from '../../api/createUser';
import { IRegistrationFormData } from '../../types/interfaces';
import { CreateUserAction, CreateUserFailedAction } from '../actions/UserAction';

const CreateUserThunk = (data: IRegistrationFormData) => {
  return async function (dispatch: Dispatch) {
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
  };
};

export default CreateUserThunk;
