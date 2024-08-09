import NewsCards from "./NewsCards.jsx";

function LatestNews() {

  let row = "row";
  let marginTop = "0"
  if(window.innerWidth < 376) {
    row = "";
    marginTop = 3
  }



  return (
    <>
      <section className="sectionLatestNews mb-5">
        <div className={`container`}>
          
          <NewsCards />
        </div>
      </section>
    </>
  );
}

export default LatestNews;
