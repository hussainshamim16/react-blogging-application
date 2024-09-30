import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SecCard() {
  return (
    <Card className='bg-warning w-75 m-auto mb-3 mt-4'>
      <Card.Header as="h5" >product images</Card.Header>
      <Card.Body className='terri'>
      <Card.Img variant="top" className="rounded-4  pe-3" src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D" />
      <div className="content w-75">
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </div>
      </Card.Body>
    </Card>
  );
}

export default SecCard;