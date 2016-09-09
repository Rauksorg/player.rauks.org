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
          leftAvatar={<Avatar src='http://lorempixel.com/128/128/sports/2' />} 
          secondaryText={''} 
          rightIcon={<StarIcon />} />
        <Divider inset={true} />
        <ListItem
          primaryText={'Gunther Olsen (moi)'}
          leftAvatar={<Avatar src='./assets/NeanSuit.jpg' />} 
          secondaryText={'Bléssé'} />
        <ListItem
          primaryText={'Arakel Sarif'}
          leftAvatar={<Avatar src='http://lorempixel.com/128/128/sports/3' />} />
        <ListItem
          primaryText={'Klaus Müller'}
          leftAvatar={<Avatar src='http://lorempixel.com/128/128/sports/4' />} />
      </List>
    </div>
  )
}

export default PlayersList