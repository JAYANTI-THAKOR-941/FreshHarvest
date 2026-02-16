import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

// pages
import Home from './pages/Home'
import Product from './pages/Product'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'

import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App