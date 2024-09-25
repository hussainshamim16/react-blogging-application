import React from 'react'

const Hero = () => {
    return (
        <div className='hero' style={{
            height: "auto"
        }}>
            <div className="content bg-primary text-white h-100 d-flex justify-content-center flex-column text-center py-5 px-2">
                <h4>by react redux</h4>
                <h1 className='blogerH1 text-bold'>React Blog App</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis nesciunt quo reiciendis. Laborum, dignissimos ducimus! Temporibus quam eligendi debitis laborum.</p>
            </div>
            <div className="images"></div>
        </div>
    )
}

export default Hero