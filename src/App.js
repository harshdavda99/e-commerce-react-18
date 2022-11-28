import './App.css';
import { Route, Routes } from 'react-router-dom'

import Login from './Component/Auth/Login.jsx'
import Signup from './Component/Auth/Signup.jsx'
import ListPage from './Component/productlist/listPage.jsx'
import WishlisttPage from './Component/productlist/wishlist'
import CartPage from './Component/productlist/cart.jsx'
import  NavBar from './Component/navbar'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <NavBar/>
      <Routes>
        <Route path={"/"} element={<Login />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/register"} element={< Signup />} ></Route>
        <Route path={"/listpage"} element={<ListPage />}></Route>
        <Route path={"/CartPage"} element={<CartPage />}></Route>
        <Route path={"/WishlisttPage"} element={<WishlisttPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
