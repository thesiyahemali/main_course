import React from 'react'
import propsTypes from 'prop-types'

const String_Type = ({fullname}) => {
  return (
    <>
       <h1>{fullname}</h1>
    </>
  )
}

export default String_Type

String_Type.propsTypes={
  fullname:propsTypes.number.isRequired
}