import axios from 'axios';
import React from 'react'
import { useEffect,useRef,useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditCategory = () => {
    // category ni id male te url ma te 
     const{id}=useParams()
     const navigate=useNavigate()
    //  setcate thi apde api ma data ne set karva te 
     const [cate,setCate]=useState([])
    //   category ni field 
     const category =useRef('')

    //    text type ma data aaeve tya aena mate api lakhu se 
        useEffect(()=> {
          axios.get(`http://localhost:8000/category?id=${id}`).then((res)=>{
            //  console.log(res.data[0]);
            setCate(res.data[0])
          })
        },[])


    const submitcat=async(e)=>{
        e.preventDefault();
        
        try {
            const categoryName = category.current.value; // Get the value of the input element
            await axios.put(`http://localhost:8000/category/${id}`, { name: categoryName });
            navigate('/admin/category');
        } catch (error) {
            console.error('Error updating category:', error);
        }

      }
  return (
    <>

<br />
      <form  onSubmit={submitcat}>
        <div class="form-group col-6">
          <label for="exampleInputEmail1">Category Name</label>
             
          <input  ref={category} style={{marginTop:'3%'}}
            type="text"
            class="form-control col-6"
            id="exampleInputEmail1"
            placeholder="Category Name"
            name='categoryName'
            defaultValue={cate.name}
          />
        </div>
        <br />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  )
}

export default EditCategory