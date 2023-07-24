import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import "./navbar.css"

function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
  <Navbar bg="light" expand="lg" className="fixed-top">
    <Container>
      <Navbar.Brand className="navbar-brand">
            <Link className="nav-link" to="home">
              <span className="text-warning p-2">Guram Kutaladze</span>
            </Link>   
      </Navbar.Brand>  
       

        <div className=" md:flex items-center gap-6 ml-6 flex-2 d-flex ">
            {/* GitHub */}
            <Link className="github nav-link" to="#" onClick={() => window.open('https://github.com/CS-Guram', '_blank')}>
              <i className="bi bi-github"></i>
            </Link>

            {/* Linkedin */}
            <Link className="linkedin nav-link" to="#" onClick={() => window.open('https://www.linkedin.com/in/guram-kutaladze/', '_blank')}>
              <i className="bi bi-linkedin"></i>
            </Link>

            {/* Resume */}
            <a className="btn btn-primary p-1" href="/docs/Resume.docx" download="Resume.docx">
              Resume
            </a>
        </div>



        {/* Drops the menu to the vertical position on the mobile screen*/}
        <Navbar.Toggle aria-controls="basic-navbar-nav " style={{ backgroundColor: 'rgb(55, 97, 212)' }} />
        <Navbar.Collapse id="basic-navbar-nav justify-content-center">

    
    <Nav className="nav ms-auto">
        {/* Home */}
          {/* <Link
            className="nav-link"
            to="home"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500} 
            activeClass="active"
          >
            Home
          </Link> */}
          

        {/* About */}
          <Link
            className="nav-link"
            to="about me"
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset as needed
            duration={500} // Adjust the duration as needed
            activeClass="active"
           >
            About Me
          </Link>

        {/* Projects */}
          <Link
            className="nav-link"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset as needed
            duration={500} // Adjust the duration as needed
            activeClass="active"
            >
              Projects
          </Link>


        {/* Contact */}

        <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Email: grm.kutaladze@gmail.com</p>
          <p>Phone: +1 347-577-3338</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

          <Link
            className="nav-link"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset as needed
            duration={500} // Adjust the duration as needed
            activeClass="active"
            onClick={handleShowModal}
            >
             Contact
          </Link>
    </Nav>

       </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;