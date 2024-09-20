const AdminNewsEventsPage = () => {
    return (
        <section className="mb-5">
        <header className="d-flex flex-row justify-content-between py-4 text-center card rounded-0 px-4">
            <h4 className="col-md-10 col-lg-11 ps-md-5  text-uppercase text-success m-0">News & Events </h4>
            <button className="col-md-2 col-lg-1 btn btn-outline-primary width_max_content rounded-0"> Add </button>
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
                        <tr className="border border-1 border-dark">
                 
                            <th className="border border-2 py-3"> Title </th>
                            <th className="border border-2 py-3"> Type </th>
                            <th className="border border-2 py-3"> Posted By  </th>
                            <th className="border border-2 py-3"> Post Date </th>
                            <th className="border border-2 py-3"> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
            
                        <td className="border border-2 py-3">FIRST ANNUAL GENERAL BODY MEETING OF ALPA INDIA ON 28.12.2019   </td>
                        <td className="border border-2 py-3"> 
                        <span className="rounded-pill bg-success text-white px-2 fw-semibold py-1 small_text"> Event </span>
                         </td>
                        <td className="border border-2 py-3"> Sathish Kumar  </td>

                        <td className="border border-2 py-3"> <span className="d-block max_width_content px-1"> 2024-05-02 </span> </td>

                       
                        <td className="border border-2 py-3 "> 
                        <div className="d-flex gap-3">
                        {/* Edit */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
                        className="fill_blue cursor_pointer"
                        >
                        <title> Edit </title>
                        <path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg>



                        {/* Delete */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" 
                        width="24px" 
                        className="fill_red cursor_pointer"
                        >
                        <title> Delete User</title>
                        <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                        </div>
                        </td>
                        </tr>
                    
                    {/* news */}
                    <tr>
            
            <td className="border border-2 py-3"> Lorem Ipsum  </td>
            <td className="border border-2 py-3"> 
            <span className="rounded-pill bg-primary text-white px-2 fw-semibold py-1 small_text"> News </span>
             </td>
            <td className="border border-2 py-3"> Sathish Kumar  </td>

            <td className="border border-2 py-3"> <span className="d-block max_width_content px-1"> 2024-05-02 </span> </td>

           
            <td className="border border-2 py-3 "> 
            <div className="d-flex gap-3">
            {/* Edit */}
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
            className="fill_blue cursor_pointer"
            >
            <title> Edit </title>
            <path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/></svg>



            {/* Delete */}
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" 
            width="24px" 
            className="fill_red cursor_pointer"
            >
            <title> Delete User</title>
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
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

export default AdminNewsEventsPage;
