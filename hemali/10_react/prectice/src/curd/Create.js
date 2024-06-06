import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const history=useNavigate(); 

  const handlesubmit=(e)=>{
    e.preventDefault()
    // data ne send karvi savi aetle post method aaevse 
    console.log();
     
     axios.post("https://665420911c6af63f46767cd8.mockapi.io/curd1",{
        name:name,
        email:email
        
     })
     .then(()=>{
        history("/read")
     }) 
  }

  return (
    <>

      <form className='ms-5 ps-5 pe-5 me-5 mt-5'>
        <h2>Create</h2>

        <div class="mb-3">
          <label class="form-label">Name</label>
          <input type="text" class="form-control" onChange={(e)=> setName(e.target.value)} />
        </div>
        <div class="mb-3 ">
          <label  class="form-label">Email address</label>
          <input type="email" class="form-control"  aria-describedby="emailHelp"  onChange={(e)=> setEmail(e.target.value)} />
       </div>
        
        <button type="submit" class="btn btn-primary" onClick={handlesubmit}>Submit</button>
      </form>


    </>
  )
}

export default Create