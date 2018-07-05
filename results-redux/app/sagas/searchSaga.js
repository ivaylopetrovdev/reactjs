import { put, call } from 'redux-saga/effects';
import { getJokesList } from '../Api/api';
import * as types from '../constants/actionTypes';

/**
 * @description Responsible for searching results, making calls to the API
 * and instructing the redux-saga middle ware on the next line of action,
 * for success or failure operation.
 */
export function* searchSaga({ payload }) {
	try {
		const jokes = yield call(getJokesList, payload);

		yield [
			put({ type: types.CN_JOKES_SUCCESS, jokes }),
		];
	} catch (error) {
		yield put({ type: 'SEARCH_ERROR', error });
	}
}
