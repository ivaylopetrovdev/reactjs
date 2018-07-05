import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function (state = initialState.jokes, action) {
	switch (action.type) {
		case types.JOKE_DETAILS_SUCCESS:
			return [...state, action.jokes];
		case types.CN_JOKES_SUCCESS:
			return [...state, action.jokes];
		case types.SELECTED_JOKE:
			return { ...state, selectedJoke: action.joke };
		default:
			return state;
	}
}
