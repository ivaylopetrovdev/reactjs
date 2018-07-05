import { takeLatest } from 'redux-saga/effects';
import { searchSaga } from './searchSaga';
import { detailsSaga } from './detailsSaga';
import * as types from '../constants/actionTypes';

/**
 * @description Watches for SEARCH_REQUEST action type asynchronously
 */
export default function* watchSearch() {
	yield takeLatest(types.SEARCH_REQUEST, searchSaga);
}

/**
 * @description Watches for JOKE_DETAILS_REQUEST action type asynchronously
 */
export function* watchDetailsFetch() {
	yield takeLatest(types.JOKE_DETAILS_REQUEST, detailsSaga);
}
