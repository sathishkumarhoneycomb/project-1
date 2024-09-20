
const InactiveOrdinaryMembers = () => {
    return (
        <section>
        <header className="py-4 text-center card rounded-0 ">
            <h4 className="text-uppercase text-success m-0"> List of Inactive Members - ORDINARY (4 Members)  </h4>
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
                            <th className="border border-2 py-3"> Member Id</th>
                            <th className="border border-2 py-3"> Name </th>
                            <th className="border border-2 py-3"> Email Id </th>
                            <th className="border border-2 py-3"> Phone No </th>
                            <th className="border border-2 py-3"> Base </th>
                            <th className="border border-2 py-3"> Paid </th>
                            <th className="border border-2 py-3"> Requested Date  </th>
                            <th className="border border-2 py-3"> Approved Date  </th>
                            <th className="border border-2 py-3"> Status  </th>
                            <th className="border border-2 py-3"> Action </th>
                        </tr>
                    </thead>
                    <tbody>

                    <tr>
                        <td className="border border-2 py-2"> 101 </td>
                        <td className="border border-2 py-2"> Sathish </td>
                        <td className="border border-2 py-2"> sthshkmr172003@gmail.com </td>
                        <td className="border border-2 py-2"> 8296213748 </td>
                        <td className="border border-2 py-2"> Bangalore </td>
                        <td className="border border-2 py-2"> Yes </td>
                        <td className="border border-2 py-2 "> <span className="d-block width_max_content px-1"> 2024-04-03 </span> </td>
                        <td className="border border-2 py-2 "> <span className="d-block width_max_content px-1"> 2024-04-03 </span> </td>
                        <td className="border border-2 py-2"> <span className="rounded-pill bg-danger text-white px-2 fw-semibold py-1 small_text"> Inactive </span>  </td>
                        <td className="border border-2 py-2"> 
                        <div className="d-flex gap-3">
                        {/* edit payment */}
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        height="24px" 
                        viewBox="0 -960 960 960" 
                        width="24px" 
                        className="fill_blue cursor_pointer">
                        <title> Edit payment </title>
                        <path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"/></svg>
                        
                        {/* edit user  */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" 
                        viewBox="0 -960 960 960" width="24px" 
                        className="fill_blue cursor_pointer"
                        >
                        <title> Edit user </title>
                        <path d="M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z"/></svg>

                        {/* generate pdf  */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" 
                        width="24px" 
                        className="fill_red cursor_pointer"
                        >
                        <title> Generate PDF </title>
                        <path d="M360-460h40v-80h40q17 0 28.5-11.5T480-580v-40q0-17-11.5-28.5T440-660h-80v200Zm40-120v-40h40v40h-40Zm120 120h80q17 0 28.5-11.5T640-500v-120q0-17-11.5-28.5T600-660h-80v200Zm40-40v-120h40v120h-40Zm120 40h40v-80h40v-40h-40v-40h40v-40h-80v200ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"/></svg>
                        
                        {/* view pdf  */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" 
                        viewBox="0 -960 960 960" 
                        width="24px" 
                        className="fill_red cursor_pointer"
                        >
                        <title> View PDF </title>
                        <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
                       {/* send mail */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
                        className="fill_green cursor_pointer"
                        >
                        <title> Send Mail </title>
                        <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                       
                       {/* delete  */}
                       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
                       className="fill_red cursor_pointer"
                       >
                       <title> Delete </title>
                       <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>

                       {/* active user */}
                       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
                    className="fill_green cursor_pointer"
                    >
                    <title> change user status to active  </title>
                    <path d="M702-480 560-622l57-56 85 85 170-170 56 57-226 226Zm-342 0q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 260Zm0-340Z"/></svg>
                  
                    
                       </div>
                        </td>
                    </tr>


                    
                    <tr>
                        <td className="border border-2 py-2"> 101 </td>
                        <td className="border border-2 py-2"> Sathish </td>
                        <td className="border border-2 py-2"> sthshkmr172003@gmail.com </td>
                        <td className="border border-2 py-2"> 8296213748 </td>
                        <td className="border border-2 py-2"> Bangalore </td>
                        <td className="border border-2 py-2"> Yes </td>
                        <td className="border border-2 py-2 "> <span className="d-block width_max_content px-1"> 2024-04-03 </span> </td>
                        <td className="border border-2 py-2 "> <span className="d-block width_max_content px-1"> 2024-04-03 </span> </td>
                        <td className="border border-2 py-2"> <span className="rounded-pill bg-danger text-white px-2 fw-semibold py-1 small_text"> Inactive </span>  </td>
                        <td className="border border-2 py-2"> 
                        <div className="d-flex gap-3">
                        {/* edit payment */}
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        height="24px" 
                        viewBox="0 -960 960 960" 
                        width="24px" 
                        className="fill_blue cursor_pointer">
                        <title> Edit payment </title>
                        <path d="M560-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM280-320q-33 0-56.5-23.5T200-400v-320q0-33 23.5-56.5T280-800h560q33 0 56.5 23.5T920-720v320q0 33-23.5 56.5T840-320H280Zm80-80h400q0-33 23.5-56.5T840-480v-160q-33 0-56.5-23.5T760-720H360q0 33-23.5 56.5T280-640v160q33 0 56.5 23.5T360-400Zm440 240H120q-33 0-56.5-23.5T40-240v-440h80v440h680v80ZM280-400v-320 320Z"/></svg>
                        
                        {/* edit user  */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" 
                        viewBox="0 -960 960 960" width="24px" 
                        className="fill_blue cursor_pointer"
                        >
                        <title> Edit user </title>
                        <path d="M400-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM80-160v-112q0-33 17-62t47-44q51-26 115-44t141-18h14q6 0 12 2-8 18-13.5 37.5T404-360h-4q-71 0-127.5 18T180-306q-9 5-14.5 14t-5.5 20v32h252q6 21 16 41.5t22 38.5H80Zm560 40-12-60q-12-5-22.5-10.5T584-204l-58 18-40-68 46-40q-2-14-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T628-460l12-60h80l12 60q12 5 22.5 11t21.5 15l58-20 40 70-46 40q2 12 2 25t-2 25l46 40-40 68-58-18q-11 8-21.5 13.5T732-180l-12 60h-80Zm40-120q33 0 56.5-23.5T760-320q0-33-23.5-56.5T680-400q-33 0-56.5 23.5T600-320q0 33 23.5 56.5T680-240ZM400-560q33 0 56.5-23.5T480-640q0-33-23.5-56.5T400-720q-33 0-56.5 23.5T320-640q0 33 23.5 56.5T400-560Zm0-80Zm12 400Z"/></svg>

                        {/* generate pdf  */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" 
                        width="24px" 
                        className="fill_red cursor_pointer"
                        >
                        <title> Generate PDF </title>
                        <path d="M360-460h40v-80h40q17 0 28.5-11.5T480-580v-40q0-17-11.5-28.5T440-660h-80v200Zm40-120v-40h40v40h-40Zm120 120h80q17 0 28.5-11.5T640-500v-120q0-17-11.5-28.5T600-660h-80v200Zm40-40v-120h40v120h-40Zm120 40h40v-80h40v-40h-40v-40h40v-40h-80v200ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"/></svg>
                        
                        {/* view pdf  */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" 
                        viewBox="0 -960 960 960" 
                        width="24px" 
                        className="fill_red cursor_pointer"
                        >
                        <title> View PDF </title>
                        <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>
                       {/* send mail */}
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
                        className="fill_green cursor_pointer"
                        >
                        <title> Send Mail </title>
                        <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                       
                       {/* delete  */}
                       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
                       className="fill_red cursor_pointer"
                       >
                       <title> Delete </title>
                       <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>

                       {/* active user */}
                       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" 
                    className="fill_green cursor_pointer"
                    >
                    <title> change user status to active  </title>
                    <path d="M702-480 560-622l57-56 85 85 170-170 56 57-226 226Zm-342 0q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 260Zm0-340Z"/></svg>
                  
                    
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

export default InactiveOrdinaryMembers;