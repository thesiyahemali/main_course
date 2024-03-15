import React,{useEffect,useState} from 'react'

const Useeffect_use = () => {
    const [count,setcount]=useState(0)
    const [count2,setcountt]=useState(0)
    useEffect(()=>{
        console.log('hello');
        if(count>4){
            document.body.style.backgroundColor='yellow'
        }
    },[count])

    useEffect(()=>{
        console.log('hello');
        if(count2>10){
            document.body.style.backgroundColor='pink'
        }
    },[count2])
  return (

    <>
      <button onClick={()=>{
        setcount(count+1)
      }}>Increment</button>

      <button onClick={()=>{
         setcount(count-1)
      }}>Decrement</button>
      <h1>{count}</h1>

      <button onClick={()=>{
        setcountt(count2+1)
      }}>Increment</button>

      <button onClick={()=>{
        setcountt(count2-1)
      }}>Decrement</button>

      <h1>{count2}</h1>
    </>
  )
}

export default Useeffect_use
