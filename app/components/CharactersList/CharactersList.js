import React from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'


const CharactersList = (props) => {
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
          leftAvatar={<Avatar src='http://lorempixel.com/128/128/sports/4' />} />
      </List>
    </div>
  )
}

export default CharactersList