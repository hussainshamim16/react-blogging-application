import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Secondnavbir from '../componants/SecondNav'
import Navbir from '../componants/Navbar'
import {
    app,
    auth,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from '../cofig/firebase/firebase'

const Signup = () => {

    let [namer, setName] = useState('')
    let [number, setNumber] = useState(null)
    let [mailer, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [image, imageSelected] = useState(null)

    // use
    // console.log(namer)

    // console.log(name,number,email,password)

    const name = (event) => { setName(event.target.value) }
    const phone = (event) => { setNumber(event.target.value) }
    const email = (event) => { setEmail(event.target.value) }
    const pawwsord = (event) => { setPassword(event.target.value) }
    const images = (event) => { imageSelected(event.target.files[0]) }



    const subForm = async (event) => {

        try {
            event.preventDefault()
            const obj = {
                name: namer,
                number: number,
                Email: mailer,
                password: password,
                profile: image,
            }
            const responce = await createUserWithEmailAndPassword(auth, mailer, password)
            localStorage.setItem("userId",responce.user.uid)
            alert("signup done")

        } catch (error) {
            console.log(error.message)
            alert(error.code)
        }


       
    }

    return (
        <>
            <Navbir />
            <div className='SecLogin'>
                <div className="loginn d-flex align-items-center  justify-content-center h-80 bg-warning flex-wrap  py-5 px-3   rounded">
                    <form onSubmit={() => subForm(event)} className='d-flex  flex-column gap-3'>
                        <h1>Signup Blogzer</h1>
                        <input type='text' placeholder='FULL NAME' className='px-3 py-1' onChange={() => name(event)} />
                        <input type='number' placeholder='PHONE' className='px-3 py-1' onChange={() => phone(event)} />
                        <input type='email' placeholder='EMAIL' className='px-3 py-1' onChange={() => email(event)} />
                        <input type='password' placeholder='PASSWORD' className='px-3 py-1' onChange={() => pawwsord(event)} />
                        <input type="file" accept='image/*' className='px-3 py-1' onChange={() => images(event)} />
                        <button type="submit" className='py-2 bg-dark text-white border rounded-1'>signup</button>
                        <p>if you have already Account <a href="#" className='text-white'>Login</a></p>
                    </form>
                </div>
                <div className="clint  w-50 text-center ps-5 ps-md-0 ps-md-1 w-md-75 w-100">
                    <p>"It's amazing to see how fast devs go from 0 to Blog under a domain they own on Hashnode 🤯. It reminds me a lot of what Substack did for journalists."</p>

                    <img className='user-Rev' src="https://cdn.hashnode.com/res/hashnode/image/upload/v1711971592110/1615ae9d-e30b-473c-a789-dc342b23d02d.png?auto=compress" alt="userImages" />
                    <h6 className='mt-2'>Guillermo Rauch</h6>

                </div>
            </div>
        </>
    )
}

export default Signup