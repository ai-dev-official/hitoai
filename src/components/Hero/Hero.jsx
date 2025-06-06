import React from 'react'
import HomeImg from '../../assets/images/homeimg.jpg';
import HomeBackground from "../../assets/images/HeroBG.svg";

const Hero = () => {
  return (
    <section className="home__container">
        <div className="home__content">
        <div className="home__leading">
          <div className="home__leading__h2">
          <h2 className="home___heading">From Human Intelligence to <span className="colored__title">Artificial Intelligence</span></h2>

          </div>
          <div className="home__subheading">
          <h5 ><span className="colored__title">HitoAI</span> Built to help businesses on their journey to innovation</h5>

          <p>HItoAI Limited is an AI-driven company dedicated to developing and implementing cutting-edge AI technologies across various business sectors. Our mission is to transform business operations with innovative AI solutions that enhance efficiency, productivity, and growth.

          </p>
          </div>
          <div className="home__buttons">
          <a href="/contact" className="btn">Get Started</a>
          <a href="/products" className="btn btn__light">Learn More</a>
          
          </div>
        </div>

        <div className="home__trailing">
          <img src={HomeImg} alt="Hitoai" />
        </div>
        </div>
        <div className="home__wave__1__wrapper"></div>
        <div className="home__wave__2__wrapper"></div>

      </section>
  )
}

export default Hero