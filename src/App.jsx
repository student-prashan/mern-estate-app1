import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Signin from './pages/signin'
import Signup from './pages/signup'
import About from './pages/about'
import Home from './pages/home'
import Profile from './pages/profile'

export default function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/' element={<Signup/>} />
      <Route path='/' element={<Profile/>} />
      <Route path='/' element={<About/>} />
      </Routes>
      </BrowserRouter>
  )
}
