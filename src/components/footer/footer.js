import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import "./footer.css"

function Footer() {
    const [showModal, setShowModal] = useState(false);
  
    const handleShowModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
    return (

    <footer className="page-footer font-small blue">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <hr className="clearfix w-100 d-md-none pb-0"/>
            <div className="col-lg">
                    <i className="fas fa-cog fa-spin"></i><br/><br/>
                    {/* <i className="bi bi-envelope"></i><br/><br/> */}
                <div className="list-unstyled mb-3">
                    <i> Please feel free to contact me</i><br></br>
                    <i> if you have any question! </i>
                </div>
                <button variant="primary" onClick={handleShowModal}>Contact Me</button>
             
     
            </div>
        </div>

        <p>Designed & Created by Guram Kutaladze</p>
        <div className="footer-copyright text-center "> Copyright &copy; {new Date().getFullYear()} | G.Kutaladze | All Rights Reserved </div><br/>
    </div>

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
</footer>
    );
  }
  
  export default Footer;