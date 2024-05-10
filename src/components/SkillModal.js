import React, { useState } from 'react';
import Modal from 'react-modal';
import './SkillModal.css'
// import { Modal } from 'react-bootstrap';

Modal.setAppElement('#root');

export const SkillModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    document.body.classList.add('body-scroll-lock');
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.classList.remove('body-scroll-lock');
  };

  return (
    
    <div className="skills-container">
      {/* <h2>All Skills</h2> */}
      <button onClick={openModal}>My Skills</button>
      <Modal className="skills-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Skills Modal"
      >
       <h2>Skills</h2>
        <table className="skills-table">
          <tr>
            <th>Languages</th>
            <td>Python, JavaScript, Nodejs, Angularjs, HTML5, CSS3, Bootstrap</td>
          </tr>
          <tr>
            <th>Databases and Frameworks</th>
            <td>React, Redux, JQuery, REST API, Microservices, MySQL, Microsoft SQL Server, PostgreSQL, MS Access, MongoDB</td>
          </tr>
          {/* <tr>
            <th>DevOps</th>
            <td> Kubernetes, Docker, AWS, Google Cloud Platform</td>
          </tr> */}
          <tr>
            <th>Tools</th>
            <td>GIT, Jenkins, JIRA, Postman, ServiceNow, Advance Excel, Visual Studio Code</td>
          </tr>
          {/* <tr>
            <th>Machine Learning</th>
            <td>Deep Learning, sci-kit-learn, TensorFlow, Keras, PyTorch</td>
          </tr> */}
          <tr>
            <th>Other</th>
            <td>OOP, Data Structures and Algorithms</td>
          </tr>
        </table>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};


