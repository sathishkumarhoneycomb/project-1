import { useState, useRef } from 'react';

import ConsoleFooter from '../pilot/ConsoleFooter.jsx';

import userLogo from "../../assets/images/user2.png";


import { Offcanvas, Nav, Navbar, Button } from 'react-bootstrap';
import { Outlet, useLocation } from 'react-router-dom';



 const AdminNavbar = () => {

  // ref for profile card 
  const userProfileCardRef = useRef(null);
  
  // location for making use of  
  const location  = useLocation();
  const currentPath = location.pathname;


  // for mobile device navbar toggle  
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
        <Offcanvas.Body className='d-flex  flex-column justify-content-between'>
          
          <Nav className="flex-column gap-2">
            
            <Nav.Link href="/medical/profile"className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/medical/profile"  ? "active " : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" 
            height="24px" 
            viewBox="0 -960 960 960" 
            width="24px" 
            className=''
            fill="#e8eaed"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h240v-560H200v560Zm320 0h240v-280H520v280Zm0-360h240v-200H520v200Z"/></svg>
              Profile 
            </Nav.Link>

            <Nav.Link href="/medical/unapproved-applications"  className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/medical/unapproved-applications"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" 
            height="24px" 
            viewBox="0 -960 960 960" 
            width="24px" 
            fill="#e8eaed"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/></svg>
              Unapproved Applications 
            </Nav.Link>

            <Nav.Link href="/medical/rejected-applications" className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/medical/rejected-applications"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-440v80h640v-80H160Zm0-440h640q33 0 56.5 23.5T880-800v440q0 33-23.5 56.5T800-280H640v200l-160-80-160 80v-200H160q-33 0-56.5-23.5T80-360v-440q0-33 23.5-56.5T160-880Zm0 320h640v-240H160v240Zm0 200v-440 440Z"/></svg>
              Rejected Applications 
            </Nav.Link>

            <Nav.Link href="/medical/alpa-bf-members" className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/medical/alpa-bf-members"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z"/></svg>
              Approved Applications 
            </Nav.Link>
            
          </Nav>
          
          <div className="d-flex flex-column  ">
          <hr />
            <span>
              <h6 className="mt-1 mb-0 text-center">Alpa India - Medical Portal</h6>
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
        <div className="side_100 overflow-y-scroll d-none d-md-flex flex-column  justify-content-between flex-shrink-0 p-3 bg_dark_blue text-white" style={{ width: '270px' }}>

        <div className=''>
          <Navbar.Brand href="/" className="d-flex justify-content-center">
            <img
              src="https://alpaindia.org/_next/static/media/logo.7ddf3dc7.svg"
              alt="alpa india logo"
              className="logo_img"
              style={{ height: '30px' }}
            />
          </Navbar.Brand>
          <hr />
          <Nav className="flex-column gap-0 height_90 ">
          <Nav.Link href="/medical/profile"className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/medical/profile"  ? "active " : "" }`}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z"/></svg>            Dashboard 
            </Nav.Link>
            
          <Nav.Link href="/medical/profile"className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/medical/profile"  ? "active " : "" }`}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>              
            Profile 
            </Nav.Link>

            <Nav.Link href="/medical/unapproved-applications"  className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/medical/unapproved-applications"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z"/></svg>
            Unapproved Applications 
            </Nav.Link>

            <Nav.Link href="/medical/alpa-bf-members" className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/medical/alpa-bf-members"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M702-480 560-622l57-56 85 85 170-170 56 57-226 226Zm-342 0q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 260Zm0-340Z"/></svg>            
            Approved Applications 
            </Nav.Link>

            <Nav.Link href="/medical/alpa-bf-members" className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/medical/alpa-bf-members"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"/></svg>            
            Member - ORDINARY paid 
            </Nav.Link>

            <Nav.Link href="/medical/alpa-bf-members" className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/medical/alpa-bf-members"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"/></svg>            
            Member - BF 
            </Nav.Link>

            <Nav.Link href="/medical/alpa-bf-members" className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/medical/alpa-bf-members"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"/></svg>            
            Alpa Admins 
            </Nav.Link>

            <Nav.Link href="/medical/alpa-bf-members" className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/medical/alpa-bf-members"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-120q-33 0-56.5-23.5T80-200v-640l67 67 66-67 67 67 67-67 66 67 67-67 67 67 66-67 67 67 67-67 66 67 67-67v640q0 33-23.5 56.5T800-120H160Zm0-80h280v-240H160v240Zm360 0h280v-80H520v80Zm0-160h280v-80H520v80ZM160-520h640v-120H160v120Z"/></svg>            
            News & Events 
            </Nav.Link>

            <Nav.Link href="/medical/alpa-bf-members" className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/medical/alpa-bf-members"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M880-80 720-240H320q-33 0-56.5-23.5T240-320v-40h440q33 0 56.5-23.5T760-440v-280h40q33 0 56.5 23.5T880-640v560ZM160-473l47-47h393v-280H160v327ZM80-280v-520q0-33 23.5-56.5T160-880h440q33 0 56.5 23.5T680-800v280q0 33-23.5 56.5T600-440H240L80-280Zm80-240v-280 280Z"/></svg>            
            Discussion Forum 
            </Nav.Link>

            <Nav.Link href="/medical/alpa-bf-members" className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/medical/alpa-bf-members"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q17-72 85-137t145-65q33 0 56.5 23.5T520-716v242l64-62 56 56-160 160-160-160 56-56 64 62v-242q-76 14-118 73.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-48-22-89.5T600-680v-93q74 35 117 103.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H260Zm220-358Z"/></svg>       
            Downloaded Forms 
            </Nav.Link>

            <Nav.Link href="/medical/alpa-bf-members" className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/medical/alpa-bf-members"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-118 120-398l66-50 294 228 294-228 66 50-360 280Zm0-202L120-600l360-280 360 280-360 280Zm0-280Zm0 178 230-178-230-178-230 178 230 178Z"/></svg>            
            Pages 
            </Nav.Link>

            
            <Nav.Link href="/medical/alpa-bf-members" className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/medical/alpa-bf-members"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>            
            Email Templates 
            </Nav.Link>

            <Nav.Link href="/medical/alpa-bf-members" className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/medical/alpa-bf-members"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" className='flex-shrink-0'><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>            
            Important Email Notifications  
            </Nav.Link>

            <Nav.Link href="/medical/alpa-bf-members" className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/medical/alpa-bf-members"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M560-520h280v-200H560v200Zm140-50-100-70v-40l100 70 100-70v40l-100 70ZM80-120q-33 0-56.5-23.5T0-200v-560q0-33 23.5-56.5T80-840h800q33 0 56.5 23.5T960-760v560q0 33-23.5 56.5T880-120H80Zm556-80h244v-560H80v560h4q42-75 116-117.5T360-360q86 0 160 42.5T636-200ZM360-400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM182-200h356q-34-38-80.5-59T360-280q-51 0-97 21t-81 59Zm178-280q-17 0-28.5-11.5T320-520q0-17 11.5-28.5T360-560q17 0 28.5 11.5T400-520q0 17-11.5 28.5T360-480Zm120 0Z"/></svg>           
            Contact List 
            </Nav.Link>

            <Nav.Link href="/medical/alpa-bf-members" className={`text-white mb-2 d-flex align-items-center gap-3 ${currentPath == "/medical/alpa-bf-members"  ? "active" : "" }`}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" className='flex-shrink-0'><path d="M680-280q25 0 42.5-17.5T740-340q0-25-17.5-42.5T680-400q-25 0-42.5 17.5T620-340q0 25 17.5 42.5T680-280Zm0 120q31 0 57-14.5t42-38.5q-22-13-47-20t-52-7q-27 0-52 7t-47 20q16 24 42 38.5t57 14.5ZM480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v227q-19-8-39-14.5t-41-9.5v-147l-240-90-240 90v188q0 47 12.5 94t35 89.5Q310-290 342-254t71 60q11 32 29 61t41 52q-1 0-1.5.5t-1.5.5Zm200 0q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80ZM480-494Z"/></svg>           
            Email Notificatin Control 
            </Nav.Link>

          </Nav>
          </div>
          
          <div className="d-flex flex-column justify-content-center">
          <hr />
            <span>
              <h6 className="mt-1 mb-0 text-center">Alpa India - Medical Portal</h6>
            </span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-fill bg-light  side_100  overflow-x-hidden" >
        
        <div className='ps-2'>
          <nav className='d-none d-md-flex gap-3 justify-content-end align-items-center  text-white px-3 py-1 border border-start-0 border-end-0 border-bottom-1 border-success  '>
          <span className='text-dark fs-5'> Hello, John Doe</span>
          <img src={userLogo} alt='user logo' className='img-fluid nav_profile_logo rounded-circle border border-1 '
          onClick={() => userProfileCardRef.current.classList.toggle('show')}
          />
          </nav>
  
          </div>
          <div className='position-relative mb-4'>
          <div className='card rounded-1 medical_user_profile_card bg_gray px-3 py-3' ref={userProfileCardRef}>
              <div className='d-flex flex-column align-items-center gap-2'>
              <img src={userLogo} className='user_profile_img rounded-circle'/>
              <p className='fs-5'> John Doe </p>
              </div>
            
              <div className='d-flex flex-column gap-2 mb-3'>
              <div className='d-flex gap-3 align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#777" className='flex-shrink-0'><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>              <span> sthshkmr172003@gmail.com </span>
              </div>
              <div className='d-flex gap-3 align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#777"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>
              <span> 8123457890 </span>
              </div>
              <div className='d-flex gap-3 align-items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#777"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
              <span> Bangalore </span>
              </div>
              </div>

              <button className='btn btn-outline-primary rounded-0 mb-2'> View Full Details </button>
              <button className='btn btn-outline-primary rounded-0'> Logout </button>

          </div>
          </div>

     
          <div className="row height_90   px-3 px-md-5 pb-5">
            
            <div className="col">
                {/* main content of the webpage  */}
                <Outlet />
            </div>

        

           

           
          </div>
          <ConsoleFooter />

          


        </div>
      </div>
      </div>

      </div>

    </>
  );
}

export default AdminNavbar;
