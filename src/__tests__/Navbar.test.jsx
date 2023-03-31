import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import store from '../redux/Store';

describe('Navbar component', () => {
  it('should display on the screen', () => {
    const navBarComponent = render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>,
    );

    const navBar = screen.getByRole('link');
    screen.debug(navBar);
    expect(navBar).toBeInTheDocument();
    expect(navBarComponent).toMatchSnapshot();
  });
});
