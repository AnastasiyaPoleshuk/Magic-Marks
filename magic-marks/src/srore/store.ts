import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
}
  from 'redux';
import thunk from 'redux-thunk';
import UserReducer from './reducers/UserReducer';
import IsAuthReducer from './reducers/IsAuthReducer';

const rootReducer = combineReducers({
  loginUser: UserReducer,
  isAuth: IsAuthReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
