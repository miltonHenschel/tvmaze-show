import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../routes/Home';
import store from '../redux/Store';

describe('App component', () => {
  it('should display on the screen', () => {
    const appComponent = render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>,
    );
    expect(appComponent).toMatchSnapshot();
  });
});
