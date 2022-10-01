import React from 'react'
import './footer.css'
import {FaFacebookF} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {AiFillLinkedin} from "react-icons/ai"
import {BsGithub} from "react-icons/bs"

const Footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className='footer_logo'>FIROJ AHMED</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a target="_blank" href="https://www.facebook.com/firojahmed.srabon.7/"><FaFacebookF/></a>
        <a target="_blank" href="https://www.instagram.com/firojsrabon/?hl=en"><FiInstagram/></a>
        <a target="_blank" href="https://www.linkedin.com/in/firoj-ahmed-srabon-83543611b/"><AiFillLinkedin/></a>
        <a target="_blank" href="https://github.com/firojahamed91"><BsGithub/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; F. AHMED</small>
      </div>
    </footer>
  )
}

export default Footer