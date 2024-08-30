function PremiumCharges() {
    return (
        <>
        <p className="fw-semibold fs-5 mb-5">  PREMIUM FOR THE YEAR 2023 - 2024 (Policy period 20th June 2024 to 19th June 2025) </p>

        <table className=" table table-striped table-bordered fs-5">
            <thead className="text-center "> 
                <tr>
                    <th className="col bg_light_blue text-white text-uppercase"> Sum Insured</th>
                    <th className="col bg_light_blue  text-white text-uppercase" > Premium incl. GST </th>
                </tr>
            </thead>
            <tbody className="text-center">
                <tr>
                    <td> 3 Lakhs </td>
                    <td> ₹ 34,200 </td>
                </tr>
                <tr> 
                    <td> 5 Lakhs </td>
                    <td> ₹ 1,10,579 </td> 
                </tr>
                <tr> 
                <td> 10 Lakhs </td>
                    <td> ₹ 1,23,462 </td>   
                    </tr> 
                    <tr>
                    <td> 25 Lakhs </td> 
                    <td>₹ 1,43,640 </td>
                    </tr>
                    <tr>
                    <td> 30 Lakhs </td>
                    <td> ₹ 1,48,199 </td>

                    </tr>
            </tbody>
            <tfoot >
                <tr >
                    <td colSpan={2} className="text-center">Plus Rs. 2,500/- as Admin Charges</td>
                </tr>
            </tfoot>
        </table>
        </>
    )
}


export default PremiumCharges;
