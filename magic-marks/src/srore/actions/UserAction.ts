import {
  ILoginResponse, IGetUserResponse, IGetMarksResponse, IRegistration,
} from '../../types/interfaces';
import {
  LOGIN__USER, GET__USER, GET__MARKS, UPDATE__MARKS, CREATE__USER, CREATE__USER__FAILED,
} from '../actionTypes';

export const LoginUserAction = (payload: ILoginResponse) => {
  return { type: LOGIN__USER, payload };
};

export const CreateUserAction = (payload: IRegistration) => {
  return { type: CREATE__USER, payload };
};

export const CreateUserFailedAction = (payload: IRegistration) => {
  return { type: CREATE__USER__FAILED, payload };
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
