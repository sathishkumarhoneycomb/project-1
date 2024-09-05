import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns, faUser } from "@fortawesome/free-solid-svg-icons";


function DashBoard() {
    return (
        <>

        <section className="mb-5">

        <div className="pilot_dashboard">

        <div className="d-block d-md-flex w-100 gap-5 mb-5 ">
            <div className="card col-12 col-md-4 d-flex flex-row gap-5 align-items-center py-2 ">
                        <div className="investment_icon rounded-3  ms-3 d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faUser} className="fs-2 p-3 "/>
                        </div>
                        <div className="align-self-center d-flex flex-column justify-content-center">
    <h2 className="mb-0">1</h2>
    <p className="mb-0">No of Installments</p>
  </div>
            </div>
            <div className="card col-12 col-md-4 d-flex flex-row gap-5 align-items-center ">
                    <div className="amount_paid_icon rounded-3 ms-3 d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon icon={faBuildingColumns} className="fs-2 p-3" />
                    </div>
               
                        <div className="align-self-center d-flex flex-column justify-content-center">
                            <h2 className="mb-0">20000</h2>
                            <p className="mb-0">Total Amount paid(INR)</p>
                        </div>
  
            </div>
        </div>
        
        <div className="d-block d-md-flex gap-5 pilot_new_cards">

                <div className="card col-12 col-md-5">

                    <header className="card-header bg_light_blue py-3">
                        <h4 className="card-title text-white fs-normal text-center"> Recent News & Events </h4>
                    </header>

                    <div className="card-body overflow-y-scroll">
                            <div className="d-flex flex-column gap-5 ">

                                    <div className="card">
                                            <header className="card-header">
                                                Event
                                            </header>
                                            <div className="card-body">
                                                <h5> Lorem20  </h5>
                                                <p className="card-text fs-6 truncate-single-line"> Lorem20 Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply </p>
                                                <a className="d-block text-end text-decoration-none"> Read more...</a>
                                            </div>

                                    </div>
                                    <div className="card">
                                            <header className="card-header">
                                                Event
                                            </header>
                                            <div className="card-body">
                                                <h5> Lorem20  </h5>
                                                <p className="card-text fs-6 truncate-single-line"> Lorem20 Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply </p>
                                                <a className="d-block text-end text-decoration-none"> Read more...</a>
                                            </div>

                                    </div>
                                    

                                    <div className="card">
                                            <header className="card-header">
                                                Event
                                            </header>
                                            <div className="card-body">
                                                <h5> Lorem20  </h5>
                                                <p className="card-text fs-6 truncate-single-line"> Lorem20 Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply </p>
                                                <a className="d-block text-end text-decoration-none"> Read more...</a>
                                            </div>

                                    </div>

                                    <div className="card">
                                            <header className="card-header">
                                                Event
                                            </header>
                                            <div className="card-body">
                                                <h5> Lorem20  </h5>
                                                <p className="card-text fs-6 truncate-single-line"> Lorem20 Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply </p>
                                                <a className="d-block text-end text-decoration-none"> Read more...</a>
                                            </div>

                                    </div>



                            </div>
                    </div>


                </div>

                <div className="card col-12 col-md-5  ">
                    <header className="card-header bg_light_blue ">
                        <h4 className="card-title text-white fs-normal text-center py-2"> Recent Topics  </h4>
                    </header>
                    <div className="card-body overflow-y-scroll">
                    <div className="d-flex flex-column gap-5 ">

                        <div className="card">
                                <header className="card-header">
                                    Need Vendor
                                </header>
                                <div className="card-body">
                                   
                                    <p className="card-text fs-6 truncate-single-line"> Lorem20 Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply </p>
                                    <a className="d-block text-end text-decoration-none"> Read more...</a>
                                </div>

                        </div>
                        <div className="card">
                                <header className="card-header">
                                    Need Vendor
                                </header>
                                <div className="card-body">
                                   
                                    <p className="card-text fs-6 truncate-single-line"> Lorem20 Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply </p>
                                    <a className="d-block text-end text-decoration-none"> Read more...</a>
                                </div>

                        </div>


                        <div className="card">
                                <header className="card-header">
                                    Need Vendor
                                </header>
                                <div className="card-body">
                                   
                                    <p className="card-text fs-6 truncate-single-line"> Lorem20 Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply </p>
                                    <a className="d-block text-end text-decoration-none"> Read more...</a>
                                </div>

                        </div>

                        <div className="card">
                                <header className="card-header">
                                    Need Vendor
                                </header>
                                <div className="card-body">
                                   
                                    <p className="card-text fs-6 truncate-single-line"> Lorem20 Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply </p>
                                    <a className="d-block text-end text-decoration-none"> Read more...</a>
                                </div>

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

