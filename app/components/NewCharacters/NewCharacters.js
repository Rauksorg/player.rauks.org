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

const carac = ['Ph', 'Pe', 'Me', 'Ch', 'Re', 'Co']

const physique = ['Athlétisme','Agilité','Survie','Tir réflexe','Corps à corps']
const perception = ['Filouterie','Tir visé','Observation','Furtivité','Réflexes']
const intelligence = ['Raisonnement', 'Premiers secours', 'Mécanisme','Bricolage','Volonté']
const charisme = ['Persuasion','Travail d\'équipe','Charme','Interroger','Mensonge']

const ethnie = ['Impérial','Nordique','Bassier','Orque Gris','Orque Clair','Orque Noir']


import SvgIcon from 'material-ui/SvgIcon'

const MaleIcon = (props) => (
  <SvgIcon {...props}>
    <path d='M17.654,2l-0.828,1.449h2.069l-3.828,3.829C11.633,4.711,6.8,5.234,3.994,8.475
	    c-2.806,3.241-2.631,8.099,0.4,11.13s7.89,3.206,11.131,0.4c3.24-2.807,3.764-7.639,1.197-11.073l3.828-3.829v2.07L22,6.346V2
	    H17.654z M10.204,7.898c3.257,0,5.897,2.641,5.897,5.898c0,3.257-2.641,5.897-5.897,5.897c-3.257,0-5.898-2.641-5.898-5.897
	    C4.306,10.539,6.947,7.898,10.204,7.898L10.204,7.898z'/>
	</SvgIcon>
)

const MaleCheckedIcon = (props) => (
  <SvgIcon {...props}>
    <path d='M17.654,2l-0.828,1.449h2.069l-3.828,3.829C11.633,4.711,6.8,5.234,3.994,8.475
	    c-2.806,3.241-2.631,8.099,0.4,11.13s7.89,3.206,11.131,0.4c3.24-2.807,3.764-7.639,1.197-11.073l3.828-3.829v2.07L22,6.346V2
	    H17.654z M10.204,7.898c3.257,0,5.897,2.641,5.897,5.898c0,3.257-2.641,5.897-5.897,5.897c-3.257,0-5.898-2.641-5.898-5.897
	    C4.306,10.539,6.947,7.898,10.204,7.898L10.204,7.898z'/>
	  <circle cx='10.2' cy='13.75' r='3.5'/>
	</SvgIcon>
)

const FemaleIcon = (props) => (
  <SvgIcon {...props}>
	<path d='M12,15.078c-3.667,0-6.65-2.933-6.65-6.539C5.35,4.934,8.333,2,12,2c3.667,0,6.65,2.934,6.65,6.539
		C18.65,12.145,15.667,15.078,12,15.078z M12,3.727c-2.714,0-4.923,2.159-4.923,4.812c0,2.654,2.208,4.813,4.923,4.813
		c2.715,0,4.924-2.159,4.924-4.813C16.924,5.886,14.715,3.727,12,3.727z'/>
	<path d='M10.824,14.85v2.326h-2.66v2.11h2.66V22h2.353v-2.714h2.558v-2.11h-2.558V14.85H10.824z'/>
		</SvgIcon>
)

const FemaleCheckedIcon = (props) => (
  <SvgIcon {...props}>
    <path d='M12,15.078c-3.667,0-6.65-2.933-6.65-6.539C5.35,4.934,8.333,2,12,2c3.667,0,6.65,2.934,6.65,6.539
			C18.65,12.145,15.667,15.078,12,15.078z M12,3.727c-2.714,0-4.923,2.159-4.923,4.812c0,2.654,2.208,4.813,4.923,4.813
			c2.715,0,4.924-2.159,4.924-4.813C16.924,5.886,14.715,3.727,12,3.727z'/>
		<path d='M10.824,14.85v2.326h-2.66v2.11h2.66V22h2.353v-2.714h2.558v-2.11h-2.558V14.85H10.824z'/>
		<circle cx='12' cy='8.55' r='2.5'/>
	</SvgIcon>
)

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

const NewCharacters = ({ethnicityHandleChange, genderHandleChange, nameHandleChange, ageHandleChange, ethnicity, gender, name, age}) => {
  return (
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