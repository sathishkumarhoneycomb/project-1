function CallToAction() {
  return (
    <>
      <section className="call_to_action ">
        <div className="container">


          <div className="text-center mb-5">
            <p className="section_sub_header color_light_gray text-uppercase fw-semibold"> Membership </p>
            <h2 className="color_dark_blue "> Become A Member </h2>
          </div>


          <div className="row justify-content-center">

          <form className="call_to_action_form row justify-content-center gap-4 col-md-10 col-lg-6">
            <input type="email" className="form-control-lg col-12  col-md-8 " placeholder="Enter your email address" />
            <button className="btn bg_dark_blue hover_light_blue text-white col-5 col-md-3">
              SEND
            </button>
          </form>

          </div>
          
        </div>
      </section>
    </>
  );
}

export default CallToAction;
