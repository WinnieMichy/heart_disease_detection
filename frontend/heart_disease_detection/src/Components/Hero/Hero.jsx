import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link} from "react-router-dom";


const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>Early Detection. Better Heart Health!</h1>
            <p> </p>
            <Link to='/model'  smooth={true} offset={-260} duration={500}  className="btn" >Get Started Today <img src={dark_arrow} alt="" /></Link>
        </div>
      
    </div>
  )
}

export default Hero  