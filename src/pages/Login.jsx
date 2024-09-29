import React from 'react'
import { useNavigate } from 'react-router-dom'
import Secondnavbir from '../componants/SecondNav'

const Login = () => {
    const subForm = () => {
        const navigater = useNavigate()
        console.log("subForm")
    }

    return (
        <>
            <Secondnavbir />
            <div className='SecLogin'>
                <div className="loginn d-flex align-items-center justify-content-center h-75 bg-warning flex-wrap w-50 py-3 px-2 rounded">
                    <form onSubmit={subForm} className='d-flex  flex-column gap-3'>
                        <h1>Login Blogzer</h1>
                        <input type='email' placeholder='Enter your email' required className='px-3 py-1' />
                        <input type="password" placeholder='Enter your password' required className='px-3 py-1' />
                        <button type="submit" className='py-2 bg-dark text-white border rounded-1'>Login</button>
                        <p>if you have not registed <a href="#" className='text-white'>sign up</a></p>
                    </form>
                </div>
                <div className="clint  w-50 text-center ps-5">
                    <p>"It's amazing to see how fast devs go from 0 to Blog under a domain they own on Hashnode 🤯. It reminds me a lot of what Substack did for journalists."</p>

                    <img className='user-Rev' src="https://cdn.hashnode.com/res/hashnode/image/upload/v1711971592110/1615ae9d-e30b-473c-a789-dc342b23d02d.png?auto=compress" alt="userImages" />
                    <h6 className='mt-2'>Guillermo Rauch</h6>

                </div>
            </div>
        </>
    )
}

export default Login