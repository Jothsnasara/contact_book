import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login  from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/Navbar'
import { AppBar } from '@mui/material'
import Add from './components/Add'
import View from './components/view'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/view' element={<View/>}/>
      </Routes>
    </>
  )
}

export default App
