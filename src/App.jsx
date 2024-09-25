import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add,remove } from './config/redux/blogSlice'
import Naver from './componants/Navbar'
import Hero from './componants/Hero'

const App = () => {
  const count = useSelector((store)=> store.count.count)
  const dispatch = useDispatch()
  return (
  <div className="container-fluid">
    <Naver/>
    <Hero/>
    <div className="third text-center mt-4">
      <h3>Most Populer Blogs</h3>
      
    </div>
    {/* <h1>count : {count}</h1>
    <button onClick={()=> dispatch(add())}>add</button>
    {count > 0 ? <button onClick={()=> dispatch(remove())}>remove</button> : null} */}
  </div>
  )
}

export default App