import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import {List, ListItem} from 'material-ui/List'
import Checkbox from 'material-ui/Checkbox'


const NewCharacSkill = () => {
const carac = ['Ph', 'Pe', 'Me', 'Ch', 'Re', 'Co']

const physique = ['Athlétisme','Agilité','Survie','Tir réflexe','Corps à corps']
const perception = ['Filouterie','Tir visé','Observation','Furtivité','Réflexes']
const intelligence = ['Raisonnement', 'Premiers secours', 'Mécanisme','Bricolage','Volonté']
const charisme = ['Persuasion','Travail d\'équipe','Charme','Interroger','Mensonge']
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

export default NewCharacSkill