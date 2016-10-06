import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as newCharactersActionCreators from 'redux/modules/newCharacters'
import {NewCharacters} from 'components'

class NewCharactersContainer extends React.Component {
  
  ethnicityHandleChange = (event, index, value) => this.props.updateEthnicity(value)
  genderHandleChange = (event, value) => this.props.updateGender(value)
  firstNameHandleChange = (event) => this.props.updateFirstName(event.target.value)
  render() {
    return (
      <NewCharacters
        ethnicityHandleChange={this.ethnicityHandleChange} 
        genderHandleChange={this.genderHandleChange}
        firstNameHandleChange={this.firstNameHandleChange}
        ethnicity={this.props.ethnicity} 
        gender={this.props.gender} 
        firstName={this.props.firstName} />
    )
  }
}

const mapStateToProps = ({newCharacters}) => {
  const { lastName, firstName, age, ethnicity, gender } = newCharacters
  return {
    lastName,
    firstName,
    age,
    ethnicity,
    gender
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...newCharactersActionCreators}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCharactersContainer)

NewCharactersContainer.propTypes = {}
