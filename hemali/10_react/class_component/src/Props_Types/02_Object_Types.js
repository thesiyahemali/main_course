import React from 'react'
import PropTypes from 'prop-types'

const Object_Types = ({list}) => {
  return (
    <div>
        <h1>{list.name}</h1>
        <h1>{list.age}</h1>
    </div>
  )
}

Object_Types.propTypes={
    list:PropTypes.shape({
        name:PropTypes.string.isRequired,
        age:PropTypes.string.isRequired
    })
}
export default Object_Types
