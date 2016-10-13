import React from 'react'
import Slider from 'material-ui/Slider'
import LightbulbOutlineIcon from 'material-ui/svg-icons/action/lightbulb-outline'
import HearingIcon from 'material-ui/svg-icons/av/hearing'
import BookIcon from 'material-ui/svg-icons/action/book'
import SupervisorAccountIcon from 'material-ui/svg-icons/action/supervisor-account'
import DirectionsRunIcon from 'material-ui/svg-icons/maps/directions-run'
import CasinoIcon from 'material-ui/svg-icons/places/casino'

const NewCharacStats = ({ updatePhysical, updatePerception, updateMental, updateSocial, updateSkill, updateReroll, physical, perception, mental, social, skill, reroll }) => {
  const statsList = [{ icon: <DirectionsRunIcon/>, value: physical, onChange: (event, value) => updatePhysical(value) }, { icon: <HearingIcon/>, value: perception, onChange: (event, value) => updatePerception(value) }, { icon: <LightbulbOutlineIcon/>, value: mental, onChange: (event, value) => updateMental(value) }, { icon: <SupervisorAccountIcon/>, value: social, onChange: (event, value) => updateSocial(value) }, { icon: <CasinoIcon/>, value: reroll, onChange: (event, value) => updateReroll(value) }, { icon: <BookIcon/>, value: skill, onChange: (event, value) => updateSkill(value) }]
  const styles = {
    root: {
      display: 'flex',
      height: 124,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    div: {
      display: 'flex',
      flexDirection: 'column'
    }
  }
  return (
    <div style={styles.root}>
        {statsList.map((id, index) => {
          return (
            <div style={styles.div} key={index}>
              <div style={{display: 'flex'}}>{id.icon}</div>
              <div style={{display: 'flex', justifyContent: 'center'}}>
                <Slider
                  value={id.value}
                  onChange={id.onChange}
                  style={{height: 100}}
                  axis='y'
                  min={1}
                  max={3}
                  step={1} />
                </div>
              </div>
        ) })}
      </div>
  )
}

export default NewCharacStats
