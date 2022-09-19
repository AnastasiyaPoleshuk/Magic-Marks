/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import createUser from '../../api/loginAPI';
import { ILoginFormData, ICreateUserResponse, ILoginResponse } from '../../types/interfaces';
// import CONSTANTS from '../../utils/constants';
import IsAuthAction from '../actions/IsAuthAction';
import UserAction from '../actions/UserAction';

const LoginThunk = (data: ILoginFormData) => {
  // const isAuth = useSelector((state: IStore) => { return state.isAuth.isAuth; });
  // eslint-disable-next-line no-shadow
  return async function (dispatch: (dispatch: unknown) => Promise<ICreateUserResponse>) {
    const response = await createUser(data);
    console.log('auth ', data);
    console.log('response ', response);
    if (response.isAuthenticated) {
      dispatch(UserAction(response as ILoginResponse));
      // dispatch(IsAuthAction(isAuth));
    }
  };
};

export default LoginThunk;
