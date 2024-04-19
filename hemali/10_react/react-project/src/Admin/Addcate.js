import axios from "axios";
import React,{useRef} from "react";
import { useNavigate } from "react-router-dom";

const Addcate = () => {
    const category =useRef('')
    const navigate=useNavigate()

     const submitcat=async(e)=>{
       e.preventDefault();
       try {
          let data=await axios.post(`http://localhost:8000/category`,{name:category.current.value})
          if(data){
             navigate('/admin/category')
          }
       } catch (error) {
        
       }
     }
  return (
    <>
      <br />
      <br />
          <form onSubmit={submitcat}>

              <h1 className="mb-4 text-primary">Add Category</h1>
              
              <div class="form-group col-6 mb-3 bg-light  p-2 rounded">
                  <label  for="exampleInputEmail1">Category Name</label>
                  <input ref={category} type="text" class="form-control col-6" id="exampleInputEmail1" placeholder="Category Name" />
              </div>
              <br />
              <button type="submit" class="btn btn-primary">Submit</button>
          </form>
    </>
  );
};

export default Addcate;
