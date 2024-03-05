import React,{useState} from 'react'

const Props =(props) => {
  return (
    <>
        <h1>{props.webname}</h1>
        <h1>{props.myemail}</h1>
        <button onClick={()=>{
          props.incment()
        }}>INcrement</button>
    </>
  )
}

export default Props
