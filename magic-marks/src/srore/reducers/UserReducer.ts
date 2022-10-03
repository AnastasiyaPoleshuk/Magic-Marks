/* eslint-disable default-param-last */
import { ILoginResponse, IStore } from '../../types/interfaces';
import { ADD__USER, LOGIN__USER } from '../actionTypes';
import initialState from '../initialState';

interface IAction {
  type: string,
  payload: ILoginResponse,
}

const UserReducer = (state = initialState as unknown as IStore, action: IAction) => {
  switch (action.type) {
    case ADD__USER:
      return { ...state, user: action.payload };
    case LOGIN__USER:
      return {
        ...state,
        login: {
          token: action.payload.accsess_token,
          isAuth: action.payload.isAuthenticated,
        },
      };
    default:
      return state;
  }
};

export default UserReducer;
