

const RejectedApplications = () => {
    return (
        <section className="">
        <header className="py-4 text-center card rounded-0 mb-4">
            <h4 className="text-uppercase text-success m-0"> List of Rejected Members - ALPA + BF (4 Members) </h4>
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
                            <th className="border border-2 py-3"> Member </th>
                            <th className="border border-2 py-3"> Status </th>
                            <th className="border border-2 py-3"> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="border border-2 py-3"> 101 </td>
                        <td className="border border-2 py-3"> sthshkmr172003@gmail.com </td>
                        <td className="border border-2 py-3"> sthshkmr172003@gmail.com </td>
                        <td className="border border-2 py-3"> 8296213748 </td>
                        <td className="border border-2 py-3"> Bangalore </td>
                        <td className="border border-2 py-3"> Yes </td>
                        <td className="border border-2 py-3"> <span className="rounded-pill bg-danger text-white px-2 fw-semibold py-1 small_text"> Rejected </span>  </td>
                        <td className="border border-2 py-3 d-flex gap-1"> 
                        <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" className="view_icon cursor_pointer">
                        <title> View medical history </title>
                        <path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z"/></svg>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="edit_icon cursor_pointer">
                        <title> Edit Document</title>
                        <path d="M560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v120h-80v-80H520v-200H240v640h240v80H240Zm280-400Zm241 199-19-18 37 37-18-19Z"/></svg>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-2 py-3"> 101 </td>
                        <td className="border border-2 py-3"> Sathish </td>
                        <td className="border border-2 py-3"> sthshkmr172003@gmail.com </td>
                        <td className="border border-2 py-3"> 8296213748 </td>
                        <td className="border border-2 py-3"> Bangalore </td>
                        <td className="border border-2 py-3"> Yes </td>
                        <td className="border border-2 py-3"> <span className="rounded-pill bg-danger text-white px-2 fw-semibold py-1 small_text"> Rejected </span>  </td>
                        <td className="border border-2 py-3 d-flex gap-1"> 
                        <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" className="view_icon cursor_pointer">
                        <title> View medical history </title>
                        <path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z"/></svg>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="edit_icon cursor_pointer">
                        <title> Edit Document</title>
                        <path d="M560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v120h-80v-80H520v-200H240v640h240v80H240Zm280-400Zm241 199-19-18 37 37-18-19Z"/></svg>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-2 py-3"> 101 </td>
                        <td className="border border-2 py-3"> Sathish </td>
                        <td className="border border-2 py-3"> sthshkmr172003@gmail.com </td>
                        <td className="border border-2 py-3"> 8296213748 </td>
                        <td className="border border-2 py-3"> Bangalore </td>
                        <td className="border border-2 py-3"> Yes </td>
                        <td className="border border-2 py-3"> <span className="rounded-pill bg-danger text-white px-2 fw-semibold py-1 small_text"> Rejected </span>  </td>
                        <td className="border border-2 py-3 d-flex gap-1"> 
                        <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" className="view_icon cursor_pointer">
                        <title> View medical history </title>
                        <path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z"/></svg>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="edit_icon cursor_pointer">
                        <title> Edit Document</title>
                        <path d="M560-80v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v120h-80v-80H520v-200H240v640h240v80H240Zm280-400Zm241 199-19-18 37 37-18-19Z"/></svg>
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

export default RejectedApplications;
