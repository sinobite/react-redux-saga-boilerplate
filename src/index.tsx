import 'regenerator-runtime/runtime'
// eslint-disable-next-line no-unused-vars
import * as React from "react";
import * as ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import initStore from './store'
import PageContainer from './containers/PageContainer'
import { Hello } from './components/Hello'

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
		<Hello compiler="TypeScript" framework="React" />
		<PageContainer />
	</Provider>,
	document.getElementById('app')
)

// eslint-disable-next-line no-undef
// @ts-ignore
module.hot.accept()
