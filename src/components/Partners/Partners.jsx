import React, { useEffect, useState, useRef } from 'react';
import Partner1Image from "../../assets/images/mongo-db.jpeg";
import Partner2Image from "../../assets/images/auth0.jpeg";
import Partner3Image from "../../assets/images/f6s.jpeg";
import Partner4Image from "../../assets/images/github.jpeg";
import Partner5Image from "../../assets/images/imr.jpeg";
import Partner6Image from "../../assets/images/biasadra.jpg";
import Investor1Image from "../../assets/images/ethaum.png";
import Investor2Image from "../../assets/images/auth0.jpeg";
import Investor3Image from "../../assets/images/trans4mers.webp";
import Investor4Image from "../../assets/images/imr.jpeg";

const Partners = () => {
  const [activeCheckpoint, setActiveCheckpoint] = useState(0);
  const totalItems = 6; // Total number of unique partner items
  const totalInvestorItems = 4; // Total number of unique sponsors items
  const intervalTime = 3000; // Time interval for moving to the next checkpoint
  const carouselRef = useRef(null);
  const sponsorCarouselRef = useRef(null);

  const partners = [Partner1Image, Partner2Image, Partner3Image, Partner4Image, Partner5Image, Partner6Image];
  const investors = [Investor1Image, Investor2Image, Investor3Image, Investor4Image];

  // Auto-scroll to the next checkpoint
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCheckpoint((prev) => (prev + 1) % totalItems);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [totalItems]);

  // Scroll the lower carousel from right to left
  useEffect(() => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.firstChild.offsetWidth;
      const scrollPosition = itemWidth * activeCheckpoint;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });

      // Reset scroll position to create continuous effect
      if (activeCheckpoint === totalInvestorItems - 1) {
        setTimeout(() => {
          carouselRef.current.scrollTo({
            left: 0,
            behavior: 'auto',
          });
          setActiveCheckpoint(0);
        }, intervalTime);
      }
    }
  }, [activeCheckpoint, totalInvestorItems, intervalTime]);

  // Scroll the upper carousel from left to right
  useEffect(() => {
    if (sponsorCarouselRef.current) {
      const itemWidth = sponsorCarouselRef.current.firstChild.offsetWidth;
      const scrollPosition = itemWidth * activeCheckpoint;
      sponsorCarouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });

      // Reset scroll position to create continuous effect
      if (activeCheckpoint === totalItems - 1) {
        setTimeout(() => {
          sponsorCarouselRef.current.scrollTo({
            left: 0,
            behavior: 'auto',
          });
          setActiveCheckpoint(0);
        }, intervalTime);
      }
    }
  }, [activeCheckpoint, totalItems, intervalTime]);

  return (
    <section id='partners' className='partner__container'>
      <h2 className="common__title">Our Trusted Collaborators</h2>
      <div className="sponsors__wrapper">
        <div className="scrolling__wrapper__second" ref={sponsorCarouselRef}>
          {partners.map((image, index) => (
            <div className="sponsor__item" key={index}>
              <span>Partner</span>
              <img src={image} alt={`Partner ${index + 1}`} className='partner__img' />
            </div>
          ))}
        </div>
      </div>

      <div className="checkpoint__wrapper">
        {Array(totalItems).fill().map((_, index) => (
          <div
            key={index}
            className={`checkpoint__item ${index === activeCheckpoint ? 'active' : ''}`}
            onClick={() => setActiveCheckpoint(index)}
          />
        ))}
      </div>

      <div className="partners__wrapper">
        <div className="scrolling__wrapper" ref={carouselRef}>
          {investors.concat(investors).map((image, index) => (
            <div className="partner__item" key={index}>
              <span>Investor</span>
              <img src={image} alt={`Investor ${index % totalInvestorItems + 1}`} className='partner__img' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
