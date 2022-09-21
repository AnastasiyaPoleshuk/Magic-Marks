/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import createUser from '../../api/loginAPI';
import {
  ILoginFormData, ICreateUserResponse, ILoginResponse,
} from '../../types/interfaces';
import UserAction from '../actions/UserAction';

const LoginThunk = (data: ILoginFormData) => {
  return async function (dispatch: (dispatch: unknown) => Promise<ICreateUserResponse>) {
    const response = await createUser(data);
    if (response.isAuthenticated) {
      dispatch(UserAction(response as ILoginResponse));
    }
  };
};

export default LoginThunk;
