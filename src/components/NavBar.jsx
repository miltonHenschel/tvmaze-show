import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BsFillMicFill, BsChevronLeft, BsGear } from 'react-icons/bs';
import styles from '../styles/NavBar.module.css';

function NavBar() {
  return (
    <>
      <Navbar className={styles.main__container}>
        <Container className={styles.container}>
          <Nav className={styles.me__auto}>
            <NavLink to="./">
              <BsChevronLeft />
            </NavLink>
          </Nav>
          <Navbar>Navbar</Navbar>
          <Nav className={styles.me__auto}>
            <Nav>
              <BsFillMicFill />
            </Nav>
            <Nav>
              <BsGear />
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
