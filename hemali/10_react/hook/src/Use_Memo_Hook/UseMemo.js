import React,{useMemo,useState} from 'react'

// code optimations ma teno use thaye 
const UseMemo = () => {
const[count,setcount]=useState(0)
   const callFunction=useMemo(()=>{
    console.log('i am called');
    return 'hello'
   },[])

  return (
    <>
       {callFunction}
       <h1>{count}</h1>
       <button onClick={()=>{  
           setcount(count+1)
       }}>increment </button>  
    </>
  )
}

export default UseMemo
