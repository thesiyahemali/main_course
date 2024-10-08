import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hadare from "./User/Hadare";
import Footer from "./User/Footer";
import Loginregister from "./pages/Loginregister";
import Shop from "./pages/Shop";
import Admin from "./Admin/Admin";
import Home from "./User/Home";
import Dashborde from "./Admin/Dashborde";
import Category from "./Admin/Category";
import Product from "./Admin/Product";
import { PrivateRouter } from "./PrivateRoutes";
import Addcate from "./Admin/Addcate";
import AddProduct from "./Admin/AddProduct";
import ProductEdit from "./Admin/ProductEdit";
import EditCategory from "./Admin/EditCategory";
import { Category as Cat } from "./User/Category";
import Viewproduct from "./User/Viewproduct";
import Cart from "./User/Cart";
import { UserPrivate } from "./User/UserPrivate";
import CheckOut from "./User/CheckOut";
import Confrmation from "./User/Confrmation";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRouter />}>
            <Route path="/admin" element={<Admin />}>
              <Route path="/admin/dashborde" element={<Dashborde />}></Route>
              <Route path="/admin/Category" element={<Category />}></Route>
              <Route path="/admin/Product" element={<Product />}></Route>
              <Route
                path="/admin/category/addcate"
                element={<Addcate />}
              ></Route>
              <Route
                path="/admin/product/addpro"
                element={<AddProduct />}
              ></Route>
              <Route
                path="/admin/product/editproduct/:id"
                element={<ProductEdit />}
              ></Route>
              {/* koy bhi data moklva hoy tayre : kari ne moklva  */}
              <Route
                path="/admin/category/editcategory/:id"
                element={<EditCategory />}
              ></Route>
            </Route>
          </Route>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Shop />}></Route>
            <Route path="/category/:id" element={<Cat />}></Route>
            <Route path="/viwproduct/:id" element={<Viewproduct />}></Route>
            <Route path="/login" element={<Loginregister />}></Route>
            <Route path="/checkout" element={<CheckOut />}></Route>
            <Route path="/confirmation" element={<Confrmation />}></Route>
            {/* change on change outlet */}
            <Route element={<UserPrivate />}>
              <Route path="/cart" element={<Cart />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
// import { PrivteRoutes } from "./PrivateRoutes";

export default App;
