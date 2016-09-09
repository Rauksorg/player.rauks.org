import React from 'react'
import { PlayersList } from 'components'
import { ActionsBar } from 'components'
import {TabsNav} from 'components'

const style={
  height:'100%'
}

const PlayerCharacter = () => {
  return (
    <div style={style}>
      <TabsNav/>
      <ActionsBar/>
      <PlayersList/>
    </div>
  )
}

export default PlayerCharacter
