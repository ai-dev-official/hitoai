import React, { useState } from 'react'
import ArslanImage from "../../assets/arslan.png"
import AswanthImage from "../../assets/aswanth.png"
import BaqerImage from "../../assets/baqer.jpg"
import FatimaImage from "../../assets/fatima.png"
import MinaImage from "../../assets/mina.jpg"
import OmkarImage from "../../assets/omkar.jpeg"
import SadekImage from "../../assets/sadek.jpg"
import ShahramImage from "../../assets/shahram.jpeg"
import ShenalImage from "../../assets/shenal.jpg"
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { AiOutlineLinkedin } from "react-icons/ai";
import TeamModal from './TeamModal'




const Team = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTeam, setCurrentTeam] = useState(null); // Set initial state to null

  const openModal = (team) => {
    setCurrentTeam(team); // Pass the specific team member
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const teams = [

    {
      id: 4,
      img: ArslanImage,
      name: "Arslan Khan",
      position: "Senior Full Stack Enginneer",
      details: "Arslan Khan is a Senior Full Stack Engineer at Upspace, specialising in driving the development of transformative solutions for the coworking space industry. Leveraging his expertise in React Native, MongoDB Atlas, Cloudinary, and Firebase Storage, he leads projects from inception to completion, ensuring they are both innovative and user-centric.",
      link: "https://www.linkedin.com/in/m-arslankhan/"
    },
    {
      id: 5,
      img: AswanthImage,
      name: "Aswanth Manoharan",
      position: "Data Scientist/Machine Learning Expert",
      details: "Aswanth Manoharan is a data science and machine learning expert with extensive experience in data analysis, machine learning, and full-stack web development. He has worked as a Data Science Trainee, Machine Learning Intern, and Python Development Intern. As a freelancer, he developed a web application for a supermarket using Django Rest Framework and React.js. Aswanth has strong skills in Python, Django, React.js, and various machine-learning frameworks, and is dedicated to continuous learning and innovation.",
      link: "https://www.linkedin.com/in/aswanth-manoharan-3807a41ba/"
    },
    {
      id: 7,
      img: BaqerImage,
      name: "Baqer AI Shakhs, MBA",
      position: "Business Developer Advisor",
      details: "Baqer Al Shakhs is a Business Development and Data Analytics Specialist with over eight years of experience in startups, retail, and consulting. He holds an MBA and is pursuing an MS in Data Analytics at Dublin Business School. Baqer excels in solving complex challenges and delivering innovative solutions using his skills in data modeling, machine learning, Python, and R. His expertise in project management and strategic thinking has consistently driven growth and optimized operations",
      link: "https://www.linkedin.com/in/baqeralshakhs/"
    },
    {
      id: 8,
      img: FatimaImage,
      name: "Fatima Abdullahi Wan",
      position: "Graphic Designer & Marketing Executive",
      details: "Fatima is a recent Product Design graduate from Maynooth University with experience in graphic design, CAD modelling, prototyping, and marketing. She is currently pursuing a master’s in Medical Device Design at NCAD, applying her creativity and innovation skills to the medical field.",
      link: "#"
    },
    {
      id: 1,
      img: MinaImage,
      name: "Dr Mina Ghahrenanzamaneh",
      position: "Co-Founder & Managing Director",
      details: "Dr. Mina Ghahrenanzamaneh is a university lecturer and successful entrepreneur in the fields of EdTech and AI. She directs and owns two Irish startups, BIASADRA and HitoAI Limited. Additionally, she is a shareholder in GalMAX, a company innovating in bioprocessing at UCD.",
      link: "https://www.linkedin.com/in/mina-ghahremanzamaneh-14b34a38/?originalSubdomain=ie"
    },
    {
      id: 6,
      img: OmkarImage,
      name: "Omkar",
      position: "Product Designer",
      details: "Omkar is a V-shaped Product Designer with experience in designing innovative solutions for enterprise SAAS, B2B/B2C platforms covering mobile and web applications. She fosters a user-centered approach and business-oriented solutions throughout the entire design lifecycle, which includes requirement gathering, design thinking, rapid prototyping, user testing, and collaborating with cross-functional teams. Additionally, Omkar possesses expertise in 3D, AR, and VR, along with motion design, interaction design and visual design.",
      link: "https://www.linkedin.com/in/omkarpatil997/"
    },
    {
      id: 9,
      img: SadekImage,
      name: "Sadek Moussaoui",
      position: "Business Analyst & Developer",
      details: "Sadek Moussaoui is a versatile professional with over seven years of experience in the banking sector, specializing in data analysis, compliance, and project management. He holds a Master’s degree in Information Systems from University College Dublin and is passionate about technology, cloud computing, and open-source intelligence (OSINT). Known for his flexibility and multidisciplinary expertise, he excels in synthesizing information to drive innovation and is great at collaboration to achieve business goals and continuous improvement.",
      link: "https://www.linkedin.com/in/sadek-moussaoui/"
    },
    {
      id: 0,
      img: ShahramImage,
      name: "Dr Shahram Azizi, PHD",
      position: "CEO & Co-Founder",
      details: "Dr. Shahram Azizi is a renowned Senior Lecturer in Artificial Intelligence and Computing with over two decades of experience in data-driven solutions across diverse sectors. Since 2018, he has excelled as a Senior Data Scientist, leading the development of AI-powered software and machinery. His profound expertise and pioneering efforts continuously drive progress in AI and computing.",
      link: "https://www.linkedin.com/in/shahram-azizi-sazi-phd-in-data-and-knowledge-processing-6149342a/"
    },
    {
      id: 3,
      img: ShenalImage,
      name: "Shenal Elekutigge",
      position: "Chief Scientist Officer",
      details: "Shenal serves as the Chief Scientific Officer and is a seasoned AI modeler with a proven track record in developing and deploying advanced AI solutions, particularly in startup environments. His expertise encompasses machine learning, data analytics, and predictive modeling.",
      link: "https://www.linkedin.com/in/shenal-fernando/"
    },

  ];

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  const handleTeamModal = () => {

  }

  return (
    <section className="section">
    <div className="common__container">
      <h2 className="common__title">Meet the Minds Behind the Machine</h2>
      <div className="team__wrapper">
        {teams.map((team, index) => (
          <div className="team__item" key={index}>
            <a href={team.link} target="_blank" rel="noopener noreferrer">
              <AiOutlineLinkedin size={30} className='fa' />
            </a>
            <p className="team__desc">{truncateText(team.details, 15)}</p>
            <img src={team.img} alt={team.name} className="team__img" />
            <h3 className="team__name">{team.name}</h3>
            <span className='team__more' onClick={() => openModal(team)}>Learn More</span>
          </div>
        ))}
      </div>
    </div>
    {isModalOpen && currentTeam && (
      <TeamModal
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        team={currentTeam} // Pass the current team member to the modal
      />
    )}
  </section>
  )
}

export default Team