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
import './styles/index.css';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/air-polution-metrics-app" element={<Navbar />}>
        <Route path="/air-polution-metrics-app" element={<Home />} />
        <Route path="/air-polution-metrics-app/details" element={<Details />} />
      </Route>,
    ),
    { basename: '/air-polution-metrics-app' },
  );

  return (
    <main className="main__container">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
