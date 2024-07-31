import GeneralHero from "../general-components/GeneralHero";
import newsEventsBanner from "../../assets/images/banners/news-banner.aa82e734.jpg";

function NewsEventsHero() {
  return (
    <>
      <GeneralHero
        path="/news-events"
        pathName="News & Events"
        bgPath={newsEventsBanner}
      >
        <div className="hero_main">
          <h1 className="fw-bolder  text-uppercase fw-bold lh-base page-heading">
            News & Events{" "}
          </h1>
        </div>
      </GeneralHero>
    </>
  );
}

export default NewsEventsHero;
