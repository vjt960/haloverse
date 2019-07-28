import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { loadingReducer } from './loadingReducer';
import { mapsReducer } from './mapsReducer';
import { spartanReducer } from './spartanReducer';
import { emblemReducer } from './emblemReducer';
import { statsReducer } from './statsReducer';

const rootReducer = combineReducers({
  user: userReducer,
  isLoading: loadingReducer,
  maps: mapsReducer,
  spartan: spartanReducer,
  emblem: emblemReducer,
  stats: statsReducer
});

export default rootReducer;
