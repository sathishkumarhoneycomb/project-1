import React, { useState, useRef } from 'react';

import PilotFooter from './PilotFooter';

import userLogo from "../../../public/assets/images/images.jpeg";



import { Offcanvas, Nav, Navbar, Button } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';


// font awesome icons 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faGear,faRightFromBracket } from "@fortawesome/free-solid-svg-icons";




 function PilotNavBar() {
  // user profile img ref 
  const userProfileRef = useRef(null)


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
        <div className="flex-fill bg-light  side_100 overflow-y-scroll overflow-x-hidden" >
        
        <div className='ps-2'>
          <nav className='d-flex justify-content-end align-items-center  text-white px-3 py-1 border border-start-0 border-end-0 border-bottom-1 border-success  mb-4'>
          <img src={userLogo} alt='user logo' className='img-fluid user_profile rounded-circle user_profile_dropdown border border-1 ' 
            onClick={(e) => {
              userProfileRef.current.classList.toggle('show');
              console.log(userProfileRef)
            }}
          />
          </nav>
          </div>


          {/* collapsible  */}

          <div 
          ref={userProfileRef}
          className=' user_card bg_dark_blue text-white  d-flex flex-column  rounded-4 py-4 ms-5 px-3  ' >
            <div className='d-flex flex-column align-items-center '>
              <img src={userLogo} alt='user logo pic img-fluid' className='user_profile rounded-circle border  border-2 border-light d-block ' />
              <p className='fw-semibold mt-3 fs-5'> Hello, Test user </p>
              </div>
              <hr className='m-0 mb-2'/>
              
              <ul className='list-unstyled d-flex flex-column gap-3 mb-0'>
                <li className=' d-flex gap-3 align-items-center'> <FontAwesomeIcon icon={faUser}  />  Profile </li>
                <li className=' d-flex gap-3 align-items-center'> <FontAwesomeIcon icon={faGear} /> Update </li>
                <hr  className='m-0'/>
                <li className=' d-flex gap-3 align-items-center'> <FontAwesomeIcon icon={faRightFromBracket} />  Logout </li>
              </ul>
          </div>
        
          
          <div className="row height_90 overflow-y-scroll  px-5 pb-5">
            
            <div className="col">
                {/* main content of the webpage  */}
                <Outlet />
            </div>

        

           

           
          </div>
          <PilotFooter />

          


        </div>
      </div>
      </div>

      </div>

    </>
  );
}

export default PilotNavBar;
