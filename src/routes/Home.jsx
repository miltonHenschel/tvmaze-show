import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { fetchShowsFromAPI } from '../redux/shows/showsSlice';
import Shows from '../components/Shows';

import '../styles/index.css';

function Home() {
  const showsItems = useSelector((state) => {
    const items = Object.entries(state)[0][1];
    return items;
  });
  const isLoading = useSelector((state) => {
    const items = Object.entries(state)[1][1];
    return items;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShowsFromAPI());
  }, [dispatch]);

  return (
    <Card bg="primary">
      <Container>
        <Row>
          {isLoading && <Spinner animation="border" variant="primary" />}
          {!isLoading
            && showsItems.map((show) => (
              <Shows
                key={show.id}
                id={show.id}
                name={show.name}
                rating={show.rating.average}
                image={show.image.medium}
              />
            ))}
        </Row>
      </Container>
    </Card>
  );
}

export default Home;
