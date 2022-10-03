/* eslint-disable default-param-last */
import { IGetMarksResponse, IStore } from '../../types/interfaces';
import { GET__MARKS } from '../actionTypes';
import initialState from '../initialState';

interface IAction {
  type: string,
  payload: IGetMarksResponse,
}

const GetMarksReducer = (state = initialState as unknown as IStore, action: IAction) => {
  switch (action.type) {
    case GET__MARKS:
      // eslint-disable-next-line no-case-declarations
      const test = { ...state, marks: action.payload };
      console.log('reducer: ', test);
      return test;
      // return { ...state, marks: action.payload };
    default:
      return state;
  }
};

export default GetMarksReducer;
