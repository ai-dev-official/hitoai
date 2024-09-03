import React, { useState } from "react";
import ProductItem from "./ProductItem";
import ProductImage from "../../assets/images/model.png";
import AltProductImage from "../../assets/images/model.png"; // Alternate product image

const Products = () => {
  const [isSecondProductVisible, setIsSecondProductVisible] = useState(false);
  const [isSusNet, setSIsSusNet] = useState(false);



  const handleToggle = () => {
    setIsSecondProductVisible(!isSecondProductVisible);
    setSIsSusNet(true);
  };

  // Data for the first product item
  const firstProductData = {
    description: "SusNet is HitoAI’s flagship AI-powered sustainable energy management system designed to optimize energy usage, ensuring efficiency and sustainability in the growing market. SusNet is a registered trademark with the IP Office of Ireland.",
    packImages: [
      { id:0,  text: "SusNet is a fully automated energy management network led by AI techniques. The POC of 50-65% bill cutting is validated." },
      { id:1,  text: "SusNet is enabled with global and local optimisation for energy consumption via specific and highly correlational features (>90%) with various IOT components." },
      { id:2, text: "SusNet is designed with the close-loop structure to process comprehensive online data into a final decision and automatically act back on local and global components in seconds." },
      { id:3, text: "Easy and simple to install without any technical knowledge, simple UI to sign up and that is really it!" },
    ],
    
    productImage: { src: ProductImage, alt: "Product Image" },
  };

  // Data for the second product item
  const secondProductData = {
    description: "Selwell is an advanced trading platform designed specifically for financial institutions to optimize profits while reducing risks associated with trading shares of globally recognized companies.",
    packImages: [
      { id:0, text: "This platform is fully automated and AI-powered, requiring only a connection to your trading account, making it ideal for wealth management and financial institutions. During testing, it demonstrated a validated annual return of at least 30%." },
      { id:1,  text: "Selwell utilizes complex hybrid statistical models, deep reinforcement learning algorithms, and sophisticated integration with IoT Information Theory." },
      { id:2, text: "It features a cutting-edge AI-enabled API design and provides end-to-end encryption secured by Google, ensuring that financial and personal data are processed on the client server, with no information communicated or stored on HitoAI’s servers." },
      { id:3,  text: "A personal version for individual traders will be available soon. Please check the updates section regularly." },
    ],
    productImage: { src: AltProductImage, alt: "Alternate Product Image" },
  };

  return (
    <section id="product__wrapper">
      <div className="common__container">
        <h2 className="common__title product__title">Discover the Future with Our Products</h2>
        <div className="product__button">
          <input
            id="product__switch"
            className="product__switch"
            type="checkbox"
            checked={isSecondProductVisible}
            onChange={handleToggle}
          />
          <label className="product__switch__label" htmlFor="product__switch">
            <p className="product__label__susnet">SusNet</p>
            <p className="product__label__suswell">SelWell</p>
            <span className="product__switch__button"></span>
          </label>
        </div>

        {/* Render ProductItem with the appropriate data based on the toggle state */}
        {!isSecondProductVisible && <ProductItem {...firstProductData} isSusNet={true} />}
        {isSecondProductVisible && <ProductItem {...secondProductData} />}
      </div>
    </section>
  );
};

export default Products;
