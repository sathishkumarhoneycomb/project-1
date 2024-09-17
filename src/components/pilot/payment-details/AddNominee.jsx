import { useState } from "react";
import DeleteIcon from "../general-components/DeleteIcon";

const initialAppointeeData = {nomineeId: null, appointeeName: "", appointeeAge: "", appointeeRelationship: "", appointeeGender: "", appointeeAddress: "" }
const initialNomineeData = { nomineeName: '', nomineeAge: '', nomineeRelationship: '', nomineeGender: '', nomineeAllocation: '', nomineeAddress: '', isNomineeMinor: false }


const AddNominee = () => {
    const [formData, setFormData] = useState([initialNomineeData]);
    const [appointeeData, setAppointeeData] = useState([])

    // Nominee 
    const addRow = () => setFormData(prev => ([...prev, { nomineeName: '', nomineeAge: '', nomineeRelationship: '', nomineeGender: '', nomineeAllocation: '', nomineeAddress: '', isNomineeMinor: false }]))

    const handleChange = (e, i) => {
        // loop through each of the object and find which object index is equal to the provided index and change its content respectively
        const updatedFormData = formData.map((data, index) => {
            // make change to this particular object 
            if(index ==  i ) {
                // if the input field is checkbox 
                if(e.target.name == "isNomineeMinor") {
                    if(e.target.checked) {
                        // create a appointee table for the person
                        addAppointee(i)
                    } else {
                        removeAppointee(i)
                    }
                    return { ...data, [e.target.name]: e.target.checked }
                }
                return { ...data, [e.target.name]: e.target.value}
            } else {
                return data
            }
        })
        // 
        setFormData(updatedFormData)
    }

    const deleteRow = (i) => {
        // ask for confirmation 
        let userChoice = window.confirm("Do you want to delete this nominee?")
        if(!userChoice) return;
        let isMinor = false;
        const updatedFormData = formData.filter((data, index) => {
            if(data.isNomineeMinor) isMinor = true;
            if(index != i) return data  
        })
        setFormData(updatedFormData)
        // also update the appointee data 
        if(isMinor) removeAppointee(i)
    }

    // Appointee 
    const addAppointee  = (nomineeId) => {
        let newAppointeeData = { ...initialAppointeeData, nomineeId: nomineeId}
        setAppointeeData(prev => ([...prev, newAppointeeData]))
    }

    const removeAppointee = (nomineeId) => {
       let updatedAppointeeData = appointeeData.filter(data => data.nomineeId != nomineeId)
       setAppointeeData(updatedAppointeeData);
    }

    const handleAppointeeData = (e,i) => {
        let updatedAppointeeData  = appointeeData.map((data, index) => {
            if(index == i ) {
                return {...data, [e.target.name] : e.target.value} 
            }else {
                return data
            }
        })
        setAppointeeData(updatedAppointeeData);
    }

    // form submission 
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Wow!!!!')

        // convert all the data into FormData and send it to the server 
        const finalData = new FormData();
        // loop through each of the form data and append it to the final data 
        const convertToFormData = (nomineeData, appointeeData) => {

           nomineeData.forEach((data, index) => {
            for(let key in data) {
                let fullKey = `${index + 1}_${key}`;
                finalData.append(fullKey, data[key])
            }
            data.nomineeId = index + 1;
            finalData.append(`${index+1}_nomineeId`, data.nomineeId);
           })

           appointeeData.forEach((data, index) => {
            data.nomineeId += 1;
            for(let key in data) {
                let fullKey = `${index+1}_${key}`;
                finalData.append(fullKey, data[key])
            }
           })

        }

        // send the finalData to the server 

        // if the server response is good:


        // if the server response id bad:


    }



    return (
        <section>

            <h4 className='text-uppercase text-success text-center card py-4 rounded-0 mb-4'> Add Nominee </h4>

            <div>
                <p className='fw-semibold mb-3 text-uppercase border border-2 border-top-0  border-end-0 border-start-0 border-dark   width_max_content'> Member ID: </p>
                <p className='border-3 table_primary_color d-inline-block  py-1 ps-2 pe-5 ls_1 fw-semibold'> 30497539074234ALS3423 </p>

                <p className='width_max_content border border-2 border-top-0  border-end-0 border-start-0 border-dark text-uppercase fw-semibold mt-5'> Nominee Details </p>
                <form className='table-responsive' method="post" onSubmit={handleSubmit}>
                {/* Nominee Table  */}
                <div className="table-responsive">
                
              
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

                        <tbody > 

                            {
                                formData.map((data, index) => 
                                    <tr>
                              
                              <td> <input type="text"
                                name='nomineeName' 
                                className='form-control rounded-0 border-3' 
                              placeholder='Nominee name'
                            value={data.nomineeName}
                            onChange={(e) => handleChange(e, index)}
                            required
                               /></td>
                              
                              <td> <input type="number" 
                              name='nomineeAge' 
                              className='form-control rounded-0 border-3' 
                              placeholder='Age (in yrs)'
                              value={data.nomineeAge}
                              onChange={(e) => handleChange(e, index)}
                              required
                               /></td>
                              
                              <td> <input type="text" 
                              name='nomineeRelationship' 
                              className='form-control rounded-0 border-3' 
                              placeholder='Relationship with Manager'
                              value={data.nomineeRelationship}
                              onChange={(e) => handleChange(e, index)}
                              required
                               /></td>
                              
                              <td> <select name='nomineeGender' 
                              className='form-control rounded-0 border-3'
                              value={data.nomineeGender}
                              onChange={(e) => handleChange(e, index)}
                              required
                              >
                                      <option value="" disabled selected> Gender </option>
                                      <option value="female" > Female </option>
                                      <option value="male" > Male </option>
                                      <option value="other"> Other </option>
                                  </select>
                              </td>
                              
                              <td> <input type="text" 
                              name='nomineeAllocation' 
                              className='form-control rounded-0 border-3' 
                              placeholder='% Allocation'
                              value={data.nomineeAllocation}
                              onChange={(e) => handleChange(e, index)}
                              required
                               /></td>
                              
                              <td> <input type='text' 
                              name='nomineeAddress' 
                              className='form-control rounded-0 border-3' 
                              placeholder='address' 
                              value={data.nomineeAddress}
                              onChange={(e) => handleChange(e, index)}
                              required
                              /></td>
                              
                              <td> <input type="checkbox" 
                              name='isNomineeMinor' 
                              className='scale_5 rounded-0 border-3'
                              value={data.isNomineeMinor}
                              onChange={(e) => handleChange(e, index)}
                                /> </td>
                              
                              <td className={index == 0 ? "opacity-0  pe-none" : ""}>
                                        <DeleteIcon handleClick={deleteRow} index={index}/>
                              </td>
                      </tr>
                                )
                            }

                        </tbody>

                    </table>


           
                    <div className="d-flex justify-content-end">
                    {/* <button className='btn btn-outline-success py-1 rounded-0 px-3' type="button"
                    onClick={addRow}
                    > Add more  </button> */}
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    height="44px" 
                    viewBox="0 -960 960 960" 
                    width="44px" 
                    className="border cursor_pointer add_more_btn"
                    onClick={addRow}
                    
                    >
                    <title> add one more nominee </title>
                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                    </div>


                </div>

                {/* Appointee Table  */}
                {
                    appointeeData.length > 0 &&   <div className="">

<p className='width_max_content border border-2 border-top-0  border-end-0 border-start-0 border-dark text-uppercase fw-semibold mt-5'> Appointee Details </p>

<table className="table table-striped">
        <thead className="table-success">
            <tr>
                <th> Name </th>
                <th> Age (in yrs)</th>
                <th> Relationship </th>
                <th> Gender </th>
                <th> Address </th>
            </tr>
        </thead>
        <tbody>

              {
                    appointeeData.map((data, index) => (
                        <tr> 
                    <td> <input type="text" 
                        name="appointeeName" 
                        className="form-control"
                        value={data.appointeeName}
                        onChange={(e) => handleAppointeeData(e, index)}
                        required
                     /></td>
                     <td> <input type="number" 
                     name="appointeeAge"
                    className="form-control"
                    value={data.appointeeAge}
                    onChange={(e) => handleAppointeeData(e,index)}
                    required
                     />
                     </td>
                     <td><input type="text" 
                     name="appointeeRelationship"
                    className="form-control"
                    value={data.appointeeRelationship}
                    onChange={(e) => handleAppointeeData(e, index)}
                    required
                     />
                     </td>
                     <td>
                        <select name="appointeeGender" 
                        className="form-control"
                        value={data.appointeeGender}
                        onChange={(e) => handleAppointeeData(e,index)}
                        required
                        >
                            <option value="" disabled> Gender </option>
                            <option value="male"> Male </option>
                            <option value="female"> Female </option>
                        </select>
                        
                     </td>
                     <td> <input type="text" 
                     name="appointeeAddress" 
                     className="form-control"
                     value={data.appointeeAddress}
                     onChange={(e) => handleAppointeeData(e,index)}
                     required
                      /> </td>
                     <td className="opacity-0 pe-none"> <input type="hidden" name="nomineeId" className="form-control" value={data.nomineeId} /> </td>
                        <td className="opacity-0 pe-none"> </td>
                </tr>
                    ))
              }
        </tbody>

</table>

</div>


                }
                <div className=" d-flex justify-content-center">
                <button className="btn btn-outline-primary py-1 mt-5 px-5 rounded-0 " type="submit"> Submit </button>
                </div>

                </form>

                          </div>


        </section>
    );
}

export default AddNominee;
