import { Col, Modal, Button } from 'react-bootstrap';

//import { SkillModal } from './SkillModal';
import {SkillModal} from './SkillsOverlay'
import React, { useState } from 'react';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
// import java1 from "../assets/img/java.png"
import js from "../assets/img/java-script.png"
// import springboot from "../assets/img/springboot.png"
import reactjs from "../assets/img/reactjs.png";
import gitpng from "../assets/img/git_logo.png"
import colorSharp from "../assets/img/color-sharp.png"
// import tnf from "../assets/img/Tensorflow_logo.svg.png"
import './ExperienceSection.css'
import mysqldb from "../assets/img/mysql.png"
import microservices from "../assets/img/microservices.png"
import pythonpng from "../assets/img/Python.png"
// import docker from "../assets/img/docker.png"
// import maven from "../assets/img/maven.png"
// import aws from "../assets/img/aws.png"
import htmlpng from "../assets/img/htmlpng.webp"
import csspng from "../assets/img/css.png"
import postman from "../assets/img/postman.svg"
import redux from "../assets/img/redux.png"
import jenkins from "../assets/img/jenkins.png"
import mongo from "../assets/img/mongo.jpg"
import vs from "../assets/img/VS-code.png"
import node from "../assets/img/node.png"






export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 0 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 0 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };

  

  return (

   <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2 className="text-center text-sm md:text-base">Skills</h2>
                        <p><br></br></p>
                        <Carousel responsive={responsive} infinite={true}  autoPlay={true} autoPlaySpeed={3500} showDots={true}  arrows={true} slidesToSlide={4} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img className="highlightable-image w-40 md:w-auto mx-auto" src={js} alt="Image" />
                                <h5 className="text-center text-sm md:text-sm">Javascript</h5>
                            </div>
                            <div className="item">
                                <img className="highlightable-image w-40 md:w-auto mx-auto" src={pythonpng} alt="Image" />
                                <h5 className="text-center text-sm md:text-base">Python</h5>
                            </div>
                            <div className="item">
                                <img className="highlightable-image w-40 md:w-auto mx-auto" src={node} alt="Image" />
                                <h5 className="text-center text-sm md:text-base">Node JS</h5>
                            </div>
                            <div className="item">
                                <img className="highlightable-image w-40 md:w-auto mx-auto" src={reactjs} alt="Image" />
                                <h5 className="text-center text-sm md:text-sm">React JS</h5>
                            </div>
                            <div className="item">
                                <img className="highlightable-image w-40 md:w-auto mx-auto" src={mysqldb} alt="Image" />
                                <h5  className="text-center text-sm md:text-sm">MYSQL</h5>
                            </div>
                            <div className="item">
                                <img className="highlightable-image w-40 md:w-auto mx-auto" src={microservices} alt="Image" />
                                <h5 className="text-center text-sm md:text-sm">MicroServices</h5>
                            </div>
                            <div className="item">
                                <img className="highlightable-image w-40 md:w-auto mx-auto" src={gitpng} alt="Image" />
                                <h5 className="text-center text-sm md:text-base">GIT</h5>
                            </div>
                            <div className="item">
                                <img className="highlightable-image w-40 md:w-auto mx-auto" src={postman} alt="Image" />
                                <h5 className="text-center text-sm md:text-base">Postman</h5>
                            </div>
                            <div className="item">
                                <img className="highlightable-image w-40 md:w-auto mx-auto" src={redux} alt="Image" />
                                <h5 className="text-center text-sm md:text-base">Redux</h5>
                            </div> 
                            <div className="item">
                                <img className="highlightable-image w-40 md:w-auto mx-auto" src={mongo} alt="Image" />
                                <h5 className="text-center text-sm md:text-base">MongoDB</h5>
                            </div> 
                            <div className="item">
                                <img className="highlightable-image w-40 md:w-auto mx-auto" src={jenkins} alt="Image" />
                                <h5 className="text-center text-sm md:text-base">Jenkins</h5>
                            </div>
                            <div className="item">
                                <img className="highlightable-image w-40 md:w-auto mx-auto" src={htmlpng} alt="Image" />
                                <h5 className="text-center text-sm md:text-base">HTML5</h5>
                            </div>
                            <div className="item">
                                <img className="highlightable-image w-40 md:w-auto mx-auto" src={csspng} alt="Image" />
                                <h5 className="text-center text-sm md:text-base">CSS3</h5>
                            </div>

                            <div className="item">
                                <img className="highlightable-image w-40 md:w-auto mx-auto" src={vs} alt="Image" />
                                <h5 className="text-center text-sm md:text-base">Visual Studio Code</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    <SkillModal/>
    </section>
    

   
  )
}
