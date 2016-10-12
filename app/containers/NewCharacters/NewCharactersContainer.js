//bug : very slow to update names because of all redraw

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as newCharactersActionCreators from 'redux/modules/newCharacters'
import {NewCharacters} from 'components'

class NewCharactersContainer extends React.Component {
  
  ethnicityHandleChange = (event, index, value) => this.props.updateEthnicity(value)
  genderHandleChange = (event, value) => this.props.updateGender(value)
  nameHandleChange = (event) => this.props.updateName(event.target.value)
  ageHandleChange = (event) => this.props.updateAge(event.target.value)
  handlePhysicalSlider = (event, value) => this.props.updatePhysical(value)
  render() {
    return (
      <NewCharacters
        ethnicityHandleChange={this.ethnicityHandleChange} 
        genderHandleChange={this.genderHandleChange}
        nameHandleChange={this.nameHandleChange}
        ageHandleChange={this.ageHandleChange}
        ethnicity={this.props.ethnicity} 
        gender={this.props.gender} 
        name={this.props.name} 
        age={this.props.age}
        physical={this.props.physical}
        handlePhysicalSlider={this.handlePhysicalSlider} />
    )
  }
}

const mapStateToProps = ({ newCharacters }) => {
  return {
    name: newCharacters.get('name'),
    age: newCharacters.get('age'),
    ethnicity: newCharacters.get('ethnicity'),
    gender: newCharacters.get('gender'),
    
    physical: newCharacters.getIn(['stats','physical']),
    
    perception: newCharacters.getIn(['stats','perception']),
    mental: newCharacters.getIn(['stats','mental']),
    social: newCharacters.getIn(['stats','social']),
    reroll: newCharacters.getIn(['stats','reroll']),
    skill: newCharacters.getIn(['stats','skill']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...newCharactersActionCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCharactersContainer)

NewCharactersContainer.propTypes = {}
