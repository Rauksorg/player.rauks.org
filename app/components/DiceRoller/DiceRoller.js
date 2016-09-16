import React from 'react'
import FlatButton from 'material-ui/FlatButton'
// import { flexRow, flexColumn } from './styles.css'


const style={
  flex: '1 1 auto',
}

const button={
    width:'50%',
    height:'200px'
}


const DiceRoller = (props) => {
  return (
    <div style={style}>
      <div>
        <FlatButton style={button} label='Dés bleu' />
        <FlatButton style={button} label='Dés orange' />
      </div>
      <div>
        <FlatButton style={button} label='Dés rouge' />
        <FlatButton style={button} label='Dés noir' />
      </div>
    </div>
  )
}

export default DiceRoller
