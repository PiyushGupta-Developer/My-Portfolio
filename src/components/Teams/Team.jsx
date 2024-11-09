import React from 'react'
import './team.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import First_person from '../../assets/first_person.jpg'
import Second_person from '../../assets/second_person.jpg'
import Third_person from '../../assets/third_person.jpg'


const Team = () => {
    return (
        <div id='teams' className='teams'>
            <div className="team-title">
                <h1>My Teams
                    <img src={theme_pattern} alt="" />
                </h1>
            </div>
            <div class="team-container">
                <div class="team-format">
                <img src={First_person} alt="" />
                    <h2>Himanshu Yadav</h2>
                    <p>Web development is the process of building, programming...</p>
                    <div class="team-readmore">
                        <p>Read More</p><img
                            src="data:image/svg+xml,%3csvg%20width='33'%20height='24'%20viewBox='0%200%2033%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M32.0607%2013.0607C32.6464%2012.4749%2032.6464%2011.5251%2032.0607%2010.9393L22.5147%201.3934C21.9289%200.807611%2020.9792%200.807611%2020.3934%201.3934C19.8076%201.97919%2019.8076%202.92893%2020.3934%203.51472L28.8787%2012L20.3934%2020.4853C19.8076%2021.0711%2019.8076%2022.0208%2020.3934%2022.6066C20.9792%2023.1924%2021.9289%2023.1924%2022.5147%2022.6066L32.0607%2013.0607ZM0%2013.5H31V10.5H0V13.5Z'%20fill='white'/%3e%3c/svg%3e"
                            alt="" />
                    </div>
                </div>
                <div class="team-format">
                    <img src={Second_person} alt="" />
                    <h2>Kapil Sharma</h2>
                    <p>Web development is the process of building, programming...</p>
                    <div class="team-readmore">
                        <p>Read More</p>
                        <img src="data:image/svg+xml,%3csvg%20width='33'%20height='24'%20viewBox='0%200%2033%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M32.0607%2013.0607C32.6464%2012.4749%2032.6464%2011.5251%2032.0607%2010.9393L22.5147%201.3934C21.9289%200.807611%2020.9792%200.807611%2020.3934%201.3934C19.8076%201.97919%2019.8076%202.92893%2020.3934%203.51472L28.8787%2012L20.3934%2020.4853C19.8076%2021.0711%2019.8076%2022.0208%2020.3934%2022.6066C20.9792%2023.1924%2021.9289%2023.1924%2022.5147%2022.6066L32.0607%2013.0607ZM0%2013.5H31V10.5H0V13.5Z'%20fill='white'/%3e%3c/svg%3e"
                            alt="" />
                    </div>
                </div>
                <div class="team-format">
                    <img src={Third_person} alt="" />
                    <h2>Aditya Yadav</h2>
                    <p>Web development is the process of building, programming...</p>
                    <div class="team-readmore">
                        <p>Read More</p><img
                            src="data:image/svg+xml,%3csvg%20width='33'%20height='24'%20viewBox='0%200%2033%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M32.0607%2013.0607C32.6464%2012.4749%2032.6464%2011.5251%2032.0607%2010.9393L22.5147%201.3934C21.9289%200.807611%2020.9792%200.807611%2020.3934%201.3934C19.8076%201.97919%2019.8076%202.92893%2020.3934%203.51472L28.8787%2012L20.3934%2020.4853C19.8076%2021.0711%2019.8076%2022.0208%2020.3934%2022.6066C20.9792%2023.1924%2021.9289%2023.1924%2022.5147%2022.6066L32.0607%2013.0607ZM0%2013.5H31V10.5H0V13.5Z'%20fill='white'/%3e%3c/svg%3e"
                            alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
