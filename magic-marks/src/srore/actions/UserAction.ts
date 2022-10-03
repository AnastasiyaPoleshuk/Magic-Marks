import { ILoginResponse, IGetUserResponse } from '../../types/interfaces';
import { LOGIN__USER, GET__USER } from '../actionTypes';

export const LoginUserAction = (payload: ILoginResponse) => {
  return { type: LOGIN__USER, payload };
};

export const GetUserAction = (payload: IGetUserResponse) => {
  return { type: GET__USER, payload };
};
