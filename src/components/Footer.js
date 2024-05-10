import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import discord from "../assets/img/discord_icon.png"
import git_icon from "../assets/img/git_logo.png"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
       
          <Col size={12} sm={6}>
            
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/akshita-patidar/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Akshita-Patidar"><img src={git_icon} alt="Icon" /></a>
              {/* <a href="#"><img src={discord} alt="Icon" /></a> */}
            </div>
            <p>Designed with &#128156; by Akshita Patidar</p>
            <footer>
 
</footer>

          </Col>
        </Row>
      </Container>
    </footer>
  )
}
