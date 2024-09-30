import React, { useEffect } from 'react'
import Hero from '../componants/Hero'
import FirstNav from '../componants/FirstNav.jsx'
import Butu from '../componants/buttons'
import BasicExample from '../componants/Card.jsx'
import SecCard from '../componants/secondCard.jsx'
import Footer from '../componants/Footer.jsx'
import { useNavigate } from 'react-router-dom'
const Home = () => {

  const navigate = useNavigate()
  useEffect(() => {

    const userId = localStorage.getItem("userId");

    if (userId) {
      navigate('/main');
    }
  }, [navigate]);

  return (
    <>
      <FirstNav />
      <Hero />
      <div className="second mt-5 d-flex justify-content-around flex-column align-items-center">
        <h1 className='text-center mb-3 fer'>Most Populer Categore</h1>
        <div className="buttons d-flex justify-content-around w-50 mb-3">
          <Butu />
          <Butu />
          <Butu />
          <Butu />
          <Butu />
          <Butu />
        </div>
        <div className="buttons d-flex justify-content-around  w-50 mb-3">
          <Butu />
          <Butu />
          <Butu />
          <Butu />
        </div>
      </div>
      <hr className='m-4' />
      {/* <div className="allBlogs mx-4 d-flex flex-wrap justify-content-around  gap-2 ">
        <BasicExample
          key= "1"
          title={"blog.title"}
          description={blog.description}
          imageUrl={blog.imageUrl}
        />
        <BasicExample />
        <BasicExample />
        <BasicExample />
        <BasicExample />
        <BasicExample />
      </div> */}
      <div className="cover bg-danger w-75 m-auto mt-5 px-5 py-5 rounded-4 mb-5 w-md-100">
        <h1 className=' w-75 mb-4 test'>28K Membors Choose the perfect design</h1>
        <Butu />
      </div>
      <div className="todyTrend">
        <h1 className="mx-4 text-center">Today Trend</h1>
        <SecCard />
        <SecCard />
        <SecCard />
      </div>
      <div className="todyTrend">
        <h1 className="mx-4 mt-5 text-center">Trusted Partner's</h1>
        <div className="coverEr bg-danger mx-5 m-auto mt-3 px-5 py-5 rounded-4 mb-5 d-flex justify-content-around">
          <img className="rander rounded-5" src="https://cdn.dribbble.com/userupload/9928665/file/original-8ef560dd9cdb63ccd52ca6979d0f10c1.jpg?resize=400x300&vertical=center" alt="orgnization" />
          <img className="rander rounded-5" src="https://cdn.dribbble.com/userupload/9928665/file/original-8ef560dd9cdb63ccd52ca6979d0f10c1.jpg?resize=400x300&vertical=center" alt="orgnization" />
          <img className="rander rounded-5" src="https://cdn.dribbble.com/userupload/9928665/file/original-8ef560dd9cdb63ccd52ca6979d0f10c1.jpg?resize=400x300&vertical=center" alt="orgnization" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home