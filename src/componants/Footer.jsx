import React from 'react'
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialSkype } from "react-icons/ti";
const Footer = () => {
    return (
        <>
            <div className='Footer bg-warning d-flex align-items-center justify-content-center' style={{
              
            }}>
                <div className="left w-75 text-center">
                    <h1>React Blogzer</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dignissimos voluptatem atque, saepe facere pariatur odit ex enim numquam, unde qui aut cum exercitationem perspiciatis alias fugiat rerum harum praesentium?</p>
                    <div className="icon gap-2">
                        <TiSocialLinkedin className='fs-1'/>
                        <TiSocialSkype className='fs-1'/>
                        <TiSocialTwitter className='fs-1'/>
                    </div>
                    <hr />
                    <h6>&copy;Blogzer.Made With By ❤ <a href="#" className='text-dark'>Hussain Shamim</a></h6>
                </div>

            </div>
        </>
    )
}

export default Footer