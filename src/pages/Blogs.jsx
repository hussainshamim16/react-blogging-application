import React from 'react'
import Navbir from '../componants/Navbar'
import { MdCreateNewFolder } from "react-icons/md";
import Secondnavbir from '../componants/SecondNav';
import BasicExample from '../componants/Card'

const blogs = () => {
  const ifBlog = false;
  return (
    <div>
      <Secondnavbir exra="blogs" />
      <div className="creater mt-5 ms-5 mt-4">
        <h1 className='mb-3'>Build your community, start a Blog</h1>
        <button className="newBlog d-flex align-items-center  bg-warning px-5 py-3 rounded-5 w-50 w-md-100">
          <MdCreateNewFolder className='fs-1 me-1' />
          Add Blog
        </button>
      </div>
      <hr />
      {ifBlog ? <div className="allBlogs mx-4 d-flex flex-wrap justify-content-around  gap-2 ">
        <BasicExample />
        <BasicExample />
        <BasicExample />
        <BasicExample />
        <BasicExample />
        <BasicExample />
      </div> : <div className="mt-5 mx-4 d-flex flex-wrap justify-content-around  gap-2 "><h2>! No Todo Found</h2></div>}
    </div>
  )
}

export default blogs