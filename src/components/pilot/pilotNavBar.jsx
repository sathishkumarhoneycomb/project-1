import React, { useState } from 'react';

import PilotFooter from './PilotFooter';


import { Offcanvas, Nav, Navbar, Button } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';




 function PilotNavBar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <>
    <div>

    <div className='w-100 overflow-hidden'>
        <Offcanvas show={show} onHide={handleClose} placement="start" className="bg_dark_blue text-white offcanvas" >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img
              src="https://alpaindia.org/_next/static/media/logo.7ddf3dc7.svg"
              alt="alpa india logo"
              className="logo_img"
              style={{ height: '40px' }}
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="/pilot/dashboard" className="text-white">
              Dashboard
            </Nav.Link>
            <Nav.Link href="/pilot/profile" className="text-white">
              Profile
            </Nav.Link>
            <Nav.Link href="/pilot/membership" className="text-white">
              Membership
            </Nav.Link>
            <Nav.Link href="/pilot/payment-details" className="text-white">
              Payment Details
            </Nav.Link>
            <Nav.Link href="/pilot/news-events" className="text-white">
              News & Events
            </Nav.Link>
            <Nav.Link href="/pilot/discussion-forum" className="text-white">
              Discussion Forum
            </Nav.Link>
            <Nav.Link href="/pilot/download-forms" className="text-white">
              Download Forms
            </Nav.Link>
            <Nav.Link href="/pilot/claim-form" className="text-white">
              Closure Forms
            </Nav.Link>
          </Nav>
          <hr />
          <div className="d-flex ">
            <span>
              <h6 className="mt-1 mb-0">Geeks for Geeks Learning Portal</h6>
            </span>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Main Content */}
      <div className="d-flex flex-column flex-md-row">
        {/* Sidebar Button for Mobile */}
        <div className="d-md-none p-2">
          <Button variant="success" onClick={handleShow}>
            Menu
          </Button>
        </div>

        {/* Sidebar for Desktop */}
        <div className="d-none d-md-flex flex-column  justify-content-between flex-shrink-0 p-3 bg_dark_blue text-white" style={{ width: '250px' }}>

        <div>
          <Navbar.Brand href="/" className="d-flex justify-content-center">
            <img
              src="https://alpaindia.org/_next/static/media/logo.7ddf3dc7.svg"
              alt="alpa india logo"
              className="logo_img"
              style={{ height: '30px' }}
            />
          </Navbar.Brand>
          <hr />
          <Nav className="flex-column">
            
            <Nav.Link href="/pilot/dashboard" className="text-white mb-2 ">
              Dashboard
            </Nav.Link>
            
            <Nav.Link href="/pilot/profile" className="text-white mb-2">
              Profile
            </Nav.Link>
            
            <Nav.Link href="/pilot/membership" className="text-white mb-2">
              Membership
            </Nav.Link>
            
            <Nav.Link href="/pilot/payment-details" className="text-white mb-2">
              Payment Details
            </Nav.Link>

            <Nav.Link href="/pilot/news-events" className="text-white mb-2">
              News & Events
            </Nav.Link>

            <Nav.Link href="/pilot/discussion-forum" className="text-white mb-2">
              Discussion Forum
            </Nav.Link>

            <Nav.Link href="/pilot/download-forms" className="text-white mb-2">
              Download Forms
            </Nav.Link>

            <Nav.Link href="/pilot/claim-form" className="text-white">
              Closure Forms
            </Nav.Link>

          </Nav>
          </div>
          <hr />
          <div className="d-flex">
            <span>
              <h6 className="mt-1 mb-0">Alpa India Pilot  Portal</h6>
            </span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-fill bg-light p-4 side_100    " >
          <nav className='d-flex justify-content-end'>
            Welcome, Test user
          </nav>
          <hr />
          <div className="row height_90 overflow-y-scroll ">
            
            <div className="col">
                {/* main content of the webpage  */}
                <Outlet />
            </div>

          


          

          <div>
      
            </div>

            {/* <PilotFooter /> */}

           
          </div>

          


        </div>
      </div>
      </div>

      </div>

    </>
  );
}

export default PilotNavBar;
