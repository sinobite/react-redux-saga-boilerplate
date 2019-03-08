import {fork, all} from 'redux-saga/effects'
import listSaga from './list'


export default function* rootSaga() {
	yield all([
		fork(listSaga),
	])
}