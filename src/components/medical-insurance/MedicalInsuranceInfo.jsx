import PremiumCharges from "./PermiumCharges";

function MedicalInsuranceInfo() {
    return (
        <>
        <section className="medical_insurance_info_section mb-6">
        <div className="container"> 

                <header className="text-center mb-5">
                <p className="section_sub_heading color_light_gray text-uppercase fw-semibold"> THE ORIENTAL INSURANCE COMPANY   </p>
                <h2 className="section_heading color_dark_blue "> Medical Insurance </h2>
                </header>



                <p className="fw-semibold fs-5 mb-5"> Medical Insurance for the year 2024 - 2025 : Policy Period : 20th June 2024 to 19th June 2025 - Insurance Co : Liberty General Insurance Ltd. </p>
                <p className="mb-5 fs-5"> ALPA India strives for the betterment of Indian pilots regardless of their country of employment. ALPA India offers its pilots and their family a medical insurance plan as part of its commitment to securing their future. </p>
            <div className="table-responsive">
            <table className="table table-bordered table-striped fs-5   mb-6">
                <thead>
                        <tr >
                            <th className="bg_light_blue text-white"> SNO </th>
                            <th className="bg_light_blue text-white "> COVERAGE </th>
                            <th className="bg_light_blue text-white"> COVERAGE </th>
                            <th className="bg_light_blue text-white"> NEW TERMS </th>
                            <th className="bg_light_blue text-white"> ADDITIONAL BENEFITS </th>
                        </tr>

                </thead>
                <tbody className="">
                        <tr>
                            <td> 1 </td>
                            <td> 	Family Definition </td>
                            <td> 	
A family floater policy is a health insurance plan which covers the entire family on the payment of a single annual premium. The sum assured covers the entire family and can be used in case of multiple hospitalizations in the family </td>
<td> Children OR Parents or Parents in-law  (size of the family should not be more than 1+5). Only dependent and unmarried children  upto 25 years covered. Rest - 99 years.</td>
                                <td>
                                Children upto 25 yrs <br />
                                Permanent disabled child, covered without any age limit 

                                </td>
                        </tr>


                        <tr>
                                    <td> 2 </td>
                                    <td> Sum Insured family floater basis </td>
                                    <td> The sum insured is the maximum value for a particular year that the insurance company can pay if hospitalized. Any amount exceeding the sum insured will have to be borne by the employee. Agreed amount on the sum insured will be the maximum amount received in case of medical treatment or hospitalization. </td>
                                    <td> SUM INSURED     03 Lakhs / 05 Lakhs 10 Lakhs /25 Lakhs & 30 Lakhs </td>
                                    <td> You can select the coverage as per your family's requirement </td>


                        </tr>
           
         
                        <tr>

                            <td> 3 </td>
                            <td> 	Room Rent Restrictions  </td>
                            <td>	Sub-limit on room rent would mean that the insurer defines the maximum amount it will pay towards the room rent. ICU No limit. </td>
                            <td> Normal Room Rent For 3 Lakhs - 3k    5 Lakhs - 6k /  10 Lakhs - 8k /   25 Lakhs -12.5k & 30 Lakhs  - 15k      All other charges in accordance with the Room Rent restriction </td>
                            <td> &nbsp;  </td>


                        </tr>

                        <tr>

                            <td> 4 </td>
                            <td> 	30 days , 1st, 2nd 3rd & 4th Year waiting  </td> 
                            <td> 1.Coverage of Pre-existing Conditions without any waiting period. 2. Waiver of the exclusions relating to the first 30 days of the Policy period. </td> 
                            <td> Waived </td> 
                            <td> &nbsp; </td>

                        </tr>
                        <tr> 
                            <td> 5 </td>
                            <td> 	Maternity Day 1 </td> 
                            <td> No waiting period for Maternity   </td> 
                            <td> Normal & C-section Rs. 1.5 lacs </td>
                            <td> &nbsp; </td>

                        </tr>
                        

                </tbody>


            </table>
            </div>

            <PremiumCharges /> 


       
            </div>
        </section>
        
        </>
    )
}


export default MedicalInsuranceInfo;