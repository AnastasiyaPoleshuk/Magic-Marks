/* eslint-disable default-param-last */
import { IRegistration, IStore } from '../../types/interfaces';
import { CREATE__USER, CREATE__USER__FAILED } from '../actionTypes';
import initialState from '../initialState';

interface IAction {
  type: string,
  payload: IRegistration,
}

const CreateUserReducer = (state = initialState as unknown as IStore, action: IAction) => {
  switch (action.type) {
    case CREATE__USER:
      return { ...state, registration: action.payload };
    case CREATE__USER__FAILED:
      return {
        ...state,
        error: {
          isError: !action.payload.isUserCreated,
          errorMessage: action.payload.message,
        },
      };
    default:
      return state;
  }
};

export default CreateUserReducer;
