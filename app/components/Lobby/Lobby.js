import React from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'
import { Tabs, Tab } from 'material-ui/Tabs'

const Lobby = (props) => {
  return (
    <div>
      <Tabs
        value='a' >
      <Tab
        value='a'
        label='Actives' >
        <List>
          <ListItem
            primaryText={'Partie 1'}
            containerElement={<Link to='/game' />} />
          <ListItem
            primaryText={'Partie 2'} />
          <ListItem
            primaryText={'Partie 3'} />
        </List>

      </Tab>
      <Tab
        value='b'
        label='En pause' >
        <div />
      </Tab>
      <Tab
        value='c'
        label='Historique' >
        <div />
      </Tab>
    </Tabs>
  </div>
  )
}

export default Lobby