import React,{createContext,useState} from 'react'
import Comp2 from './Comp2'
import Comp3 from './Comp3'
 export const A=createContext()
const Comp1 = () => {
   const hook=useState('YES')
  return (
    <>
    <A.Provider value={hook}>
      <Comp2/>
      <Comp3/>
      </A.Provider>
    </>
  )
}

export default Comp1
