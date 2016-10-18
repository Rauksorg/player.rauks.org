// bug : very slow to update names because of all redraw
// Spilt into 3 container

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import FlatButton from 'material-ui/FlatButton'

import * as newCharactersActionCreators from 'redux/modules/newCharacters'
import {NewCharacInfo, NewCharacSkill, NewCharacStats} from 'components'

class NewCharactersContainer extends React.Component {
  componentDidMount () {
    this.props.resetCharacter()
  }

// Need to change to directly pass the funcion to the component like for NewCharacStat
  ethnicityHandleChange = (event, index, value) => this.props.updateEthnicity(value)
  genderHandleChange = (event, value) => this.props.updateGender(value)
  nameHandleChange = (event) => this.props.updateName(event.target.value)
  ageHandleChange = (event) => this.props.updateAge(event.target.value)

  render () {
    return (
      <div>
        <NewCharacInfo
          ethnicityHandleChange={this.ethnicityHandleChange}
          genderHandleChange={this.genderHandleChange}
          nameHandleChange={this.nameHandleChange}
          ageHandleChange={this.ageHandleChange}
          ethnicity={this.props.ethnicity}
          gender={this.props.gender}
          name={this.props.name}
          age={this.props.age} />
        <br/>
        <br/>
        <NewCharacStats
          updatePhysical={this.props.updatePhysical}
          updatePerception={this.props.updatePerception}
          updateMental={this.props.updateMental}
          updateSocial={this.props.updateSocial}
          updateSkill={this.props.updateSkill}
          updateReroll={this.props.updateReroll}
          physical={this.props.physical}
          perception={this.props.perception}
          mental={this.props.mental}
          social={this.props.social}
          skill={this.props.skill}
          reroll={this.props.reroll} />
        <br/>
        <br/>
        <NewCharacSkill
          addSkill={this.props.addSkill}
          removeSkill={this.props.removeSkill}
          skillsList={this.props.skillsList}
          newCharacterFanout={this.props.newCharacterFanout}/>
        <FlatButton label='Sauver' onClick={() => this.props.newCharacterFanout(this.props.newCharacters).then(() => browserHistory.push('/characters'))} />
      </div>
    )
  }
}

const mapStateToProps = ({ newCharacters, users }) => {
  return {
    name: newCharacters.get('name'),
    age: newCharacters.get('age'),
    ethnicity: newCharacters.get('ethnicity'),
    gender: newCharacters.get('gender'),
    physical: newCharacters.getIn(['stats', 'physical']),
    perception: newCharacters.getIn(['stats', 'perception']),
    mental: newCharacters.getIn(['stats', 'mental']),
    social: newCharacters.getIn(['stats', 'social']),
    reroll: newCharacters.getIn(['stats', 'reroll']),
    skill: newCharacters.getIn(['stats', 'skill']),
    skillsList: newCharacters.get('skills'),
    newCharacters: newCharacters.toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...newCharactersActionCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCharactersContainer)

NewCharactersContainer.propTypes = {}
