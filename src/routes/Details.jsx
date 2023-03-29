import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Figure } from 'react-bootstrap';

function Details() {
  const shows = useSelector((state) => {
    const show = Object.entries(state)[0][1];
    return show;
  });

  const getShowDetails = shows.filter((show) => show.detailsStatus);

  return (
    <Card bg="" style={{ border: 'none', height: 'calc(100vh - 8vh)' }}>
      <Col>
        {getShowDetails.map((show) => (
          <Card
            text="light"
            key={show.id}
            style={{ backgroundColor: '#0DE6FD', width: 'auto' }}
          >
            <Card.Body className="d-flex flex-column align-items-center text-dark">
              <Card.Body
                className="mb-3"
                style={{ backgroundColor: '#0d6efd' }}
              >
                <Figure className="m-auto">
                  <Figure.Image alt={show.name} src={show.image.medium} />
                </Figure>
              </Card.Body>
              <Card.Title className="text-center">{show.name}</Card.Title>
              <Card.Subtitle className="my-3 text-center">
                {show.summary}
              </Card.Subtitle>
              <Card.Text className="mb-2">
                Genres:&nbsp;
                {show.genres.join(', ')}
              </Card.Text>
              <Card.Text className="mb-2">
                Rating:&nbsp;
                {show.rating.average}
              </Card.Text>
              <Card.Text className="mb-2">
                Language:&nbsp;
                {show.language}
              </Card.Text>
              <Card.Text className="mb-2">
                Network:&nbsp;
                {show.network.name}
                &nbsp; (
                {show.network.country.name}
                )
              </Card.Text>
              <Card.Text className="mb-2 text-break text-center">
                Official site:
                <br />
                <a href={show.officialSite}>{show.officialSite}</a>
              </Card.Text>
              <Card.Text className="mb-2">
                Type:&nbsp;
                {show.type}
              </Card.Text>
              <Card.Text className="mb-2">
                Status:&nbsp;
                {show.status}
              </Card.Text>
              <Card.Text className="mb-2">
                Ended:&nbsp;
                {show.ended}
              </Card.Text>
              <Card.Text className="mb-2">
                Schedule:&nbsp;
                {show.schedule.days}
                {' '}
                at&nbsp;
                {show.schedule.time}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Col>
    </Card>
  );
}

export default Details;
