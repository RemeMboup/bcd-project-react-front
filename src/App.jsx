import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes , Route } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import TestLogin  from './components/TestLogin'

function App() {

  return (
    <Routes>
      <Route path='/' element ={<LoginPage />}></Route>
      <Route path='/test' element ={<TestLogin />}></Route>
    </Routes>
  )
}

export default App
