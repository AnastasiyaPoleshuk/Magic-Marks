import CONSTANTS from '../utils/constants';
import { IGetUser } from '../types/interfaces';

const getUser = async (data: IGetUser) => {
  const response = await fetch(`${CONSTANTS.URL}/user?token=${data.token}`, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
  const status = await response.status;
  const resultData = await response.json();

  return { resultData, status };
};

export default getUser;
