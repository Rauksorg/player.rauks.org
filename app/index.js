import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import {base} from 'redux/modules'

import {Home} from 'components'

const store = createStore(base, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Home/>
  </Provider>,
document.getElementById('app'))
