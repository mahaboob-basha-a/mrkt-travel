import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import OrderDetails from './components/OrderDetails'
import OrderInfo from './components/OrderInfo'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/orderdetails' element={<OrderDetails />} />
        <Route path='/orderinfo' element={<OrderInfo />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App