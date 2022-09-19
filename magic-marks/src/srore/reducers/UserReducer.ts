/* eslint-disable no-unused-vars */
/* eslint-disable default-param-last */
import { ILoginResponse, IStore } from '../../types/interfaces';
import initialState from '../initialState';
import { ADD__USER, LOGIN__USER } from '../actionTypes';

interface IAction {
  type: string,
  payload: ILoginResponse,
}

interface IReducer {
  (state: IStore | undefined, action: IAction): IStore;
}

const UserReducer: IReducer = (state = initialState as unknown as IStore, action: IAction) => {
  switch (action.type) {
    case ADD__USER:
      return { ...state, user: action.payload };
    case LOGIN__USER:
      return {
        ...state,
        login: {
          token: action.payload.token,
          isAuth: action.payload.isAuthenticated,
        },
      };
    default:
      return state;
  }
};

export default UserReducer;
