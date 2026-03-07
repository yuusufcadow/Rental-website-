import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>

    </div>
  )
}

export default App
