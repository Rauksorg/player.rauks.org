import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as userActionCreators from 'redux/modules/users'
import * as utilActionCreators from 'redux/modules/utils'

import { Authenticate } from 'components'

class AuthenticateContainer extends React.Component {

  handleAuth = (e) => {
    e.preventDefault()
    this.props.fetchAndHandleAuthedUser()
      .then(() => this.props.navigateTo('/characters'))
  }
  render () {
    return (
      <Authenticate
        handleAuth={this.handleAuth}
        isFetching={this.props.isFetching}
        error={this.props.error} />
    )
  }
}

const mapStateToProps = ({ users }) => {
  const { isFetching, error } = users
  return {
    isFetching,
    error
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ ...userActionCreators, ...utilActionCreators }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateContainer)

AuthenticateContainer.propTypes = {
  fetchAndHandleAuthedUser: React.PropTypes.func.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  error: React.PropTypes.string.isRequired,
  navigateTo: React.PropTypes.func.isRequired
}
