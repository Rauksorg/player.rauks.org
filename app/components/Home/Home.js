import React from 'react'
import AppBar from 'material-ui/AppBar'

import { fullHeight } from './styles.css'

const Home = ({children}) => {
  return (
    <div className={fullHeight}>
      <AppBar
        title='Title'
        zDepth = {0}/>
        
      {children}
    </div>
  )
}

export default Home
