/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import loginUser from '../../api/loginAPI';
import {
  ILoginUser, ILoginUserResponse, ILoginResponse,
} from '../../types/interfaces';
import UserAction from '../actions/UserAction';

const LoginThunk = (data: ILoginUser) => {
  return async function (dispatch: (dispatch: unknown) => Promise<ILoginUserResponse>) {
    const response = await loginUser(data);
    if (response.isAuthenticated) {
      dispatch(UserAction(response as ILoginResponse));
    }
  };
};

export default LoginThunk;
