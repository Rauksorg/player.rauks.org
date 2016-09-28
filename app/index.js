import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import getRoutes from './config/routes'
import * as reducers from 'redux/modules'

import './styles.css'

injectTapEventPlugin()

const store = createStore(combineReducers({...reducers}), compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
))
const App = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        {getRoutes()}
      </MuiThemeProvider>
    </Provider>
  )
}

ReactDOM.render(<App/>, document.getElementById('app'))
