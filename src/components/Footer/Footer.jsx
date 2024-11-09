import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
    return (
        <div id='footer' className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={logo} alt="" />
                    {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, reprehenderit nam optio quae.</p> */}
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>
                    <div className="footer-suscribe">Suscribe</div>
                </div>
            </div>
            <hr/>
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2024 Piyush Gupta. All rights reserved</p>
                <div className="footer-bottom-right">
                    <p>Term of services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
