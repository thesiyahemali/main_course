import logo from './logo.svg';
import './App.css';
import Head from './01_Head'
import Header from './02_Header';
import Silder from './03_Silder';
import Card from './04_Card';
import { Routes,Route } from 'react-router-dom';
import Home from './06_Home';
import Concat from './07_Concat';
import Haderactive from './08_Haderactive';

function App() {
  return (
    <>
      {/* <Head/>
       <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut velit sint explicabo eos culpa eaque commodi consequatur atque mollitia magnam eum, asperiores obcaecati quaerat animi, molestias cum nulla beatae!</h1> */}

       <Header/>
       {/* <Silder/>
       <Card /> */}
      

       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/concat' element={<Concat/>}/>
        <Route path='/haderactive' element={<Haderactive/>}/>


       </Routes>
    </>
  );
}

export default App;
