

const UnapprovedApplicationsBF = () => {
    return (
        <section>
        <header className="py-4 text-center card rounded-0">
            <h4 className="text-uppercase text-success m-0">List of Unapproved Applications - BF (18 Applications) </h4>
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

                        <td className="border border-2 py-2 "> 
                        <div className="d-flex gap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" 
                        viewBox="0 -960 960 960" 
                        width="24px" 
                        
                        className="approve_icon cursor_pointer me-1">
                        <title> Approve  </title>
                        <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>  
                        
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
                        className="reject_icon cursor_pointer "
                        >
                        <title> Reject </title>
                        <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
                        className="view_icon me-1"
                        >
                        <title> View Pilot Document </title>
                        <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>

                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
                        className="view_icon cursor_pointer"
                        >
                        <title> Regenerate Form 1</title>
                        <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>

                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
                        className="add_suggestion_icon cursor_pointer"
                        >
                        <title> Add more Documents  </title>
                        <path d="M760-200v-160q0-50-35-85t-85-35H273l144 144-57 56-240-240 240-240 57 56-144 144h367q83 0 141.5 58.5T840-360v160h-80Z"/></svg>
                        
                        </div>
                        </td>
                    </tr>

                    <tr>
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

                        <td className="border border-2 py-2 "> 
                        <div className="d-flex gap-2 ">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" 
                        viewBox="0 -960 960 960" 
                        width="24px" 
                        
                        className="approve_icon cursor_pointer me-1">
                        <title> Approve  </title>
                        <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>  
                        
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
                        className="reject_icon cursor_pointer "
                        >
                        <title> Reject </title>
                        <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
                        className="view_icon me-1"
                        >
                        <title> View Pilot Document </title>
                        <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>

                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
                        className="view_icon cursor_pointer"
                        >
                        <title> Regenerate Form 1</title>
                        <path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg>

                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
                        className="add_suggestion_icon cursor_pointer"
                        >
                        <title> Add more Documents  </title>
                        <path d="M760-200v-160q0-50-35-85t-85-35H273l144 144-57 56-240-240 240-240 57 56-144 144h367q83 0 141.5 58.5T840-360v160h-80Z"/></svg>
                        
                        </div>
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

export default UnapprovedApplicationsBF;
