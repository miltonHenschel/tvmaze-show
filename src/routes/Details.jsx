import { useSelector } from 'react-redux';
import { Card, Figure, Col } from 'react-bootstrap';

function Details() {
  const shows = useSelector((state) => {
    const show = Object.entries(state)[0][1];
    return show;
  });

  const getShowDetails = shows.filter((show) => show.detailsStatus);

  return (
    <Card
      style={{ color: '#000', border: 'none', height: 'calc(100vh - 8vh)' }}
    >
      <Col>
        {getShowDetails.map((show) => (
          <Card key={show.id} style={{ backgroundColor: '', width: 'auto' }}>
            <Card.Body className="p-0 d-flex flex-column text-center text-dark">
              <Card.Body className="mb-0 odd">
                <Figure className="m-auto">
                  <Figure.Image alt={show.name} src={show.image.medium} />
                </Figure>
              </Card.Body>
              <Card.Title className="mb-0 pt-2 pb-3 text-center even">
                {show.name}
              </Card.Title>
              <Card.Subtitle className="odd text-center">
                {show.summary}
              </Card.Subtitle>
              <Card.Text className="mb-0 even">
                Genres:&nbsp;
                {show.genres.join(', ')}
              </Card.Text>
              <Card.Text className="mb-0 odd">
                Rating:&nbsp;
                {show.rating.average}
              </Card.Text>
              <Card.Text className="mb-0 even">
                Language:&nbsp;
                {show.language}
              </Card.Text>
              <Card.Text className="mb-0 odd">
                Network:&nbsp;
                {show.network.name}
                &nbsp; (
                {show.network.country.name}
                )
              </Card.Text>
              <Card.Text className="mb-0 even text-break text-center">
                Official site:
                <br />
                <a
                  href={show.officialSite}
                  className="text-decoration-none text-light"
                >
                  {show.officialSite}
                </a>
              </Card.Text>
              <Card.Text className="mb-0 odd">
                Type:&nbsp;
                {show.type}
              </Card.Text>
              <Card.Text className="mb-0 even">
                Status:&nbsp;
                {show.status}
              </Card.Text>
              <Card.Text className="mb-0 odd">
                Ended:&nbsp;
                {show.ended}
              </Card.Text>
              <Card.Text className="mb-0 even">
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
