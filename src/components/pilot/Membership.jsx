import { useState } from "react";
import Modal from 'react-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX} from "@fortawesome/free-solid-svg-icons";


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

const customGmcModalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: "2rem",
  },
};

Modal.setAppElement('#root');



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

// my requirements: 





const Membership = () => {

    const memberType = 'ordinary';

    const [bfMemberStatus , setBfMemberState] = useState( () => {
      if(memberType == "ordinary") {
        return false;
      } else {
        return true;
      }
    });

    const [gmcMemberStatus, setGmcMemberStatus] = useState(false);

    const [formValue , setFormValue] = useState({...initialInnerFormData, "medicalAssessment" : "" })

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    // self Declaration modal
    const [modalIsOpen, setIsOpen] = useState(false);

    // gmc success modal 
    const [gmModalIsOpen, setGmcModalIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      if(!isFormSubmitted){
        setBfMemberState(false)
      }
      setIsOpen(false);
    }

    const handleBfMemberChange = (e) =>  {
      console.log(e.target.checked)
      if( memberType == "ordinary") {
        setBfMemberState(e.target.checked)
        if(e.target.checked) {
          setIsOpen(true)
        }
      } else {
        setBfMemberState(true)
      }
    }

    const handleGMC = function(e) {
      if(e.target.checked) {
          let userChoice  = window.confirm("Are you sure want to active the GMC?");
          if(userChoice) {
              setGmcMemberStatus(true)
          } else {
            setGmcMemberStatus(false)
          }
      } else {
        let userChoice  = window.confirm('Are you sure want to de-activate the GMC?')
        if(userChoice) {
          setGmcMemberStatus(false)
        } else {
          setGmcMemberStatus(true)
        }
      }
      // give a request to the server based on the user choice 
  }


  const closeGmcModal = function() {
    setGmcModalIsOpen(false);
  }

  const openGmcModal = function() {
    setGmcModalIsOpen(true);
  }



  // this method works only for normal object not for nested objects: for nested object kindly look at SigninForm.jsx
  const convertObjToFormData = (obj) => {
      const formData = new FormData();
  
      for(const key in formValue) {
        if(formValue.hasOwnProperty(key)) formData.append(key, formValue[key]);
        
      }
      return formData;
  }



  const handleFormValueChange = (e) => setFormValue(prev => ({...prev, [e.target.name] : e.target.value}))
  
  const handleFileChange = (e) => setFormValue(prev => ({...prev, [e.target.name] : e.target.files[0]}))

  const handleSubmit = (e) => {
    e.preventDefault();
    // convert the data to formData so that it can be sent to the server 
    const formData = convertObjToFormData();

    // server operations 
    const serverResponse = true;




    // if server is good :

      //  close the modal window and display a success window 
      setIsFormSubmitted(true)
      closeModal()

    // if server response is bad :

      // close the modal window and display a rejection window 

  }


    return (
            <>

<section className="px-2 py-3">
  <div>
    <header className="card rounded-0 d-flex justify-content-center align-items-center mb-3">
      <h4 className="text-success text-uppercase py-3">Membership</h4>
    </header>

    <div>
      <div className="card card-header rounded-0 mb-1 py-2 px-2 border-0">
        <h5 className="text-success text-uppercase mb-0 py-2">
          Membership Id: <span className="ls_1">22030030ALPA3003</span>
        </h5>
      </div>

      <div className="table-responsive">
        <table className="table mt-3">
          <thead className="table-primary">
            <tr>
              <th className="col col-lg-1 py-3 text-center">Sl.No</th>
              <th className="col col-lg-7 py-3 text-center">Membership type</th>
              <th className="col py-3 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="col col-lg-1 py-3">1</td>
              <td className="col col-lg-7 py-3 text-uppercase">ORDINARY Member</td>
              <td className="col py-3">
                <ul className="d-flex align-items-center justify-content-center gap-3 list-unstyled">
                  <li>Inactive</li>
                  <li className="list-group-item">
                    <label className="switch">
                      <input type="checkbox" 
                      className="primary" 
                      checked />
                      <span className="slider round"></span>
                    </label>
                  </li>
                  <li>Active</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className="col col-lg-1 py-3">2</td>
              <td className="col col-lg-7 py-3 text-uppercase">
                ORDINARY Member + Benevolent Fund Member
                <span className="d-block mt-2 text-capitalize">Declare Document Attachment</span>
              </td>
              <td className="col py-3">
                <ul className="d-flex align-items-center justify-content-center gap-3 list-unstyled">
                  <li>Inactive</li>
                  <li className="list-group-item">
                    <label className="switch">
                      <input
                        type="checkbox"
                        className="primary"
                        onChange={handleBfMemberChange}
                        checked={bfMemberStatus}
                      />
                      <span className={`${memberType === "ordinary" ? "sliderBf" : "slider"} round`}></span>
                    </label>
                  </li>
                  <li>Active</li>
                </ul>
                {bfMemberStatus && memberType === "ordinary" && (
                  <span className="text-center d-block text-muted">Waiting for approval</span>
                )}
              </td>
            </tr>

            <tr>
              <td className="col col-lg-1 py-3">3</td>
              <td className="col col-lg-7 py-3 text-uppercase">gmc</td>
              <td className="col py-3">
                <ul className="d-flex align-items-center justify-content-center gap-3 list-unstyled">
                  <li>Inactive</li>
                  <li className="list-group-item">
                    <label className="switch">
                      <input type="checkbox" className="primary"
                      checked={gmcMemberStatus} 
                      onChange={handleGMC} />
                      <span className="slider round"></span>
                    </label>
                  </li>
                  <li>Active</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

                <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="self declaration modal " // accessible screen readers 
      >
       
        <button  onClick={closeModal} 
        className="bg-transparent border-0"
        title="close the window"
        >
        <FontAwesomeIcon icon={faX} className="text-danger fs-5" />
        </button>
        <div className="mb-4">
          <h4 className="text-center text-uppercase "> Self declaration</h4>
          <hr />

        </div>
        <form method="post" onSubmit={handleSubmit}>

                    <div className="mb-5" >
                    <ul className="list-unstyled d-flex flex-column gap-4 ">

                    {
                      questions.map(qst => {
                        let title = qst.title;
                        let description = qst.description;

                        return (
                          <>
                          <li className="d-md-flex d-block justify-content-between form-group ">
                            <label className="form-label fw-semibold me-4"> {description} </label>

                            <div className="d-flex gap-5">
                            <label className="d-flex align-items-center gap-2">
                            <input type="radio" name={title}  
                            checked={formValue[title] == "yes"}
                            value="yes" 
                            className="scale_5 "
                            onChange={handleFormValueChange}
                            
                             /> <span className="fw-semibold pb-1"> Yes </span>
                            </label>

                            <label className="d-flex align-items-center gap-2">
                            <input type="radio" 
                            name={title} 
                            value="no" 
                            className="scale_5"
                            checked={formValue[title] == "no"} 
                            onChange={handleFormValueChange}
                            
                             /> <span className="fw-semibold pb-1"> No </span>
                            </label>
                            </div>
                            </li>
                          </>
                        )
                      })
                    }
                    </ul>
                    </div>
                  

                  <div className="form-group d-flex flex-column gap-2 mb-4">

                    <label className="form-label fw-semibold"> Please upload last 3 medical assessment in single pdf </label>
                    <input type="file" accept="application/pdf" 
                      name="medicalAssessment"
                      onChange={(e) => {
                        setFormValue(prev => ({...prev, [e.target.name] : e.target.files[0]}))
                      }}
                      
                    />
                    <span className="text-muted"> Maximum File Size: 3MB</span>
                  </div>



                <div className="form-group text-center">

                    <button type="submit" className="btn btn-outline-primary w-50 text-uppercase"> save </button>

                </div>

                  
        </form>
      </Modal>

      {/* GMC Modal  */}
      <Modal
        isOpen={gmModalIsOpen}
        onRequestClose={closeGmcModal}
        style={customGmcModalStyle}
        contentLabel="GMC modal "
      >
        <button onClick={closeGmcModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>


                

            </>
    );
}

export default Membership;
