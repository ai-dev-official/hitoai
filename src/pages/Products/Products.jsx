import React from 'react'
import WellBG from "../../assets/images/cleanenergy.jpg"
import NetBG from "../../assets/images/trading.jpg"
import NetIcon from "../../assets/images/suswell.png"
import WellIcon from "../../assets/images/susnet.png"


const Products = () => {

  const products = [
    {
      id: 0,

      img: WellBG,

      icon: WellIcon,

      title: "SusNet",

      subtitle: "The Future of AI-Powered Sustainable Energy Management.",

      intro: "SusNet, HitoAI's flagship product, optimizes energy usage with advanced AI, leading the future of sustainable energy management. Registered in Ireland, it's a benchmark for efficiency and sustainability.",

      desc: "SusNet is HitoAI's flagship product, an AI-powered sustainable energy management system engineered to optimize energy usage. As the global sustainable energy management market expands and artificial intelligence technology advances, HitoAI Limited stands at the industry's forefront. By harnessing advanced AI algorithms, SusNet delivers unmatched energy management solutions, ensuring efficiency and sustainability. SusNet is a registered trademark with the IP Office of Ireland."
    },
    {
      id: 1,

      img: NetBG,

      icon: NetIcon,

      title: "Selwell",

      subtitle: "The Ultimate Trading Platform for Financial Institutions.",

      intro: "Selwell is a state-of-the-art trading platform designed for financial institutions, focused on maximizing profits and reducing risks when trading shares of top global companies.",

      desc: "Selwell is a cutting-edge trading platform specifically developed for financial institutions, designed to maximize profits while minimizing the risks associated with trading shares of globally renowned companies. By leveraging advanced algorithms and real-time data, Selwell empowers institutions to make informed decisions, ensuring optimal trading performance. As the financial markets evolve, Selwell stands out as a robust and reliable solution, offering unparalleled support in navigating the complexities of global share trading."
    },
  ];


  return (
    <div className="product__wrapper">
      {products.map((product, index) => (
        <div key={index} className="page__product__item__wrapper">
          <div className="product__title__wrapper">
            <h2 className="product__common__title">{product.title}</h2>
          </div>
          <div className="product__common__subtitle">
            <p>{product.intro}</p>
          </div>
          <div className="product__content__wrapper">
            <div className="product__content__leading">
              <h2>{product.subtitle}</h2>
              <p className="product__content__icon">
                <img src={product.icon} alt={product.title} /> <span>{product.title}</span>
              </p>
              <div className="product__content__desc">
                <p>{product.desc}</p>
              </div>
            </div>
            <div
              className="product__content__trailing"
              style={{ backgroundImage: `url(${product.img})` }}
            >
              {/* <img src={product.icon} alt={product.title} /> */}
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}

export default Products 