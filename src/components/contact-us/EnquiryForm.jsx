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
      <section className="sectionEnquiryForm mb-6">
        <div className="container ">
          <p className="tertiary-heading text-center d-block"> Send us </p>
          <h2 className="secondary-heading text-center mb-5"> Your Enquiry </h2>

          <div className="pad-5">
            <form
              className="d-flex flex-column justify-content-center align-items-center gap-4 text-center "
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="username"
                className="enquiry-form-input"
                placeholder="Enter yor name"
                value={formData.username}
                onChange={handleChange}
              />

              {!validName && formData.username && (
                <span className="text-muted text-sm">
                  Username must be 3 characters long{" "}
                </span>
              )}

              <input
                type="email"
                name="email"
                className="enquiry-form-input"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />

              <input
                type="phone"
                name="phone"
                className="enquiry-form-input"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
              />

              <input
                type="text"
                name="details"
                className="enquiry-form-input"
                placeholder="Enter your details"
                value={formData.details}
                onChange={handleChange}
              />

              <textarea
                type="text"
                name="message"
                className="enquiry-form-textarea"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button className="btn btn-lg mt-3 text-white sendBtn">
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
