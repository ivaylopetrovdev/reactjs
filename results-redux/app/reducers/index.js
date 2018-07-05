import { combineReducers } from 'redux';
import jokes from './jokeReducer';

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
	jokes,
});

export default rootReducer;
