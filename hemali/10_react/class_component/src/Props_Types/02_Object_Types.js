import React from 'react'
import propTypes from 'prop-types'

const Object_Types = ({list}) => {
  return (
    <div>
        <h1>{list.name}</h1>
        <h1>{list.age}</h1>
    </div>
  )
}

Object_Types.prototypes={
    list:propTypes.shape({
        name:propTypes.string.isRequired,
        age:propTypes.number.isRequired
    })
}
export default Object_Types
