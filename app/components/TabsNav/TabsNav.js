import React from 'react'

import { Tabs, Tab } from 'material-ui/Tabs'

import Brushicon from 'material-ui/svg-icons/image/brush'
import AssignmentIcon from 'material-ui/svg-icons/action/assignment'
import AccountBoxIcon from 'material-ui/svg-icons/action/account-box'
import SubjectIcon from 'material-ui/svg-icons/action/subject'

const TabsNav = (props) => (
  <div>
  <Tabs 
    value='a' >
    <Tab 
      value='a'
      icon={<AccountBoxIcon />} >
      <div></div>
    </Tab>
    <Tab
      value='b'
      icon={<SubjectIcon />} >
      <div></div>
    </Tab>
    <Tab
      value='c'
      icon={<Brushicon />} >
      <div></div>
    </Tab>
    <Tab
      value='d'
      icon={<AssignmentIcon />} >
      <div></div>
    </Tab>
  </Tabs>
  </div>
)

export default TabsNav