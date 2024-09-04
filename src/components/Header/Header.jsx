import React, { useState, useEffect, useRef } from 'react';
import "../../index.css";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import LogoImage from "../../assets/images/newlogo.png"
import ToggleMode from '../ToggleMode/ToggleMode';



const Header = () => {
  // State for mobile navigation
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  
  // Refs for intersection observers
  const sectionRefs = useRef([]);

  // Toggle mobile navigation
  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  // Close mobile navigation when a menu item is clicked
  const handleMobileMenuItemClick = () => {
    setIsMobileNavActive(false);
  };

  useEffect(() => {
    const options = {
      threshold: 0.8,
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(`Observing: ${entry.target.id}, isIntersecting: ${entry.isIntersecting}`);
        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
          const currentActive = document.querySelector('.desktop__nav a.active');
          if (currentActive) {
            currentActive.classList.remove('active');
          }
  
          const newActive = document.querySelector(`.desktop__nav a[href="#${entry.target.id}"]`);
          if (newActive) {
            newActive.classList.add('active');
          }
        }
      });
    }, options);
  
    sectionRefs.current.forEach((section) => {
      observer.observe(section);
    });
  
    return () => {
      sectionRefs.current.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div>
      {/* Mobile Navigation */}
      <div className={`mobile__nav ${isMobileNavActive ? 'active' : ''}`}>
        <ul className="menu__items">
          <li onClick={handleMobileMenuItemClick}>
            <a href="/">Home</a>
          </li>
          <li onClick={handleMobileMenuItemClick}>
            <a href="/products">Products</a>
          </li>
          <li onClick={handleMobileMenuItemClick}>
            <a href="/services">Services</a>
          </li>
          <li onClick={handleMobileMenuItemClick}>
            <a href="/updates">Updates</a>
          </li>
          <li onClick={handleMobileMenuItemClick}>
            <a href="/about">About</a>
          </li>
          <li onClick={handleMobileMenuItemClick}>
            <a href="/contact">Contact</a>
          </li>
          <li onClick={handleMobileMenuItemClick}>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a><ToggleMode className={`change-theme`} /></a>
          </li>
        </ul>
      </div>

      {/* Desktop Navigation */}
      <nav className="desktop__nav">
       <div className="nav__wrapper">
       <div className="logo">
          <a href="/">
            <img src={LogoImage} alt="logo" className="logo__img"/>
          </a>
        </div>

        <div className="menu__icon" onClick={toggleMobileNav}>
        <BsFillMenuButtonWideFill  size={24} />
        </div>

        <ul className="menu__items">
          <li>
            <a href="/" className="active">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/updates">Updates</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact" className="btn">Contact</a>
          </li>
          <li>
            <a><ToggleMode className={`change-theme`} /></a>
          </li>
        </ul>
       </div>
      </nav>

      {/* Sections to observe (for intersection observer) */}
      <div id="home" ref={(el) => sectionRefs.current[0] = el}></div>
      <div id="products" ref={(el) => sectionRefs.current[1] = el}></div>
      <div id="services" ref={(el) => sectionRefs.current[2] = el}></div>
      <div id="updates" ref={(el) => sectionRefs.current[3] = el}></div>
      <div id="about" ref={(el) => sectionRefs.current[4] = el}></div>
      <div id="contact" ref={(el) => sectionRefs.current[5] = el}></div>
    </div>
  );
};

export default Header;
