import {put, takeEvery} from 'redux-saga/effects'
import {setList1} from '../actions'

export function* getList1() {
	try {
		const list = [
			{name: 'dfs', id: '123', price: 123},
			{name: 'elemento', id: '456', price: 1002},
		]

		// const list = axios.get('https://www.pinterest.ru/boards/1232/pins')

		yield put(setList1(list))
	} catch (error) {
		// eslint-disable-next-line no-console
		yield put(console.error('алярма', error))
	}
}

export default function* listSaga() {
	yield takeEvery('GET_LIST', getList1)
}
