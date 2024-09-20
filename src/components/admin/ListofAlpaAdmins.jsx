
const ListofAlpaAdmins = () => {
    return (
        <section className="mb-5">
        <header className="py-4 text-center card rounded-0 ">
            <h4 className="text-uppercase text-success m-0"> List of ALPA Admins </h4>
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
                 
                            <th className="border border-2 py-3"> Name </th>
                            <th className="border border-2 py-3"> Email Id </th>
                            <th className="border border-2 py-3"> Phone No </th>
                            <th className="border border-2 py-3"> Gender </th>
                            <th className="border border-2 py-3"> Admin Type </th>
                            <th className="border border-2 py-3"> Status </th>
                            <th className="border border-2 py-3"> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
            
                        <td className="border border-2 py-3"> Sathish </td>
                        <td className="border border-2 py-3"> sthshkmr172003@gmail.com </td>
                        <td className="border border-2 py-3"> 82123456798 </td>

                        <td className="border border-2 py-3"> Male </td>

                        <td className="border border-2 py-3"> <span className="rounded-pill bg-primary text-white px-2 fw-semibold py-1 small_text"> Primary </span> </td>
                        <td className="border border-2 py-3"> <span className="rounded-pill bg-success text-white px-2 fw-semibold py-1 small_text"> Active </span>  </td>
                        <td className="border border-2 py-3 "> 
                        <div className="d-flex gap-3">
                        {/* Edit */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
                        className="fill_blue cursor_pointer"
                        >
                        <title> Edit user</title>
                        <path d="M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z"/></svg>



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
                    <tr>
            
                        <td className="border border-2 py-3"> Sathish </td>
                        <td className="border border-2 py-3"> sthshkmr172003@gmail.com </td>
                        <td className="border border-2 py-3"> 82123456798 </td>

                        <td className="border border-2 py-3"> Male </td>

                        <td className="border border-2 py-3"> <span className="rounded-pill bg-primary text-white px-2 fw-semibold py-1 small_text"> Primary </span> </td>
                        <td className="border border-2 py-3"> <span className="rounded-pill bg-success text-white px-2 fw-semibold py-1 small_text"> Active </span>  </td>
                        <td className="border border-2 py-3 "> 
                        <div className="d-flex gap-3">
                        {/* Edit */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
                        className="fill_blue cursor_pointer"
                        >
                        <title> Edit user</title>
                        <path d="M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z"/></svg>



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

export default ListofAlpaAdmins;
