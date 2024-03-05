import React,{useContext} from 'react'
import { acomponetnt } from './01_ChildA'

const ChildC = () => {
    
    const [data,update]=useContext(acomponetnt)
    const updatecontext=()=>{
        update('hiiii i am okk') 
    }
   
  return (
    <div>
      hiii i am c
      <h1 style={{color:'green'}}>{data}</h1>
      <button onClick={()=>{
        updatecontext()
      }}>update</button>

    

      <button onClick={()=>{
        update('yes')
      }}>yes</button>

     <button onClick={()=>{
      update('nay')
     }}>nay</button>

        
    </div>
  )
}

export default ChildC
