import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Shows from '../components/Shows';

describe('Shows component', () => {
  it('should display 2 shows on the screen', () => {
    const mockStore = configureStore([]);

    const initialState = {
      showsItems: [
        {
          id: 1,
          name: 'Under the Dome',
          type: 'Scripted',
          language: 'English',
          genres: ['Drama', 'Science-Fiction', 'Thriller'],
          status: 'Ended',
          ended: '2015-09-10',
          officialSite: 'http://www.cbs.com/shows/under-the-dome/',
          schedule: {
            time: '22:00',
            days: ['Thursday'],
          },
          rating: {
            average: 6.5,
          },
          network: {
            name: 'CBS',
            country: {
              name: 'United States',
            },
            officialSite: 'https://www.cbs.com/',
          },
          image: {
            medium:
              'https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg',
          },
          summary:
            "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
        },
        {
          id: 2,
          name: 'Person of Interest',
          type: 'Scripted',
          language: 'English',
          genres: ['Action', 'Crime', 'Science-Fiction'],
          status: 'Ended',
          ended: '2016-06-21',
          officialSite: 'http://www.cbs.com/shows/person_of_interest/',
          schedule: {
            time: '22:00',
            days: ['Tuesday'],
          },
          rating: {
            average: 8.8,
          },
          network: {
            name: 'CBS',
            country: {
              name: 'United States',
            },
          },
          image: {
            medium:
              'https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg',
          },
          summary:
            "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
        },
      ],
    };

    const store = mockStore(initialState);
    render(
      <BrowserRouter>
        <Provider store={store}>
          {initialState.showsItems.map((show) => (
            <Shows
              key={show.id}
              id={show.id}
              name={show.name}
              rating={show.rating.average}
              image={show.image.medium}
              detailsStatus={show.detailsStatus}
            />
          ))}
        </Provider>
      </BrowserRouter>,
    );

    const shows = screen.getAllByRole('button');
    screen.debug();
    expect(shows).toHaveLength(2);
    expect(store.getState()).toMatchSnapshot();
  });
});
