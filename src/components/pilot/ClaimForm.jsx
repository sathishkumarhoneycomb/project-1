import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { faUpload } from "@fortawesome/free-solid-svg-icons";



const ClaimForm = () => {
    return (
        <section>

            <header className="card py-4 rounded-0 mb-4"> 
                <h4 className="text-success text-center text-uppercase"> Claim Form or Withdrawal or closure </h4> 
            </header>

            <div className="card px-5 py-4">
                <h5 className="text-dark text-uppercase mb-3"> For closure of Benevolent Fund, please send the following documents to ALPA Office : </h5>
                <ol className="lh-lg ">
                    <li> Claim Form or Withdrawal Or Closure @ 58 years
 </li>
 <li> Duly completed withdrawal form available on the website Click Here
 </li>
 <li> Copy of a cancelled cheque
 </li>
 <li> Self attested Scheme Certificates issued to you.
 </li>
 <li> All the above original documents may please be sent to ALPA office to the address given below :
 <p className="mb-0 d-md-flex gap-4"> <span className="fw-semibold mb-0"> Address: </span>  ALPA India, # C-312, North Winds Apartment, Shivanahalli, Jakkur Main Road, Yelahanka 560 064
</p>
<p className="d-md-flex gap-4"><span className="fw-semibold"> Mobile : </span>  +91 6362366974 </p>
 </li>

                </ol>

                <div className="">
                <span className="text-muted mb-2 d-block"> 👇 Click on the button below to download a copy of the closure form</span>
                <button className="btn btn-outline-primary d-flex gap-2 align-items-center rounded-0 text-uppercase"> Closure Form 
                <FontAwesomeIcon icon={faUpload} />
                
                </button>
            </div>

            </div>
            
        </section>
    );
}

export default ClaimForm;
