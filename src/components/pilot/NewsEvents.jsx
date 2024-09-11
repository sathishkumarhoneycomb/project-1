import PilotNewsCards from "./PilotNewsCards.jsx";






const NewsEvents = () => {
    return (
       <section className="mb-5">
            <header className="mb-4">
                <div className="card card-body rounded-0">
                    <h4 className="text-center text-success  text-uppercase m-0 py-2"> News & Events </h4>
                </div>
            </header>

            <div className="card card-body rounded-0">

                    {/* bunch of news cards  */}
                    <div className="d-flex flex-column gap-5">

                    <PilotNewsCards />
                    



                    </div>

            </div>


       </section>
    );
}

export default NewsEvents;
