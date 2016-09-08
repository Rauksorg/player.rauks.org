import React from 'react'
import AppBar from 'material-ui/AppBar'
import { PlayersList } from 'components'
import { ActionsBar } from 'components'
import { Tabs, Tab } from 'material-ui/Tabs'
import Wallpapericon from 'material-ui/svg-icons/device/wallpaper'
import AssignmentIcon from 'material-ui/svg-icons/action/assignment'
import AccountBoxIcon from 'material-ui/svg-icons/action/account-box'


import { fullHeight } from './styles.css'

const Home = () => {
  return (
    <div className={fullHeight}>
      <AppBar
        title='Title'
        iconClassNameRight='muidocs-icon-navigation-expand-more'
        zDepth = {0}/>
       <Tabs 
        value='a' >
        <Tab 
          value='a'
          icon={<AccountBoxIcon />} >
          <div></div>
        </Tab>
        <Tab
          value='b'
          icon={<Wallpapericon />} >
          <div></div>
        </Tab>
        <Tab
          value='b'
          icon={<AssignmentIcon />} >
          <div></div>
        </Tab>
      </Tabs>
      <ActionsBar/>
      <PlayersList/>
    </div>
  )
}

export default Home
