import React from 'react'
import '../styles/about.css'
import {Link} from 'react-router-dom'
const About = () => {
  return (
    <div>
        <div className="aboutcov">
    <div className="aboutContainer">
        <div className="content-aboutcov">
            <div className="title">
                <h1>About Us</h1>
            </div>
            <div className="content">
                <p>California Gym met en place des procédures d adhésion simples et avantageuses en fournissant à vos collaborateurs des coupons d inscription, dont la date d effet demeure valable jusqu à l expiration de la convention entre California Gym et votre entreprise.</p>
                <div className="button">
                    <Link to='read'>Read More</Link>
                </div>
            </div>
          
        </div>
        <div className="image-aboutcov">
            <img src="https://st.depositphotos.com/1110663/1258/i/600/depositphotos_12582372-stock-photo-gym-room.jpg"/>
        </div>
    </div>
</div>
</div>
  )
}

export default About