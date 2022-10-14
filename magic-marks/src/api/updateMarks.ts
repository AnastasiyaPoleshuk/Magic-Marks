import CONSTANTS from '../utils/constants';
import { IUpdateMarks } from '../types/interfaces';

const updateMarks = async (data: IUpdateMarks) => {
  const response = await fetch(`${CONSTANTS.URL}/marks`, {
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(data),
  });
  const status = await response.status;
  const resultData = await response.json();

  return { resultData, status };
};

export default updateMarks;
