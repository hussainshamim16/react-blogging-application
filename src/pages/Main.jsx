import React from 'react'
import Navbir from '../componants/Navbar'
import BasicExample from '../componants/Card'
import { collection, getDocs ,db} from "../cofig/firebase/firebase";
import { useState ,useEffect } from 'react';

// const Main = () => {
//   return (
//     <div>
//         <Navbir/>
//         <h1 className='text-center p-5 bg-dark text-white h-75'>Welcome To Blogzer</h1>
//         <div className="allBlogs mx-4 d-flex flex-wrap justify-content-around  gap-2 mt-5">
// <h1>all blogs is here</h1>
//       </div>
//     </div>
//   )
// }
const Main = () => {
  const [blogs, setBlogs] = useState([]);

console.log(blogs)
  const fetchBlogs = async () => {
    const blogsCollection = await getDocs(collection(db, 'blogs'));
    const blogsData = blogsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setBlogs(blogsData);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <Navbir />
      <h1 className="text-center p-5 bg-dark text-white">Welcome To Blogzer</h1>
      
      <div className="allBlogs mx-4 d-flex flex-wrap justify-content-around gap-2 mt-5">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <BasicExample
              key={blog.id}
              title={blog.title}
              description={blog.description}
              imageUrl={blog.imageUrl}
            />
          ))
        ) : (
          <h1>No Blogs Available</h1>
        )}
      </div>
    </div>
  );
};

export default Main