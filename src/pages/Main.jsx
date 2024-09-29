import React from 'react'
import Navbir from '../componants/Navbar'
import BasicExample from '../componants/Card'

const Main = () => {
  return (
    <div>
        <Navbir/>
        <h1 className='text-center p-5 bg-dark text-white h-75'>Welcome To Blogzer</h1>
        <div className="allBlogs mx-4 d-flex flex-wrap justify-content-around  gap-2 mt-5">
        <BasicExample />
        <BasicExample />
        <BasicExample />
        <BasicExample />
        <BasicExample />
        <BasicExample />
      </div>
    </div>
  )
}

export default Main