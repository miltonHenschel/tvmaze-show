/* eslint-disable import/extensions */
import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Details from './routes/Details';
import Home from './routes/Home';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Route>,
    ),
    { basename: '/tvmaze-show' },
  );

  return (
    <main className="main__container odd">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
