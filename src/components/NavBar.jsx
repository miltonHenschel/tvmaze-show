import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { BsFillMicFill, BsChevronLeft, BsGear } from 'react-icons/bs';

import styles from '../styles/NavBar.module.css';

function Navbar() {
  return (
    <>
      <nav className={styles.main__container}>
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
      </nav>
      <Outlet />
    </>
  );
}

export default Navbar;
