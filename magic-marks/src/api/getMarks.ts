import CONSTANTS from '../utils/constants';
import { IGetMarks } from '../types/interfaces';

const getMarks = async (data: IGetMarks) => {
  const response = await fetch(`${CONSTANTS.URL}/marks?token=${data.token}&subjectId=${data.subjectId}`, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  });
  const status = await response.status;
  const resultData = await response.json();

  return { resultData, status };
};

export default getMarks;
