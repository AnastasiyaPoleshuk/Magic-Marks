/* eslint-disable default-param-last */
import { IStore } from '../../types/interfaces';
import initialState from '../initialState';
import { CHECK__AUTH } from '../actionTypes';

interface IAction {
  type: string,
  payload: boolean,
}

const IsAuthReducer = (state = initialState as unknown as IStore, action: IAction) => {
  switch (action.type) {
    case CHECK__AUTH:
      return { ...state, isAuth: !action.payload };
    default:
      return state;
  }
};

export default IsAuthReducer;
