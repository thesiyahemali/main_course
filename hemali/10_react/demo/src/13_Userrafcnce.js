import React ,{useRef, useState} from 'react'

const Userrafcnce = () => {
    const input=useRef(null)
    const [text,setText]=useState(null)
    const getData=()=>{
        console.log(input.current.value);
        setText(input.current.value)
        input.current.value=''
        input.current.focus()
    }
  return (
    <>
      <center style={{marginTop:'50px'}}>
        <input type='text' ref={input}/>
        <button onClick={()=>{
             getData()
        }}>Click me</button>
        <h1>{text}</h1>
      </center>
  
    </>
  )
}

export default Userrafcnce
