/* eslint-disable default-param-last */
import { IGetMarksResponse, IStore } from '../../types/interfaces';
import { GET__MARKS, UPDATE__MARKS } from '../actionTypes';
import initialState from '../initialState';

interface IAction {
  type: string,
  payload: IGetMarksResponse,
}

const GetMarksReducer = (state = initialState as unknown as IStore, action: IAction) => {
  switch (action.type) {
    case GET__MARKS:
      return { ...state, marks: action.payload };
    case UPDATE__MARKS:
      return { ...state, marks: action.payload };
    default:
      return state;
  }
};

export default GetMarksReducer;
