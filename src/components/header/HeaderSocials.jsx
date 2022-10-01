import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineGoogle} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <>
        <div className="header_socials" data-aos="fade-right" >
            <a href="https://www.linkedin.com/in/firoj-ahmed-srabon-83543611b/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/firojahamed91" target="_blank"><FaGithub/></a>
            <a href="https://google.com" target="_blank"><AiOutlineGoogle/></a>
        </div>
    </>
  )
}

export default HeaderSocials