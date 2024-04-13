import logo from './logo.svg';
import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import {Increement,Decreement} from './Action';

function App() {
   const state=useSelector((result)=>{
    console.log(result);
   })

   const dispatch=useDispatch()
  return (
    <div className="App">
       <button onClick={()=>{
         dispatch(Increement())
       }}>Increement</button>

<button onClick={()=>{
         dispatch(Decreement())
       }}>Decreement</button>
    </div>
  );
}

export default App;
