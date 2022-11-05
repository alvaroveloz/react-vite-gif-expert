import Card from 'react-bootstrap/Card';

const GifItem = ({ title, id, url, username }) => {

    const author = username ? username : 'not registered'

  return (
    <Card className='m-1'>
      <Card.Img className='img-fluid' variant='top' src={url} />
      <Card.Body>
        <Card.Text className='text-secondary'> {title}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className='text-muted'>Created by {author} </small>
      </Card.Footer>
    </Card>
  );
};

export default GifItem;
