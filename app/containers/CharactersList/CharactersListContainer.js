import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as utilActionCreators from 'redux/modules/utils'

import { CharactersList } from 'components'

class CharactersListContainer extends React.Component {
  componentDidMount () {
    this.props.setTitle(this.props.authedUser.name)
  }
  render () {
    return (
      <CharactersList
        characterIds={this.props.characterIds} />
    )
  }
}

const mapStateToProps = ({ characters, users }) => {
  const { characterIds } = characters
  return {
    characterIds,
    authedUser: users[users.authedId].info // Bug when the page is refreshed
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(utilActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CharactersListContainer)

CharactersListContainer.propTypes = {
  characterIds: React.PropTypes.object.isRequired,
  setTitle: React.PropTypes.func.isRequired,
  authedUser: React.PropTypes.object.isRequired
}
