import DeleteIcon from "./DeleteIcon";

const NomineeRow = () => {
    return (
       <>
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
                              
                              <td>
                                        <DeleteIcon />
                              </td>
                      </tr>

       </>
    );
}

export default NomineeRow;
