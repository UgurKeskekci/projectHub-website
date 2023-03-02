import React from 'react'
import { Route, Routes, Link, NavLink } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import LoginPage from './components/LoginPage'
import MainPage from './components/MainPage'
import RegisterPage from './components/RegisterPage'



function App() {
  return (


    <>
    <ToastContainer></ToastContainer>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/homepage' element={<MainPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
    </>
      
  )
}

export default App