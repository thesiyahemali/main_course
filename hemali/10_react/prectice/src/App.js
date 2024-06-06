import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist';
import Create from './curd/Create';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Read from './curd/Read';

function App() {
  return (
    <div className='contianer'>
    <BrowserRouter>
    <Routes>
    
      {/* <Todolist/> */}
      <Route exact path='/' element={<Create/>}></Route>
      <Route exact path='/read' element={<Read/>}></Route>
      
    </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
