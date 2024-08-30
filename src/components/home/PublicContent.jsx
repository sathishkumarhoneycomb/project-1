function PubContent() {
  return (
    <>
      <section className="section_public_content mb-5">
        <div className="container">
          <div className="text-center mb-5">
            <p className="section_sub_heading color_light_gray text-uppercase fw-semibold">NEWS & EVENTS </p>
            <h2 className="color_dark_blue"> Public Content </h2>
          </div>

          <div className="public_content_body">
            <div className="card">
              <img
                src="https://alpaindia.org/_next/static/media/news.06881161.jpg"
                className="image-fluid"
              />
              <div className="card-header">
                <h4 className="card-title">
                  Safety Programme for Pilots
                </h4>
                <date className="fst-italic fs-7 date_text">
                  {new Intl.DateTimeFormat("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                    .format(new Date())
                    .toString()}
                </date>

                </div>
                
                <div className="card-body">
             
                  <p className="card-text truncate_four_line">
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

                <div className="card-footer">

                <a href="#" className="btn w-100 bg_dark_blue text-white hover_light_blue">
                        Read More
                </a>
              </div>
            </div>

            <div className="card">
              <img
                src="https://alpaindia.org/_next/static/media/news.06881161.jpg"
                alt="news-image"
                className="image-fluid"
              />

              <div className="card-header">
                <h4 className="">
                  Fatigue and Stress
                </h4>
                <date className="fst-italic date_text ">
                  {new Intl.DateTimeFormat("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                    .format(new Date("2020-12-09"))
                    .toString()}
                </date>
              </div>

                <div className="card-body">
                  <p className="card-text">
                    This is a circular issued by ALPA India regarding Fatigue
                    and Stress.
                  </p>
                  <p className="card-text">
                    Pls click on the button below to read it.
                  </p>
                </div>

                  <div className="card-footer">
                <a href="#" className="btn w-100 bg_dark_blue text-white hover_light_blue">
                  Read More 
                </a>
              </div>
            </div>

            <div className="card">
              <img
                src="https://alpaindia.org/_next/static/media/news.06881161.jpg"
                className="image-fluid"
              />
              <div className="card-header">
                <h4 className="card-title">
                  Joint Press RELEASE - IATA & IFALPA
                </h4>
                <date className="fst-italic date_text">
                  {new Intl.DateTimeFormat("en-US", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })
                    .format(new Date("2020-12-09"))
                    .toString()}
                </date>

                </div>
                <div className="card-body ">
                  <p className="fw-semibold">PRESS RELEASE</p>
                  <p className="">
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
                <div className="card-footer">

                <a href="#" className="btn w-100 bg_dark_blue text-white hover_light_blue">
                  Read More
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
