import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchShowsFromAPI } from '../redux/shows/showsSlice';

// import shows from '../components/shows';

function Home() {
  // const shows = useSelector((state) => state.shows);
  // const isLoading = useSelector((state) => state.shows.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShowsFromAPI());
  }, [dispatch]);

  return (
    <>
      <h2>HOME</h2>
      {/* <div>
        {isLoading && <div>Loading...</div>}
        {!isLoading &&
          shows.showsItems.map((category) => (
            <shows key={hey} category_id={id} category_name={name} />
          ))}
      </div> */}
    </>
  );
}

export default Home;
