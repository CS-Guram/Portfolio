import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./navbar.css"

function Header () {
  return (
    <Navbar bg="light" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand className="navbar-brand">
          <Link className="nav-link" to="/">
            <span className="text-warning p-2">Guram Kutaladze</span>
          </Link>
        </Navbar.Brand>
        
        <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
          {/* GitHub */}
          <Link className="instagram nav-link" to="#" onClick={() => window.open('https://github.com/CS-Guram', '_blank')}>
            <i className="bi bi-github"></i>
          </Link>
          {/* Linkedin */}
          <Link className="instagram nav-link" to="#" onClick={() => window.open('https://www.linkedin.com/in/guram-kutaladze/', '_blank')}>
            <i className="bi bi-linkedin"></i>
          </Link>

      {/* Resume */}
      
            <button className="btn btn-primary p-1" onClick={() => window.open('/docs/Resume.docx')} download>
               Resume
            </button>
     

        </div>

        {/* Drops the menu to the vertical position on the mobile screen*/}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav justify-content-center">

        <Nav className="nav ms-auto">
            {/* Home */}
            <Link className="nav-link" to="/">Home</Link>
            {/* About */}
            <Link className="nav-link" to="/about">About</Link>
            {/* Projects */}
            <Link className="nav-link" to="/projects">Projects</Link>
            {/* Contact */}
            <Link className="nav-link" to="/contact">Contact</Link>
          </Nav>

       </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;