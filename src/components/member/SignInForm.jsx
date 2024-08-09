import { useState, useRef } from "react";

  // const [memberTypeValid, setMemberTypeValid] = useState(true);
  // const [paymentOptionValid, setPaymentOptionValid] = useState(true);
    // const [becomeMemberValid, setBecomeMemberValid] = useState(true);
      // const [aircraftValid, setAircraftValid] = useState(true);
  // const [photoValid, setPhotoValid] = useState(true);
  // const [licenseTypeValid, setLicenseTypeValid] = useState(true);
    // const [airlineValid, setAirlineValid] = useState(true);
  // const [baseLocationValid, setBaseLocationValid] = useState(true);
    // const [genderValid, setGenderValid] = useState(true);


function SignInForm() {




  const fileInputRef = useRef(null);

  const [fileError, setFileError] = useState("");
  const [nameValid, setNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [pwdValid, setPwdValid] = useState(true);
  const [dobValid, setDobValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);

  const [panValid, setPanValid] = useState(true);
  const [adharValid, setAdharValid] = useState(true);
  const [medicalFileNumberValid, setMedicalFileNumberValid] = useState(true);

  const [positionValid, setPositionValid] = useState(true);

  const [licenseNumberValid, setLicenseNumberValid] = useState(true);

  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);
  const [postalAddressValid, setPostalAddressValid] = useState(true);

 


  const [formData, setFormData] = useState({
    "name" : "",
    "email" : "",
    "dob": "",
    "phone" : "",
    "gender": "",
    "pan" : "",
    "adhar": "",
    "medicalFileNumber" : "",
    "airline" : "",
    "baseLocation" : "",
    "position" : "",
    "aircraft": "",
    "photo" : null,
    "licenseType" : "",
    "licenseNumber" : "",
    "memberType" : "",
    "paymentOption" : "",
    "password" : "",
    "confirmPassword" : "",
    "postalAddress": "",
    "becomeMember": "",
  })

  const handleFormChange  = (e) =>  {
    if(e.target.name == "photo") {
      const file = e.target.files[0];

      const fileType = e.target.files[0].type;

      const validFileTypes = ["image/png", "image/jpg", "image/jpeg"];
      if(validFileTypes.includes(fileType)) {
        setFileError("")
        setFormData((prev) => {
          return ({...prev, [e.target.name]: file})
        })
      } else {
        setFileError("Please select a valid file")
      }




    } else {
      setFormData((prev) => {
        return ({...prev, [e.target.name]: e.target.value})
      })
    }  

  }

  return (
    <>
      <section className="sectionSignInForm mb-6">
        <div className="container">
          <p className="tertiary-heading d-block text-center">membership </p>
          <h2 className="secondary-heading text-center"> Sign Up </h2>
          <p className="fs-5 text-center mb-6">
            Fill out the form below to join the Air Line Pilots Association
            (ALPA India)
          </p>

          <form className="signInBody pos-relative ">
            <div className="form-grid">


              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className=""
                value={formData.name}
                onChange={handleFormChange}
                required
              />


              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleFormChange}
                required
              />


              <input
                type="date"
                id="dob"
                name="dob"
                placeholder="Date of Birth"
                value={formData.dob}
                onChange={handleFormChange}
                required
              />


              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleFormChange}
                required
              />


              <select id="gender" name="gender" value={formData.gender} onChange={handleFormChange} required>
                <option value="" disabled selected>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>


              <input
                type="text"
                id="pan"
                name="pan"
                placeholder="PAN Number"
                value={formData.pan}
                onChange={handleFormChange}
                required
              />
              <input
                type="text"
                id="adhar"
                name="adhar"
                placeholder="Adhar Number"
                value={formData.adhar}
                onChange={handleFormChange}
                required
              />
              <input
                type="text"
                id="medical"
                name="medicalFileNumber"
                placeholder="DGCA Medical File Number"
                value={formData.medicalFileNumber}
                onChange={handleFormChange}
                required
              />
              <select id="airline" name="airline" 
                     value={formData.airline}
                     onChange={handleFormChange}
              required>
                <option value="" disabled selected>
                  Select your airline
                </option>
                <option value="airline1">Airline 1</option>
                <option value="airline2">Airline 2</option>
                <option value="airline3">Airline 3</option>
              </select>
              <select id="base" name="baseLocation" 
                     value={formData.base}
                     onChange={handleFormChange}
              required>
                <option value="" disabled selected>
                  Select your base location
                </option>
                <option value="location1">Location 1</option>
                <option value="location2">Location 2</option>
                <option value="location3">Location 3</option>
              </select>
              <input
                type="text"
                id="position"
                name="position"
                placeholder="Position"
                value={formData.position}
                onChange={handleFormChange}
                required
              />
              <select id="aircraft" name="aircraft" 
                         value={formData.aircraft}
                         onChange={handleFormChange}
              required>
                <option value="" disabled selected>
                  Select aircraft type
                </option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                <option value="type3">Type 3</option>
              </select>


              <div className="pos-relative mt-2 mb-4">
                <input
                  type="text"
                  placeholder="Upload Passport Size Photo"
                  readOnly
                />
                <img
                  src="https://alpaindia.org/_next/static/media/file-upload.537f20bf.svg"
                  className="fileUploadIcon"
                  onClick={() => fileInputRef.current.click()}
                />
                <input type="file"  name="photo" className={`fileUploadEL invisible ${fileError && "is-invalid"}`} ref={fileInputRef}  onChange={handleFormChange} /> 
                <p className="form-text"> Accepted file types : png, jpg, jpeg</p>
                {
                  fileError && <p className="invalid-feedback">{fileError}</p>
                }
              </div>


            </div>
            <div className="form-grid">
              <select id="licenseType" name="licenseType" 
              value={formData.licenseType}
              onChange={handleFormChange}
              required>
                <option value="" disabled selected>
                  Select license type
                </option>
                <option value="type1">Type 1</option>
                <option value="type2">Type 2</option>
                <option value="type3">Type 3</option>
              </select>
              <input
                type="text"
                id="licenseNumber"
                name="licenseNumber"
                placeholder="License Number"
                value={formData.licenseNumber}
                onChange={handleFormChange}
                required
              />
              <select id="memberType" name="memberType" 
                      value={formData.memberType}
                      onChange={handleFormChange}
              required>
                <option value="" disabled selected>
                  Select member type
                </option>
                <option value="member1">Member 1</option>
                <option value="member2">Member 2</option>
                <option value="member3">Member 3</option>
              </select>
              <select id="paymentOption" name="paymentOption" 
                      value={formData.paymentOption}
                      onChange={handleFormChange}
              required>
                <option value="" disabled selected>
                  Select payment option
                </option>
                <option value="credit">Credit Card</option>
                <option value="debit">Debit Card</option>
                <option value="paypal">PayPal</option>
              </select>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleFormChange}
                required
              />{" "}
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleFormChange}
                required
              />
            </div>
            <textarea
              className="w-100 mt-4 p-3"
              id="postalAddress"
              name="postalAddress"
              placeholder="Postal Address"
              rows="3"
              onChange={handleFormChange}
              required
            >{formData.postalAddress}</textarea>

            <div className="radioBtnsDiv d-flex justify-content-between align-items-center mt-5 ">
             
              <p className="fs-5_5">
                Do you want to become ALPA Group Medical Coverage (ALPA GMC) ?{" "}
              </p>
              <div className="d-flex justify-content-around gap-4">
                {/* <label>
                  <input
                    type="radio"
                    name="member"
                    value="yes"
                    className="memberCheckbox"
                    onChange={handleChange}
                   
                  />
                  <span className="checkmark bg-dark-blue yes-check">  YES   </span> 
                       </label> */}
                  <input type="radio" className="btn-check" id="btn-check-2" name="becomeMember" value="Yes" onChange={handleFormChange} autoComplete="off" />
<label className="btn btn-outline-primary border-dark  " htmlFor="btn-check-2" >Yes</label>
                  
{/*            
                <label>
                  <input
                    type="radio"
                    name="member"
                    value="no"
                    className="memberCheckbox"
                    onChange={handleChange}
                  />
                  <span className="checkmark bg-dark-blue no-check"> No   </span>
                 
                </label> */}
                                  <input type="radio" className="btn-check"  id="btn-check-3" name="becomeMember" value="No"  onChange={handleFormChange}  autoComplete="off" />
<label className="btn btn-outline-primary border-dark" htmlFor="btn-check-3" >No</label>
              </div>
            </div>
            <div>
              <input
                type="checkbox"
                value=""
                id="flexCheckIndeterminate"
                className="scale-5 me-2"
              />
              <label className="fs-5_5 ms-2 mt-4">I accept all the <a> terms and conditions </a></label>
            </div>
            <div className="text-center mt-5">
              <button className="btn btn-lg sendBtn text-white ">SUBMIT</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default SignInForm;
