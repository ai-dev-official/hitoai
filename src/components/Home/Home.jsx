import React from 'react'
import HeroImage from '../../assets/HeroImage.svg';
import HomeBackground from "../../assets/HeroBG.svg";

const Home = () => {
  return (
    <section className="home__container">
        <div className="left">
          <p>Welcome To</p>

          <h1><span className="gt">GT</span> Web Design</h1>
          <h5 class="elementor-heading-title elementor-size-default">HitoAI Built to help businesses on their journey to innovation</h5>
          <p>HItoAI Limited is an AI-driven company dedicated to developing and implementing cutting-edge AI technologies across various business sectors. Our mission is to transform business operations with innovative AI solutions that enhance efficiency, productivity, and growth.<br/></p>
          <a href="#" className="btn">Get Started</a>
          <a href="#" className="btn cyan">Learn More</a>
        </div>

        <div className="right">
          <img src={HeroImage} alt="Hitoai" />
        </div>

        <img className="home__wrapper" src={HomeBackground} alt="" />

        <div className="polygon-container">
          <img className="polygon" src="images/Polygon.svg" alt="" />
          <img className="polygon2" src="images/Polygon2.svg" alt="" />
          <img className="polygon3" src="images/Polygon3.svg" alt="" />
        </div>
      </section>
  )
}

export default Home