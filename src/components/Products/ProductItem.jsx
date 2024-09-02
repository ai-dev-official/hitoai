import React, { useState } from "react";
import SimulatorModal from "../Simulator/Simulator";

const ProductItem = ({ description, packImages, productImage, isSusNet }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="product__item__wrapper">
      <p className="product__item__desc">{description}</p>
      <div className="product__container">
        <div className="product__box">
          {packImages.map((image, index) => (
            <div className="product__box__item" key={index}>
              <div className="product__item__id">
                <h1 >{image.id}</h1>
              </div>
              {/* <img src={image.src} alt={image.alt} /> */}
              <div className="product__item__text">
                <p>{image.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="product__image">
          <img src={productImage.src} alt={productImage.alt} />
          <div className="product__buttons__wrapper">
        <a  href="/products" className="btn" type="button">Learn More</a>
        <a  href="#contact" className="btn" type="button">Request Demo</a>
        {isSusNet && (
          <a  onClick={openModal} className="btn" type="button">Try Simulator </a>
        )}
      </div>
        </div>
      </div> 
      {isModalOpen && (
      <SimulatorModal 
       closeModal={closeModal}
       isModalOpen={isModalOpen}
      /> 
      )}
    </div>
  );
};

export default ProductItem;
