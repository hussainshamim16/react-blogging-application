import React, { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
  , db
  , getStorage,
  ref,
  uploadBytes,
  getDownloadURL
} from "../cofig/firebase/firebase"
import Navbir from '../componants/Navbar';

const Blogs = () => {
  const [heading, setHeading] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [paragraph, setParagraph] = useState('');
  const [blogs, setBlogs] = useState([]);
  const [editId, setEditId] = useState(null);

  const storage = getStorage();


  const fetchBlogs = async () => {
    const blogsCollection = await getDocs(collection(db, 'blogs'));
    const blogsData = blogsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setBlogs(blogsData);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);


  const uploadImage = async (file) => {
    if (!file) return '';
    const imageRef = ref(storage, `images/${file.name}`);
    await uploadBytes(imageRef, file);
    const imageUrl = await getDownloadURL(imageRef);
    return imageUrl;
  };


  const handleBlogSubmit = async (event) => {
    event.preventDefault();

    const imageUrl = await uploadImage(imageFile);

    const blogData = {
      title: heading,
      imageUrl,
      description: paragraph
    };

    if (editId) {

      const blogRef = doc(db, 'blogs', editId);
      await updateDoc(blogRef, blogData);
      setEditId(null);
    } else {

      await addDoc(collection(db, 'blogs'), blogData);
    }

    setHeading('');
    setImageFile(null);
    setParagraph('');
    fetchBlogs();
  };


  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'blogs', id));
    fetchBlogs();
  };



  return (
    <>
      <Navbir />
      <div className='blogPerant'>
        <form onSubmit={handleBlogSubmit}>
          <h1>Create Blog</h1>
          
          <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} /><br />
          <input type="text" placeholder="Title" value={heading} onChange={(e) => setHeading(e.target.value)} /><br />
          <textarea
            cols={21}
            rows={4}
            placeholder="Description"
            value={paragraph}
            onChange={(e) => setParagraph(e.target.value)}
          ></textarea><br />
          <button type="submit">{editId ? 'Update Blog' : 'Submit Blog'}</button>
        </form>

        <div className="sectionBlog">
          <h2>Your Blogs</h2>
          <ul>
            {blogs.map((blog) => (
              <li key={blog.id}>
                <h3>{blog.title}</h3>
                {blog.imageUrl && <img src={blog.imageUrl} alt={blog.title} />}
                <p>{blog.description.slice(0,225,)}...</p>
                <button onClick={() => handleDelete(blog.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>

  );
};

export default Blogs;
