import React,{useContext} from 'react'
import { acomponetnt } from './01_ChildA'

const ChildC = () => {
    
    const [data,update]=useContext(acomponetnt);

    const updatecontext=()=>{
        update('hii i am ok change to child c in "A"'); 
    }
     const yescontext=()=>{
      update('hii i am ok change to child A in "yes"')
     }
     const naycontext=()=>{
      update('hii i am ok change to child A in "nay"')
     }
   
  return (
    <div>
      hiii i am c
      <h1 style={{color:'green'}}>{data}</h1>
      <button onClick={()=>{
        updatecontext()
      }}>update</button>

    <button onClick={yescontext}>yes</button>
    <button onClick={naycontext}>nay</button>

        
    </div>
  )
}

export default ChildC
