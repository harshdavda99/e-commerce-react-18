import './App.css';
import {Route, Routes} from 'react-router-dom'

import Login from './Component/Auth/Login.jsx'
import Signup from './Component/Auth/Signup.jsx'
import ListPage from './Component/productlist/listPage.jsx'
import WishlisttPage from './Component/productlist/wishlist'
import CartPage from './Component/productlist/cart.jsx'
import Navbar from './Component/navbar'



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path={"/"} element={<Login/>}></Route>
      <Route path={"/login"} element={<Login/>}></Route>
        {/* <Login/> */}
        <Route path={"/register"} element={< Signup />} ></Route>
        {/* < Signup /> */}
      <Route path={"/listpage"} element={<ListPage />}></Route>
        {/* <ListPage /> */}
        <Route path={"/CartPage"} element={<CartPage />}></Route>
        {/* <CartPage/> */}
        <Route path={"/WishlisttPage"} element={<WishlisttPage />}></Route>
        {/* <WishlisttPage/> */}
      </Routes>
    </div>
  );
}

export default App;
