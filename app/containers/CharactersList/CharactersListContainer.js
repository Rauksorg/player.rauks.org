import React from 'react'
import { connect } from 'react-redux'

import { CharactersList } from 'components'

class CharactersListContainer extends React.Component {
  
  render() {
    return (
      <CharactersList characterIds={this.props.characterIds}/>
    )
  }
}

const mapStateToProps = ({ characters }) => {
  const { characterIds } = characters
  return {
    characterIds
  }
}

export default connect(mapStateToProps)(CharactersListContainer)

CharactersListContainer.propTypes = {
  characterIds: React.PropTypes.object.isRequired,
}