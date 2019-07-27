import { combineReducers } from 'redux';
import { loadingReducer } from './loadingReducer';
import { mapsReducer } from './mapsReducer';

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  maps: mapsReducer
});

export default rootReducer;
