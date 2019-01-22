import { combineReducers } from 'redux';
import exampleState from './exampleReducer';

const reducers = {
  exampleState
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
