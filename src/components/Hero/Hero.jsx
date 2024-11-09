import React from 'react'
import './hero.css'
import profile_img from '../../assets/profile_img.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1>
                Hi, <span>I'm Piyush Gupta</span></h1>
            <p className='profile-inner-text'>A Full-Stack Web Developer specialized in <br /> <b>Technologies:</b> Core-PHP, React, Node.js, etc.</p>
            <div className="hero-action">
                <button type="button" className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></button>
                <button type="button" className='hero-resume'>My Resume</button>
            </div>
        </div>
    )
}

export default Hero
