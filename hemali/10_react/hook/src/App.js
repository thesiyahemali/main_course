import logo from './logo.svg';
import './App.css';
import ChildA from './usecontext_Hook/01_ChildA';
import Comp1 from './componet/Comp1';
import Cal from './01_Cal';
import Effect from './use_effec_Hook/Effect';
import Featch from './use_effec_Hook/01_Featch';
import Featch_Api from './use_effec_Hook/02_Featch_Api';
import Jsonapi from './JSON/Jsonapi';
import Useeffect_use from './use_effec_Hook/03_Useeffect_use';
import Axios_api from './Axios/Axios_api';
import Render from './Conditional_Render/01_Render';
import Forward from './ForwardRef_Hook/01_Forward';
import UseMemo from './Use_Memo_Hook/UseMemo';
import First from './UseCallback_Hook/First';

function App() {
  return (
    <div className='App'>
    {/* <ChildA/>createContext and usecontext no use kari ne karvu ae  */}
     {/* <Comp1/>  createContext and usecontext no use kari ne karvu ae exampl2    */}
     {/* <Cal/> calculater banve se react ma  */}
     {/* <Effect/>   //use effect nu example se  */}
     {/* <Featch/>  api thi data lava savi  */}
     {/* <Featch_Api/> api thi data lava savi  */}
     {/* <Jsonapi/> apde je json server banvu se tena data display karva se tenu example se  */}
     {/* <Useeffect_use/> use effect no use karta sikhvu se  */}
     {/* <Axios_api/> fetch jevu se axois thi data lava savi  */}
    {/* <Render/> */}
  
     {/* <Forward/>ForwardRef_Hook no use kari ne karvu se example  */}

     <UseMemo/>    
     {/* Use_Memo_Hook no use karvu se  */}

     {/* <First/> */}
    </div>
  );
}

export default App;
