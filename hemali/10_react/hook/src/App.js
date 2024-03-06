import logo from './logo.svg';
import './App.css';
import ChildA from './usecontext/01_ChildA';
import Comp1 from './componet/Comp1';

function App() {
  return (
    <div className='App'>
    <header className='App-header'>
    {/* <ChildA/> */}
     <Comp1/>
    
    </header>
    </div>
  );
}

export default App;
