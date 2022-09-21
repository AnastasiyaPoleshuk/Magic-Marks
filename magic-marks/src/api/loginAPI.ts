import CONSTANTS from '../utils/constants';
import { ILoginUser } from '../types/interfaces';

const createUser = async (data: ILoginUser) => {
  const response = await fetch(`${CONSTANTS.URL}/login`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(data),
  });

  const result = await response.json();
  return result;
};

export default createUser;
