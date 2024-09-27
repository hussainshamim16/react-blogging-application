import React from 'react'
import Navbir from './componants/Navbar'
import Hero from './componants/Hero'
import ReactRouter from './cofig/roter/ReactRouter'

const App = () => {
  return (
    <>
    <ReactRouter/>
    <Navbir />
    <Hero/>
    </>
  )
}

export default App