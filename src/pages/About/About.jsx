import React from 'react'
import AboutImg from "../../assets/images/aboutimg.jpg"
import Paragraph from '../../components/Paragraph/Paragraph'

const About = () => {
  return (
    <div className="about__wrapper">
        <div className="about__top">
            <div className="about__leading">
                    <div className="about__trailing__top__content">
                        <h1>At <br /> HitoAI</h1>
                        <Paragraph isdark={true} description={"Our team consists ofindustry-leading AI scientists, engineers, and business strategists who bring a wealth of knowledge and experience to the table. With a track record of successful implementations, we ensure your projects are handled by the best minds in the field."} />
                    </div>
            
            </div>
            <div className="about__trailing">
                
            </div>
        </div>
        <div className="about__middle">
        <div className="about__leading__alt">
                    <div className="about__trailing__top__content">
                        <h1>Our Values</h1>
                        <p> Innovation, sustainability, efficiency, reliability, and customer focus.</p>
                    </div>
            </div>
            <div className="about__trailing__alt">
                <div className="about__trailing__top">
                    <div className="about__trailing__top__content">
                        <h1>Our Vision</h1>
                        <p>
                            Lead in sustainable energy management, empowering businesses and households with smart solutions. 
                        </p>
                    </div>
                </div>
                <div className="about__trailing__bottom">
                    <div className="about__trailing__top__content">
                        <h1>Our Mission</h1>
                        <p>
                            Revolutionise energy management with AI-driven solutions that optimise usage, reduce costs, and promote sustainability.  
                        </p>
                    </div>
                </div>
            </div>
        </div>


        <div className="about__bottom">
        
            <div className="about__buttom__trailing">
                <div className="about__buttom__trailing__top">
                    <div className="about__trailing__top__content">
                        <h1>Why Choose HitoAI? Discover Our Innovative Solutions</h1>
                        <p>
                        At HitoAI, we believe in innovation that works for the betterment of the environment and society. Our AI-driven solutions are designed to optimise energy usage, reduce costs, and promote sustainability. With our dedicated team of experts and cutting-edge technology, we are committed to providing smart and efficient solutions that make a positive impact. Choose HitoAI and join us in revolutionising energy management for a better tomorrow. 
                        </p>
                    </div>
                </div>
                <div className="about__buttom__trailing__bottom">
                    <div className="about__trailing__top__content">
                        <h1>Our Commitment to Sustainability</h1>
                        <p>
                        We are committed to promoting sustainability and reducing carbon footprint through our innovative solutions. Our team of experts is dedicated to providing smart and efficient energy management solutions that make a positive impact on the environment and society. Join us in our mission to create a better tomorrow with HitoAI. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About