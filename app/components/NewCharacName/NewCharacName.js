import React from 'react'
import TextField from 'material-ui/TextField'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import {MaleIcon, MaleCheckedIcon, FemaleIcon, FemaleCheckedIcon} from 'components/Icons/Icons'

const NewCharacName = ({ ethnicityHandleChange, genderHandleChange, nameHandleChange, ageHandleChange, ethnicity, gender, name, age }) => {
  const ethnie = ['Impérial', 'Nordique', 'Bassier', 'Orque Gris', 'Orque Clair', 'Orque Noir']

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
      </div>
  )
}

export default NewCharacName