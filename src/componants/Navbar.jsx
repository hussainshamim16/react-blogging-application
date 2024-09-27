import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbir() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" className='p-3'>
        <Container>
          <Navbar.Brand href="#home">BlogZer</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#home">Category</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbir;