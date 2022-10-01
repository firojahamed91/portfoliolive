import React from 'react'
import './testimonials.css'
import avtr from "../../assets/avater.png"
import avtr2 from "../../assets/avater2.jpg"
import avtr3 from "../../assets/avater3.jpg"
import avtr4 from "../../assets/avater4.png"



import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    id: "1",
    image: avtr,
    name: "Trina Alice",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minus minima tenetur distinctio, in soluta laudantium ducimus quam corporis expedita laboriosam provident ullam architecto sapiente et dolorem. Voluptatibus, nulla excepturi."
  },
  {
    id: "1",
    image: avtr2,
    name: "Trina Alice",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minus minima tenetur distinctio, in soluta laudantium ducimus quam corporis expedita laboriosam provident ullam architecto sapiente et dolorem. Voluptatibus, nulla excepturi."
  },
  {
    id: "1",
    image: avtr3,
    name: "Trina Alice",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minus minima tenetur distinctio, in soluta laudantium ducimus quam corporis expedita laboriosam provident ullam architecto sapiente et dolorem. Voluptatibus, nulla excepturi."
  },
  {
    id: "1",
    image: avtr4,
    name: "Trina Alice",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam minus minima tenetur distinctio, in soluta laudantium ducimus quam corporis expedita laboriosam provident ullam architecto sapiente et dolorem. Voluptatibus, nulla excepturi."
  },
]



const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ avatar, image, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial" data-aos="zoom-in-down">
                <div className="client_avater">
                  <img src={image} alt="" />
                </div>
                <h5 className="client_name">{name}</h5>
                <small className='client_review' data-aos="fade-up"> {review}</small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>

    </section>
  )
}

export default Testimonials