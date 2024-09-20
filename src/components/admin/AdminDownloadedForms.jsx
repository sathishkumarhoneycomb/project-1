

const AdminDownloadedForms = () => {
    return (
        <section>
        <header className="py-4 text-center card rounded-0 mb-4">
            <h4 className="text-uppercase text-success m-0">Forms Downloaded (179) </h4>
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
                            <th className="border border-2 py-3"> Mobile No  </th>
                            <th className="border border-2 py-3"> Email  </th>
                            <th className="border border-2 py-3"> Form Type </th>
                            <th className="border border-2 py-3"> Downloaded on  </th>

                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="border border-2 py-3"> Sathish </td>
                        <td className="border border-2 py-3"> 8296213748 </td>
                        <td className="border border-2 py-3"> sthshkmr172003@gmail.com </td>

                        <td className="border border-2 py-3"> Claim Form </td>
                        <td className="border border-2 py-3"> <span className="d-block width_max_content"> 2024-12-5 </span> </td>
                      
                    </tr>

                    <tr>
                        <td className="border border-2 py-3"> Sathish </td>
                        <td className="border border-2 py-3"> 8296213748 </td>
                        <td className="border border-2 py-3"> sthshkmr172003@gmail.com </td>

                        <td className="border border-2 py-3"> Claim Form </td>
                        <td className="border border-2 py-3"> <span className="d-block width_max_content"> 2024-12-5 </span> </td>
                      
                    </tr>

                    <tr>
                        <td className="border border-2 py-3"> Sathish </td>
                        <td className="border border-2 py-3"> 8296213748 </td>
                        <td className="border border-2 py-3"> sthshkmr172003@gmail.com </td>

                        <td className="border border-2 py-3"> Claim Form </td>
                        <td className="border border-2 py-3"> <span className="d-block width_max_content"> 2024-12-5 </span> </td>
                      
                    </tr>
                    <tr>
                        <td className="border border-2 py-3"> Sathish </td>
                        <td className="border border-2 py-3"> 8296213748 </td>
                        <td className="border border-2 py-3"> sthshkmr172003@gmail.com </td>

                        <td className="border border-2 py-3"> Claim Form </td>
                        <td className="border border-2 py-3"> <span className="d-block width_max_content"> 2024-12-5 </span> </td>
                      
                    </tr>                    <tr>
                        <td className="border border-2 py-3"> Sathish </td>
                        <td className="border border-2 py-3"> 8296213748 </td>
                        <td className="border border-2 py-3"> sthshkmr172003@gmail.com </td>

                        <td className="border border-2 py-3"> Claim Form </td>
                        <td className="border border-2 py-3"> <span className="d-block width_max_content"> 2024-12-5 </span> </td>
                      
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

export default AdminDownloadedForms;
