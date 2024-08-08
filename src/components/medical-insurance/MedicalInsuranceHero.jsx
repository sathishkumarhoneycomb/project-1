import GeneralHero from "../general-components/GeneralHero";
import medicalInsuranceBanner from '../../assets/images/banners/medical-insurance-banner.jpg'

function MedicalInsuranceHero() {
    return (
        <>

    <GeneralHero
        path="/medical-insurance"
        pathName="Medical Insurance"
        bgPath={medicalInsuranceBanner}
    >
        <div className="hero_main">
          <h1 className="fw-bolder  ms-lg-5 text-uppercase fw-bold lh-base page-heading">
    
                medical insurance 
              </h1>
        </div>
    </GeneralHero>


        </>
    )
}

export default MedicalInsuranceHero;
