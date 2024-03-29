import logo from './logo.svg';
import './App.css';
import Demo from './Componetns/01_Demo';
import Lifecycle from './Componetns/02_Lifecycle';
import LifecylceTodo from './Componetns/03_LifecylceTodo';
import LifecyclecomponentT from './Componetns/04_LifecyclecomponentT';
import Curd_Form from './Curd_Operation/01_Curd_Form';
import String_Type from './Props_Types/String_Type';
import Object_Types from './Props_Types/02_Object_Types';
const name='hemali'
const std={name:'hemali',age:20}

function App() {
  return (
    <div>
      {/* <Demo/> */}
       {/* <Lifecycle/> */}
      {/* <LifecylceTodo/> */}
      {/* <LifecyclecomponentT/> */}
      {/* <Curd_Form/> */}
      <String_Type fullname={name} />
      <Object_Types list={std}/>
    </div>
  );
}

export default App;
