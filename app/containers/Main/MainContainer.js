import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { formatUserInfo } from 'helpers/utils'
import { firebaseAuth } from 'config/constants'

import * as utilActionCreators from 'redux/modules/utils'
import * as userActionCreators from 'redux/modules/users'

import { ApplicationBar } from 'components'
import { fullHeightFlex } from './styles.css'

class MainContainer extends React.Component {
  componentDidMount() {
    console.warn('did mount')
    firebaseAuth().onAuthStateChanged((user) => {
      console.warn('firebase auth')
      if (user) {
        console.warn('auth')
        const userData = user.providerData[0]
        const userInfo = formatUserInfo(userData.displayName, userData.photoURL, user.uid)
        this.props.authUser(user.uid)
        this.props.fetchingUserSuccess(user.uid, userInfo, Date.now())
      } else {
        console.warn('not auth')
        this.props.removeFetchingUser()
      }
    })
  }

  render() {
    return (
      <div className={fullHeightFlex}>
        <ApplicationBar 
          title={this.props.title}
          setTitle={this.props.setTitle} />
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = ({ utils, users }) => {
  const { title } = utils
  const { isAuthed, isFetching } = users
  return {
    title,
    isAuthed,
    isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({...utilActionCreators, ...userActionCreators }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer)

MainContainer.propTypes = {
  children: React.PropTypes.object.isRequired,
  title: React.PropTypes.string.isRequired,
  setTitle: React.PropTypes.func.isRequired,
  authUser: React.PropTypes.func.isRequired,
  fetchingUserSuccess: React.PropTypes.func.isRequired,
  isAuthed: React.PropTypes.bool.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
}