import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
}
  from 'redux';
import thunk from 'redux-thunk';
import UserReducer from './reducers/UserReducer';
import GetUserReducer from './reducers/GetUserReducer';
import GetMarksReducer from './reducers/GetMarksReducer';
import CreateUserReducer from './reducers/CreateUserReducer';
import LoadingReducer from './reducers/LoadingReducer';

const rootReducer = combineReducers({
  loginUser: UserReducer,
  createUser: CreateUserReducer,
  user: GetUserReducer,
  marks: GetMarksReducer,
  isLoading: LoadingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
