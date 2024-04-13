import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hadare from "./User/Hadare";
import Footer from "./User/Footer";
import Loginregister from "./pages/Loginregister";
import Shop from "./pages/Shop";
import Admin from "./Admin/Admin";
import Home from "./User/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Admin />}/>
          <Route/>
          <Route path="/" element={<Home />}>
          <Route path="/" element={<Shop/>}/><Route/>
          <Route path="/login" element={<Loginregister />}/><Route/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
