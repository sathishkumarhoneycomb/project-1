import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useLocation  } from "react-router-dom";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function ResNavBar() {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);
  

  // add the event listener to the window object
  // whenever the user scrolls just apply bg-dark-blue color to the nav

  useEffect(() => {
    console.log(pathname)
    function handleSticky(e) {
      
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
       
        if(pathname == "/login") {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
        
      } 
    }

    document.addEventListener("scroll", handleSticky);
    return function () {
      document.removeEventListener("scroll", handleSticky);
    };
  });


  useEffect(() => {
    setPathname(location.pathname);
    console.log(location.pathname)
    if(location.pathname == '/login') {
        setIsSticky(true);
    }
  }, [location]);

  return (
    <>
    <div>
    <Navbar expand="lg" className={` fixed-top z-index-5 ${
  isSticky ? "bg-dark-blue" : ""
}`}>
      <Container>
        <Navbar.Brand href="/"> <img
      src="https://alpaindia.org/_next/static/media/logo.7ddf3dc7.svg"
      alt="alpa india logo"
      className="logo-img ms-lg-5"
    /> </Navbar.Brand>
        <Navbar.Toggle className="text-white" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-lg-3">
            <Nav.Link href="/" className="me-lg-2">Home</Nav.Link>
            <Nav.Link href="/about" className="me-lg-2">About</Nav.Link>
            <Nav.Link href="/contact" className="me-lg-2">Contact</Nav.Link>
            <Nav.Link href="/news-events" className="me-lg-2">News & Events</Nav.Link>
            <Nav.Link href="/alpa-benevolent-fund" className="me-lg-2" >Benevolent Fund</Nav.Link>
            <Nav.Link href="/medical-insurance" className="me-lg-2">Medical Insurance</Nav.Link>
            <Nav.Link href="/member-signup" className="btn bg-light text-primary me-lg-3 fs-5_5">Become a Member </Nav.Link>
            <Nav.Link href="/login" className="btn bg-light text-primary fs-5_5">Login </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

{<Outlet />}
</div>
    </>
  );
}

export default ResNavBar;



{/* <nav
className={`navbar navbar-expand-lg p-0   fixed-top z-index-5 ${
  isSticky ? "bg-dark-blue" : ""
}`}
>  <div className="nav-container ">
<a className="navbar-brand pe-lg-4 m-0" href="#">
    <img
      src="https://alpaindia.org/_next/static/media/logo.7ddf3dc7.svg"
      alt="alpa india logo"
      className="logo-img"
    />
  </a>    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" className="nav-link">
          about
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/news-events" className="nav-link">
          News and Events
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/alpa-benevolent-fund" className="nav-link">
          Benevolent Fund
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/medical-insurance" className="nav-link">
          Medical Insurance
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/member-signup"
          className="fs-5_5 color-primary btn  p-1 px-2 bg-light fw-semibold mb-2 mb-lg-0 text-uppercase"
        >
          Become a Member
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="login"
          className="fs-5_5 color-primary btn p-1 px-2 fw-semibold bg-white text-uppercase"
        >
          Login
        </NavLink>
      </li>
    </ul>

  </div>
</div>
</nav> */}