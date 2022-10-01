import React from 'react'
import './about.css'
import about_me from '../../assets/about4.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div  className="about_me" data-aos="fade-right">
          <div className="about_me-image">
            <img src={about_me} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <articls className="about_card" data-aos="fade-left" >
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1+ Year working</small>
            </articls>

            <articls className="about_card" data-aos="fade-left">
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </articls>

            <articls className="about_card" data-aos="fade-left">
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ Complited Projects</small>
            </articls>
          </div>

          <p data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. A tenetur saepe nemo fuga eum maiores natus animi deserunt alias quasi, quisquam, laborum nobis! Ducimus qui, porro quis sequi illo exercitationem!</p>
          <a href="#contact" className='btn btn-primary' data-aos="fade-up" >Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About