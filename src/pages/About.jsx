import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import Navbir from '../componants/Navbar';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  console.log(userData)
  const navigate = useNavigate();
  const auth = getAuth();
  const firestore = getFirestore();

  useEffect(() => {
    // Check if user is logged in
    const userId = localStorage.getItem('userId');
    if (!userId) {
      navigate('/login');
    } else {
      // Fetch user data from Firestore
      const getUserData = async () => {
        try {
          const userDoc = await getDoc(doc(firestore, 'users', userId));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            alert('No such user data found!');
          }
        } catch (error) {
          console.log('Error fetching user data: ', error.message);
        }
      };

      getUserData();
    }
  }, [firestore, navigate]);

  return (
    <>
      <Navbir />
      <div className='profile-page'>
        {userData ? (
          <div className='profile-card bg-light p-4 rounded'>
            <h2 className='text-center mb-4'>User Profile</h2>
            <div className='text-center'>
              <img
                src={userData.profileImage}
                alt='User Profile'
                className='profile-image rounded-circle'
                style={{ width: '150px', height: '150px' }}
              />
            </div>
            <div className='mt-4'>
              <h5><strong>Name:</strong> {userData.name}</h5>
              <h5><strong>Email:</strong> {userData.email}</h5>
              <h5><strong>Phone:</strong> {userData.number}</h5>
            </div>
          </div>
        ) : (
          <div className='text-center'>
            <h3>Loading user data...</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
