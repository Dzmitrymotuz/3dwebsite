import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from "../assets/icons"


const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-x1 text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-2 h-4 object-contain'/>
        </Link>
    </div>
)
const renderContent ={
    1: (
        <h1 className='sm:text-x1 sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>Hi, I am <span className='font-semibold'>Dimitry</span><br/>A software engineer.</h1>
    ),
    2: (
        <InfoBox text="Worked with many comanies and picked up a lot of skills"
        link="/about"
        btnText='Learn more'
        />
    ),
    3: (
        <InfoBox text="Led multiple projects to success"
        link="/projects"
        btnText='Take a look'
        />
    ),
    4: (
        <InfoBox text="Need a project done or looking for a dev?"
        link="/contact"
        btnText="Let's talk"
        />
    )
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
  
}

export default HomeInfo
