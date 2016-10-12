// Ready to add a stepper

import React from 'react'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import Slider from 'material-ui/Slider'
import {Tabs, Tab} from 'material-ui/Tabs'
import {List, ListItem} from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import LightbulbOutlineIcon from 'material-ui/svg-icons/action/lightbulb-outline'
import HearingIcon from 'material-ui/svg-icons/av/hearing'
import BookIcon from 'material-ui/svg-icons/action/book'
import SupervisorAccountIcon from 'material-ui/svg-icons/action/supervisor-account'
import DirectionsRunIcon from 'material-ui/svg-icons/maps/directions-run'
import StarIcon from 'material-ui/svg-icons/toggle/star'

const iconsList = [<DirectionsRunIcon/>, <HearingIcon/>, <LightbulbOutlineIcon/>, <SupervisorAccountIcon/>, <StarIcon/>, <BookIcon/> ]

import {MaleIcon, MaleCheckedIcon, FemaleIcon, FemaleCheckedIcon} from 'components/Icons/Icons'

const carac = ['Ph', 'Pe', 'Me', 'Ch', 'Re', 'Co']

const physique = ['Athlétisme','Agilité','Survie','Tir réflexe','Corps à corps']
const perception = ['Filouterie','Tir visé','Observation','Furtivité','Réflexes']
const intelligence = ['Raisonnement', 'Premiers secours', 'Mécanisme','Bricolage','Volonté']
const charisme = ['Persuasion','Travail d\'équipe','Charme','Interroger','Mensonge']

const ethnie = ['Impérial','Nordique','Bassier','Orque Gris','Orque Clair','Orque Noir']

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


const Name = ({ethnicityHandleChange, genderHandleChange, nameHandleChange, ageHandleChange, ethnicity, gender, name, age}) => {
  return(
    <div>
    <SelectField
      value={ethnicity}
      onChange={ethnicityHandleChange}
      floatingLabelText='Ethnie'
      hintText='Choisissez l&apos;ethnie votre personnage' >
      {ethnie.map((id, index) => {
        return (
          [<MenuItem key={index} value={index} primaryText={id} />]
            )})}
    </SelectField>
    <br/>
    <br/>
    <RadioButtonGroup
      name='gender'
      style={{display: 'flex', flexDirection: 'row'}}
      onChange={genderHandleChange} 
      valueSelected={gender} >
        <RadioButton style={{display: 'flex', width:'75px'}}
          checkedIcon={<FemaleCheckedIcon />}
          uncheckedIcon={<FemaleIcon />}
          value='female'
          label='F' />
        <RadioButton style={{display: 'flex', width:'75px'}}
          checkedIcon={<MaleCheckedIcon />}
          uncheckedIcon={<MaleIcon />}
          value='male'
          label='M' />
      </RadioButtonGroup>
      <TextField
        hintText='Entrez le nom de votre personnage'
        floatingLabelText='Nom' 
        fullWidth={true}
        onChange={nameHandleChange}
        value={name} />
      <br/>
      <TextField
        hintText='Entrez l&apos;age de votre personnage'
        floatingLabelText='Age' 
        onChange={ageHandleChange}
        value={age} />
      </div>
    )
}

const Caracs = ({handlePhysicalSlider, physical}) => {
  return(
     <div style={styles.root}>
        {iconsList.map((id, index) => {
          return(
            <div style={styles.div} key={index}>
              <div style={{display:'flex'}}>{id}</div>
              <div style={{display:'flex', justifyContent:'center'}}>
                <Slider
                  value={physical}
                  onChange={handlePhysicalSlider}
                  style={{height: 100}}
                  axis='y'
                  min={1}
                  max={3}
                  step={1} />
                </div>
              </div>
        )})}
      </div>
    )
}

const Skills = () => {
  return(
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
    )
}

const NewCharacters = ({ethnicityHandleChange, genderHandleChange, nameHandleChange, ageHandleChange, ethnicity, gender, name, age, handlePhysicalSlider, physical}) => {
  return (
    <div>
      <Name 
        ethnicityHandleChange={ethnicityHandleChange}
        genderHandleChange={genderHandleChange}
        nameHandleChange={nameHandleChange}
        ageHandleChange={ageHandleChange}
        ethnicity={ethnicity}
        gender={gender}
        name={name}
        age={age} />
      <br/>
      <br/>
      <Caracs 
        handlePhysicalSlider={handlePhysicalSlider}
        physical={physical} />
      <br/>
      <br/>
     <Skills />
    </div>
  )
}
export default NewCharacters

NewCharacters.propTypes = {}