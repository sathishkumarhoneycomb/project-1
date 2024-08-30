import AboutUsSection from "../components/about-us/AboutUsSection";
import HeroAboutUs from "../components/about-us/HeroAboutUs";
import OurTeam from "../components/about-us/OurTeam";
import OurVision from "../components/about-us/OurVision";
import GetInTouch from "../components/about-us/GetInTouch";
import Footer from "../components/general-components/Footer";

function AboutUsPage() {
  return (
    <>
      <HeroAboutUs />
      <AboutUsSection />
      <OurTeam />
      <OurVision />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default AboutUsPage;
