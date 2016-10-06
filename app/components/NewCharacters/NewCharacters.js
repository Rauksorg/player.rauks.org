import React from 'react'
import TextField from 'material-ui/TextField'
import Slider from 'material-ui/Slider'

const carac = ['Physique', 'Perception', 'Mental', 'Charisme', 'Relance', 'Compétence']

const styles = {
  root: {
    display: 'flex',
    height: 124,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  div: {
    display: 'flex',
    flexDirection: 'column',
  }
}

const NewCharacters = () => {
  return (
    <div>
      <TextField
        hintText='Entrez le nom de votre personnage'
        floatingLabelText='Nom' 
        fullWidth={true} />
      <br/>
      <TextField
        hintText='Entrez le Prénom de votre personnage'
        floatingLabelText='Prénom'
        fullWidth={true}/>
      <br/>
      <TextField
        hintText='Entrez l&apos;age de votre personnage'
        floatingLabelText='Age' />
      <br/>
      <br/>
      <div style={styles.root}>
        {carac.map((id, index) => {
          return(
            <div style={styles.div} key={index}>
              <div style={{display:'flex'}}>{id}</div>
              <div style={{display:'flex',justifyContent:'center'}}>
                <Slider
                  style={{height: 100}}
                  axis='y'
                  min={1}
                  max={3}
                  step={1}
                  defaultValue={2}/>
                </div>
              </div>
        )})}
      </div>
    </div>
  )
}
export default NewCharacters

NewCharacters.propTypes = {}