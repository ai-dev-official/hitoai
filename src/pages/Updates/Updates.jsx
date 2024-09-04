import React, { memo } from 'react'
import { FaAngleDown } from "react-icons/fa";
import UpdateImage from "../../assets/images/model1.jpg"
import Paragraph from '../../components/Paragraph/Paragraph';



const Updates = () => {
  const updates = [
    {
      id: 0,
      type: "New",
      date: "Thursday 4",
      title: "Completion of SANN-ACTV1 Deployment",
      subtitle: "Achieving 98.97% Accuracy with Our Innovative Hierarchical Model",
      img: UpdateImage,
      content: "The software deployment of this product has now reached completion, marking a significant milestone in our project. We are thrilled to announce that our novel and cutting-edge hierarchical SANN-ACTV1 model has been rigorously evaluated and validated, achieving an impressive R-squared value of 98.97% or higher. This high level of accuracy underscores the robustness and precision of the SANN-ACTV1, which stands as a testament to the innovative work done by our team. Despite the complex formulation of SANN-ACTV1, we are pleased to report that the computing load remains remarkably light, making it easily manageable on basic processors. This efficiency ensures broader accessibility and usability across various platforms without requiring advanced hardware. We also want to extend our sincere appreciation to GitHub and Firebase for their generous support, providing the necessary credits that played a crucial role in the successful development and deployment of our software."
    }
  ]

  return (
    <>
    {updates.map((update, index) => (
            <div key={index} className="updates__wrapper">

            <div className="updates__date">
              <p>{update.date}</p>
              <div className="update__type">
                <p>{update.type}</p>
                <FaAngleDown size={20} />
              </div>
            </div>
            <div className="update__title">
              <h2>{update.title}</h2>
            </div>
            <div className="update__image">
              <img src={update.img} alt={update.title} />
            </div>
      
            <div className="update__details">
              <h3 className="update__subtitle">
                {update.subtitle}
              </h3>
            </div>
            <div className="update__content">
             <Paragraph description={update.content}/>
            </div>

            <div className="login__button">
              <a className='btn' href="/login">Test Demo</a>
            </div>
          </div>
    ))}

    </>
  )
}

export default memo(Updates)