import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {incNumber,decNumber} from './Action/Index'
  

const Main = () => {
  const mystate=useSelector((state)=>state.changeTheNumber);
  const dispatch=useDispatch()
  return (
    <>
       <center>
       <div className="container">
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>

       <div className="quantity" style={{width:'200px'}}>
         <input type="button" value="-"  style={{marginRight:'10px'}} onClick={()=>dispatch(decNumber())}/>
         <input type="text" value={mystate} name='quantity' className=''  style={{width:'100px',textAlign:'center'}}/>
         <input type="button" value="+"  style={{marginLeft:'10px'}} onClick={()=>dispatch(incNumber())}/>
       </div>
    </div>
    </center>
    </>
  )
}

export default Main
