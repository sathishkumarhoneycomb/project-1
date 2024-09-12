import { Link } from "react-router-dom";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns, faUser } from "@fortawesome/free-solid-svg-icons";


function DashBoard() {
    return (
        <>
            <section className="">
                
                <div className="pilot_dashboard">
                    {/* 1st block */}
                    <div className="card  pt-1 px-2">
                    <div className="d-flex gap-3 ">
                    <div className="py-4 px-4 bg-info rounded-2 ">
                    <FontAwesomeIcon icon={faUser} className="text-white fs-2"/>
                    </div>
                    <div className="py-1">
                    <h2 className="fs-2 fw-bold"> 1 </h2>
                    <span> Number of Installments </span>
                    </div>
                    </div>   
                    </div> 

                    {/* 2nd block  */}
                    <div className="card pt-1 px-2">
                    <div className="d-flex gap-3">
                    <div className="py-4 px-4 bg-danger rounded-2">
                    <FontAwesomeIcon icon={faBuildingColumns} className="fs-2 text-white" />
                    </div>
                    <div className="py-1">
                    <h2 className="fs-2 fw-bold"> 200000 </h2>  
                    <span > Total Amount paid (INR) </span>
                    </div>
                    </div>
                    </div>

                    {/* 3rd block  */}
                    <div className=" dashboard_news_card">
                    <div className="card h-100 ">
                        <h2 className="py-3 px-3 bg_light_blue text-white fw-bold fs-4 rounded-2 text-center"> Recent News and Events </h2>
                        <div className="h-100 overflow-y-scroll d-flex flex-column gap-4 py-3 px-3">
                            <div className="card shadow-md">
                                <h5 className="card-header card-title py-2 "> Title 1 </h5>
                                <div className="">
                                    <p className="truncate_three_line px-3 "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                                    <span className="text-end d-block"> <Link to="#" className="text-decoration-none"> Read more... </Link></span>
                                </div>
                            </div>  
                            <div className="card shadow-md">
                                <h5 className="card-header card-title py-2 "> Title 1 </h5>
                                <div className="">
                                    <p className="truncate_three_line px-3 "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                                    <span className="text-end d-block"> <Link to="#" className="text-decoration-none"> Read more... </Link></span>
                                </div>
                            </div> 
                            <div className="card shadow-md">
                                <h5 className="card-header card-title py-2 "> Title 1 </h5>
                                <div className="">
                                    <p className="truncate_three_line px-3 "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                                    <span className="text-end d-block"> <Link to="#" className="text-decoration-none"> Read more... </Link></span>
                                </div>
                            </div>  
                            <div className="card shadow-md  ">
                                <h5 className="card-header card-title py-2 "> Title 1 </h5>
                                <div className="">
                                    <p className="truncate_three_line px-3 "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                                    <span className="text-end d-block"> <Link to="#" className="text-decoration-none"> Read more... </Link></span>
                                </div>
                            </div>               
                        </div>
                        </div>
                    </div>
                    
                    {/* 4th block */}
                    <div className="dashboard_news_card">

                    <div className="card h-100">
                  
                    <h2 className="py-3 px-3 bg_light_blue text-white fw-bold fs-4 rounded-2 text-center"> Recent Topics </h2>
                    <div className="h-100 overflow-y-scroll d-flex flex-column gap-4 px-3 py-3" >

                    <div className="card ">
                                <h5 className="card-header card-title py-2 "> Title 1 </h5>
                                <div className="">
                                    <p className="truncate_three_line px-3 "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                                    <span className="text-end d-block"> <Link to="#" className="text-decoration-none"> Read more... </Link></span>
                                </div>
                            </div>

                            <div className="card ">
                                <h5 className="card-header card-title py-2 "> Title 1 </h5>
                                <div className="">
                                    <p className="truncate_three_line px-3 "> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                                    <span className="text-end d-block"> <Link to="#" className="text-decoration-none"> Read more... </Link></span>
                                </div>
                            </div>
                    </div>
                 
                    </div>
                    </div>
                </div>

            </section>
        </>
    )
}



export default DashBoard;




// <section className="mb-5">

// <div className="pilot_dashboard">

// <div className="d-block d-md-flex w-100 gap-5 mb-5 ">
//     <div className="card col-12 col-md-4 d-flex flex-row gap-5 align-items-center py-2 ">
//                 <div className="investment_icon rounded-3  ms-3 d-flex justify-content-center align-items-center">
//                     <FontAwesomeIcon icon={faUser} className="fs-2 p-3 "/>
//                 </div>
//                 <div className="align-self-center d-flex flex-column justify-content-center">
// <h2 className="mb-0">1</h2>
// <p className="mb-0">No of Installments</p>
// </div>
//     </div>
//     <div className="card col-12 col-md-4 d-flex flex-row gap-5 align-items-center ">
//             <div className="amount_paid_icon rounded-3 ms-3 d-flex justify-content-center align-items-center">
//                 <FontAwesomeIcon icon={faBuildingColumns} className="fs-2 p-3" />
//             </div>
       
//                 <div className="align-self-center d-flex flex-column justify-content-center">
//                     <h2 className="mb-0">20000</h2>
//                     <p className="mb-0">Total Amount paid(INR)</p>
//                 </div>

//     </div>
// </div>

// <div className="d-block d-md-flex gap-5 pilot_new_cards ">

//         <div className="card col-12 col-md-5">

//             <header className="card-header bg_light_blue py-3">
//                 <h4 className="card-title text-white fs-normal text-center"> Recent News & Events </h4>
//             </header>

//             <div className="card-body overflow-y-scroll">
//                     <div className="d-flex flex-column gap-5 ">

//                             <div className="card">
//                                     <header className="card-header">
//                                         Event
//                                     </header>
//                                     <div className="card-body">
//                                         <h5> Lorem20  </h5>
//                                         <p className="card-text fs-6 truncate-single-line"> Lorem20 Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply </p>
//                                         <a className="d-block text-end text-decoration-none"> Read more...</a>
//                                     </div>

//                             </div>
//                             <div className="card">
//                                     <header className="card-header">
//                                         Event
//                                     </header>
//                                     <div className="card-body">
//                                         <h5> Lorem20  </h5>
//                                         <p className="card-text fs-6 truncate-single-line"> Lorem20 Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply </p>
//                                         <a className="d-block text-end text-decoration-none"> Read more...</a>
//                                     </div>

//                             </div>
                            

//                             <div className="card">
//                                     <header className="card-header">
//                                         Event
//                                     </header>
//                                     <div className="card-body">
//                                         <h5> Lorem20  </h5>
//                                         <p className="card-text fs-6 truncate-single-line"> Lorem20 Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply </p>
//                                         <a className="d-block text-end text-decoration-none"> Read more...</a>
//                                     </div>

//                             </div>

//                             <div className="card">
//                                     <header className="card-header">
//                                         Event
//                                     </header>
//                                     <div className="card-body">
//                                         <h5> Lorem20  </h5>
//                                         <p className="card-text fs-6 truncate-single-line"> Lorem20 Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply </p>
//                                         <a className="d-block text-end text-decoration-none"> Read more...</a>
//                                     </div>

//                             </div>



//                     </div>
//             </div>


//         </div>

//         <div className="card col-12 col-md-5  ">
//             <header className="card-header bg_light_blue ">
//                 <h4 className="card-title text-white fs-normal text-center py-2"> Recent Topics  </h4>
//             </header>
//             <div className="card-body overflow-y-scroll">
//             <div className="d-flex flex-column gap-5 ">

//                 <div className="card">
//                         <header className="card-header">
//                             Need Vendor
//                         </header>
//                         <div className="card-body">
                           
//                             <p className="card-text fs-6 truncate-single-line"> Lorem20 Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply </p>
//                             <a className="d-block text-end text-decoration-none"> Read more...</a>
//                         </div>

//                 </div>
//                 <div className="card">
//                         <header className="card-header">
//                             Need Vendor
//                         </header>
//                         <div className="card-body">
                           
//                             <p className="card-text fs-6 truncate-single-line"> Lorem20 Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply </p>
//                             <a className="d-block text-end text-decoration-none"> Read more...</a>
//                         </div>

//                 </div>


//                 <div className="card">
//                         <header className="card-header">
//                             Need Vendor
//                         </header>
//                         <div className="card-body">
                           
//                             <p className="card-text fs-6 truncate-single-line"> Lorem20 Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply </p>
//                             <a className="d-block text-end text-decoration-none"> Read more...</a>
//                         </div>

//                 </div>

//                 <div className="card">
//                         <header className="card-header">
//                             Need Vendor
//                         </header>
//                         <div className="card-body">
                           
//                             <p className="card-text fs-6 truncate-single-line"> Lorem20 Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply </p>
//                             <a className="d-block text-end text-decoration-none"> Read more...</a>
//                         </div>

//                 </div>



// </div>

//             </div>
//         </div>


// </div>


// </div>




// </section>