import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { List, ListItem } from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'

const skillList = [{ stat: 'Physique', skill: {100: { id: 100, name: 'Athlétisme' }, 101: { id: 101, name: 'Agilité' }, 102: { id: 102, name: 'Survie' }, 103: { id: 103, name: 'Tir réflexe' }, 104: { id: 104, name: 'Corps à corps' }} }, { stat: 'Perception', skill: {200: { id: 200, name: 'Filouterie' }, 201: { id: 201, name: 'Tir visé' }, 202: { id: 202, name: 'Observation' }, 203: { id: 203, name: 'Furtivité' }, 204: { id: 204, name: 'Réflexes' }} }, { stat: 'Mental', skill: {300: { id: 300, name: 'Raisonnement' }, 301: { id: 301, name: 'Premiers secours' }, 302: { id: 302, name: 'Mécanisme' }, 303: { id: 303, name: 'Bricolage' }, 304: { id: 304, name: 'Volonté' }} }, { stat: 'Social', skill: {400: { id: 400, name: 'Persuasion' }, 401: { id: 401, name: 'Travail d\'équipe' }, 402: { id: 402, name: 'Charme' }, 403: { id: 403, name: 'Interroger' }, 404: { id: 404, name: 'Mensonge' }} }]

export const NewCharacSkill = () => {
  return (
    <div>{}
        <Tabs>
        {skillList.map((id, index) => {
          return (
          <Tab label={id.stat} key={index}>
            <div>
             <List>
              {Object.keys(id.skill).map((skillId, index) => {
                const currentSkill = id.skill[skillId]
                return (
                  <ListItem
                    key={index}
                    leftCheckbox={<Checkbox onCheck={(event, isInputChecked) => console.warn(isInputChecked, currentSkill.name, skillId)}/>}
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
