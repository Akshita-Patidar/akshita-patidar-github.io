import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/SEO.jpeg";
import './Project.css'
import colorSharp2 from "../assets/img/color-sharp2.png";
import billing from "../assets/img/billing.jpg"
import moviereview from "../assets/img/moviereview.png"
import ecommerce from "../assets/img/ecommerce-websites.jpg"
import todo from "../assets/img/Todo.png"
import Portfolio from "../assets/img/Portfolio.png"
import chat from "../assets/img/chat.png"
import bci from "../assets/img/BCI.jpeg"
import ht from "../assets/img/HT.webp"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  
  const projects = [
    {
      title: "Ecommerce Website",
      description: "Design & Development" ,
      imgUrl: ecommerce,
      githubLink:'https://github.com/Akshita-Patidar/E-commerce-website-using-React-Redux'
    },
    {
      title: "Billing System",
      description:"Design & Development",
      imgUrl: billing,
      githubLink:"https://github.com/Akshita-Patidar/Billing-System"
    },
    {
      title: "Todo List",
      description: "Design & Development",
      imgUrl: todo,
      githubLink:"https://github.com/Akshita-Patidar/nodejs-todo-master",
    },
    {
      title: "Chat Application",
      description: "Design & Development",
      imgUrl: chat,
      githubLink:"https://github.com/Akshita-Patidar/nodejs-chat-app-master",
    },
    // {
    //   title: "Single Cycle Architecture",
    //   description: "Design & Development",
    //   imgUrl: ssa,
    //   githubLink:"https://github.com/vaishnavimore23/SingleCycleArchitecture",
    // },
    {
      title: "PortFolio Project",
      description: "Design & Development",
      imgUrl: Portfolio,
      githubLink:"https://github.com/vaishnavimore23/PortfolioProject",
    },
    // {
    //   title: "Brain Computer Interfacing",
    //   description: "Design & Development",
    //   imgUrl: bci,
    //   githubLink:"https://github.com/vaishnavimore23/BCI_Video_Game_Integration",
    // },
    // {
    //   title: "Detection of Hardware Trojan Using Machine Learning",
    //   description: "Design & Development",
    //   imgUrl: ht,
    //   githubLink:"https://github.com/vaishnavimore23/Detection-of-Hardware-Trojan-Using-Machine-Learning",
    // },
    // {
    //   title: "ChatHub",
    //   description: "Design & Development In-Progress",
    //   imgUrl: chathub,
    //   githubLink:"https://github.com/vaishnavimore23/ChatHub",
    // },
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 className="fs-4 fs-md-5 fs-lg-6">Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="second">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center" id="pills-tab">

                    {/* <Nav.Item>
                      <Nav.Link eventKey="first"  className="fs-6 fs-md-7 fs-lg-8">Thesis</Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item>
                      <Nav.Link eventKey="second"  className="fs-6 fs-md-7 fs-lg-8">Academic Projects</Nav.Link>
                    </Nav.Item>
                  
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    {/* <Tab.Pane eventKey="first">
                    <div className="thesis">
                      <h3 className="project-name" style={{color :'rgba(165, 49, 231, 0.9)', font:'1.3em' }}>Neuro Gaming</h3>
                      <div style={{ fontSize :'1.3em'  }}>
                      <ul >
                       
                        <li>Launched and propelled forward-thinking research on integrating Brain-Computer Interface (BCI) technology in video games, examining a varied dataset from 35 subjects over 105 trials</li>
                        <li>Conducted comprehensive testing yielded a 30% enhancement in brain-to-game interfacing efficiency among trial groups</li>
                        <li>Developed an advanced deep learning model using Convolutional Neural Networks (CNNs), enhancing EEG signal classification accuracy for Motor Imagery (MI) tasks by 30% over prior models</li>
                        <li>Achieved a remarkable 70% accuracy in decoding MI tasks, demonstrating real-time efficacy of CNN-driven framework and contributing to a 40% enhancement in system response time for BCI applications</li>
                        <li>Leveraged cognitive enhancements via BCI technology, resulted in a 25% improvement in concentration and mental training efficacy, as validated by user performance in controlled experiments </li>
              
                      </ul>
                      <p style={{ fontSize :'2em'  }}>
                        <a href="https://www.instagram.com/reel/C2XyHDTrGiY/?igsh=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noopener noreferrer">
                        A sneak peek into our project on Instagram.
                        </a>
                        
                      </p>

                      </div>
                    </div>
                    </Tab.Pane> */}
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                   
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
