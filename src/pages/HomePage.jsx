import Hero from "../components/home/Hero";
import AboutUs from "../components/home/AboutUs";
import Offerings from "../components/home/Offerings";
import PubContent from "../components/home/PublicContent";
import CallToAction from "../components/home/CallToAction";
import Footer from "../components/general-components/Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Offerings />
      <PubContent />
      <CallToAction />
      <Footer />
    </>
  );
}

export default HomePage;
