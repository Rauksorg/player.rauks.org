import React from 'react'
import { PlayersList, ActionsBar, TabsNav } from 'components'

const Board = () => {
  return (
    <div>
      <TabsNav/>
      <ActionsBar/>
      <PlayersList/>
    </div>
  )
}

export default Board
