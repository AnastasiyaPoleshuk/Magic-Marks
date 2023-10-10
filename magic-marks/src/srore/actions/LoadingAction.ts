import { IS_LOADING } from '../actionTypes';

const LoadingAction = (payload: boolean) => { return { type: IS_LOADING, payload }; };

export default LoadingAction;
