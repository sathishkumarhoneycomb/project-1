import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function ContactUsMain() {
  return (
    <>
      <section className="contactpage_contact_section mb-6">
        <div className="container">
          <header className="text-center mb-5">
            <p className="section_sub_heading color_light_gray fw-semibold text-uppercase"> contact us </p>
            <h2 className=" color_dark_blue">
            We Would Love to Hear from You
            </h2>
          </header>


{/* FIXME: Responsiveness  : before i was using grid system responsive */}
          <div className="contactpage_contact_us">

            <table className="table text-white bg_dark_blue d-block py-3 px-5">
              <tbody className="lh-lg">
                <tr>
                  <td>
                    <FontAwesomeIcon
                      className="fs-3 me-4 "
                      icon={faLocationDot}
                    />
                  </td>
                  <td>
                    <h4 className=" mb-3"> Location </h4>
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
                    <h4>Phone </h4>{" "}
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
                    <h4>Email </h4>
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
 
{/* FIXME  : Responsiveness for mobile view it should take some specific height  */}
            <div className="iframe_box">
              <iframe
                className="image-fluid iframe_map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7279657788563!2d77.57204257454787!3d13.052979913089874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae178e70928fa5%3A0x3fa479411b164134!2sALPA%20INDIA!5e0!3m2!1sen!2sin!4v1721983754255!5m2!1sen!2sin"
                allowfullscreen=""
                width="100%"
                height="100%"
                
              ></iframe>
            </div>





          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUsMain;
