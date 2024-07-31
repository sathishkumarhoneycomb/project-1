import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import MemberPage from "./pages/MemberPage";
import ResNavBar from "./components/general-components/ResNavBar";
import NewsEventsPage from "./pages/NewsEventsPage";
import BenevolentFundPage from "./pages/BenevolentFund";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ResNavBar />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />

            <Route path="/contact" element={<ContactUsPage />} />

            <Route path="/member-signup" element={<MemberPage />} />

            <Route path="/news-events" element={<NewsEventsPage />} />

            <Route
              path="/alpa-benevolent-fund"
              element={<BenevolentFundPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
