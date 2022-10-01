import React from 'react'
import './portfolio.css'
import img from '../../assets/portfolio.png'
import img2 from '../../assets/portfolio2.png'
import img3 from '../../assets/portfolio3.png'
import img4 from '../../assets/portfolio4.png'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.png'

const data=[
  {
    id: 1,
    image: img,
    title: "Charts templates & informations in Figma",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    image: img2,
    title: "Charts templates & informations in Figma",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    image: img3,
    title: "Charts templates & informations in Figma",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    image: img4,
    title: "Charts templates & informations in Figma",
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    image: img5,
    title: "Charts templates & informations in Figma",
    github: "#",
    demo: "#",
  },
  {
    id: 6,
    image: img6,
    title: "Charts templates & informations in Figma",
    github: "#",
    demo: "#",
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio_item" data-aos="flip-right">
                <div className="portfolio_item-image ">
                  <img src={image} alt={title} />
                </div>
                <h3 data-aos="fade-left">{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={github} className='btn' target="_blank" data-aos="fade-up">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank" data-aos="fade-up">Live demo</a>
                </div>
              </article>
            )
          })
        }


{/* 
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="#" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="#" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="#" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="#" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="#" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className='btn' target="_blank">Github</a>
            <a href="#" className="btn btn-primary" target="_blank">Live demo</a>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio