import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import { fetchShowsFromAPI } from '../redux/shows/showsSlice';
import Shows from '../components/Shows';
import Searchbar from '../components/Searchbar';
import '../styles/index.css';

function Home() {
  const [showName, setShowName] = useState('');

  const handleSearchShow = (e) => {
    setShowName(e.target.value.toLowerCase());
  };
  const showsItems = useSelector((state) => {
    const items = Object.entries(state)[0][1];
    return items;
  });
  const isLoading = useSelector((state) => {
    const items = Object.entries(state)[1][1];
    return items;
  });

  const filterShow = showsItems.filter((show) => show.name.toLowerCase().trim().includes(showName.trim()));

  const filteredShow = Object.entries(filterShow);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShowsFromAPI());
  }, [dispatch]);

  return (
    <>
      <Card
        style={{ backgroundColor: '#0DE6FD', minHeight: 'calc(100vh - 8vh)' }}
        className="pb-3"
      >
        {isLoading && (
          <Card
            style={{ height: 'calc(100vh - 8vh)' }}
            className="justify-content-center"
          >
            <Spinner
              animation="border"
              variant="dark"
              className="mx-auto my-3"
            />
          </Card>
        )}
        <Container>
          {!isLoading && (
            <Searchbar
              showName={showName}
              handleSearchShow={handleSearchShow}
            />
          )}
          <Row style={{ backgroundColor: '#0DE6FD' }}>
            {!isLoading
            && (filteredShow.length === 0
              || filteredShow.length === showsItems.length)
              ? showsItems.map((show) => (
                <Shows
                  key={show.id}
                  id={show.id}
                  name={show.name}
                  rating={show.rating.average}
                  image={show.image.medium}
                  detailsStatus={show.detailsStatus}
                />
              ))
              : filteredShow.map((show) => (
                <Shows
                  key={show[1].id}
                  id={show[1].id}
                  name={show[1].name}
                  rating={show[1].rating.average}
                  image={show[1].image.medium}
                  detailsStatus={show[1].detailsStatus}
                />
              ))}
          </Row>
        </Container>
      </Card>
    </>
  );
}

export default Home;
