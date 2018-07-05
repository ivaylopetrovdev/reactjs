import { fork } from 'redux-saga/effects';
import watchSearch, { watchDetailsFetch } from './watcher';

/**
 * @description Register watcher saga(s) and export as a single generator
 * function (startForeman) as root Saga.
 */
export default function* startForman() {
	yield fork(watchSearch);
	yield fork(watchDetailsFetch);
}
