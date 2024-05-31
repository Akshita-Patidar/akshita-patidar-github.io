import React from 'react';
import Pic from '../assets/img/profile.jpg'; // Import your photo here
import "./AboutMe.css"

const AboutMe = () => {
  return (
    <div>
    <section className="about-me" id="about">
      <div className="image">
        <img src={Pic} alt="Profile Picture" />
      </div>
      <div className="summary summary-background" style={{ fontSize :'0.4cm'  }}>
        <h1>About Me</h1>
       
        <ul>
    <li>Software engineer with a MS in Computer Science and 2 years of work experience.</li>
    <p></p>
    <li>Proficient in diverse programming languages and frameworks, including Python, Java, JavaScript, and React.</li>
    <p></p>
    <li>Strong background in Data Structures and Algorithms (DSA), ensuring efficient and optimized solutions.</li>
    <p></p>
    <li>More than one year of experience as a ServiceNow Developer and I am a Certified ServiceNow System Administrator.</li>
    <p></p>
    <li>Extensive experience in developing scalable web applications with a focus on both backend and frontend technologies.</li>
    <p></p>
    <li>Demonstrated ability to deliver complex projects on time.</li>
    <p></p>
    <li>Skilled in problem-solving and optimization to enhance user experience.</li>
    <p></p>
    <li>Committed to continuous learning and staying abreast of industry trends.</li>
    <p></p>
    {/* <li>Effective communicator and team player, collaborating seamlessly across departments.</li>
    <p></p>
    <li>Excited to apply expertise in a dynamic and innovative setting.</li>
    <p></p>
    <li>Proven track record of achieving project milestones and exceeding expectations.</li> */}
  </ul>
    
    
  
      
        <p></p>
      </div>
    </section>
    </div>
  );
}

export default AboutMe;
