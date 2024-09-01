import React, { useState } from "react";
import ProductItem from "./ProductItem";
import PackImage from "../../assets/pack.png";
import PackImage1 from "../../assets/pack1.png";
import PackImage2 from "../../assets/pack2.png";
import ProductImage from "../../assets/model.png";
import AltProductImage from "../../assets/model.png"; // Alternate product image

const Products = () => {
  const [isSecondProductVisible, setIsSecondProductVisible] = useState(false);

  const handleToggle = () => {
    setIsSecondProductVisible(!isSecondProductVisible);
  };

  // Data for the first product item
  const firstProductData = {
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur perspiciatis accusantium repudiandae a sed earum!",
    packImages: [
      { src: PackImage, alt: "Pack Image 1", text: "Pack 1 description." },
      { src: PackImage1, alt: "Pack Image 2", text: "Pack 2 description." },
      { src: PackImage2, alt: "Pack Image 3", text: "Pack 3 description." },
    ],
    productImage: { src: ProductImage, alt: "Product Image" },
  };

  // Data for the second product item
  const secondProductData = {
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    packImages: [
      { src: PackImage2, alt: "Pack Image A", text: "Pack A description." },
      { src: PackImage1, alt: "Pack Image B", text: "Pack B description." },
      { src: PackImage, alt: "Pack Image C", text: "Pack C description." },
    ],
    productImage: { src: AltProductImage, alt: "Alternate Product Image" },
  };

  return (
    <section id="product__wrapper">
      <div className="product__heading">
        <h1>
          Everything You Need To <br />
          Get Started
        </h1>
      </div>

      <div className="product__button">
        <input
          id="product__switch"
          className="product__switch"
          type="checkbox"
          checked={isSecondProductVisible}
          onChange={handleToggle}
        />
        <label className="product__switch__label" htmlFor="product__switch">
          <p className="product__label__monthly">SusNet</p>
          <p className="product__label__annually">SelWell</p>
          <span className="product__switch__button"></span>
        </label>
      </div>

      {/* Render ProductItem with the appropriate data based on the toggle state */}
      {!isSecondProductVisible && <ProductItem {...firstProductData} />}
      {isSecondProductVisible && <ProductItem {...secondProductData} />}
    </section>
  );
};

export default Products;
