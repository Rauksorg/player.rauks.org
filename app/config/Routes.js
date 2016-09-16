import React from 'react'
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'

import { Home, Board, DiceRoller, Authenticate, CharactersList, Lobby, BlueDice, OrangeDice, RedDice, BlackDice } from 'components'

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={Home}>
        <Route path='/auth' component={Authenticate}/>
        <Route path='/characters' component={CharactersList}/>
        <Route path='/lobby' component={Lobby}/>
        <Route path='/game' component={Board}/>
        <Route path='/game/roll' component={DiceRoller}/>
        <Route path='/game/roll/blue' component={BlueDice}/>
        <Route path='/game/roll/orange' component={OrangeDice}/>
        <Route path='/game/roll/red' component={RedDice}/>
        <Route path='/game/roll/black' component={BlackDice}/>
        <Route path='/game/trade' component={DiceRoller}/>
        <Route path='/game/shoot' component={DiceRoller}/>
        <Route path='/game/inventory' component={DiceRoller}/>
        <Route path='/game/PCsheet' component={DiceRoller}/>
        <IndexRoute component={Authenticate} />
      </Route>
    </Router>
  )
}

export default Routes
