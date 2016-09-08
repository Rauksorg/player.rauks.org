import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import Paper from 'material-ui/Paper'

import { flexRow, flexColumn, buttonGrid, fullHeight, buttonHeight } from './styles.css'


const buttonStyle = {
  height: '100%',
  width: '100%'
}

const style100 = {
  height:'100%',
  
}

const ActionsBar = (props) => (
  <div className={buttonGrid}>
    <Paper zDepth={1} style={style100}>
        <div className={flexRow}>
          <div className={flexColumn}>
            <div className={buttonHeight}>
              <FlatButton label='Dés/Relances' style={buttonStyle} />
            </div>
            <div className={buttonHeight}>
              <FlatButton label='Billets' style={buttonStyle} />
            </div>
          </div>
          <div className={flexColumn}>
            <div className={buttonHeight}>
              <FlatButton label='Munitions' style={buttonStyle} />
            </div>
            <div className={buttonHeight}>
              <FlatButton label='Inventaire' style={buttonStyle} />
            </div>
          </div>
        </div>
      </Paper>
      </div>
)

export default ActionsBar