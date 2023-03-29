import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import { BsChevronRight } from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { renderShowDetails } from '../redux/shows/showsSlice';

// let detailsStatus = false;
function Shows({
  id, name, rating, image,
}) {
  const dispatch = useDispatch();

  const handleShowDetails = () => {
    // if (detailsStatus === false) {
    dispatch(renderShowDetails(id));
    //   detailsStatus = true;
    // }
  };

  return (
    <Col xs={6} md={3} className="mt-3">
      <Card
        border="muted"
        text="light"
        bg="primary"
        key={id}
        style={{ width: 'auto' }}
      >
        <Card.Body className="d-flex flex-column align-items-center">
          <Figure>
            <Figure.Image alt={name} src={image} />
          </Figure>
          <Card.Title className="text-center">{name}</Card.Title>
          <Card.Subtitle className="mb-2">
            Rating:&nbsp;
            {rating}
          </Card.Subtitle>

          <Button
            variant="dark"
            size="sm"
            className="w-75"
            onClick={handleShowDetails}
          >
            <Link to="/details">
              <BsChevronRight />
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

Shows.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  rating: PropTypes.number,
  image: PropTypes.string,
}.isRequired;

export default Shows;
