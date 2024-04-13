import React,{useState,useCallback} from 'react'
import Seconde from './Seconde';

const First = () => {
    const [count,setcount]=useState(0);
    const[todo,setTodo]=useState([])

    const changjeb=useCallback(()=>{
       console.log('i am  from a');
    },[])
  return (
    <>  <h1>{count}</h1>
      <button className='btn btn-primary' onClick={()=>{
        setcount(count+1);
      }}>increment</button>
    
    <Seconde todolist={todo} fun={changjeb}/>
    </>
  )
}

export default First
