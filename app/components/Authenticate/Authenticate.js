import React from 'react'
import { Link } from 'react-router'
import FlatButton from 'material-ui/FlatButton'

const Authenticate = ({handleAuth}) => {
  return(
    <FlatButton 
      label={'Login'} 
      onClick={handleAuth} />
  )
}

export default Authenticate