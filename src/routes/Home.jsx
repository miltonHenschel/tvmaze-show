import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Card, Container, Row, Spinner,
} from 'react-bootstrap';
import { fetchShowsFromAPI } from '../redux/shows/showsSlice';
import Shows from '../components/Shows';
import Searchbar from '../components/Searchbar';

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
      <Container
        style={{
          minHeight: 'calc(100vh - 8vh)',
          width: '100vw',
        }}
        className="pb-3"
      >
        {isLoading && (
          <Card
            style={{
              height: 'calc(100vh - 8vh)',
              backgroundColor: '#4369b2',
              borderColor: '#4369b2',
            }}
            className="justify-content-center"
          >
            <Spinner
              animation="border"
              variant="light"
              className="mx-auto my-3"
            />
          </Card>
        )}
        <Container className="p-0">
          {!isLoading && (
            <Searchbar
              showName={showName}
              handleSearchShow={handleSearchShow}
            />
          )}
          <Row className="p-0">
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
      </Container>
    </>
  );
}

export default Home;
