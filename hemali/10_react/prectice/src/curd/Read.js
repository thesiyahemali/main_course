import axios from 'axios'
import { func } from 'prop-types'
import React, { useState,useEffect } from 'react'

const Read = () => {
    
     const [data,setdata]=useState([])
    function getData(){
         axios.get('https://665420911c6af63f46767cd8.mockapi.io/curd1')
         .then((res)=>{
            console.log(res.data);
            setdata(res.data)
         })
    }

    function handleDelete(id){
        axios.delete(`https://665420911c6af63f46767cd8.mockapi.io/curd1/${id}`).then(()=>{
            getData();
        })
    }
    useEffect(()=>{
        getData()
    },[])
  return (
   <>
   <h3>Read Operatons</h3>
    <table class="table mt-5" >
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>

    </tr>
  </thead>
  {
     data.map((eachData)=>{
        return(
            <>
            <tbody>
    <tr>
      <th scope="row">{eachData.id}</th>
      
      <td>{eachData.name}</td>
      <td>{eachData.email}</td>
      <td>
        <button className='btn btn-success'>Edit</button>
      </td>
      <td>
        <button className=' btn btn-danger' onClick={()=>handleDelete(eachData.id)}>Delete</button>
      </td>

    </tr>
    
  </tbody>
            </>
        )

     })
    }
</table>
   </>
  )
}

export default Read