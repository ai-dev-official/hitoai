import React from 'react';
import { IoMdClose } from "react-icons/io";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";

const TeamModal = ({ closeModal, isModalOpen, team }) => {
    return (
        <div className={`team__modal__wrapper ${isModalOpen ? 'open' : ''}`}>
            <div className="team__modal__content">
                <h4 className="team__modal__title">
                    {team.name} - {team.position}  
                </h4>
                <IoMdClose size={24} onClick={closeModal} className="team__modal__close" />
                
                <div className="team__modal__teams">
                    <div className="team__modal__leading">
                        <img src={team.img} alt={team.name} className="team__modal__img" />

                    </div>
                    <div className="team__modal__trailing">
                        <p className="team__modal__desc">{team.details}</p>
                        <a href={team.link} target="_blank" rel="noopener noreferrer">
                            <AiOutlineLinkedin size={22} className='fa' /> LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamModal;
