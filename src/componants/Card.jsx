import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample(blog) {
  return (
    <Card style={{ width: '25rem' ,marginBottom:"30px" ,border:"none"}}>
      <Card.Img variant="top" className="rounded-4" src={blog.imageUrl} />
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>
         {blog.description}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default BasicExample;