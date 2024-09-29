import React from 'react';
import { FaEdit } from "react-icons/fa";
import Navbir from '../componants/Navbar'
import SecCard from '../componants/secondCard'

const ProfileSection = () => {
  return (
    <>
      <Navbir />
      <div className="profiler d-flex justify-content-around align-items-center mt-5">
        <div className="imageSection">
          <img
            src="https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg"
            alt="Profile"
            className="rounded-circle"
            width="150"
            height="150"
          />
        </div>
        <div className="content ">
   
            <h3 className="mb-1">John Doe</h3>
            <p className="mb-2 text-muted">johndoe@example.com</p>
            <p><strong>phone: </strong>03160578265</p>
            <p><strong>Member Since: </strong>January 2023</p>

            {/* Edit Profile Button */}
            <button className="btn btn-primary d-flex align-items-center mt-3">
              <FaEdit className="me-1" /> Edit Profile
            </button>
         
        </div>
      </div>
      <hr />
      <div className="todyTrend">
        <h1 className="mx-4 text-center">Your Blogs</h1>
        <SecCard />
      </div>
    </>
  );
};

export default ProfileSection;
