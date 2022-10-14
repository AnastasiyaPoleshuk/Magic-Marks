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

const rootReducer = combineReducers({
  loginUser: UserReducer,
  user: GetUserReducer,
  marks: GetMarksReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
