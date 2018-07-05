import * as types from '../constants/actionTypes';

/**
 * Action :: Returns an action type, SELECTED_JOKE and selected joke
 * @param {Object} joke
 */
export const selectJokeAction = joke => ({
	type: types.SELECTED_JOKE,
	joke,
});

/**
 * Action :: Returns an action type, SEARCH_REQUEST and search criteria
 * @param {Object} payload
 */
export const searchAction = payload => ({
	type: types.SEARCH_REQUEST,
	payload,
});

/**
 * Action :: Returns an action type, JOKE_DETAILS_REQUEST and joke details
 * @param {Object} payload
 */
export const getDetailsAction = payload => ({
	type: types.JOKE_DETAILS_REQUEST,
	payload,
});
