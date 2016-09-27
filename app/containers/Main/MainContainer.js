import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as baseActionCreators from 'redux/modules/utils'
import { ApplicationBar } from 'components'
import { fullHeightFlex } from './styles.css'

class MainContainer extends React.Component {
  render() {
    return (
      <div className={fullHeightFlex}>
        <ApplicationBar title={this.props.title} setTitle={this.props.setTitle}/>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = ({ utils }) => {
  const { title } = utils
  return {
    title
  }
}

export default connect(
  mapStateToProps,
  (dispatch) => bindActionCreators(baseActionCreators, dispatch)
)(MainContainer)

MainContainer.propTypes = {
  children: React.PropTypes.object.isRequired,
  title: React.PropTypes.string.isRequired,
  setTitle: React.PropTypes.func.isRequired
}