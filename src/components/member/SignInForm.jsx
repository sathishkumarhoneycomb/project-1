import { useState, useRef , useEffect} from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns"; 



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: "90vh",
    padding: "2rem",
  },
};

Modal.setAppElement('#root'); // or '#yourAppElement' based on your app's root element



  const truncateMiddle = (str) => {
    let maxLength = 30;
    if (str.length <= maxLength) return str;
    const start = str.slice(0, Math.floor(maxLength / 2) - 1);
    const end = str.slice(-Math.floor(maxLength / 2) + 1);
    return `${start}...${end}`;
  };

  const objectToFormData = (obj, form = new FormData(), parentKey = '') => {
    for (const [key, value] of Object.entries(obj)) {
      const fullKey = parentKey ? `${parentKey}[${key}]` : key;
  
      if (value instanceof Object && !(value instanceof File)) {
        // If the value is an object (but not a File), recursively handle it
        objectToFormData(value, form, fullKey);
      } else {
        // Append the key-value pair to FormData
        form.append(fullKey, value);
      }
    }
    return form;
  };


 const questions =  [
    { "title": "require_hospitalization", "description": "Any illness or injury requiring hospitalization (including neuropsychiatric)" },
    { "title": "previous_illness", "description": "Any previous work-related accident or illness (Including Aviation accident)" },
    { "title": "mental_illness", "description": "Nervous or Mental illness (including psychological/psychiatric trouble)" },
    { "title": "sleep_disorder", "description": "Insomnia, Sleep walking or any sleep disorders" },
    { "title": "Impairment", "description": "Impairment in learning, intelligence, self-care, memory or communication" },
    { "title": "suicide_attempt", "description": "Attempted suicide" },
    { "title": "head_injury", "description": "Head injury, Concussion" },
    { "title": "migraine", "description": "Severe or frequent Headaches, Migraine" },
    { "title": "dizziness", "description": "Fainting spells, Dizziness, Fits/Epilepsy/Convulsions" },
    { "title": "unconsciousness", "description": "Unconsciousness, for any reason" },
    { "title": "back_pain", "description": "Any back pain or injury, back or neck problems" },
    { "title": "vascular_trouble", "description": "Heart or vascular trouble/disease" },
    { "title": "anaemia", "description": "Anaemia or any other blood disease/disorder" },
    { "title": "bp", "description": "High or low blood pressure" },
    { "title": "chest_pain", "description": "Chest pain, palpitation or breathlessness" },
    { "title": "pneumonia", "description": "Asthma, Bronchitis, Pneumonia, Pleurisy or any other Lung trouble" },
    { "title": "intestinal_trouble", "description": "Stomach, bowel or intestinal trouble" },
    { "title": "indigestion", "description": "Indigestion or pain after food, Heart-burn, Piles, Hernia" },
    { "title": "jaundice", "description": "Liver trouble, Jaundice, Hepatitis B virus infection or positive HBsAg" },
    { "title": "kidney_trouble", "description": "Kidney or bladder trouble, in male only – any prostatic trouble" },
    { "title": "urine_trouble", "description": "Blood in urine or stool, any urine/stool disturbances" },
    { "title": "ear_trouble", "description": "Earache, ear infection, hearing disturbances/disorder, or any ear trouble" },
    { "title": "vision_trouble", "description": "Eye or vision trouble, Eye or corneal operation" },
    { "title": "wearing_anything", "description": "Wearing or ever worn spectacles and/or contact lenses" },
    { "title": "night_blindness", "description": "Colour vision problem, Difficulty seeing in the dark or night blindness" },
    { "title": "leprosy", "description": "Tuberculosis, Leprosy, any infectious/communicable illness" },
    { "title": "malaria", "description": "Malaria, other tropical diseases" },
    { "title": "cancer", "description": "Any malignancy or cancer" },
    { "title": "fever", "description": "Rheumatism, Rheumatic fever, Joints pain" },
    { "title": "diabetes", "description": "Diabetes" },
    { "title": "hormone_disorder", "description": "Thyroid disease/disorder, Hormone disorder" },
    { "title": "std", "description": "Sexually transmitted diseases (STD) or any venereal disease" },
    { "title": "hiv", "description": "A positive HIV test" },
    { "title": "skin_condition", "description": "Any abnormal skin condition or disease" },
    { "title": "drug_allergy", "description": "Any drug allergy, anaphylaxis, or other allergies/sensitivities" },
    { "title": "alcohol", "description": "Alcohol, tobacco, drug, narcotic or any substance abuse" },
    { "title": "dental_problems", "description": "Any dental problems" },
    { "title": "failed_examination", "description": "Have you ever failed a medical examination for military service, employment, insurance or any license" },
    { "title": "drug_medicines", "description": "Are you on any drug/medicines at present" },
    { "title": "past_history", "description": "Any past history of alcohol/drugs positive incidence in aviation" }
]

const initialInnerFormData = questions.reduce((acc, { title }) => {
  acc[title] = ''; // Initialize value as empty string
  return acc;
}, {});


function SignInForm() {



  const fileInputRef = useRef(null);

  const [fileError, setFileError] = useState("");

  const [nameValid, setNameValid] = useState(true);
  
  const [emailValid, setEmailValid] = useState(true);

  const [passwordValid, setPasswordValid] = useState(true);
  
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

  const [dobValid, setDobValid] = useState(true);
  
  const [mobileValid, setmobileValid] = useState(true);

  const [panValid, setPanValid] = useState(true);

  const [aadharValid, setaadharValid] = useState(true);

  const [validDob, setValidDob] = useState(true);

  const validators = {
    nameValid : setNameValid,
    emailValid : setEmailValid,
    mobileValid: setmobileValid,

    passwordValid: setPasswordValid,
    confirmPasswordValid: setConfirmPasswordValid,

    panValid : setPanValid,
    aadhar : setaadharValid,

  }

  const notify = (message) => toast(message);
  const [modalIsOpen, setModalIsOpen] = useState(false);






  const [formData, setFormData] = useState({
    "name" : "",
    "email" : "",
    "dob": "",
    "mobile" : "",
    "gender": "",
    "pan" : "",
    "aadhar": "",
    "dgca" : "",
    "airline" : "",
    "base" : "",
    "position" : "",
    "aircraft": "",
    "photo" : null,
    "licenceType" : "",
    "licenseNumber" : "",
    "memberType" : "",
    "noofmonth" : "",
    "password" : "",
    "confirmPassword" : "",
    "address": "",
    "is_gmc": "",
    "acceptTC" : false
  })


  const [innerFormData, setInnerFormData] = useState( { ...initialInnerFormData , "medicalAssessment" : ""});

const checkALlFieldsSelected = () =>  {
  let all_selected = true;
  Object.entries(innerFormData).forEach(([key, value]) => {
      if(!value) {
        all_selected = false;
      }
  })
  return all_selected;
}

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if(e.target.name == "memberType" && e.target.value == "ALPA Member + Benevolent Fund Member") {
      openModal();
    } else {
      setInnerFormData(initialInnerFormData)
    }

    // Update form data state
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    // Validate the input and update validity state
    if (e.target.checkValidity()) {
      let validatorName = name + 'Valid';
      let setValidState = validators[validatorName];

      if (setValidState) {
        setValidState(true);
      }
    } else {
      let validatorName = name + 'Valid';
      let setValidState = validators[validatorName];

      if (setValidState) {
        setValidState(false);
      }
    }
  };


const handleFileChange = (e) => {
const file = e.target.files[0];
const type = e.target.files[0].type;
setFormData((values) => ({...values, [e.target.name] : file}))
}



const handleDateChange = (e) => {
    let date = new Date(e.target.value);
    let age = new Date().getFullYear()  - date.getFullYear(); 
    console.log(age);
    if(age < 18) {
      setValidDob(false);
    } else if (age > 18) {
      setValidDob(true); 
    }

    setFormData(prev => ({...prev, "dob" : e.target.value}));
}

const openModal = () => setModalIsOpen(true);
const closeModal = () => {
  
  setFormData(prev => ({...prev, "memberType" : ""}))
    
  setModalIsOpen(false);
}


  useEffect( () => {
    
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const result =  regex.test(formData.email.trim());
    if(formData.email){
      setEmailValid(result);
    }
    

  },[formData.email])


  useEffect( () => {
    const regex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
    const result  = regex.test(formData.pan.trim());
    if(formData.pan) {
      setPanValid(result);
    }


  },[formData.pan])


  useEffect(() => {
    const regex = /^[2-9][0-9]{3}\s?[0-9]{4}\s?[0-9]{4}$/;
    const result = regex.test(formData.aadhar.trim());
    if(formData.aadhar){
      setaadharValid(result);
   }
  },[formData.aadhar])

  useEffect(() => {
    if(formData.password != formData.confirmPassword) {
      setConfirmPasswordValid(false)
    }else {
      setConfirmPasswordValid(true)
    }

  }, [formData.confirmPassword])

  const handleSubmit = async (e) => {
    e.preventDefault();

    // check if the agree is selected if not display a toast notification 
    if(!formData.acceptTC) {
      notify("Please accept terms and conditions");
      return
    }

    let combinedData; 

    if(formData.memberType === "ALPA Member + Benevolent Fund Member") {
      combinedData = {...formData, ...innerFormData}
    } else {
      combinedData = formData;
    }

    let data = objectToFormData(combinedData);



    try {
      let response = await axios.post("http://localhost:5000/pilot/register", data,  {
        headers: {
          'Content-Type' : 'multipart/form-data'
        }
      })
      console.log(response);
    }catch(e) {
      console.log("Error in submitting the form", e);
    }

  }



  const handleQuestionChange = (e) => {
    
    const { name, value }  = e.target;
   
    setInnerFormData(prev => {
      return (
        {...prev, [name]: value}
      )
    })
  }


  const handleInnerForm = () => {

    let result = checkALlFieldsSelected();


      if(!result) {
        notify('Please select all the field')
      } else {
        setModalIsOpen(false);
        return ;
      }
  }





  return (
    <>
      <section className="member_signin_section mb-6">
        <div className="container">
          <header className="text-center mb-5">
          <p className="section_sub_heading color_light_gray text-uppercase fw-semibold">membership </p>
          <h2 className="section_heading color_dark_blue"> Sign Up </h2>
          </header>
         
          <p className="fs-5 text-center mb-6">
            Fill out the form below to join the Air Line Pilots Association
            (ALPA India)
          </p>


        <div className="row justify-content-center">

        
          <form className="col-sm-12 col-lg-10 col-xl-8" onSubmit={handleSubmit} enctype="multipart/form-data">
            <div className="form_grid">

          <div className="form-group"> 
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className={`form-control border-0 bg_light_shade_blue py-3 small_placeholder w-100 ${!nameValid ? "is-invalid" : ""}`}  
                value={formData.name}
                onChange={handleInputChange}

                minLength="3"
                required
              
              />

              {   formData.name && !nameValid && 
              <p className="form-text text-danger position-absolute invalid-feedback"> Username can not be less than 3 characters </p>
              }
              </div>
         
              
              <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                className={`form-control border-0 bg_light_shade_blue py-3 small_placeholder w-100 ${!emailValid ? "is-invalid" : ""}`}
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
         
                required
                
              />

              {    
            formData.email && !emailValid && 
                  <p className=" position-absolute invalid-feedback"> Please enter a valid email </p>
              }

</div>
            <div className="form-group" >
              <input  
                type="date"  
                className={`form-control border-1 bg_light_shade_blue py-3 small_placeholder w-100 ${!validDob ? "is-invalid" : ""}`}
                value={formData.dob}
                placeholderText="Date of Birth"
                onChange={handleDateChange} 
              />
                  
                  {    
            formData.dob && !validDob && 
                  <p className=" position-absolute invalid-feedback"> Age must be greater than 18 </p>
              }                

            </div>

                <div> 
              <input
                type="tel"
                id="mobile"
                name="mobile"
                className={`form-control border-0 bg_light_shade_blue py-3 small_placeholder w-100 ${!mobileValid ? "is-invalid" : ""}`}  
                placeholder="Mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                pattern="\d{10}"
                title="mobile number must be exactly 10 digits"
                required
              />

{   
            formData.mobile && !mobileValid && 
                  <p className="position-absolute invalid-feedback"> Please enter a valid mobile number </p>
              }

</div>


              <select id="gender" name="gender" 
              className="form-control border-0 bg_light_shade_blue small_placeholder py-3"
              value={formData.gender} onChange={handleInputChange} required>
                <option value="" disabled selected>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <div>

              
              <input
                type="text"
                id="pan"
                name="pan"
                className={`form-control border-0 bg_light_shade_blue py-3 small_placeholder w-100 ${!panValid ? "is-invalid" : ""}`}  
                placeholder="PAN Number"
                value={formData.pan}
                onChange={handleInputChange}
                required
              />
            {
              formData.pan && !panValid &&  <p className="position-absolute invalid-feedback"> Please enter a valid PAN Number</p>
            }
</div>

              <div>
              <input
                type="text"
                id="aadhar"
                className={`form-control border-0 bg_light_shade_blue py-3 small_placeholder w-100 ${!aadharValid ? "is-invalid" : ""}`}  
                name="aadhar"
                placeholder="aadhar Number"
                value={formData.aadhar}
                onChange={(e) => setFormData((prev) => {
                  
                  let data = e.target.value.replaceAll(' ', '');

                  return (
                    {...prev, "aadhar" : data }
                  )
                })}
                required
              />
               {
              formData.aadhar && !aadharValid &&  <p className="position-absolute invalid-feedback"> Please enter a valid aadhar Number</p>
            }


            </div>
              <input
                type="text"
                id="medical"
                className="form-control border-0 bg_light_shade_blue small_placeholder py-3"
                name="dgca"
                placeholder="DGCA Medical File Number"
                value={formData.dgca}
                onChange={handleInputChange}
                required
              />
              <select id="airline" name="airline"
              className="form-control border-0 bg_light_shade_blue small_placeholder py-3" 
                     value={formData.airline}
                     onChange={handleInputChange}
              required>
                <option value="" disabled selected>
                  Name of Airline
                </option>
                                                                            <option value="Jet Airways" >Jet Airways</option>
                                                                            <option value="Air India">Air India</option>
                                                                            <option value="Indigo">Indigo</option>
                                                                            <option value="Spice Jet">Spice Jet</option>
                                                                            <option value="Air India Express">Air India Express</option>
                                                                            <option value="Go Air" >Go Air</option>
                                                                            <option value="Air Asia India" >Air Asia India</option>
                                                                            <option value="Vistara" >Vistara</option>
                                                                            <option value="Alliance">Alliance</option>
                                                                            <option value="True Jet" >True Jet</option>
                                                                            <option value="Blue Dart">Blue Dart</option>
                                                                            <option value="Jetlite">Jetlite</option>
                                                                            <option value="General Aviation">General Aviation</option>
                                                                            <option value="Others">Others</option>

              </select>
              <input type="text" id="base" name="base" 
                     className="form-control border-0 bg_light_shade_blue small_placeholder py-3"
                     value={formData.base}
                     onChange={handleInputChange}
                     placeholder="base location"
              required />
                
              
              <select
                type="text"
                id="position"
                name="position"
                className="form-control border-0 bg_light_shade_blue small_placeholder py-3"
                placeholder="Position"
                value={formData.position}
                onChange={handleInputChange}
                required
              >
                        <option value="" disabled selected>
                  Position
                </option>
                <option value="Captain" >Captain</option>
                <option value="First Officer">First Officer</option>
                <option value="Second Officer" >Second Officer</option>

                </select>
             
              <select id="aircraft" name="aircraft" 
                         className="form-control border-0 bg_light_shade_blue small_placeholder py-3"
                         value={formData.aircraft}
                         onChange={handleInputChange}
              required>
                <option value="" disabled selected>
                  Select aircraft type
                </option>
                <option value="Airbus A320" >Airbus A320</option>
                                                                            <option value="Boeing 737">Boeing 737</option>
                                                                            <option value="Airbus 330">Airbus 330</option>
                                                                            <option value="Boeing 777" >Boeing 777</option>
                                                                            <option value="Boeing 787" >Boeing 787</option>
                                                                            <option value="ATR 72">ATR 72</option>
                                                                            <option value="Bombardier">Bombardier</option>
                                                                            <option value="Others" >Others</option>
              </select>


              <div className="position-relative mt-2 mb-4">
                <input
                  type="text"
                  className="form-control border-0 bg_light_shade_blue py-3 w-100 outline_none fs-6  " 
                  placeholder={formData.photo ? truncateMiddle(formData.photo.name) : "upload form data"}
                  readOnly
                />
                <img
                  src="https://alpaindia.org/_next/static/media/file-upload.537f20bf.svg"
                  className="position-absolute top-0 end-0"
                  onClick={() => fileInputRef.current.click()}
                />
                <input type="file"  name="photo" className={` position-absolute top-0 end-0 invisible ${fileError && "is-invalid"}`} ref={fileInputRef}  onChange={handleFileChange} accept="image/png,image/jpg,image/jpeg" /> 

                <p className="form-text"> Accepted file types : png, jpg, jpeg</p>
                {
                  fileError && <p className="invalid-feedback">{fileError}</p>
                }
              </div>


            </div>
            <div className="form_grid">
              <select id="licenceType" name="licenceType" 
              className="form-control border-0 bg_light_shade_blue small_placeholder py-3"
              value={formData.licenceType}
              onChange={handleInputChange}
              required>
                <option value="" disabled selected>
                  Select license type
                </option>
                <option value="ATPL (India)">ATPL (India)</option>
                                                                                <option value="ATPL (Others)">ATPL (Others)</option>
                                                                                <option value="CPL">CPL</option>
                                                                                <option value="ATPL (H)">ATPL (H)</option>
                                                                                <option value="CHPL" >CHPL</option>
                                                                                <option value="OTHERS" >OTHERS</option>
              </select>
              <input
                type="text"
                id="licenseNumber"
                className="form-control border-0 bg_light_shade_blue small_placeholder py-3"
                name="licenseNumber"
                placeholder="License Number"
                value={formData.licenseNumber}
                onChange={handleInputChange}
                required
              />
              <select id="memberType" name="memberType" 
              className="form-control border-0 bg_light_shade_blue small_placeholder py-3"
                      value={formData.memberType}
                      onChange={handleInputChange}
              required>
                <option value="" disabled selected>
                  Member Type
                </option>
                <option value="ALPA Member" title="ALPA Membership for 1 Year. Fees INR 3000">ORDINARY Member</option>
                <option value="ALPA Member + Benevolent Fund Member" title="ALPA Membership for 1 Year and Benevolent Fund Member. Fees INR 3000 for ALPA Membership and INR 6000 pm for Benevolent Fund Membership" >ALPA Member + Benevolent Fund Member</option>
              </select>

              <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
                <button onClick={closeModal} className="border-0 my-3"><FontAwesomeIcon icon={faX} className="text-danger" /></button>
                <div>
              



          {
            questions.map(question => {
              return (
                <>
                    <div className="d-md-flex justify-content-betweengap-5 justify-content-between mb-4">
                      <label className="col-lg-8 "> {question['description']} </label>
                      <div className="d-md-flex col-lg-2  justify-content-between">
                        <div className="">
                        <input type="radio" name={question['title']} value="yes" 
  checked={innerFormData[question['title']] === 'yes'}                         onClick={handleQuestionChange}
                        /> <label> Yes </label>
                        </div>
                        <div>
                        <input type="radio" name={question['title']} value="no"
                          checked={innerFormData[question['title']] === 'no'} 
                        onClick={handleQuestionChange}
                        /> <label> No </label>
                        </div>
                      </div>
                    </div>
              </>
              )
            }) 
          }

<div className="mt-5 text-success" >

<span className="form-label mb-3"> Please upload last 3 medical assessment in a single pdf </span>
<input type="file" accept="application/pdf" className="form-control mt-3 mb-5" name="medicalAssessment" onChange={(e) => {
  setInnerFormData(prev => {
    return (
      {...prev, medicalAssessment : e.target.files[0]}
    )
  })
}} /> 


</div>   

          <button className="bg_dark_blue text-white " type="button" onClick={handleInnerForm} > Save Changes </button>
        

       
        </div>
      </Modal>





            <div>
              <select id="noofmonth" name="noofmonth" 
              className="form-control border-0 bg_light_shade_blue small_placeholder py-3"
                      value={formData.noofmonth}
                      onChange={handleInputChange}
              >
                <option value="" disabled selected>
                  Payment options for Benevolent Fund Member 
                </option>
                <option value="1">Monthly</option>
                <option value="3">Quarterly</option>
                <option value="6">Half Yearly</option>
                <option value="12">Annualy</option>
              </select>

              {
                formData.noofmonth != "" && formData.noofmonth != "12" && <span className="text-success form-text position-absolute"> Rs 5,000/- per year as processing fee* </span>
              }
              </div>


              <div>
              <input
                type="password"
                id="password"
                name="password"
                className={`form-control border-0 bg_light_shade_blue py-3 small_placeholder w-100 ${!passwordValid ? "is-invalid" : ""}`}  
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />

            {
              formData.password && !passwordValid &&  <p className="position-absolute invalid-feedback"> Password must be minimum 5 characters long </p>
            }


</div>  

              <div className="mb-3">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className={`form-control border-0 bg_light_shade_blue py-3 small_placeholder w-100 ${!confirmPasswordValid ? "is-invalid" : ""}`}  
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />

{
              formData.confirmPassword && !confirmPasswordValid &&  <p className="position-absolute invalid-feedback"> Password must match </p>
            }

</div>
            </div>
            <textarea
              id="address"
              name="address"
              className="form-control border-0 bg_light_shade_blue py-3 small_placeholder w-100 mt-3"
              placeholder="Postal Address"
              rows="3"
              onChange={handleInputChange}
              required
            >{formData.address}</textarea>

            <div className="d-flex justify-content-between align-items-center  mt-5 ">
             
              <p className="fs-5">
                Do you want to become ALPA Group Medical Coverage (ALPA GMC) ?{" "}
              </p>
             
              <div className="d-flex justify-content-around gap-4">
 
                  <input type="radio" className="btn-check" id="btn-check-2" name="is_gmc" value="Yes" onChange={handleInputChange} autoComplete="off" required/>
<label className={
  `btn  border-dark ${formData.is_gmc == "Yes" ? "bg_dark_blue text-white" : ""}`
} htmlFor="btn-check-2" >Yes</label>
                  

                  <input type="radio" className="btn-check"  id="btn-check-3" name="is_gmc" value="No"  onChange={handleInputChange}  autoComplete="off" required/>
<label className={
  `btn  border-dark ${formData.is_gmc == "No" ? "bg_dark_blue text-white" : ""}`
} htmlFor="btn-check-3" >No</label>
              </div>



            </div>
            <div>
              <input
                type="checkbox" name="acceptTC"  checked={formData.acceptTC} 
                onChange={(e) => {
                  setFormData((prev) => {
                    return ({...prev, [e.target.name] : e.target.checked})
                  })
                }}
                className="scale_5 me-2"
              />
              <label className="fs-5 ms-2 mt-4">I accept all the <NavLink to="/terms-and-conditions" 
              className="text-decoration-none text-success"
              > terms and conditions </NavLink></label>
              </div>

            <div className="text-center mt-5">
              <button className={`btn btn-lg bg_dark_blue text-white ${!nameValid || !passwordValid || !emailValid || !confirmPasswordValid || !mobileValid || !panValid || !aadharValid ||!validDob  || fileError? "disabled" : ""}`}>SUBMIT</button>
            </div>

          </form>
          </div>
        </div>
        <ToastContainer />


      </section>
    </>
  );
}

export default SignInForm;
