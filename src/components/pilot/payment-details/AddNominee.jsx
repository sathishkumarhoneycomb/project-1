import React from 'react';

const AddNominee = () => {
    return (
        <section>

            <h4 className='text-uppercase text-success text-center card py-4 rounded-0 mb-4'> Add Nominee </h4>

            <div>
                <p className='fw-semibold mb-2 text-uppercase'> Member ID: </p>
                <p className='border-3 table_primary_color   d-inline-block  py-1 ps-2 pe-5 ls_1 fw-semibold'> 30497539074234ALS3423 </p>

                <p className='width_max_content border border-2 border-top-0  border-end-0 border-start-0 border-dark text-uppercase fw-semibold mt-5'> Nominee Details </p>
                <div>
                <form className='table-responsive'>
                    <table className='table nominee_table table-striped'>
                        <thead className='table-primary'>
                        <tr>
                            <th> Name </th>
                            <th> Age (in yrs)</th>
                            <th> Relationship </th>
                            <th> Gender </th>
                            <th> % Allocation </th>
                            <th> Address </th>
                            <th> Is Minor ? </th>
                            </tr>
                        </thead>
                        <tbody> 
                            <tr>
                              
                                    <td> <input type="text" name='nomineeName' className='form-control rounded-0 border-3' placeholder='Nominee name' /></td>
                                    <td> <input type="number" name='nomineeAge' className='form-control rounded-0 border-3' placeholder='Age (in yrs)' /></td>
                                    <td> <input type="text" name='nomineeRelationship' className='form-control rounded-0 border-3' placeholder='Relationship with Manager' /></td>
                                    <td> <select name='nomineeGender' className='form-control rounded-0 border-3'>
                                            <option value="" disabled selected> Gender </option>
                                            <option value="female" > Female </option>
                                            <option value="male" > Male </option>
                                            <option value="other"> Other </option>
                                        </select>
                                    </td>
                                    <td> <input type="text" name='nomineeAllocation' className='form-control rounded-0 border-3' placeholder='% Allocation' /></td>
                                    <td> <input type='text' name='nomineeAddress' className='form-control rounded-0 border-3' placeholder='address' /></td>
                                    <td> <input type="checkbox" name='isNomineeMinor' className='scale_5 rounded-0 border-3'  /> </td>
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                    height="40px" 
                    viewBox="0 -960 960 960" 
                    width="40px" 
                    fill="#ff6b6b"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                    </svg>
                            </tr>
   

                            
        
                 

                        </tbody>
                    </table>
           
                    </form>

                    <button className='btn btn-outline-primary py-1 ' > Add more  </button>
                </div>

            </div>


        </section>
    );
}

export default AddNominee;
