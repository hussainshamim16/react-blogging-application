



import React from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'

import About from '../../pages/About'
import Blogs from '../../pages/Blogs'
import Home from '../../pages/Home'

const ReactRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='blogs' element={<Blogs/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default ReactRouter