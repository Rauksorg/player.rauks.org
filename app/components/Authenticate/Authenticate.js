import React from 'react'
import { Link } from 'react-router'
import FlatButton from 'material-ui/FlatButton'

const Authenticate = (props) => {
  return(
    <FlatButton 
      label={'Login'} 
      containerElement={<Link to='/characters' />} />
  )
}

export default Authenticate