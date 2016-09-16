import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'
import { Link } from 'react-router'

import { flexRow, flexColumn } from './styles.css'

const buttonStyle = {
  height: '75px',
  width: '100%'
}

const ActionsBar = (props) => (
  <div >
    <Paper zDepth={1}>
        <div className={flexRow}>
          <div className={flexColumn}>
            <Link to='/game/roll'>
              <FlatButton label='Dés/Relances' style={buttonStyle} />
            </Link>
            <FlatButton label='Billets' style={buttonStyle} />
          </div>
          <div className={flexColumn}>
            <FlatButton label='Munitions' style={buttonStyle} />
            <FlatButton label='Inventaire' style={buttonStyle} />
          </div>
        </div>
      </Paper>
      </div>
)

export default ActionsBar
