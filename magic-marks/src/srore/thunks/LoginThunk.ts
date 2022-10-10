import { Dispatch } from 'redux';
import loginUser from '../../api/loginAPI';
import { ILoginUser } from '../../types/interfaces';
import { LoginUserAction } from '../actions/UserAction';

const LoginThunk = (data: ILoginUser) => {
  return async function (dispatch: Dispatch) {
    const response = await loginUser(data);
    if (response.isAuthenticated) {
      dispatch(LoginUserAction(response));
    }
  };
};

export default LoginThunk;
