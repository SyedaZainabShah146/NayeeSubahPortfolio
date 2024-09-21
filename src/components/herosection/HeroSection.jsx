import React from 'react'
import './herosection.css'
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa6";
import { GiHand } from "react-icons/gi";
import { FaTelegramPlane } from "react-icons/fa";

import picture from '../../websitedesignimages/women.avif'
import Buttons from '../Buttons';






const HeroSection = () => {

  const heroSectionIconData = [
    {
      icon: <IoLogoInstagram />,
      link: 'https://instagram.com',
      color: "#E1306C"
    },
    {
      icon: <CiLinkedin />,
      link: 'https://linkedin.com',
      color: "#0A66C2"
    },
    {
      icon: <FaTwitter />,
      link: 'https://twitter.com',
      color: "#1DA1F2"
    }
  ]





  return (
    <div className='herosection-main-container' id='#'>

      <div className='herosection-icon-container' >
        {heroSectionIconData.map((muzammil, index) => {
          return (
            <a href={muzammil.link} className={`icon-container-hover-${index}`}>{muzammil.icon}</a>
          )
        })}
      </div>

      <div className='herosection-name-container'>
        <div className='herosection-name-container-top'>

          <div className='name-part'>
            <h1>Zainab.</h1>
            <span><GiHand /></span>
          </div>


          <h2>Frontend Developer</h2>
          <p>I specialize in creating visually appealing and user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, I bring designs to life, ensuring seamless functionality across various devices. My goal is to enhance user experiences by combining creativity with technical skills. Let’s build something amazing together!</p>
        </div>

        <Buttons btnTitle={"Say Hello"} btnIcon={<FaTelegramPlane />} />
        
      </div>

      <div className='herosection-image-container'>
        <img src={picture} />
      </div>

    </div>
  )
}

export default HeroSection