import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown";


import "./css/App.scss";
import "./css/queries.css";

import "./css/pilot.css";

import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import MemberPage from "./pages/MemberPage";
import ResNavBar from "./components/general-components/ResNavBar";
import NewsEventsPage from "./pages/NewsEventsPage";
import BenevolentFundPage from "./pages/BenevolentFund";
import MedicalInsurancePage from "./pages/MedicalInsurancePage";
import LoginPage from "./pages/LoginPage.jsx";
import TcPage from "./pages/TcPage.jsx";
import PrivacyPolicyPage  from "./pages/PrivacyPolicyPage.jsx";
import DisclaimerPolicyPage  from "./pages/DisclaimerPolicyPage.jsx";
import PilotNavBar from "./components/pilot/homepage/pilotNavBar.jsx";
import DashBoard from "./components/pilot/Dashboard.jsx";



function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route  path="/"  element={<ResNavBar />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />

            <Route path="/contact" element={<ContactUsPage />} />

            <Route path="/member-signup" element={<MemberPage />} />

            <Route path="/news-events" element={<NewsEventsPage />} />

            <Route
              path="/alpa-benevolent-fund"
              element={<BenevolentFundPage />}
            />

            <Route path="/medical-insurance" element={<MedicalInsurancePage /> } /> 
            <Route path="/login" element={<LoginPage /> } />
          
              <Route path="/terms-and-condition" element={<TcPage /> } />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage /> } /> 
            <Route path="/disclaimer-policy" element={<DisclaimerPolicyPage /> }/>
          </Route>

          <Route path="/pilot" element={<PilotNavBar />} >
              <Route path='dashboard' element={<DashBoard />} />

          </Route>



          
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
