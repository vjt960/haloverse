import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { loadingReducer } from './loadingReducer';
import { mapsReducer } from './mapsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  isLoading: loadingReducer,
  maps: mapsReducer
});

export default rootReducer;
