import masterState from './masterState';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterState: masterState
});

export default rootReducer;
