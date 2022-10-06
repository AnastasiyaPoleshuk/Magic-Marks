/* eslint-disable default-param-last */
import { IGetMarksResponse, IStore } from '../../types/interfaces';
import { UPDATE__MARKS } from '../actionTypes';
import initialState from '../initialState';

interface IAction {
  type: string,
  payload: IGetMarksResponse,
}

//! не нужен. промто еще один тип для getMarksReducer
const UpdateMarksReducer = (state = initialState as unknown as IStore, action: IAction) => {
  switch (action.type) {
    case UPDATE__MARKS:
      return { ...state, marks: action.payload };
    default:
      return state;
  }
};

export default UpdateMarksReducer;
