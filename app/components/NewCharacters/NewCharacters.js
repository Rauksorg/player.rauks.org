// Ready to add a stepper

import React from 'react'
import TextField from 'material-ui/TextField'
import Slider from 'material-ui/Slider'
import {Tabs, Tab} from 'material-ui/Tabs'
import {List, ListItem} from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const carac = ['Physique', 'Perception', 'Mental', 'Charisme', 'Relance', 'Compétence']

const physique = ['Athlétisme','Agilité','Survie','Tir réflexe','Corps à corps']
const perception = ['Filouterie','Tir visé','Observation','Furtivité','Réflexes']
const intelligence = ['Raisonnement', 'Premiers secours', 'Mécanisme','Bricolage','Volonté']
const charisme = ['Persuasion','Travail d\'équipe','Charme','Interroger','Mensonge']

const ethnie = ['Impérial','Nordique','Bassier','Orque Gris','Orque Clair','Orque Noir']

const items = ethnie.map((id, index) => {
  return (
    [<MenuItem key={index} value={index} primaryText={id} />]
  )
})

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

const NewCharacters = ({ethnicityHandleChange, genderHandleChange, firstNameHandleChange, ethnicity, gender, firstName}) => {
  return (
    <div>
      <SelectField
        value={ethnicity}
        onChange={ethnicityHandleChange}
        floatingLabelText='Ethnie'
        hintText='Choisissez l&apos;ethnie votre personnage' >
        {items}
      </SelectField>
      <br/>
      <br/>
      <RadioButtonGroup
        name='gender'
        style={{display: 'flex', flexDirection: 'row'}}
        onChange={genderHandleChange} 
        valueSelected={gender} >
        <RadioButton style={{display: 'flex', width:'110px'}}
          value='female'
          label='Mme.' />
        <RadioButton style={{display: 'flex', width:'110px'}}
          value='male'
          label='M.' />
      </RadioButtonGroup>
      <TextField
        hintText='Entrez le nom de votre personnage'
        floatingLabelText='Nom' 
        fullWidth={true} />
      <br/>
      <TextField
        hintText='Entrez le Prénom de votre personnage'
        floatingLabelText='Prénom'
        fullWidth={true}
        onChange={firstNameHandleChange}
        value={firstName} />
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
              <div style={{display:'flex', justifyContent:'center'}}>
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
      <br/>
      <br/>
      <div>
        <Tabs>
          <Tab label={carac[0]} >
            <div>
             <List>
              {physique.map((id, index) => {
                return(
                  <ListItem
                    key={index}
                    leftCheckbox={<Checkbox />}
                    primaryText={id} />
              )})}
              </List>
            </div>
          </Tab>
          <Tab label={carac[1]}>
            <div>
             <List>
              {perception.map((id, index) => {
                return(
                  <ListItem
                    key={index}
                    leftCheckbox={<Checkbox />}
                    primaryText={id} />
              )})}
              </List>
            </div>
          </Tab>
          <Tab label={carac[2]}>
            <div>
             <List>
                {intelligence.map((id, index) => {
                  return(
                    <ListItem
                      key={index}
                      leftCheckbox={<Checkbox />}
                      primaryText={id} />
                )})}
              </List>
            </div>
          </Tab>
          <Tab label={carac[3]}>
            <div>
              <List>
                {charisme.map((id, index) => {
                  return(
                    <ListItem
                      key={index}
                      leftCheckbox={<Checkbox />}
                      primaryText={id} />
                )})}
              </List>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}
export default NewCharacters

NewCharacters.propTypes = {}