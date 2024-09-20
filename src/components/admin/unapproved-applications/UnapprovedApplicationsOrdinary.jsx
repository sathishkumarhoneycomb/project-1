const UnapprovedApplicationsOrdinary = () => {
    return (
        <section>
        <header className="py-4 text-center card rounded-0">
            <h4 className="text-uppercase text-success m-0">List of Unapproved Applications - Ordinary Member (46 Applications) </h4>
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
                            <th className="border border-2 py-3"> Actions  </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        {/* <td className="border border-2 py-3"> 101 </td> */}
                        <td className="border border-2 py-3"> Sathish </td>
                        <td className="border border-2 py-3"> sthshkmr172003@gmail.com </td>
                        <td className="border border-2 py-3"> 8296213748 </td>
                        <td className="border border-2 py-3"> Male  </td>
                        <td className="border border-2 py-3"> ABCFE1234F  </td>
                        <td className="border border-2 py-3"> Bangalore   </td>
                        <td className="border border-2 py-3"> 565689520   </td>
                        <td className="border border-2 py-3"> CHPL TEST    </td>
                        <td className="border border-2 py-3"> Air India    </td>
                        <td className="border border-2 py-3"> Test    </td>
                        <td className="border border-2 py-3"> Captain    </td>
                        <td className="border border-2 py-3"> Airbus 320  </td>
                        <td className="border border-2 py-3"> 09-03-2023   </td>

                        <td className="border border-2 py-3 width_max_content"> 
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" 
                        viewBox="0 -960 960 960" 
                        width="24px" 
                        
                        className="approve_icon cursor_pointer me-3">
                        <title> Approve  </title>
                        <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>  
                        
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
                        className="reject_icon cursor_pointer"
                        >
                        <title> Reject </title>
                        <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                      
                        </td>
                    </tr>
                    
                    <tr>
                        {/* <td className="border border-2 py-3"> 101 </td> */}
                        <td className="border border-2 py-3"> Sathish </td>
                        <td className="border border-2 py-3"> sthshkmr172003@gmail.com </td>
                        <td className="border border-2 py-3"> 8296213748 </td>
                        <td className="border border-2 py-3"> Male  </td>
                        <td className="border border-2 py-3"> ABCFE1234F  </td>
                        <td className="border border-2 py-3"> Bangalore   </td>
                        <td className="border border-2 py-3"> 565689520   </td>
                        <td className="border border-2 py-3"> CHPL TEST    </td>
                        <td className="border border-2 py-3"> Air India    </td>
                        <td className="border border-2 py-3"> Test    </td>
                        <td className="border border-2 py-3"> Captain    </td>
                        <td className="border border-2 py-3"> Airbus 320  </td>
                        <td className="border border-2 py-3"> 09-03-2023   </td>
                        <td className="border border-2 py-3 width_max_content"> 
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" 
                        viewBox="0 -960 960 960" 
                        width="24px" 
                        
                        className="approve_icon cursor_pointer me-3">
                        <title> Approve  </title>
                        <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>  
                        
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
                        className="reject_icon cursor_pointer"
                        >
                        <title> Reject </title>
                        <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                      
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

export default UnapprovedApplicationsOrdinary;
