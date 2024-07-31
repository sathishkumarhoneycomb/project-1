function CallToAction() {
  return (
    <>
      <section className="callToAction">
        <div className="container">
          <div className="text-center">
            <p className="tertiary-heading"> Membership </p>
            <h2 className="secondary-heading "> Become A Member </h2>
          </div>
          <form className="cta d-flex justify-content-center align-items-center gap-4 mt-5">
            <input type="email" placeholder="Enter your email address" />
            <button className="d-flex justify-content-center align-items-center btn btn-primary">
              SEND
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default CallToAction;
