import React from 'react'
import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import StarIcon from 'material-ui/svg-icons/action/grade'

const PlayersList = () => {
  return (
    <div>
      <List>
        <ListItem
          primaryText={'MJ'}
          leftAvatar={<Avatar src={'./assets/Cowboy.jpg'} />}
          secondaryText={''}
          rightIcon={<StarIcon />} />
        <Divider inset={true} />
        <ListItem
          primaryText={'Gunther Olsen (moi)'}
          leftAvatar={<Avatar src='./assets/NeanSuit.jpg' />}
          secondaryText={'Bléssé'} />
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

export default PlayersList
