import React from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

const CharactersList = ({characterIds}) => {
  return (
    <div>
      <List>
        <ListItem
          primaryText={'Gunther Olsen'}
          leftAvatar={<Avatar src='./assets/NeanSuit.jpg' />}
          containerElement={<Link to='/lobby' />} />
        <ListItem
          primaryText={'Arakel Sarif'}
          leftAvatar={<Avatar src='./assets/Cowboy.jpg' />} />
        <ListItem
          primaryText={'Klaus Müller'}
          leftAvatar={<Avatar src='./assets/Cowboy.jpg' />} />
      </List>
    </div>
  )
}

export default CharactersList

CharactersList.propTypes = { 
  characterIds: React.PropTypes.object.isRequired,
}