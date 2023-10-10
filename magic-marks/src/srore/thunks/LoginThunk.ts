import { Dispatch } from 'redux';
import loginUser from '../../api/loginAPI';
import { ILoginUser } from '../../types/interfaces';
import { LoginUserAction } from '../actions/UserAction';
import LoadingAction from '../actions/LoadingAction';

const LoginThunk = (data: ILoginUser) => {
  return async function (dispatch: Dispatch) {
    dispatch(LoadingAction(true));
    const response = await loginUser(data);
    if (response.isAuthenticated) {
      dispatch(LoginUserAction(response));
    }
    dispatch(LoadingAction(false));
  };
};

export default LoginThunk;
