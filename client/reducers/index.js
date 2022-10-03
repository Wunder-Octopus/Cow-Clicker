import { combineReducers } from 'redux';
import cowsReducer  from './cows.js';

const reducers = combineReducers({
	cows: cowsReducer,
});

export default reducers;