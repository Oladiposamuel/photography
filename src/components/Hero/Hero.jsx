import React from 'react'
import './hero.css'
import Alex from "../../img/alexander-dummer-aS4Duj2j7r4-unsplash.jpg";
import Ben from "../../img/ben-iwara-rJcIXT5iOhw-unsplash.jpg";
import  Jessica from "../../img/jessica-felicio-8vgkMCSq4EU-unsplash.jpg";
import JessicaL from "../../img/jessica-felicio-IkWLHy_Va7E-unsplash.jpg"
import Ema from "../../img/ema-studios-oJOjGuShZbY-unsplash.jpg";
import Glodi from "../../img/glodi-miessi-bRtwAIfztNw-unsplash.jpg";
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <div className='hero'>
       <div className='hero-container'>
            <img src={Ben} alt="img" className='image-one' />
            <img src={Jessica} alt="img" className='image-two' />
            <img src={Ema} alt="img" className='image-three' />
            <img src={Glodi} alt="img" className='image-four' />
       </div>
    </div>
  )
}

export default Hero