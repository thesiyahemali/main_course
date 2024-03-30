import React,{useRef} from 'react'
import Forwarddata from './02_Forwarddata'
const Forward = () => {
    const input=useRef(null);
    const printdata=()=>{
        input.current.focus()
        input.current.value=2000
        
    }
  return (
    <>
      <button onClick={()=>{
        printdata()
      }}>click</button>
      <Forwarddata ref={input}/>
    </>
  )
}

export default Forward