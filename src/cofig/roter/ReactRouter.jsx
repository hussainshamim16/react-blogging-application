



import React from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'

import About from '../../pages/About'
import Blogs from '../../pages/Blogs'
import Home from '../../pages/Home'
import Login from '../../pages/login'
import Signup from '../../pages/Signup'
import Main from '../../pages/Main'

const ReactRouter = (exra) => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='blogs' element={<Blogs/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='main' element={<Main/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default ReactRouter