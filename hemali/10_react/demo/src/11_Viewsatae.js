import React,{ useState } from 'react'

const Viewsatae = () => {
    const [count, setcount]=useState(0)

    const Increment=()=>{
        setcount(count+1)
    }

    const Decrement=()=>{
        setcount(count-1)
    }
  return (
    <>
    
       <center><h1 >{count}</h1></center>
       <button onClick={()=>{
         Increment()
       }} style={{marginTop:'30px',marginLeft:'44%'}}>Increment</button>

       <button onClick={()=>{
         Decrement()
       }}>Decrement</button>
    </>
  )
}

export default Viewsatae
