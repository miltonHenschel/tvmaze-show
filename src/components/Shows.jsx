import PropTypes from 'prop-types';
import { BsChevronRight } from 'react-icons/bs';
import {
  Button, Figure, Card, Col,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { renderShowDetails } from '../redux/shows/showsSlice';

function Shows({
  id, name, rating, image,
}) {
  const dispatch = useDispatch();

  const handleShowDetails = () => {
    dispatch(renderShowDetails(id));
  };

  return (
    <>
      <Col xs={6} md={3} className="p-0">
        <Card
          className="odd"
          key={id}
          style={{
            color: '#fff',
            width: 'auto',
            borderColor: '#4369b2',
            borderRadius: '0',
          }}
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

            <Link to="/details">
              <Button
                size="sm"
                style={{
                  width: '15vw',
                }}
                onClick={handleShowDetails}
              >
                <BsChevronRight />
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

Shows.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  rating: PropTypes.number,
  image: PropTypes.string,
}.isRequired;

export default Shows;
