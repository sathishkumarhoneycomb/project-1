import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown";


import "./css/App.scss";
import "./css/queries.css";
import "./css/pilot.css";
import "./css/pilot-queries.css";
import "./css/medical.css";
import "./css/admin.css";


// Website Pages 
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

// Pilot Pages 
import PilotNavBar from "./components/pilot/pilotNavBar.jsx";
import DashBoard from "./components/pilot/Dashboard.jsx";
import ProfilePage from "./components/pilot/ProfilePage.jsx";
import Membership from "./components/pilot/Membership.jsx";
import PaymentDetails from "./components/pilot/PaymentDetails.jsx";
import NewsEvents from "./components/pilot/NewsEvents.jsx";
import DiscussionForum from "./components/pilot/DiscussionForum.jsx";
import DownloadForms from "./components/pilot/DownloadForms.jsx";
import ClaimForm from "./components/pilot/ClaimForm.jsx";
import AddNominee from "./components/pilot/payment-details/AddNominee.jsx";
import AddPost from "./components/pilot/addPost.jsx";
import ViewPost from "./components/pilot/ViewPost.jsx";
import Medical from "./components/medical/MedicalNavbar.jsx";
import MedicalNavBar from "./components/medical/MedicalNavbar.jsx";
import MedicalProfilePage from "./components/medical/MedicalProfilePage.jsx";
import UnapprovedApplications from "./components/medical/UnapprovedApplications.jsx";
import RejectedApplications from "./components/medical/RejectedApplications.jsx";
import ApprovedApplications from "./components/medical/ApprovedApplications.jsx";
import { Nav } from "react-bootstrap";
import AdminNavbar from "./components/admin/AdminNavbar.jsx";
import AdminDashboard from "./components/admin/AdminDashboard.jsx";
import AdminProfilePage from "./components/admin/AdminProfilePage.jsx";
import AdminUnapprovedApplications from "./components/admin/unapproved-applications/AdminUnapprovedApplications.jsx";
import AdminApprovedApplications from "./components/admin/approved-applications/AdminApprovedApplications.jsx";
import AdminOrdinaryMember from "./components/admin/ordinary-member/AdminOrdinaryMember.jsx";
import AdminBfMember from "./components/admin/bf-member/AdminBfMember.jsx";
import AlpaAdminsPage from "./components/admin/AlpaAdminsPage.jsx";
import AdminNewsEventsPage from "./components/admin/AdminNewsEventsPage.jsx";
import AdminDiscussionForum from "./components/admin/AdminDiscussionForum.jsx";
import AdminAddPost from "./components/admin/AdminAddPost.jsx";
import AdminViewPost from "./components/admin/AdminViewPost.jsx";
import AdminDownloadedForms from "./components/admin/AdminDownloadedForms.jsx";



function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          {/* Website  */}
          <Route  path="/"  element={<ResNavBar />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/member-signup" element={<MemberPage />} />
            <Route path="/news-events" element={<NewsEventsPage />} />
            <Route path="/alpa-benevolent-fund" element={<BenevolentFundPage />} />
            <Route path="/medical-insurance" element={<MedicalInsurancePage /> } /> 
            <Route path="/login" element={<LoginPage /> } />
            <Route path="/terms-and-condition" element={<TcPage /> } />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage /> } /> 
            <Route path="/disclaimer-policy" element={<DisclaimerPolicyPage /> }/>
          </Route>

          {/* Pilot Console  */}
          <Route path="/pilot" element={<PilotNavBar />} >
            <Route index element={<Navigate replace to="dashboard" />} />
              <Route path='dashboard' element={<DashBoard />} />
              <Route path="profile" element={<ProfilePage />} />
              <Route path="membership" element={<Membership />} />
              <Route path="payment-details" element={<PaymentDetails />} />
              <Route path="news-events" element={<NewsEvents />} />
              <Route path="discussion-forum" element={<DiscussionForum />} /> 
              <Route path="download-forms" element={<DownloadForms />} />
              <Route path="claim-form" element={<ClaimForm />} />

              {/* Internal Pages routes */}
              <Route path="nominee/add" element={<AddNominee />} />
              <Route path="discussion-forum/create" element={<AddPost />} />
              <Route path="discussion-forum/11" element={<ViewPost />} />
          </Route>

          {/* Medical Console  */}
          <Route path="/medical" element={<MedicalNavBar />}>
              <Route index element={<Navigate replace to="profile" />}/>
              <Route path="profile" element={<MedicalProfilePage />} />
              <Route path="unapproved-applications" element={<UnapprovedApplications />} />
              <Route path="rejected-applications" element={<RejectedApplications />} />
              <Route path="alpa-bf-members" element={<ApprovedApplications />} />
          </Route>

          <Route path="/admin" element={<AdminNavbar />} >
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<AdminDashboard />}/>
            <Route path="profile" element={<AdminProfilePage />}/>
            <Route path="unapproved-applications" element={<AdminUnapprovedApplications />} />
            <Route path="approved-applications" element={<AdminApprovedApplications />} />
            <Route path="pilots" element={<AdminOrdinaryMember />} />
            <Route path="alpa-bf-members" element={<AdminBfMember  />} />
            <Route path="alpa-users" element={<AlpaAdminsPage />} />
            <Route path="news-and-events" element={<AdminNewsEventsPage />} />
            <Route path="discussion-forum" element={<AdminDiscussionForum />} />
            <Route path="discussion-forum/create" element={<AdminAddPost />} />
            <Route path="discussion-forum/:id" element={<AdminViewPost  />} />
            <Route path="forms-downloaded" element={<AdminDownloadedForms />} />
          </Route>



          
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
