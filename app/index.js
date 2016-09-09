import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Routes from './config/Routes'
import { base } from 'redux/modules'

injectTapEventPlugin()

const store = createStore(base, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={store}>
    <MuiThemeProvider>
     <Routes/>
    </MuiThemeProvider>
  </Provider>
  )
}


ReactDOM.render(<App/>, document.getElementById('app'))
