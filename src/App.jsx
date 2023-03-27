import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import NavBar from './components/Navbar';
import Details from './routes/Details';
import Home from './routes/Home';
import './styles/index.css';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home />}>
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Route>,
    ),
  );

  return (
    <main className="main__container">
      <NavBar />
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
