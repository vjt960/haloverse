import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { loadingReducer } from './loadingReducer';
import { mapsReducer } from './mapsReducer';
import { spartanReducer } from './spartanReducer';
import { emblemReducer } from './emblemReducer';
import { statsReducer } from './statsReducer';
import { errorReducer } from './errorReducer';
import { enemiesReducer } from './enemiesReducer';
import { userLoadingReducer } from './userLoadingReducer';

const rootReducer = combineReducers({
  user: userReducer,
  isLoading: loadingReducer,
  maps: mapsReducer,
  spartan: spartanReducer,
  emblem: emblemReducer,
  stats: statsReducer,
  error: errorReducer,
  enemies: enemiesReducer,
  userIsLoading: userLoadingReducer
});

export default rootReducer;
