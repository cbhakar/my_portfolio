import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/chandra-bhakar-13790554/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — chandra-bhakar
              </a>
            </p>
            <p>
              <a
                href="mailto:chandrabhakar@gmail.com"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                chandrabhakar@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:+919461165012"
                data-cursor="disable"
              >
                +91 9461165012
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech — Computer Science & Engineering, JECRC UDML College of
              Engineering, Rajasthan Technical University, Jaipur — 2012–2016
            </p>
          </div>
          <div className="contact-box contact-social-box">
            <h4>Social</h4>
            <a
              href="https://github.com/cbhakar"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/chandra-bhakar-13790554/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/charizard_hates_pikachu/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
        </div>
        <div className="contact-footer">
          <h2>
            Designed and Developed <br /> by <span>Chandra Bhakar</span>
          </h2>
          <h5>
            <MdCopyright /> 2026
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;
