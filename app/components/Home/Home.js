import React, { PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'

const style = {
  display: 'flex',
  flexFlow: 'column',
  height: '100%',
}
const Home = ({children}) => {
  return (
    <div style={style}>
      <AppBar
        title='Title'
        zDepth = {0} />
      {children}
    </div>
  )
}

Home.propTypes = {
  children: PropTypes.object.isRequired
}

export default Home
