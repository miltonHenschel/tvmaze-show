import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Figure } from 'react-bootstrap';

function Details() {
  const shows = useSelector((state) => {
    const show = Object.entries(state)[0][1];
    // console.log(show);
    return show;
  });

  const getShowDetails = shows.filter((show) => show.detailsStatus);
  // console.log(getShowDetails);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(renderShowDetails());
  // }, [dispatch]);

  return (
    <Col>
      {getShowDetails.map((show) => (
        <Card
          border="muted"
          text="light"
          bg="primary"
          key={show.id}
          style={{ width: 'auto' }}
        >
          <Card.Body className="d-flex flex-column align-items-center">
            <Figure>
              <Figure.Image alt={show.name} src={show.image.medium} />
            </Figure>
            <Card.Title className="text-center">{show.name}</Card.Title>
            <Card.Subtitle>{show.summary}</Card.Subtitle>
            <Card.Text className="mb-2">
              Rating:&nbsp;
              {show.rating.average}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Col>
  );
}

export default Details;
