import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'


function initStore(initState = {}) {
	let enchancer
	const sagaMiddleware = createSagaMiddleware()

	// eslint-disable-next-line no-undef
	if (process.env.NODE_ENV === 'production') {
		enchancer = compose(applyMiddleware(sagaMiddleware))
	} else {
		enchancer = compose(
			applyMiddleware(sagaMiddleware),
			window.devToolsExtension ? window.devToolsExtension() : (f) => f
		)
	}

	const store = createStore(rootReducer, initState, enchancer)
	sagaMiddleware.run(rootSaga)

	return store
}

export default initStore