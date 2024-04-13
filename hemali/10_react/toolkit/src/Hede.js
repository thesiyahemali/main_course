import React from 'react'
import {  useSelector } from 'react-redux'

const Hede = () => {
    const state=useSelector((result)=>{
        console.log(result);
        return result.addedcart
    })
  return (
    <div>
     <h1>{state}</h1>
    </div>
  )
}

export default Hede