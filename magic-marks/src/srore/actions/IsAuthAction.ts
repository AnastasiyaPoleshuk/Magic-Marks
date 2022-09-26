import { CHECK__AUTH } from '../actionTypes';

const IsAuthAction = (payload: boolean) => {
  return { type: CHECK__AUTH, payload };
};

export default IsAuthAction;
