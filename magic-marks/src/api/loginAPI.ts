import CONSTANTS from '../utils/constants';
import { ILoginFormData } from '../types/interfaces';

const createUser = async (data: ILoginFormData) => {
  const payload = JSON.stringify({
    Email: data.email,
    Password: data.password,
  });
  console.log('data ', payload);
  const response = await fetch(`${CONSTANTS.URL}/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json;charset=utf-8',
    },
    body: payload,
  });
  const result = await response.json();
  console.log(result);

  return result;
};

export default createUser;
