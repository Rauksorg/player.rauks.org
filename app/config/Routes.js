import React from 'react'
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'

import {Home, PlayerCharacter} from 'components'

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={Home}>
        <Route path='/roll' component={PlayerCharacter}/>
        <IndexRoute component={PlayerCharacter} />
      </Route>
    </Router>
  )
}

export default Routes