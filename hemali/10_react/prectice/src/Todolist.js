import React,{useState,useRef} from 'react'

const Todolist = () => {
    const[todo,setTodo]=useState([])
    const input=useRef('')
     const addData=()=>{
       setTodo([...todo,input.current.value])
       input.current.value=''
     }

     const deleteData=(index)=>{
      let newdata= todo.filter((result,id)=>{
          return id!=index
       })
       setTodo(newdata)
     }

     const updateData=(()=>{
       
     })
  return (
    <>
       <center>Todo list App
       <br/>
       <br/>
        <input type='text' ref={input}/>
        <button onClick={()=>{
           addData()
        }}>Add</button>

        {todo.map((result,id)=>{
          return(
            <>
              <h2>{result}</h2>
              <button onClick={()=>{
                 deleteData(id)
              }}>Delete</button>

              <button onClick={()=>{
                 updateData()
              }}>Update</button>
            </>
          )
        })}      
       </center>
    </>
  )
}

export default Todolist
