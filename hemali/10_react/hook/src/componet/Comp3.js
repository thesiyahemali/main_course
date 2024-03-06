import React,{useContext} from 'react'
import A from './Comp1'

const Comp3 = () => {
    const[data,update]=useContext(A)
  return (
    <>
        <h1>hii i am Comp3 <b style={{ color: 'red' }}>{data}</b></h1>
        <button onClick={()=>{
            update('YES')
        }}>YES</button>

<button onClick={()=>{
            update('NAY')
        }}>NAY</button>
    </>
  )
}

export default Comp3

