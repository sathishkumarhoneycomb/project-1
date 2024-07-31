import NewsCards from "./NewsCards.jsx";

function LatestNews() {
  return (
    <>
      <section className="mb-5">
        <div className="container row gap-5">
          <NewsCards />
          <NewsCards />
        </div>
      </section>
    </>
  );
}

export default LatestNews;
