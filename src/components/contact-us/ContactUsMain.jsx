import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function ContactUsMain() {
  return (
    <>
      <section className="sectionContactUs mb-6">
        <div className="container">
          <p className="tertiary-heading d-block text-center"> contact us </p>
          <h2 className="secondary-heading text-center mb-6">
            We Would Love to Hear from You
          </h2>

          <div className="contactUsBody  row gap-lg-5 gap-sm-0 gap-md-0">
            <table className=" align-self-start text-white  bg-dark-blue filter-brightness  col-lg-5 col-md-11 col-sm-11  d-block px-3 pt-5 ">
              <tbody className="lh-lg">
                <tr>
                  <td>
                    <FontAwesomeIcon
                      className="fs-3 me-4 "
                      icon={faLocationDot}
                    />
                  </td>
                  <td>
                    <h3 className="mb-3"> Location </h3>
                  </td>
                </tr>
                <tr className="">
                  <td></td>
                  <td>
                    <p className="fs-5 fw-light text-justify mb-5">
                      Airline Pilots Association of India # C-312, 2nd Floor,
                      North Winds Apartment, Shivanahalli, Jakkur Main Road,
                      Yelahanka, Bangalore, Karnataka 560 064, India.{" "}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <FontAwesomeIcon icon={faPhone} className="fs-3 me-4 " />
                  </td>
                  <td>
                    {" "}
                    <h3>Phone </h3>{" "}
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <p className="fs-5 fw-light text-justify mb-5">
                      {" "}
                      +91 6362366974 | 080-4950 0851{" "}
                    </p>{" "}
                  </td>
                </tr>

                <tr>
                  <td>
                    {" "}
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="fs-3 me-4 "
                    />{" "}
                  </td>
                  <td>
                    {" "}
                    <h3>Email </h3>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <p className="fs-5 fw-light text-justify mb-5">
                      {" "}
                      info@alpaindia.org{" "}
                    </p>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
            {/* </div> */}

            <div className="iframe-img-div col align-self-lg-stretch align-self-sm-stretch">
              <iframe
                className="iframe-img w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7279657788563!2d77.57204257454787!3d13.052979913089874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae178e70928fa5%3A0x3fa479411b164134!2sALPA%20INDIA!5e0!3m2!1sen!2sin!4v1721983754255!5m2!1sen!2sin"
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUsMain;
