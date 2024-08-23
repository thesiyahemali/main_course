import React from 'react'

const User = (props) => {

   const data="thesiya hemali"
  return (
    <>
    <center>
    <h3>User Name :</h3>
    <button onClick={()=>props.alert(data)}>Click Me</button>
    </center>
    </>
  )
}

export default User