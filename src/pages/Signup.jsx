import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { app, auth } from '../cofig/firebase/firebase';
import { getAuth, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, setDoc, doc } from 'firebase/firestore'; 
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import FirstNav from '../componants/FirstNav';

const Signup = () => {
  let [namer, setName] = useState('');
  let [number, setNumber] = useState(null);
  let [mailer, setEmail] = useState('');
  let [password, setPassword] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();
    const firestore = getFirestore();
  const storage = getStorage();

  useEffect(() => {
   
    const userId = localStorage.getItem("userId");
    if (userId) {
      navigate('/main'); 
    }
  }, [navigate]); 

  const name = (event) => setName(event.target.value);
  const phone = (event) => setNumber(event.target.value);
  const email = (event) => setEmail(event.target.value);
  const pawwsord = (event) => setPassword(event.target.value);

  


  const subForm = async (event) => {
    event.preventDefault();
    try {
      const response = await createUserWithEmailAndPassword(auth, mailer, password);
      const userId = response.user.uid;
      localStorage.setItem("userId", userId);




      
      await setDoc(doc(firestore, "users", userId), {
        name: namer,
        number: number,
        email: mailer,
      });

      alert("Signup successful!");
      navigate('/main'); 
    } catch (error) {
      console.log(error.message);
      alert(error.code);
    }
  };

  return (
    <>
      <FirstNav />
      <div className='SecLogin bg-warning'>
        <div className="loginn">
          <form onSubmit={(event) => subForm(event)} className='d-flex  flex-column gap-3'>
            <h1>Signup Blogzer</h1>
            <input type='text' placeholder='FULL NAME' className='inpot' onChange={(event) => name(event)} />
            <input type='number' placeholder='PHONE' className='inpot' onChange={(event) => phone(event)} />
            <input type='email' placeholder='EMAIL' className='inpot' onChange={(event) => email(event)} />
            <input type='password' placeholder='PASSWORD' className='inpot' onChange={(event) => pawwsord(event)} />
            <button type="submit" className='py-2 bg-dark text-white border rounded-1'>Signup</button>
            <p>If you already have an account <a href="/login" className='text-white'>Login</a></p>
          </form>
        </div>  
      </div>
    </>
  );
};

export default Signup;
