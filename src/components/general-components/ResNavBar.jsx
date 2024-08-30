import { NavLink, Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useLocation  } from "react-router-dom";


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function ResNavBar() {
  
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const [pathname, setPathname] = useState(location.pathname);

  
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
  isSticky ? "bg_dark_blue" : ""
}`}>
      <Container>
        <Navbar.Brand href="/"> <img
      src="https://alpaindia.org/_next/static/media/logo.7ddf3dc7.svg"
      alt="alpa india logo"
      className="logo_img"
    /> </Navbar.Brand>
        <Navbar.Toggle className="text-white" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-lg-3">
            <Nav.Link href="/" className="me-xl-2 text-white fw-semibold fs_1_5 rounded-3  ">Home</Nav.Link>
            <Nav.Link href="/about" className="me-xl-2 text-white fw-semibold fs_1_5 rounded-3">About</Nav.Link>
            <Nav.Link href="/contact" className=" me-xl-2 text-white fw-semibold fs_1_5 rounded-3">Contact</Nav.Link>
            <Nav.Link href="/news-events" className=" me-xl-2  text-white fw-semibold fs_1_5 rounded-3">News & Events</Nav.Link>
            <Nav.Link href="/alpa-benevolent-fund" className="  me-xl-2 text-white fs_1_5 fw-semibold rounded-3" >Benevolent Fund</Nav.Link>
            <Nav.Link href="/medical-insurance" className="me-xl-2 text-white fs_1_5 fw-semibold rounded-3">Medical Insurance</Nav.Link>
            <Nav.Link href="/member-signup" className="btn bg-light text-primary me-lg-3 fs_1_5 text-uppercase fw-semibold">Become a Member </Nav.Link>
            <Nav.Link href="/login" className="btn bg-light text-primary fs_1_5 text-uppercase fw-semibold">Login </Nav.Link>
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


