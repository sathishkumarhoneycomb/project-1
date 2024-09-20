import React from 'react';

const RejectedApplicationsBF = () => {
    return (
        <section>
        <header className="py-4 text-center card rounded-0">
            <h4 className="text-uppercase text-success m-0">List of Rejected Applications - BF (4 Applications) </h4>
        </header>

        <div className="card rounded-0  px-3 py-4">
            {/* header meta options */}
            <div className="d-block d-lg-flex justify-content-between mb-4">
                {/* select list of entries  */}
                <div className=" d-flex align-items-center gap-2 mb-3">
                <label> Show </label>
                <select className="form-control small_width rounded-0" >
                    <option value="10"> 10 </option>
                    <option value="25"> 25 </option>
                    <option value="50"> 50 </option>
                    <option value="all"> All </option>
                </select>
                <span> entries </span>
                </div>

                {/* search by keywords  */}
                <div className=" d-flex align-items-center gap-3 ">
                    <label className=""> Search: </label>
                    <input type="text" className="form-control width_max_content rounded-0" /> 
                </div>


            </div>

            {/* table section */}
            <div className="mb-3 table-responsive">
                <table className="table table-striped rounded-0">
                    <thead className="table-primary">
                        <tr className="border border-2 ">
                            {/* <th className="border border-2 py-3"> Member Id</th> */}
                            <th className="border border-2 py-3 "> Name </th>
                            <th className="border border-2 py-3"> Email Id </th>
                            <th className="border border-2 py-3"> Phone No </th>
                            <th className="border border-2 py-3"> Gender </th>
                            <th className="border border-2 py-3"> PAN No </th>
                            <th className="border border-2 py-3"> Address  </th>
                            <th className="border border-2 py-3"> DGCA </th>
                            <th className="border border-2 py-3"> Licence Type  </th>
                            <th className="border border-2 py-3"> Airline  </th>
                            <th className="border border-2 py-3"> Base  </th>
                            <th className="border border-2 py-3"> Position  </th>
                            <th className="border border-2 py-3"> Aircraft  </th>
                            <th className="border border-2 py-3"> Request Date  </th>
                            <th className="border border-2 py-3"> Reason  </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className=''>
                        {/* <td className="border border-2 py-3"> 101 </td> */}
                        <td className="border border-2 py-2"> Sathish </td>
                        <td className="border border-2 py-2"> sthshkmr172003@gmail.com </td>
                        <td className="border border-2 py-2"> 8296213748 </td>
                        <td className="border border-2 py-2"> Male  </td>
                        <td className="border border-2 py-2"> ABCFE1234F  </td>
                        <td className="border border-2 py-2"> Bangalore   </td>
                        <td className="border border-2 py-2"> 565689520   </td>
                        <td className="border border-2 py-2"> CHPL TEST    </td>
                        <td className="border border-2 py-2"> Air India    </td>
                        <td className="border border-2 py-2"> Test    </td>
                        <td className="border border-2 py-2"> Captain    </td>
                        <td className="border border-2 py-2"> Airbus 320  </td>
                        <td className="border border-2 py-2"> 09-03-2023   </td>

                        <td className="border border-2 py-1" > 	
                        <span className='d-block reason_content_width' > Age – BF is open only to Indian nationals below 58 years </span>
                          </td>
                    </tr>

                    <tr className=''>
                        {/* <td className="border border-2 py-3"> 101 </td> */}
                        <td className="border border-2 py-2"> Sathish </td>
                        <td className="border border-2 py-2"> sthshkmr172003@gmail.com </td>
                        <td className="border border-2 py-2"> 8296213748 </td>
                        <td className="border border-2 py-2"> Male  </td>
                        <td className="border border-2 py-2"> ABCFE1234F  </td>
                        <td className="border border-2 py-2"> Bangalore   </td>
                        <td className="border border-2 py-2"> 565689520   </td>
                        <td className="border border-2 py-2"> CHPL TEST    </td>
                        <td className="border border-2 py-2"> Air India    </td>
                        <td className="border border-2 py-2"> Test    </td>
                        <td className="border border-2 py-2"> Captain    </td>
                        <td className="border border-2 py-2"> Airbus 320  </td>
                        <td className="border border-2 py-2"> 09-03-2023   </td>

                        <td className="border border-2 py-1" > 	
                        <span className='d-block reason_content_width' > 	Lack of proper documents as required by the scheme</span>
                          </td>
                    </tr>

                    <tr className=''>
                        {/* <td className="border border-2 py-3"> 101 </td> */}
                        <td className="border border-2 py-2"> Sathish </td>
                        <td className="border border-2 py-2"> sthshkmr172003@gmail.com </td>
                        <td className="border border-2 py-2"> 8296213748 </td>
                        <td className="border border-2 py-2"> Male  </td>
                        <td className="border border-2 py-2"> ABCFE1234F  </td>
                        <td className="border border-2 py-2"> Bangalore   </td>
                        <td className="border border-2 py-2"> 565689520   </td>
                        <td className="border border-2 py-2"> CHPL TEST    </td>
                        <td className="border border-2 py-2"> Air India    </td>
                        <td className="border border-2 py-2"> Test    </td>
                        <td className="border border-2 py-2"> Captain    </td>
                        <td className="border border-2 py-2"> Airbus 320  </td>
                        <td className="border border-2 py-2"> 09-03-2023   </td>

                        <td className="border border-2 py-1" > 	
                        <span className='d-block reason_content_width' > 	Lack of proper documents as required by the scheme </span>
                          </td>
                    </tr>


                    </tbody>
                </table>

            </div>
            {/* footer meta info  */}
            <div className="d-flex justify-content-between gap-3">
                <div>
                    <span> Showing 1 to 10 of 18 entries </span>
                </div>

                <div className="d-block d-md-flex">
                    <button className="btn"> Previous </button>

                    <button className="btn "> 1 </button>
                    <button className="btn btn-primary"> 2 </button>

                    <button className="btn"> Next </button>
                </div>

            </div>
        </div>
    </section>
    );
}

export default RejectedApplicationsBF;
