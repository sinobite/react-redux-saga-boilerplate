import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import initStore from './store'
import PageContainer from './containers/PageContainer'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial;
  }
`

const title = 'My Minimal React Webpack Babel Setup Hot like sex'
const store = initStore()

ReactDOM.render(
	<Provider store={store}>
		<GlobalStyle />
		{title}
		<PageContainer />
	</Provider>,
	document.getElementById('app')
)

// eslint-disable-next-line no-undef
module.hot.accept()
