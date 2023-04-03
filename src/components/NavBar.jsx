import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { BsFillMicFill, BsChevronLeft, BsGear } from 'react-icons/bs';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';

function Navbar() {
  return (
    <>
      <Card>
        <Nav
          className="align-items-center"
          style={{
            height: '8vh',
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: '#2657b3',
            color: 'white',
            padding: '0 2rem',
          }}
        >
          <Nav.Item>
            <NavLink className="text-light" to="./">
              <BsChevronLeft />
            </NavLink>
          </Nav.Item>
          <Nav.Item className="">TV Shows</Nav.Item>
          <Nav.Item className="d-flex flex-row" style={{ gap: '2rem' }}>
            <Nav.Item className="">
              <BsFillMicFill />
            </Nav.Item>
            <Nav.Item className="">
              <BsGear />
            </Nav.Item>
          </Nav.Item>
        </Nav>
      </Card>
      {/* <nav className={styles.main__container}>
        <div className={styles.container}>
          <div className={styles.me__auto}>
            <NavLink to="./">
              <BsChevronLeft />
            </NavLink>
          </div>
          <div>Navbar</div>
          <div className={styles.me__auto}>
            <div>
              <BsFillMicFill />
            </div>
            <div>
              <BsGear />
            </div>
          </div>
        </div>
      </nav> */}
      <Outlet />
    </>
  );
}

export default Navbar;
