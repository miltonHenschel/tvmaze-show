import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Searchbar from '../components/Searchbar';
import store from '../redux/Store';

describe('Searchbar component', () => {
  it('should display on the screen', () => {
    const searchBarComponent = render(
      <BrowserRouter>
        <Provider store={store}>
          <Searchbar />
        </Provider>
      </BrowserRouter>,
    );

    const searchBar = screen.getByRole('searchbox');
    screen.debug(searchBar);
    expect(searchBar).toBeInTheDocument();
    expect(searchBarComponent).toMatchSnapshot();
  });
});
