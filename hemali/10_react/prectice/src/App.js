import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist';
import Create from './curd/Create';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Read from './curd/Read';
import Update from './curd/Update';
import Taske from './task/Taske';
import Main from './Main';
import First from './Mirali/First'
import Seconde from './Mirali/Seconde'
import Todo from './Mirali/Todo'
import User from './Child to Prent/User';
import Search from './Mirali/Search';
import { Api } from '@mui/icons-material';
import Stopwatch from './StopWatch/Stopwatch';



function App() {

  function parentAlert(data){
    alert(data);
  }

  return (
    <div className='contianer'>
    { <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Create/>}></Route>
      <Route exact path='/read' element={<Read/>}></Route>
      <Route exact path='/update' element={<Update/>}></Route>

    </Routes>
    </BrowserRouter> }
  
      {/* <Todolist/> */}

  {/* <Taske/> */}

   {/* <Main/> */}
   {/* <First/> */}
   {/* <Seconde/> */}
   {/* <Todo/> */}
   
   {/* <User alert={parentAlert}/> */}
   {/* <search/> */}

    {/* <Api/> */}
    {/* <Stopwatch/> */}
    </div>

  );
}

export default App;
