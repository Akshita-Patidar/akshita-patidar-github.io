import React from 'react';
import "./Education.css"
import csuf from "../assets/img/csuf.webp"
import svvv from "../assets/img/svvv.jpeg"

const EducationCard = () => {
  return (
    <div className='card-section' id ="ecard">
        <h2  className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4"> Education</h2>
        <div className="card-container">
    <div className="card" >
      <img src={csuf} alt="Profile Image" />
      <div className="details">
        
        <h2>Degree: Master of Science in Computer Science</h2>
        <p>School: California State University Fullerton</p>
        <p>Year: 2022 - 2024</p>
      </div>
    </div>

    <div className="card" >
      <img src={svvv} alt="Profile Image" />
      <div className="details">
        
        <h2>Degree: Bachelor of Technology in Information Technology</h2>
        <p>School: SVVV, Indore</p>
        <p>Year: 2017 - 2021</p>
      </div>
    </div>
    </div>
    </div>
  );
}

export default EducationCard;
