import logo from './logo.svg';
import './App.css';
import {addTo}from './slice/AddTocart';
import { useDispatch } from 'react-redux';
import Hede from './Hede';

function App() {
  const dispatch=useDispatch()
  return (
    <div className="App">
    <Hede/>
     <h1>Hair oil</h1>
     <input type='number' id='cartitem'/>
     <button onClick={()=>{
      dispatch(addTo(document.getElementById('cartitem').value))
     }}>Add To Cart </button>
    </div>
  );
}

export default App;
