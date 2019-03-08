import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import initStore from './store'
import PageContainer from './containers/PageContainer'
import './styles/style.scss'

const title = 'My Minimal React Webpack Babel Setup Hot like sex'
const store = initStore()

ReactDOM.render(
	<Provider store={store}>
		{title}
		<PageContainer />
	</Provider>,
	document.getElementById('app')
)

// eslint-disable-next-line no-undef
module.hot.accept()