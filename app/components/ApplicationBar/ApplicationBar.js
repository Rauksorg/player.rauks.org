import React from 'react'
import AppBar from 'material-ui/AppBar'

const ApplicationBar = ({ title, setTitle }) => {
  return (
    <AppBar
      title={title}
      zDepth={0}
      onLeftIconButtonTouchTap={setTitle.bind(this,'hey')} />
  )
}

ApplicationBar.propTypes = { 
  title: React.PropTypes.string.isRequired,
  setTitle: React.PropTypes.func.isRequired
}

export default ApplicationBar
