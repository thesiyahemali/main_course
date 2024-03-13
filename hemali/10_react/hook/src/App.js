import logo from './logo.svg';
import './App.css';
import ChildA from './usecontext_Hook/01_ChildA';
import Comp1 from './componet/Comp1';
import Cal from './01_Cal';
import Effect from './use_effec_Hook/Effect';
import Featch from './use_effec_Hook/01_Featch';
import Featch_Api from './use_effec_Hook/02_Featch_Api';
import Jsonapi from './JSON/Jsonapi';

function App() {
  return (
    <div className='App'>
    {/* <ChildA/>createContext and usecontext no use kari ne karvu ae 
     <Comp1/>  createContext and usecontext no use kari ne karvu ae exampl2    */}
     {/* <Cal/> */}
     {/* <Effect/> */}
     {/* <Featch/> */}
     {/* <Featch_Api/> */}
     <Jsonapi/>
  
    </div>
  );
}

export default App;
