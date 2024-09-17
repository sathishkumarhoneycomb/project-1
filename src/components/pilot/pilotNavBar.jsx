import React, { useState, useRef } from 'react';

import PilotFooter from './PilotFooter';

import userLogo from "../../../public/assets/images/images.jpeg";



import { Offcanvas, Nav, Navbar, Button } from 'react-bootstrap';
import { Outlet, useLocation } from 'react-router-dom';
import { Popover, OverlayTrigger, Card, Image } from 'react-bootstrap';


// font awesome icons 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faGear,faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import UserProfileCard from './UserProfileCard';




 const PilotNavBar = () => {
  // user profile img ref 
  const userProfileRef = useRef(null);

  // location for making use of  
  const location  = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);

  // for mobile device navbar toggle  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // for user profile modal show 

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body className='d-flex justify-content-center flex-column '>
        <img src={userLogo} className='border border-1 mb-3 user_profile_card_img '/>
        <p className='fs-5  fw-semibold'> John Smith M  </p>
        <div className='mb-2'>
        <div className='d-flex gap-3'>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#777"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
          <p>  test@gmail.com </p>
          </div>
          <div className='d-flex gap-3'>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#777"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
          <p>  8123456789 </p>
          </div>
          <div className='d-flex gap-3'>
          <svg xmlns="http://www.w3.org/2000/svg" 
          height="24px" viewBox="0 -960 960 960" width="24px" fill="#777"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg> 
          <p> Bangalore </p>
          </div>
          

        </div>
        <button className='btn btn-outline-primary py-1 rounded-0  mb-2'> Full Profile </button>

          <button className='btn btn-outline-primary py-1 rounded-0 mb-2'>Logout </button>
    


      </Popover.Body>
    </Popover>
  );
  




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
        <Offcanvas.Body className='d-flex  flex-column justify-content-between'>
          <Nav className="flex-column gap-2">
            <Nav.Link href="/pilot/dashboard"className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/pilot/dashboard"  ? "active " : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" 
            height="24px" 
            viewBox="0 -960 960 960" 
            width="24px" 
            className=''
            fill="#e8eaed"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h240v-560H200v560Zm320 0h240v-280H520v280Zm0-360h240v-200H520v200Z"/></svg>
              Dashboard
            </Nav.Link>
            <Nav.Link href="/pilot/profile"  className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/pilot/profile"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" 
            height="24px" 
            viewBox="0 -960 960 960" 
            width="24px" 
            fill="#e8eaed"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
              Profile
            </Nav.Link>
            <Nav.Link href="/pilot/membership" className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/pilot/membership"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-440v80h640v-80H160Zm0-440h640q33 0 56.5 23.5T880-800v440q0 33-23.5 56.5T800-280H640v200l-160-80-160 80v-200H160q-33 0-56.5-23.5T80-360v-440q0-33 23.5-56.5T160-880Zm0 320h640v-240H160v240Zm0 200v-440 440Z"/></svg>
              Membership
            </Nav.Link>
            <Nav.Link href="/pilot/payment-details" className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/pilot/payment-details"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z"/></svg>
              Payment Details
            </Nav.Link>
            <Nav.Link href="/pilot/news-events" className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/pilot/news-events"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/></svg>
              News & Events
            </Nav.Link>
            <Nav.Link href="/pilot/discussion-forum"className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/pilot/discussion-forum"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z"/></svg>

              Discussion Forum
            </Nav.Link>
            <Nav.Link href="/pilot/download-forms" className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/pilot/download-forms"  ? "active" : "" }`}>
              
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q17-72 85-137t145-65q33 0 56.5 23.5T520-716v242l64-62 56 56-160 160-160-160 56-56 64 62v-242q-76 14-118 73.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-48-22-89.5T600-680v-93q74 35 117 103.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H260Zm220-358Z"/></svg>
            Download Forms
            </Nav.Link>
            <Nav.Link href="/pilot/claim-form" className={`text-white d-flex align-items-center gap-3 ${currentPath == "/pilot/claim-form"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H520q-33 0-56.5-23.5T440-240v-206l-64 62-56-56 160-160 160 160-56 56-64-62v206h220q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h100v80H260Zm220-280Z"/></svg>
              Closure Forms
            </Nav.Link>

            <Nav.Link href="/pilot/logout" className={`text-white d-flex align-items-center gap-3 ${currentPath == "/pilot/claim-form"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>              Logout 
            </Nav.Link>
            
          </Nav>
          
          <div className="d-flex flex-column  ">
          <hr />
            <span>
              <h6 className="mt-1 mb-0 text-center">Alpa India - Pilot Portal</h6>
            </span>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

      {/* Main Content */}
      <div className="d-flex flex-column flex-md-row">
        {/* Sidebar Button for Mobile */}
        <div className="d-md-none p-2 mb-3">
          <Button variant="light" onClick={handleShow} className='border border-2'>
          <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
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
          <Nav className="flex-column gap-2">
            
            <Nav.Link href="/pilot/dashboard" className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/pilot/dashboard"  ? "active " : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" 
            height="24px" 
            viewBox="0 -960 960 960" 
            width="24px" 
            className=''
            fill="#e8eaed"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h240v-560H200v560Zm320 0h240v-280H520v280Zm0-360h240v-200H520v200Z"/></svg>
              Dashboard
            </Nav.Link>
            
            <Nav.Link href="/pilot/profile" className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/pilot/profile"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" 
            height="24px" 
            viewBox="0 -960 960 960" 
            width="24px" 
            fill="#e8eaed"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
              Profile
            </Nav.Link>
            
            <Nav.Link href="/pilot/membership" className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/pilot/membership"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-440v80h640v-80H160Zm0-440h640q33 0 56.5 23.5T880-800v440q0 33-23.5 56.5T800-280H640v200l-160-80-160 80v-200H160q-33 0-56.5-23.5T80-360v-440q0-33 23.5-56.5T160-880Zm0 320h640v-240H160v240Zm0 200v-440 440Z"/></svg>
              Membership
            </Nav.Link>
            
            <Nav.Link href="/pilot/payment-details" className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/pilot/payment-details"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z"/></svg>
              Payment Details
            </Nav.Link>

            <Nav.Link href="/pilot/news-events" className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/pilot/news-events"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/></svg>
              News & Events
            </Nav.Link>

            <Nav.Link href="/pilot/discussion-forum" className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/pilot/discussion-forum"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z"/></svg>
              Discussion Forum
            </Nav.Link>

            <Nav.Link href="/pilot/download-forms" className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/pilot/download-forms"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q17-72 85-137t145-65q33 0 56.5 23.5T520-716v242l64-62 56 56-160 160-160-160 56-56 64 62v-242q-76 14-118 73.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-48-22-89.5T600-680v-93q74 35 117 103.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H260Zm220-358Z"/></svg>
              Download Forms
            </Nav.Link>

            <Nav.Link href="/pilot/claim-form" className={`text-white d-flex align-items-center gap-3 ${currentPath == "/pilot/claim-form"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H520q-33 0-56.5-23.5T440-240v-206l-64 62-56-56 160-160 160 160-56 56-64-62v206h220q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h100v80H260Zm220-280Z"/></svg>
              Closure Forms
            </Nav.Link>

          </Nav>
          </div>
          
          <div className="d-flex flex-column justify-content-center">
          <hr />
            <span>
              <h6 className="mt-1 mb-0 text-center">Alpa India Pilot  Portal</h6>
            </span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-fill bg-light  side_100 overflow-y-scroll overflow-x-hidden" >
        
        <div className='ps-2'>
          <nav className='d-none d-md-flex gap-3 justify-content-end align-items-center  text-white px-3 py-1 border border-start-0 border-end-0 border-bottom-1 border-success  mb-4'>
          <span className='text-dark fs-5'> Hello, John Doe</span>
          <img src={userLogo} alt='user logo' className='img-fluid user_profile rounded-circle user_profile_dropdown border border-1 '
          onClick={() => userProfileRef.current.classList.toggle('show')}
           />
          {/* <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <Button variant="light">
            <img src={userLogo} alt='user logo' className='img-fluid user_profile rounded-circle user_profile_dropdown border border-1 ' />
            </Button>
          </OverlayTrigger> */}

          </nav>
          </div>



          {/* collapsible  */}

          <div 
          ref={userProfileRef}
          className=' user_card  bg_dark_blue text-white  d-flex flex-column  rounded-4 py-4 ms-5 px-3  ' >
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


        
          
          <div className="row height_90 overflow-y-scroll  px-3 px-md-5 pb-5">
            
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
