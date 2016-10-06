import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import { Board, DiceRoller, Lobby, BlueDice, OrangeDice, RedDice, BlackDice } from 'components'
import { MainContainer, CharactersListContainer, AuthenticateContainer, NewCharactersContainer } from 'containers'

const getRoutes = (history) => {
  return (
    <Router history={history}>
      <Route path='/' component={MainContainer}>
        <Route path='/auth' component={AuthenticateContainer}/>
        <Route path='/characters' component={CharactersListContainer}/>
        <Route path='/newcharacter' component={NewCharactersContainer}/>
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
        <IndexRoute component={AuthenticateContainer} />
      </Route>
    </Router>
  )
}

export default getRoutes
