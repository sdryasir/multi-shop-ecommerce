import './App.css'
import RequireAuth from './layouts/RequireAuth'
import RootLayout from './layouts/Rootlayout'
import AddProduct from './pages/AddProduct'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Contact from './pages/Contact'
import Detail from './pages/Detail'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Shop from './pages/Shop'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import RequireAdminAuth from './layouts/RequireAdminAuth'
import { jwtDecode } from "jwt-decode";


import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { clearUserInfo } from './redux/features/auth/authSlice'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route path="/" element={<Home/>} />
      <Route path="shop" element={<Shop />} />
      <Route path="auth/login" element={<Login/>} />
      <Route path="auth/register" element={<Register/>} />
      <Route path="detail" element={<Detail/>} />
      <Route path="cart" element={<Cart/>} /> 
      <Route path="contact" element={<Contact/>} />
      
      <Route element={<RequireAuth/>}>
        <Route path="checkout" element={<Checkout/>} />
      </Route>
      
      <Route element={<RequireAdminAuth role={'admin'}/>}>
        <Route path="add-product" element={<AddProduct/>} />
      </Route>

    </Route>
  )
)

function App() {

  const {user,token} = useSelector(state=>state.auth);
  const dispatch = useDispatch();


  useEffect(()=>{
    if(token){
      const {exp} = jwtDecode(token);
      const checkTokenValidity = () => {
        if(exp<Date.now()/1000){
          alert("Your session has Expired, Please login again to continue using APP")
          dispatch(clearUserInfo());
        }
      };
      const interval = setInterval(checkTokenValidity, 3000);
      return () => clearInterval(interval);
    }
  },[token])



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
