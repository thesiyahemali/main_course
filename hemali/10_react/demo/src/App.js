import Head from "./01_Head";
import Header from "./02_Header";
import Silder from "./03_Silder";
import Card from "./04_Card";
import { Routes, Route } from "react-router-dom";
import Home from "./06_Home";
import Concat from "./07_Concat";
import Haderactive from "./08_Haderactive";
import Profile from "./10_Profile";
import Viewsatae from "./11_Viewsatae";
import Todolist from "./14_Todolist";
import Props from "./12_Props";
import Userrafcnce from "./13_Userrafcnce";
import Event from "./15_Event";
import { useState } from "react";
const name = "myweb";
const email = "thesiyahemali999@gmail.com";



function App() {
  const [count, setcount] = useState(0);
  const inc = () => {
    setcount(count + 1);
  };
  return (
    <>
    {/* <Head/> */}
      {/* <Header /> */}

      {/* <Silder/>
       <Card /> */}
      {/* <Head/>
       <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut velit sint explicabo eos culpa eaque commodi consequatur atque mollitia magnam eum, asperiores obcaecati quaerat animi, molestias cum nulla beatae!</h1> */}

      {/* <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/concat" element={<Concat />} />
        <Route path="/haderactive" element={<Haderactive />} />
        <Route path="/viewsatae" element={<Viewsatae />}></Route>
        <Route path="/userrafcnce" element={<Userrafcnce/>}></Route>
        <Route path="/todolist" element={<Todolist/>}></Route>
        <Route path="/concat/profile" element={<Profile />}>
          
        </Route>
      </Routes> */}
      {/* <Viewsatae /> */}
      {/* <Props webname={name} Props incment={inc} myemail={email} /> */}
      <Userrafcnce /> aama khali value chanje thase listing ny thaye todo ni jem userrafcnce thi 
      {/* <Todolist/> */}
      {/* <Event/> */}
    </>
  );
}

export default App;
