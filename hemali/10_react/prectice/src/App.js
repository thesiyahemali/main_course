import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist';
import Create from './curd/Create';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Read from './curd/Read';
import Taske from './task/Taske';
import Main from './Main';



function App() {
  return (
    <div className='contianer'>
    {/* <BrowserRouter>
    <Routes>
    


      <Route exact path='/' element={<Create/>}></Route>
      <Route exact path='/read' element={<Read/>}></Route>
      
    </Routes>
    </BrowserRouter> */}
  
      <Todolist/>

  {/* <Taske/> */}

   {/* <Main/> */}
   
    </div>

  );
}

export default App;
