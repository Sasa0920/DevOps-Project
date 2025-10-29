import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'
import Signup from './Components/Signup/Signup.jsx'


export const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Home />} />
        <Route path='/signup' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
