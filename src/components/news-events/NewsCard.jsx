import NewsImage from "../../assets/images/app-images/news.06881161.jpg";

function NewsCard({ cardTitle, cardDate, linkPath, children }) {
  return (
    <>
      <div className="card  news-cards  fs-5" >
        <img
          src="https://alpaindia.org/_next/static/media/news.06881161.jpg"
          className="card-img-top"
        />
        <div className="card-body d-flex flex-column align-items-start">
          <h5 className="card-title fs-4 fw-semibold mt-3 ">
            {cardTitle}
          </h5>
          <date className="fst-italic fs-6 mt-2 mb-3 d-block">
            {new Intl.DateTimeFormat("en-US", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
              .format(new Date())
              .toString()}
          </date>
          {children}

          <a href={linkPath} className="btn btn-primary mb-0">
            Read More
          </a>
        </div>
      </div>
    </>
  );
}

export default NewsCard;
