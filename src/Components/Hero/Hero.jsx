import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="" />
            <h1> <span>I'm Catherine Ochoa</span> based in New York City</h1>
            <p>Im an aspiring front end developer wanting to build community an all my projects.</p>
            <div className="hero-action">
                <div className="hero-connect">Connect with Me</div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    )
  
}
export default Hero