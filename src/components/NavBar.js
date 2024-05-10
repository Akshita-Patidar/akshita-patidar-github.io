import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import resumeIcon from "../assets/img/resume-icon.jpeg"
import { HashLink } from 'react-router-hash-link';
import git_icon from "../assets/img/git_logo.png"
import "./NavBar.css"
import {
  BrowserRouter as Router
} from "react-router-dom";


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

   

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About Me</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#experience-sections" className={activeLink === 'experience-sections' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience-sections')}>Experience</Nav.Link>
              <Nav.Link href="#ecard" className={activeLink === 'ecard' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('ecard')}>Education</Nav.Link>
            
            
              
              
            </Nav>
           

            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/akshita-patidar/"><img src={navIcon1} alt="" /></a>
             
               
              </div>
              <div className="resume-icon">
               
                <HashLink to='https://drive.google.com/file/d/1SXH2oYtHryAaY4U6NxRhYjpuvVoKeg87/view?usp=sharing' target="_blank">
                <button className="vvd"><span>Resume</span></button>
              </HashLink>
               
              </div>

              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
             
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
