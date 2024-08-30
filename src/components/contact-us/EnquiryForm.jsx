import { useState } from "react";

function EnquiryForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    details: "",
    message: "",
  });

  const [validName, setValidName] = useState(false);

  function handleChange(e) {
    if (e.target.name == "username") {
      if (e.target.value.length > 3) {
        setValidName(true);
      } else {
        setValidName(false);
      }
    }
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <>
      <section className="contactpage_enquiry_section mb-5">
        <div className="container">

          <header className="text-center mb-5">
              <p className="section_sub_heading color_light_gray text-uppercase fw-semibold"> Send us </p>
              <h2 className=" color_dark_blue"> Your Enquiry </h2>
          </header>


          <div className="row justify-content-center">
            <form
              className="col-md-12 col-lg-8 col-xl-6"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="username"
                className="form-control bg_light_gray fs-5 py-3  small_placeholder"
                placeholder="Enter your name"
                value={formData.username}
                onChange={handleChange}
              />

              {!validName && formData.username && (
                <span className="invalid-feedback">
                  Username must be 3 characters long{" "}
                </span>
              )}

              <input
                type="email"
                name="email"
                className="form-control bg_light_gray mt-4 fs-5 py-3  small_placeholder"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />

              <input
                type="phone"
                name="phone"
                className="form-control bg_light_gray mt-4 fs-5 py-3  small_placeholder"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />

              <input
                type="text"
                name="details"
                className="form-control bg_light_gray mt-4 fs-5 py-3  small_placeholder"
                placeholder="Enter your details"
                value={formData.details}
                onChange={handleChange}
              />

              <textarea
                type="text"
                name="message"
                className="form-control bg_light_gray mt-4 "
                placeholder="Enter your message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button className="btn btn-lg  bg_dark_blue text-white mx-md-auto d-block px-5 mt-4">
                SEND
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default EnquiryForm;
