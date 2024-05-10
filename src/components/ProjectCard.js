import React, { useState } from 'react';
import { Col, Modal, Button } from 'react-bootstrap';
import projectCard from "../assets/img/projectCard1.png";
import './Styles.css'; // Import the external stylesheet

export const ProjectCard = ({ title, description, imgUrl,githubLink }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  
  return (
    <>
      <Col size={12} sm={6} md={4}  style={{ cursor: 'pointer' }}>
      <a href={githubLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4 style={{ color: '#FFFFFF' }} >{title}</h4>
            <span style={{ color: '#FFFFFF' }}>{description}</span>
          </div>
        </div>
        </a>
      </Col>
      
      {/* <Modal  show={showModal} onHide={handleCloseModal}  size="sm">
        <Modal.Header  className="custom-modal-content"style={{ fontSize: '1.8em' }} closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-content" style={{ color: 'rgba(0, 0, 0)', fontSize: '1.5em' }}>
          <div>
            <p>{description}</p>
          </div>
        </Modal.Body>
        <Modal.Footer >
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
     
    </>
  );
};
