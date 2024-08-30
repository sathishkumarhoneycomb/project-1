import { NavLink } from 'react-router-dom';
import GeneralHero from '../general-components/GeneralHero';
import MedicalInsuranceBanner from '../../assets/images/banners/medical_insurance.jpg'
import MedicalInsuranceMobileBanner from "../../assets/images/banners/medical_insurance_mobile.jpg";


function MedicalInsuranceHero() {
    return (
        <>

<GeneralHero desktopBanner={MedicalInsuranceBanner} mobileBanner={MedicalInsuranceMobileBanner} imageAlt="alpa medical insurance"
      currentPath="medical insurance" bannerTitle="Medical Insurance"
      /> 


        </>
    )
}

export default MedicalInsuranceHero;
