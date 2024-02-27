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
import Props from "./12_Props";
import Userrafcnce from "./13_Userrafcnce";
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
      <Header />

      {/* <Silder/>
       <Card /> */}
      {/* <Head/>
       <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aut velit sint explicabo eos culpa eaque commodi consequatur atque mollitia magnam eum, asperiores obcaecati quaerat animi, molestias cum nulla beatae!</h1> */}

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="/concat" element={<Concat />} />
        <Route path="/haderactive" element={<Haderactive />} />
        <Route path="/viewsatae" element={<Viewsatae />}></Route>
        <Route path="/userrafcnce" element={<Userrafcnce/>}></Route>
        <Route path="/props" element={<Props/>}></Route>
        <Route path="/concat/profile" element={<Profile />}>
          
        </Route>
      </Routes>
      {/* <Viewsatae /> */}
      <Props webname={name} Props incment={inc} myemail={email} />
      {/* <Userrafcnce /> */}
    </>
  );
}

export default App;
