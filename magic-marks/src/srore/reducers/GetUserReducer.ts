/* eslint-disable default-param-last */
import { IGetUserResponse, IStore } from '../../types/interfaces';
import { GET__USER } from '../actionTypes';
import initialState from '../initialState';

interface IAction {
  type: string,
  payload: IGetUserResponse,
}

const GetUserReducer = (state = initialState as unknown as IStore, action: IAction) => {
  switch (action.type) {
    case GET__USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default GetUserReducer;
