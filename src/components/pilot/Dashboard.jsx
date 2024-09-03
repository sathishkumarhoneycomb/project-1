import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPiggyBank ,faBuildingColumns, faUser } from "@fortawesome/free-solid-svg-icons";



function DashBoard() {
    return (
        <>

        <section className="mb-5">

        <div className="d-block d-md-flex w-100 gap-5">
            <div className="card col-12 col-md-4 d-flex flex-row gap-5 align-items-center py-2 ">
                        <div className="investment_icon ms-3 d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faUser} className="fs-2 "/>
                        </div>
                        <div className="align-self-center d-flex flex-column justify-content-center">
    <h2 className="mb-0">1</h2>
    <p className="mb-0">No of Installments</p>
  </div>
            </div>
            <div className="card col-12 col-md-4 d-flex flex-row gap-5 align-items-center ">
                    <div className="amount_paid_icon ms-3 d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon icon={faBuildingColumns} className="fs-2" />
                    </div>
               
                        <div className="align-self-center d-flex flex-column justify-content-center">
    <h2 className="mb-0">20000</h2>
    <p className="mb-0">Total Amount paid(INR)</p>
    </div>
  
            </div>
        </div>

        <div >

                <div className="card">

                    <header className="card-header">
                        <p className="card-title"> Recent News & Events </p>
                    </header>

                    <div className="card-body">
                            <div className="overflow-scroll">

                                    <div className="card">
                                            <header className="card-header">
                                                Event
                                            </header>
                                            <div className="card-body">
                                                <h5> Lorem Ipsum is simply </h5>
                                                <p> Lorem10 </p>
                                            </div>

                                    </div>

                                    <div className="card">
                                            <header className="card-header">
                                                Event
                                            </header>
                                            <div className="card-body">
                                                <h5> Lorem Ipsum is simply </h5>
                                                <p> Lorem10 </p>
                                            </div>

                                    </div>

                                    <div className="card">
                                            <header className="card-header">
                                                Event
                                            </header>
                                            <div className="card-body">
                                                <h5> Lorem Ipsum is simply </h5>
                                                <p> Lorem10 </p>
                                            </div>

                                    </div>



                            </div>
                    </div>


                </div>

                <div className="card">
                    <header className="card-header">
                        <h4> Recent Topics  </h4>
                    </header>
                    <div className="card-body">
                            <div className="overflow-scroll">

                                    <div className="card">
                                        <header className="card-header">
                                            Vendor Wanted
                                        </header>
                                        <div className="card-body">
                                            <p className="card-text"> Need to Discuss </p>
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

