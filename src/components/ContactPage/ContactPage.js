import Helmet from "react-helmet";
import { BsMailbox2, BsPatchCheck } from "react-icons/bs";
import { FaMapMarked } from "react-icons/fa";
import "./ContactPage.css";

const ContactPage = () => {
  const handalerSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <main className="pt-10">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="contact_area">
        <div className="contact_area_header text-center pt-3">
          <h3 className="section-title text-4xl">Get in touch!</h3>
          <p>Contact us for a quote, help to join the team</p>
        </div>
      </div>
      <div className="contact_container pt-5">
        <div className="contact_items block md:flex gap-3 justify-between">
          <div className="contact_single">
            <FaMapMarked />
            <h3 className="font-bold">Thakurgaon Bangladesh</h3>
          </div>
          <div className="contact_single">
            <BsMailbox2 />
            <h3 className="font-bold">frontendmaker99@</h3>
          </div>
          <div className="contact_single">
            <BsPatchCheck />
            <h3 className="font-bold">Freelance Available</h3>
          </div>
        </div>
        <div className="contact_box">
          <form onSubmit={handalerSubmit}>
            <div className="form_content">
              <div className="contact_inputs">
                <div className="form_cotrol">
                  <input type="text" name="name" id="name" />
                  <label htmlFor="name">Your Name</label>
                </div>
                <div className="form_cotrol">
                  <input type="email" name="email" id="email" />
                  <label htmlFor="name">Your Email</label>
                </div>
                <div className="form_cotrol">
                  <input type="number" name="number" id="number" />
                  <label htmlFor="name">Your Phone</label>
                </div>
              </div>
              <div className="contact_comment">
                <div className="form_cotrol">
                  <textarea name="message" id="message"></textarea>
                  <label htmlFor="name">Your Message</label>
                </div>
              </div>
            </div>
            <div className="form_cotrol-btn">
              <button>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
