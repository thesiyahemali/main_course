import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Update = () => {
    const navigate=useNavigate()

    const [id,setId]=useState("")
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")


    useEffect(()=>{
     setId(localStorage.getItem("id"))
     setName(localStorage.getItem("name"))
     setEmail(localStorage.getItem("email"))

    },[])

    const handleupdate=(e)=>{
        e.preventDefault()
        axios.put(`https://665420911c6af63f46767cd8.mockapi.io/curd1/${id}`,{
            name:name,
            email:email,
        }).then(()=>{navigate("/read")})
    }
  return (
    <>
   <form className="ms-5 ps-5 pe-5 me-5 mt-5">
   <h3>Update Operatons</h3>

        <div class="mb-3">
          <label class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            onChange={(e) => setName(e.target.value)}
            // onchange use na karvu hoy tayre 
            value={name}
          />
        </div>
        <div class="mb-3 ">
          <label class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" class="btn btn-primary"
         onClick={handleupdate}
         >
          Update
        </button>
<Link to={"/read"}>
        <button className='btn btn-secondary'>
          Back
        </button>
        </Link>
      </form>
    </>
  )
}

export default Update
