import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import {GooggleIcon} from 'components/Icons'

const Authenticate = ({ handleAuth }) => {
  return (
    <FlatButton
      label={'Connexion'}
      onClick={handleAuth}
      icon={<GooggleIcon/>}/>
  )
}

export default Authenticate

Authenticate.propTypes = {
  handleAuth: React.PropTypes.func.isRequired
}
