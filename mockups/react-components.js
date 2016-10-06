// ES6 Classes
import React from 'react'

export default class Container extends React.Component {
  render() {
    return (
      <div>{'Container'}</div>
    )
  }
}
Container.propTypes = {}



// Stateless Functions
import React from 'react'

const Component = (props) => {
  return (
    <div>{'Component'}</div>
  )
}
export default Component

Component.propTypes = {}