import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { BsFillMicFill, BsChevronLeft, BsGear } from 'react-icons/bs';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';

function Navbar() {
  return (
    <>
      <Card>
        <Nav className="align-items-center" style={{ height: '8vh' }}>
          <Nav.Item>
            <NavLink to="./">
              <BsChevronLeft />
            </NavLink>
          </Nav.Item>
          <Nav.Item className="">TV Shows</Nav.Item>
          <Nav.Item className="d-flex flex-row">
            <Nav.Item className="">
              <BsFillMicFill />
            </Nav.Item>
            <Nav.Item className="">
              <BsGear />
            </Nav.Item>
          </Nav.Item>
        </Nav>
      </Card>
      <Outlet />
    </>
  );
}

export default Navbar;
