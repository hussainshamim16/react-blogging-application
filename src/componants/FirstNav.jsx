import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth'; // Import Firebase Auth methods

function FirstNav() {
  const navigate = useNavigate(); // Initialize navigation

  const handleLogout = async () => {
    const auth = getAuth(); // Get the Firebase auth instance
    try {
      await signOut(auth); // Sign the user out
      localStorage.removeItem("userId"); // Remove userId from local storage
      navigate('/login'); // Redirect to the login page after logout
      alert("Logout successful!");
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  return (
    <Navbar expand="lg" className="bg-warning py-3">
      <Container>
        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default FirstNav;
