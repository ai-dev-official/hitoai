import React, { memo } from 'react'
import EnergyImage from "../../assets/images/energy.jpg"
import FinanceImage from "../../assets/images/finance.png"
import TechImage from "../../assets/images/tech.png"
import Booking from '../../components/Booking/Booking'
import Paragraph from '../../components/Paragraph/Paragraph'

const Products = () => {

    const products = [
        {
            id: 0,
            img: EnergyImage,
            title: "Energy",
            subtitle: "Sustainable Energy Optimization Solutions",
            desc: "We optimise energy use and reduce costs with AI-driven systems, seamlessly integrating renewables using advanced algorithms and ensuring regulatory compliance through continuous monitoring. Our solutions foster sustainability, efficiency, and risk mitigation.",
        },
        {
            id: 1,
            img: FinanceImage,
            title: "Finance",
            subtitle: " AI-Powered Financial Efficiency for Energy",
            desc: "We tackle challenges in energy management by optimising usage and reducing costs with AI-driven systems. Our solutions integrate renewables seamlessly, enhance reliability, and ensure regulatory compliance through continuous monitoring, mitigating risks and promoting sustainability.",
        },
        {
            id: 2,
            img: TechImage,
            title: "Technology",
            subtitle: "AI-Driven Innovations for Everyday Life",
            desc: "We leverage cutting-edge AI technologies to transform daily life by seamlessly integrating intelligent systems into everyday processes. Our AI solutions optimise operations, enhance efficiency, and drive innovation across various sectors. By incorporating AI into routine tasks, we make advanced technology an integral part of daily living, improving convenience and performance while setting new standards for reliability and automation.",
        },
    ]

    return (
        <div className='service__wrapper'>
            {products.map((product, index) => (
                <div key={index}  className={`product__page__wrapper ${index % 2 === 0 ? 'row-reverse' : ''}`}
                >
                    <div className="product__leading">
                        <div className="page__product__title">
                            <p>{product.title}</p>
                        </div>
                        <h4 className="product__subtitle">{product.subtitle}</h4>
                        <div className="product__desc">
                        <Paragraph description={product.desc}/>
                        </div>
                    </div>

                    <div className="product__trailing">
                        <div className="product__img__1">
                            <img src={product.img} alt={product.title} />
                        </div>
                        <div className={`product__img__2 ${index % 2 === 0 ? 'product__img__2__alt' : ''}`}>
                            <img src={product.img} alt={product.title} />
                        </div>
                    </div>

                    
                </div>
            ))}
            <div className="service__button__wrapper">
            <a className='btn' href="/contact">Get In Touch</a>
            </div>
        </div>
    )
}

export default memo(Products);