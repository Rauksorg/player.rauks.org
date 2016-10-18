import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { List, ListItem } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'

export const NewCharacSkill = ({addSkill, removeSkill, skillsList}) => {
  // Chnage skilllist back to array list with only skill id + create a flat detailed skill list and store it in constant
  const skillList = [{ stat: 'Physique', skills: {100: { id: 100, name: 'Athlétisme' }, 101: { id: 101, name: 'Agilité' }, 102: { id: 102, name: 'Survie' }, 103: { id: 103, name: 'Tir réflexe' }, 104: { id: 104, name: 'Corps à corps' }} }, { stat: 'Perception', skills: {200: { id: 200, name: 'Filouterie' }, 201: { id: 201, name: 'Tir visé' }, 202: { id: 202, name: 'Observation' }, 203: { id: 203, name: 'Furtivité' }, 204: { id: 204, name: 'Réflexes' }} }, { stat: 'Mental', skills: {300: { id: 300, name: 'Raisonnement' }, 301: { id: 301, name: 'Premiers secours' }, 302: { id: 302, name: 'Mécanisme' }, 303: { id: 303, name: 'Bricolage' }, 304: { id: 304, name: 'Volonté' }} }, { stat: 'Social', skills: {400: { id: 400, name: 'Persuasion' }, 401: { id: 401, name: 'Travail d\'équipe' }, 402: { id: 402, name: 'Charme' }, 403: { id: 403, name: 'Interroger' }, 404: { id: 404, name: 'Mensonge' }} }]

  const addOrRemoveSkill = (isInputChecked, skillId) => {
    if (isInputChecked) {
      addSkill(skillId)
    } else { removeSkill(skillId) }
  }
  return (
    <div>{}
        <Tabs>
        {skillList.map((id, index) => {
          return (
          <Tab label={id.stat} key={index}>
            <div>
             <List>
              {Object.keys(id.skills).map((skillId, index) => {
                const currentSkill = id.skills[skillId]
                return (
                  <ListItem
                    key={index}
                    leftCheckbox={<Checkbox checked={skillsList.has(skillId)} onCheck={(event, isInputChecked) => addOrRemoveSkill(isInputChecked, skillId)} />}
                    primaryText={currentSkill.name} />
              ) })}
              </List>
            </div>
          </Tab>
        ) })}
        </Tabs>
      </div>
  )
}

export default NewCharacSkill
