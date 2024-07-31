import NewsCard from "./NewsCard";

function NewsCards() {
  return (
    <>
      <NewsCard cardTitle="Safety Programme for Pilots" linkPath="#">
        <div className="card-text">
          <p className="truncate-multi-line ">
            Gati Shakti Vishwavidyalaya (GSV), a central university established
            through the Central Universities (Amendment) Act, 2022, has its
            principal place of business at Lalbaug, Vadodara. It operates under
            the Ministry of Railways (Government of India) and is mandated to
            cover the entire transportation and logistics sectors. Gati Shakti
            Vishwavidyalaya (GSV), a central university established through the
            Central Universities (Amendment) Act, 2022, has its principal place
            of business at Lalbaug, Vadodara. It operates under the Ministry of
            Railways (Government of India) and is mandated to cover the entire
            transportation and logistics sectors.
          </p>
        </div>
      </NewsCard>

      <NewsCard cardTitle="Joint Press RELEASE - IATA & IFALPA" linkPath="#">
        <div className="card-text">
          <p className=" truncate-multi-line mb-2">
            This is a circular issued by ALPA India regarding Fatigue and
            Stress.
          </p>
          <p className="">Pls click on the link given below to read it.</p>
        </div>
      </NewsCard>
      <NewsCard cardTitle=" Fatigue and Stress" linkPath="#">
        <div className="card-text ">
          <p className="fw-semibold m-0">PRESS RELEASE</p>
          <p className="m-0">
            States Urged to Follow Global Guidelines on Crew Testing
          </p>
          <p className="truncate-single-line">
            The International Air Transport Association (IATA) and the
            International Federation of Air Line Pilots’ Associations (IFALPA)
            jointly called on governments to follow the International Civil
            Aviation Organization (ICAO) Council Aviation Recovery Task Force
            (CART) guidelines to exempt crews from COVID-19 testing that is
            applied to air travelers. Pls click the link below to read the Full
            Press Release.
          </p>
        </div>
      </NewsCard>
    </>
  );
}

export default NewsCards;
