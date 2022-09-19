import { ILoginResponse } from '../../types/interfaces';
import { LOGIN__USER } from '../actionTypes';

const LoginUserAction = (payload: ILoginResponse) => {
  return { type: LOGIN__USER, payload };
};

export default LoginUserAction;
