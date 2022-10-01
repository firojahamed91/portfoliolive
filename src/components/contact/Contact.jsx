import React from 'react'
import './contact.css'
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from "emailjs-com"

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hofdd4p', 'template_gmfouhn', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
    <div className="container contact_container">
      <div className="contact_options">
        <artical className="contact_option" data-aos="zoom-out">
          <MdOutlineEmail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>firojahamed91@gmail.com</h5>
          <a href="mailto:firojahamed91@gmail.com"target="_blank" >Send a message</a>
        </artical>

        <artical className="contact_option" data-aos="zoom-out">
          <RiMessengerLine className='contact_option-icon'/>
          <h4>Messenger</h4>
          <h5>egatortutorials</h5>
          <a href="https://m.me/firojahmed.srabon.7" target="_blank">Send a message</a>
        </artical>

        <artical className="contact_option" data-aos="zoom-out">
          <BsWhatsapp className='contact_option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+88 01516123509</h5>
          <a href="https://api.whatsapp.com/send?phone+01516123509" target="_blank">Send a message</a>
        </artical>
      </div>
      {/* end of contact option  */}
      <form ref={form} onSubmit={sendEmail}>
        <input data-aos="zoom-in-up" type="text" name='name' placeholder='Your full Name' required />
        <input data-aos="zoom-in-up" type="email" name='email' placeholder='Your Email' required />
        <textarea  data-aos="zoom-in-up" name="message" id="" rows="7" placeholder='Your Message' required></textarea>
        <button data-aos="zoom-in-up" type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>

    </section>
  )
}

export default Contact