import CONSTANTS from '../utils/constants';
import { IRegistrationFormData } from '../types/interfaces';

const createUser = async (data: IRegistrationFormData) => {
  const response = await fetch(`${CONSTANTS.URL}/user`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(data),
  });
  const status = await response.status;
  const resultData = await response.json();

  return { resultData, status };
};

export default createUser;
