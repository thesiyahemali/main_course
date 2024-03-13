import React,{createContext, useState} from 'react'
import ChildB from './02_ChildB'
import ChildC from './03_ChildC'
 export const acomponetnt=createContext('A')

const ChildA = () => {
    const hook=useState('A')
  return (
    <div>
    <acomponetnt.Provider value={hook}> 
      <ChildB/> 
    </acomponetnt.Provider>
    <h1>A</h1>
    </div>
  )
}

export default ChildA
