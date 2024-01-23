import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import Blogs from './Pages/Blogs'
import Navbar from './Layout/Navbar'
import './App.css'

const App = () => {
  return (
    <div>
      <BrowserRouter>
            <Navbar/>
            <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/contact' element={<Contact/>}/>
                  <Route path='/blogs' element={<Blogs/>}/>
                  <Route path='/blogs/:title' element={<Blog/>}/>
                  <Route path='*' element={<Error/>}/>
            </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App