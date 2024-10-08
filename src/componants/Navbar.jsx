import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth'; // Import Firebase Auth methods

function Navbir() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const auth = getAuth(); 
    try {
      await signOut(auth);
      localStorage.removeItem("userId");
      navigate('/login');
      alert("Logout successful!");
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  

  return (
    <Navbar expand="lg" className="bg-warning py-3">
      <Container>
        <Navbar.Brand as={Link} to="/">Blogzer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/blogs">Create Blogs</Nav.Link>
            <Nav.Link as={Link} to="/main">All Blogs</Nav.Link>
            <button className='logout' onClick={handleLogout}>
              logout
            </button>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbir;
