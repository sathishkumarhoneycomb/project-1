
const BFMemberPaymentDetails = () => {
    return (
        <div>

<div className="card">
                        
                        <div className="card-header text-uppercase d-block d-md-flex justify-content-between  align-items-center">
                            <h6 className="text-success m-0 lh-lg"> Payment Details (Benevolent Fund Membership) <span className="text-danger"> (due on 05-09-2024)  </span> </h6>
                            <div className="d-flex gap-3">
                            <button className="btn btn-outline-primary rounded-0 text-uppercase m-md-0 mt-3"> Add Payment </button>
                            <button className="btn btn-outline-primary rounded-0 text-uppercase m-md-0 mt-3"> Add Nominee </button>
                            </div>
                        </div>

                        <div className="card-body">
                            <table className="table table-stripped">
                                <thead>
                                    <tr >
                                        <th className=" border-bottom "> Sl. No</th>
                                        <th> Year </th>
                                        <th> Amount (INR)</th>
                                        <th> Late payment Fee (INR)</th>
                                        <th> Payment Date </th>
                                        <th> Payment type </th>
                                        <th> Payment Status </th>
                                        <th> Reference No</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr >
                                        <td className="bg_light_gray"> 1 </td>
                                        <td className="bg_light_gray"> 2024 </td>
                                        <td className="bg_light_gray"> 5000.00  </td>
                                        <td className="bg_light_gray"> 200.00  </td>
                                        <td className="bg_light_gray"> 14 Aug 2024 </td>
                                        <td className="bg_light_gray"> Online  </td>
                                        <td className="bg_light_gray"> Success </td>
                                        <td className="bg_light_gray"> 520232350 </td>
                                        

                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        </div>
            
        </div>
    );
}

export default BFMemberPaymentDetails;
