  import React,{useRef,useState} from 'react'

  const Todolist = () => {
      const [todo,setTodo]=useState([])
      const [index,setIndex]=useState(null)
      const inp=useRef(null)

      const addData=()=>{
        if(index===null){
          setTodo([...todo,inp.current.value])
          inp.current.value=''
        }else{
          let Udata=[...todo]
          Udata[index]=inp.current.value
          setTodo(Udata)
          setIndex(null)
        }
        inp.current.value=""
          
      }

      const deltedata=(index)=>{
          let newdata=todo.filter((result,id)=>{
              return id != index
          })
          setTodo(newdata)
      }

      const updateData=(result,i)=>{
        inp.current.value=result
        setIndex(i)
      }

    return (
      <>
        <center>
          <input  type='text' ref={inp}/>
          <button onClick={()=>{
              addData()
          }}>{index===null? 'add':'update'}</button>
          {/* <h1>{todo}</h1> */} 
          {todo.map((result,i)=>{
              return(
                  <>
                  <h1>{result}</h1>
                  <button onClick={()=>{
                      deltedata(i)
                  }}>Delete</button>

                  <button onClick={()=>{
                    updateData(result,i)
                  }}>update</button>
              </>
              )
          
          })}
        </center>
      </>
    )
  }

  export default Todolist

