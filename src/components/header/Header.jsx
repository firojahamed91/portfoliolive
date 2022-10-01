import React from 'react'
import './header.css'
import CTA from './CTA'
import pro from '../../assets/pro.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <div data-aos="fade-down">

          <h5> Hello I'm</h5>
          <h1>Firoj Ahmed</h1>
          <h5 className="text-light">Front End Developer</h5>
        </div>
        <CTA />

        <HeaderSocials />
        <div className="me" data-aos="zoom-out-up">
          <img className='me' src={pro} alt="" />
        </div>
        <div >
          <a href="#contact" className='scroll_down' > Scroll Down</a>
        </div>

      </div>
    </header>
  )
}

export default Header