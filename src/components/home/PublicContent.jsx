function PubContent() {
  return (
    <>
      <section className="section-public-content mb-5">
        <div className="container">
          <div className="public-content-header text-center mb-5">
            <p className="tertiary-heading">NEWS & EVENTS </p>
            <h2 className="secondary-heading"> Public Content </h2>
          </div>

          <div className="public-content-body">
            <div className="card fs-5">
              <img
                src="https://alpaindia.org/_next/static/media/news.06881161.jpg"
                className="card-img-top"
              />
              <div className="card-body d-flex flex-column align-items-start">
                <h5 className="card-title fs-4 fw-semibold mt-3 ">
                  Safety Programme for Pilots
                </h5>
                <date className="fst-italic fs-6 mt-2 mb-3 d-block">
                  {new Intl.DateTimeFormat("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                    .format(new Date("2020-12-09"))
                    .toString()}
                </date>
                <div className="card-text">
                  <p className="truncate-multi-line ">
                    Gati Shakti Vishwavidyalaya (GSV), a central university
                    established through the Central Universities (Amendment)
                    Act, 2022, has its principal place of business at Lalbaug,
                    Vadodara. It operates under the Ministry of Railways
                    (Government of India) and is mandated to cover the entire
                    transportation and logistics sectors. Gati Shakti
                    Vishwavidyalaya (GSV), a central university established
                    through the Central Universities (Amendment) Act, 2022, has
                    its principal place of business at Lalbaug, Vadodara. It
                    operates under the Ministry of Railways (Government of
                    India) and is mandated to cover the entire transportation
                    and logistics sectors.
                  </p>
                </div>

                <a href="#" className="btn btn-primary mb-0">
                  Go somewhere
                </a>
              </div>
            </div>

            <div className="card fs-5">
              <img
                src="https://alpaindia.org/_next/static/media/news.06881161.jpg"
                alt="news-image"
                className="card-img-top"
              />

              <div className="card-body  d-flex flex-column align-items-start">
                <h5 className="card-title fs-4 fw-semibold mt-3 ">
                  Fatigue and Stress
                </h5>
                <date className="fst-italic fs-6 mt-2 mb-3 d-block">
                  {new Intl.DateTimeFormat("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                    .format(new Date("2020-12-09"))
                    .toString()}
                </date>
                <div className="card-text">
                  <p className=" truncate-multi-line mb-2">
                    This is a circular issued by ALPA India regarding Fatigue
                    and Stress.
                  </p>
                  <p className="">
                    Pls click on the link given below to read it.
                  </p>
                </div>

                <a href="#" className="btn btn-primary mb-0">
                  Go somewhere
                </a>
              </div>
            </div>

            <div className="card fs-5">
              <img
                src="https://alpaindia.org/_next/static/media/news.06881161.jpg"
                className="card-img-top"
              />
              <div className="card-body d-flex flex-column align-items-start">
                <h5 className="card-title fs-4 fw-semibold mt-3 ">
                  Joint Press RELEASE - IATA & IFALPA
                </h5>
                <date className="fst-italic fs-6 mt-2 mb-3 d-block">
                  {new Intl.DateTimeFormat("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                    .format(new Date("2020-12-09"))
                    .toString()}
                </date>
                <div className="card-text ">
                  <p className="fw-semibold m-0">PRESS RELEASE</p>
                  <p className="m-0">
                    States Urged to Follow Global Guidelines on Crew Testing
                  </p>
                  <p className="truncate-single-line">
                    The International Air Transport Association (IATA) and the
                    International Federation of Air Line Pilots’ Associations
                    (IFALPA) jointly called on governments to follow the
                    International Civil Aviation Organization (ICAO) Council
                    Aviation Recovery Task Force (CART) guidelines to exempt
                    crews from COVID-19 testing that is applied to air
                    travelers. Pls click the link below to read the Full Press
                    Release.
                  </p>
                </div>

                <a href="#" className="btn btn-primary mb-0">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PubContent;

{
  /* <ol className="public-content-lists">
<li>
  Flight Dispatchers course (DGCA India syllabus as per CAR
  Section 7,Series M, Part II )
</li>
<li> Flight Operations Engineering</li>
<li> Crew Resource Management (CRM) </li>
<li> Safety management System </li>
<li> Hazard Identification & Risk Management </li>
<li> Internal Auditors Course </li>
</ol> */
}
