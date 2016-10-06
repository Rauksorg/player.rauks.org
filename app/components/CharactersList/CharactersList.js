import React from 'react'
import { Link } from 'react-router'
import { List, ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Avatar from 'material-ui/Avatar'
import AddIcon from 'material-ui/svg-icons/content/add'

const CharactersList = ({ characterIds }) => {
  return (
    <div>
      <List>
        {Object.keys(characterIds).map((id) => {
          const current = characterIds[id]
          return (
            <ListItem
              key={id}
              primaryText={current.name}
              leftAvatar={<Avatar src={`./assets/${current.avatar}.jpg`} />}
              containerElement={<Link to='/lobby' />} />
        ) })}
        <Divider inset={true} />
        <ListItem 
          primaryText={'Nouveau personage'}
          leftAvatar={<Avatar icon={<AddIcon />} />} 
          containerElement={<Link to='/newcharacter' />} />
      </List>
    </div>
  )
}

export default CharactersList

CharactersList.propTypes = {
  characterIds: React.PropTypes.object.isRequired
}
