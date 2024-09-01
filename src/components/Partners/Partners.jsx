import React, { useEffect, useState, useRef } from 'react';
import Partner1Image from "../../assets/AmazonLogo.png";
import Partner2Image from "../../assets/auth0.jpeg";
import Partner3Image from "../../assets/f6s.jpeg";
import Partner4Image from "../../assets/github.jpeg";
import Partner5Image from "../../assets/imr.jpeg";
import Partner6Image from "../../assets/leo.jpeg";

const Partners = () => {
  const [activeCheckpoint, setActiveCheckpoint] = useState(0);
  const totalItems = 6; // Total number of unique partner items
  const intervalTime = 3000; // Time interval for moving to the next checkpoint
  const carouselRef = useRef(null);
  const sponsorCarouselRef = useRef(null);

  // Auto-scroll to the next checkpoint
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCheckpoint((prev) => (prev + 1) % totalItems);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [totalItems]);

  // Scroll the upper carousel from left to right
  useEffect(() => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.firstChild.offsetWidth;
      const scrollPosition = itemWidth * activeCheckpoint;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [activeCheckpoint, totalItems]);

  // Scroll the lower carousel from right to left
  useEffect(() => {
    if (sponsorCarouselRef.current) {
      const itemWidth = sponsorCarouselRef.current.firstChild.offsetWidth;
      const scrollPosition = itemWidth * (totalItems - 1 - activeCheckpoint); // Adjust the scroll position
      sponsorCarouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [activeCheckpoint, totalItems]);

  return (
    <section id='#partners' className='partner__container'>
      <div className="sponsors__wrapper">
        <div className="scrolling__wrapper__second" ref={sponsorCarouselRef}>
          {Array.from({ length: totalItems }).map((_, index) => (
            <div className="sponsor__item" key={index}>
              <img src={eval(`Partner${index + 1}Image`)} alt={`Partner ${index + 1}`} className='partner__img' />
              Partner {index + 1}
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
          {Array.from({ length: totalItems }).map((_, index) => (
            <div className="partner__item" key={index}>
              <img src={eval(`Partner${index + 1}Image`)} alt={`Partner ${index + 1}`} className='partner__img' />
              Partner {index + 1}
            </div>
          ))}
          {/* Repeat items to simulate infinite loop */}
          {Array.from({ length: totalItems }).map((_, index) => (
            <div className="partner__item" key={index + totalItems}>
              <img src={eval(`Partner${index + 1}Image`)} alt={`Partner ${index + 1}`} className='partner__img' />
              Partner {index + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;













// import React, { useEffect, useState, useRef } from 'react';
// import Partner1Image from "../../assets/AmazonLogo.png";
// import Partner2Image from "../../assets/auth0.jpeg";
// import Partner3Image from "../../assets/f6s.jpeg";
// import Partner4Image from "../../assets/github.jpeg";
// import Partner5Image from "../../assets/imr.jpeg";
// import Partner6Image from "../../assets/leo.jpeg";

// const Partners = () => {

//   const [activeCheckpoint, setActiveCheckpoint] = useState(0);
//   const totalItems = 6; // Total number of unique partner items
//   const intervalTime = 3000; // Time interval for moving to the next checkpoint (3 seconds)
//   const carouselRef = useRef(null);
//   const sponsorCarouselRef = useRef(null);

//   // Auto-scroll to the next checkpoint
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveCheckpoint((prev) => (prev + 1) % totalItems);
//     }, intervalTime);

//     return () => clearInterval(interval);
//   }, [totalItems]);



//   useEffect(() => {
//     if (sponsorCarouselRef.current) {
//       const itemWidth = sponsorCarouselRef.current.firstChild.offsetWidth;
//       const scrollPosition = itemWidth * activeCheckpoint;
//       sponsorCarouselRef.current.scrollTo({
//         right: scrollPosition,
//         behavior: 'smooth',
//       });

//       // Check if we need to reset the scroll position to create an infinite loop effect
//       if (activeCheckpoint === totalItems) {
//         setTimeout(() => {
//           sponsorCarouselRef.current.scrollTo({
//             right: 0,
//             behavior: 'auto',
//           });
//           setActiveCheckpoint(0);
//         }, intervalTime);
//       }
//     }
//   }, [activeCheckpoint, totalItems, intervalTime]);



//   useEffect(() => {
//     if (carouselRef.current) {
//       const itemWidth = carouselRef.current.firstChild.offsetWidth;
//       const scrollPosition = itemWidth * activeCheckpoint;
//       carouselRef.current.scrollTo({
//         left: scrollPosition,
//         behavior: 'smooth',
//       });

//       // Check if we need to reset the scroll position to create an infinite loop effect
//       if (activeCheckpoint === totalItems) {
//         setTimeout(() => {
//           carouselRef.current.scrollTo({
//             left: 0,
//             behavior: 'auto',
//           });
//           setActiveCheckpoint(0);
//         }, intervalTime);
//       }
//     }
//   }, [activeCheckpoint, totalItems, intervalTime]);





//   return (
//     <section id='#partners' className='partner__container'>
//        <div className="sponsors__wrapper">
//         <div className="scrolling__wrapper__second" ref={sponsorCarouselRef}>
//         <div className="sponsor__item"> <img src={Partner1Image} alt="" className='partner__img' /> Partner 1</div>
//           <div className="sponsor__item"> <img src={Partner2Image} alt="" className='partner__img' /> Partner 2</div>
//           <div className="sponsor__item"> <img src={Partner3Image} alt="" className='partner__img' /> Partner 3</div>
//           <div className="sponsor__item"> <img src={Partner4Image} alt="" className='partner__img' /> Partner 4</div>
//           <div className="sponsor__item"> <img src={Partner5Image} alt="" className='partner__img' /> Partner 5</div>
//           <div className="sponsor__item"> <img src={Partner6Image} alt="" className='partner__img' /> Partner 6</div>
//         </div>
//       </div>

//       <div className="checkpoint__wrapper">
//         {Array(totalItems).fill().map((_, index) => (
//           <div
//             key={index}
//             className={`checkpoint__item ${index === activeCheckpoint ? 'active' : ''}`}
//             onClick={() => setActiveCheckpoint(index)}
//           />
//         ))}
//       </div>
      
//       <div className="partners__wrapper">
//         <div className="scrolling__wrapper" ref={carouselRef}>
//           <div className="partner__item"> <img src={Partner1Image} alt="" className='partner__img' /> Partner 1</div>
//           <div className="partner__item"> <img src={Partner2Image} alt="" className='partner__img' /> Partner 2</div>
//           <div className="partner__item"> <img src={Partner3Image} alt="" className='partner__img' /> Partner 3</div>
//           <div className="partner__item"> <img src={Partner4Image} alt="" className='partner__img' /> Partner 4</div>
//           <div className="partner__item"> <img src={Partner5Image} alt="" className='partner__img' /> Partner 5</div>
//           <div className="partner__item"> <img src={Partner6Image} alt="" className='partner__img' /> Partner 6</div>
//           {/* Repeat items to simulate infinite loop */}
//           <div className="partner__item"> <img src={Partner1Image} alt="" className='partner__img' /> Partner 1</div>
//           <div className="partner__item"> <img src={Partner2Image} alt="" className='partner__img' /> Partner 2</div>
//           <div className="partner__item"> <img src={Partner3Image} alt="" className='partner__img' /> Partner 3</div>
//           <div className="partner__item"> <img src={Partner4Image} alt="" className='partner__img' /> Partner 4</div>
//           <div className="partner__item"> <img src={Partner5Image} alt="" className='partner__img' /> Partner 5</div>
//           <div className="partner__item"> <img src={Partner6Image} alt="" className='partner__img' /> Partner 6</div>
//         </div>
//       </div>

      
      

//     </section>
//   );
// };

// export default Partners;
