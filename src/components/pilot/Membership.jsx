

const Membership = () => {
    return (
            <>

                <section className="px-2 py-3">

                        <div>

                            <header className="card d-flex justify-content-center align-items-center mb-3">
                                    <h3 className="text-success py-3"> Membership </h3>
                            </header>

                            <div className="">
                                    <div className="card mb-5 py-2 px-2">

                                        <h5 className="text-success text-uppercase  mb-0"> Membership Id: 22030030ALPA3003 </h5>

                                    </div>
                                    <div className="table-responsive">
                                        <table className="table px-2">
                                        <thead className="">
                                            <tr>
                                                <th> Sl. No </th>
                                                <th> Membership </th>
                                                <th> Status </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        
                                        <tr>
                                                <td> 1  </td>
                                                <td> ORDINARY Member  </td>
                                                <td >
                                                <div className="form-check form-switch d-flex justify-content-start">
                                                <div className="col-3">
                                                <span> Inactive </span>
                                                </div>
                                                <div className="col-3 d-flex justify-content-center align-items-center">
  <input className="form-check-input border-4 " type="checkbox"  />
  </div>
  <div className="col-4"> 
    <span> Active </span>
  </div>

</div>

                                                </td>

                                            </tr>
                                            <tr>    
                                                <td> 2 </td>
                                                <td>
                                                    <p> ORDINARY Member + Benevolent Fund Member </p>
                                                    <span> Declare Document Attachment</span>
                                                    <span className="d-block"> Form2 Document </span>
                                                </td>

                                                <td >   
                                                

                                                <div className="form-check form-switch d-flex">
                                                <div className="col-3">
                                                <span> Inactive </span>
                                                </div>
                                                <div className="col-3 d-flex justify-content-start align-items-center ">
  <input className="form-check-input border-4 ms-1 " type="checkbox"  />
  </div>
  <div className="col-4 "> 
    <span> Active </span>
  </div>

</div>

                                                </td>
                                                </tr>

                                                <tr>
                                                                        <td> 3 </td>
                                                                        <td> GMC </td>
                                                                        <td>
                                                                        <div className="form-check form-switch d-flex">
                                                <div className="col-3">
                                                <span> Inactive </span>
                                                </div>
                                                <div className="col-3 d-flex justify-content-start align-items-center ">
  <input className="form-check-input border-4 ms-1 " type="checkbox"  />
  </div>
  <div className="col-4 "> 
    <span> Active </span>
  </div>

</div>

                                                                        </td>

                                                </tr>


                                        </tbody>

                                              

                                                  

                                     


                                        </table>


                                    </div>


                            </div>



                        </div>

                </section>

            </>
    );
}

export default Membership;
