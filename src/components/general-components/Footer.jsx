import { useState, useEffect, useRef } from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import FooterBanner from "../../assets/images/banners/footer_banner.jpg"


function Footer() {

  return (
    <>
  {/* NOTE: added a background image for this footer  */}
<footer className="section_footer text-white pb-1 pt-5">
<div className="footer" >
 
  <div className="footer-card">
    <NavLink to="/" >
    <img
      src="https://alpaindia.org/_next/static/media/logo.7ddf3dc7.svg"
      alt="alpa logo"
    />
    </NavLink>
    <p className="fs-5 lh-lg mt-4 ">
      ALPA India is an organization that unites pilots from all airlines
      and aviation in general. The membership is open presently.
    </p>
  </div>
  {/* ----------------------------------------- */}

  {/* second div  */}
  <div className="footer-card">
    <h5 className="text-uppercase mb-md-5"> QUICK LINKS </h5>

    <ul className="fs-5 list-unstyled  lh-lg">
      <li> <NavLink to="/about" className="text-white text-decoration-none"> About </NavLink> </li>
      <li> <NavLink to="/news-events" className="text-white text-decoration-none"> News & Events </NavLink> </li>
      <li> <NavLink to="/alpa-benevolent-fund" className="text-white text-decoration-none"> Benevolent Fund </NavLink> </li>
      <li> <NavLink to="/medical-insurance " className="text-white text-decoration-none"> Medical Insurance </NavLink> </li>
      <li> <NavLink to="/contact" className="text-white text-decoration-none">Contact </NavLink> </li>
    </ul>
  </div>
  {/* ----------------------------------------- */}

  {/* third div  */}
  <div className="footer-card">
    <h5 className="text-uppercase mb-md-5"> POLICIES </h5>

    <ul className="fs-5 list-unstyled  lh-lg">
      <li> <NavLink to="/terms-and-condition" className="text-white text-decoration-none"> Terms & Conditions </NavLink> </li>
      <li> <NavLink to="/privacy-policy" className="text-white text-decoration-none"> Privacy Policy</NavLink>    </li>
      <li> <NavLink to="/disclaimer-policy" className="text-white text-decoration-none"  > Disclaimer Policy </NavLink> </li>
    </ul>
  </div>
  {/* ----------------------------------------- */}

  {/* fourth div  */}
  <div className="footer-card ">
    <h5 className="text-uppercase mb-md-5">PARTNER LOGIN</h5>

    <ul className="fs-5 list-unstyled  lh-lg">
      <li> Pilot Login</li>
      <li>ALPA Admin </li>
      <li> Medical Panel Login</li>
    </ul>
  </div>

  {/* ----------------------------------------- */}

  {/* fifth div  */}
  <div className="footer-card ">
    <h5 className="text-uppercase mb-md-5"> EMAIL ADDRESS</h5>

    <ul className="fs-5 list-unstyled  lh-lg ">
      <li>
        <img
          src="https://alpaindia.org/_next/static/media/email_icon.1e34b855.svg"
          alt="mail svg "
        />
        <a
          href="mailto:Office@alpaindia.org"
          className="text-white text-decoration-none ms-2"
        >
          Office@alpaindia.org
        </a>
      </li>
      <li>
        <img
          src="https://alpaindia.org/_next/static/media/email_icon.1e34b855.svg"
          alt="mail svg "
        />

        <a
          href="mailto:info@alpaindia.org"
          className="text-white text-decoration-none ms-2"
        >
          {" "}
          info@alpaindia.org{" "}
        </a>
      </li>
    </ul>
  </div>
  {/* ----------------------------------------- */}
</div>
<hr />
<div className="d-flex justify-content-between ms-2 me-2">
  <p>
    Copyright © {new Date().getFullYear()} ALPA India | All Rights
    Reserved
  </p>
  <div>
    <p> Designed by Honeycomb Creative Support </p>
  </div>
</div>
</footer>



    </>
  )
}

export default Footer;





// <div className="position-relative">
// <img src={FooterBanner} alt="alpa fly" className='image-fluid w-100 h-100'/>

// {/* <!-- Footer --> */}
// <footer
//     className="text-center text-lg-start text-white position-absolute top-0"
//     >

// {/* <!-- Grid container --> */}
// <div className="container p-4 pb-0">
// {/* <!-- Section: Links --> */}
// <section className="">
//   {/* <!--Grid row--> */}
//   <div className="row">
//     {/* <!-- Grid column --> */}
//     <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">

//         <img src="https://alpaindia.org/_next/static/media/logo.7ddf3dc7.svg" />

//       <p>
//       ALPA India is an organization that unites pilots from all airlines and aviation in general. The membership is open presently.
//       </p>
//     </div>
//     {/* <!-- Grid column --> */}

//     <hr className="w-100 clearfix d-md-none" />

//     {/* <!-- Grid column --> */}
//     <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
//       <h6 className="text-uppercase mb-4 font-weight-bold">quick links</h6>
//       <p>
//         <a className="text-white">About</a>
//       </p>
//       <p>
//         <a className="text-white">News & Events</a>
//       </p>
//       <p>
//         <a className="text-white">Benevolent Fund</a>
//       </p>
//       <p>
//         <a className="text-white">Medical Insurance</a>
//       </p>
//       <p>
//         <a className="text-white">Contact</a>
//       </p>
//     </div>
//     {/* <!-- Grid column --> */}

//     <hr className="w-100 clearfix d-md-none" />

//     {/* <!-- Grid column --> */}
//     <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
//       <h6 className="text-uppercase mb-4 font-weight-bold">
//       Policies
//       </h6>
//       <p>
//         <a className="text-white">Terms & Conditions</a>
//       </p>
//       <p>
//         <a className="text-white">Privacy Policy</a>
//       </p>
//       <p>
//         <a className="text-white">Disclaimer Policy</a>
//       </p>

//     </div>


//     {/* <!-- Grid column --> */}
//     <hr className="w-100 clearfix d-md-none" />

//     {/* <!-- Grid column --> */}
//     <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
//       <h6 className="text-uppercase mb-4 font-weight-bold">Partner Login</h6>
//       <p> <a> Pilot Login </a></p>
//       <p><a> ALPA Admin </a> </p>
//       <p><a> Medical Panel Login </a></p>
//     </div>
    

//     <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
//       <h6 className="text-uppercase mb-4 font-weight-bold">
//       Email Address
//       </h6>
//       <p>
//         <a className="text-white">info@alpaindia.org</a>
//       </p>

//     </div>
//     {/* <!-- Grid column --> */}


    
//   </div>
//   {/* <!--Grid row--> */}
// </section>
// {/* <!-- Section: Links --> */}

// <hr className="my-3" />

// {/* <!-- Section: Copyright --> */}
// <section className="p-3 pt-0">
//   <div className="row d-flex align-items-center">
//     {/* <!-- Grid column --> */}
//     <div className="col-md-7 col-lg-8 text-center text-md-start">
//       {/* <!-- Copyright --> */}
//       <div className="p-3">
//         © 2020 Copyright:
//         <a className="text-white" href="https://mdbootstrap.com/"
//            >MDBootstrap.com</a
//           >
//       </div>
//       {/* <!-- Copyright --> */}
//     </div>
//     {/* <!-- Grid column --> */}

//     {/* <!-- Grid column --> */}
//     <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
//       {/* <!-- Facebook --> */}
//       <a
//          className="btn btn-outline-light btn-floating m-1 text-white"
     
//          role="button"
//          ><i className="fab fa-facebook-f"></i
//         ></a>

//       {/* <!-- Twitter --> */}
//       <a
//          className="btn btn-outline-light btn-floating m-1 text-white"
    
//          role="button"
//          ><i className="fab fa-twitter"></i
//         ></a>

//       {/* <!-- Google --> */}
//       <a
//          className="btn btn-outline-light btn-floating m-1 text-white"
   
//          role="button"
//          ><i className="fab fa-google"></i
//         ></a>

//       {/* <!-- Instagram --> */}
//       <a
//          className="btn btn-outline-light btn-floating m-1 text-white"
//          role="button"
//          ><i className="fab fa-instagram"></i></a>
//     </div>
//     {/* <!-- Grid column --> */}
//   </div>
// </section>
// {/* <!-- Section: Copyright --> */}
// </div>
// {/* <!-- Grid container --> */}
// </footer>
// {/* <!-- Footer --> */}
// </div>