import { ILoginResponse, IGetUserResponse, IGetMarksResponse } from '../../types/interfaces';
import {
  LOGIN__USER, GET__USER, GET__MARKS, UPDATE__MARKS,
} from '../actionTypes';

export const LoginUserAction = (payload: ILoginResponse) => {
  return { type: LOGIN__USER, payload };
};

export const GetUserAction = (payload: IGetUserResponse) => {
  return { type: GET__USER, payload };
};

export const GetMarksAction = (payload: IGetMarksResponse) => {
  return { type: GET__MARKS, payload };
};

export const UpdateMarksAction = (payload: IGetMarksResponse) => {
  return { type: UPDATE__MARKS, payload };
};
