import React, { useState } from 'react'
import Navbar from './navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/cart/Cart'
import Home from './pages/home/Home'
import Order from './pages/placeOrder/Order'
import Footer from './components/Footer/Footer'
import AppDownload from './components/AppDownload/AppDownload'
import LoginPop from './components/LoginPop/LoginPop'
import Verify from './pages/verify/Verify'
import MyOrder from './pages/myOrders/MyOrder'
import { Toaster } from 'react-hot-toast'



const App = () => {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPop setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/verify' element={<Verify/>} />
        <Route path='/myorders' element={<MyOrder/>} />
      </Routes>
      <AppDownload />
      <Footer />
    </div>
    <Toaster position="top-right" reverseOrder={false} />
    </>
    
  )
}

export default App
