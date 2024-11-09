import React from 'react'
import './about.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import About_pic from '../../assets/about_pic.jpg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>
                    About me
                </h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={About_pic} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                    <p>I'm a passionate full-stack web developer with a strong background in both front-end and back-end technologies. I specialize in building dynamic, user-friendly web applications using tools like React, Node.js, and MongoDB. I thrive in collaborative environments where I can continue to grow and contribute to innovative solutions.</p>
        <p>With experience in agile development and working with REST APIs, I've developed a wide array of skills that allow me to tackle various technical challenges. My goal is to deliver seamless, high-performance applications that enhance the user experience and drive business success.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>
                                HTML & CSS
                            </p>
                            <progress id="file" value="95" max="100"/>
                        </div>
                        <div className="about-skill">
                            <p>
                                Bootstrap & Javascript
                            </p>
                            <progress id="file" value="85" max="100"/>
                        </div>
                        <div className="about-skill">
                            <p>
                                PHP, Mysql & Jquery
                            </p>
                            <progress id="file" value="75" max="100"/>
                        </div>
                        <div className="about-skill">
                            <p>
                            Codeigniter & Laravel
                            </p>
                            <progress id="file" value="70" max="100"/>
                        </div>
                        <div className="about-skill">
                            <p>
                            Tailwind CSS & React JS
                            </p>
                            <progress id="file" value="85" max="100"/>
                        </div>
                        <div className="about-skill">
                            <p>
                                Node JS & MongoDB
                            </p>
                            <progress id="file" value="80" max="100"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1</h1>
                    <p>YEAR OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECT COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>1+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div> */}
        </div>
    )
}

export default About
