import { put, call } from 'redux-saga/effects';
import { getJokesDetails } from '../Api/api';
import * as types from '../constants/actionTypes';

/**
 * @description Responsible for searching 3rd party API, making calls to the API
 * and instructing the redux-saga middle ware on the next line of action,
 * for success or failure operation.
 */
export function* detailsSaga({ payload }) {
	try {
		const jokes = yield call(getJokesDetails, payload);

		yield [
			put({ type: types.JOKE_DETAILS_SUCCESS, jokes }),
			put({ type: types.SELECTED_JOKE, joke: jokes[0] }),
		];
	} catch (error) {
		yield put({ type: 'JOKE_DETAILS_ERROR', error });
	}
}
