import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Signin from './pages/signin'
import Signup from './pages/signup'
import About from './pages/about'
import Home from './pages/home'
import Profile from './pages/profile'
import Header from './components/Header'

export default function App() {
  return (
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/about' element={<About/>} />
      </Routes>
      </BrowserRouter>
  )
}
