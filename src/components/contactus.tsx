import React, { FunctionComponent } from "react";

interface ContactUsProps {}

const ContactUs: FunctionComponent<ContactUsProps> = () => {
  return (
    <section id="section-6" className="section__contact-us">
      <div className="contact-us">
        <div className="contact-us__left">
          <div className="contact-us__left-content">
            <div className="contact-us__heading">Contact Us</div>
            <ul className="contact-us__info">
              <li className="contact-us__link">
                <span>Mobile No</span>
                <a href="tel:9725583419">9725583419</a>
              </li>
              <li className="contact-us__link">
                <span>Email Id</span>
                <a href="mailto:babjiglass@gmail.com">
                  babjiglass@gmail.com
                </a>
              </li>
              <li className="contact-us__link">
                <span>Follow us</span>
                <div className="contact-us__socialmedia-icons">
                  <a href="#">
                    <img src="/img/facebook.png" alt="facebook-icon" />
                  </a>
                  <a href="#">
                    <img src="/img/instagram.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="/img/whatsapp.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="/img/youtube.png" alt="" />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-us__right">
          <div className="contact-us__form-wrapper">
            <form action="" className="contact-form">
              <div className="contact-form__item form-item--name flex--2">
                <label htmlFor="name">
                  Name<span className="required">*</span>
                </label>
                <input id="name" required type="text" placeholder="Full Name" />
              </div>
              <div className="contact-form__item form-item--email flex--1">
                <label htmlFor="email">
                  Email Id <span className="required">*</span>
                </label>
                <input
                  id="email"
                  required
                  type="email"
                  placeholder="name@email.com"
                />
              </div>
              <div className="contact-form__item form-item--mobile flex--1">
                <label htmlFor="mobile">
                  Mobile No <span className="required">*</span>
                </label>
                <input
                  id="mobile"
                  type="tel"
                  required
                  pattern="[0 - 9] {10}"
                  placeholder="9876543210"
                />
              </div>
              <div className="contact-form__item form-item--company flex--1">
                <label htmlFor="company">Company Name</label>
                <input id="name" type="text" placeholder="xyz interprise" />
              </div>
              <div className="contact-form__item form-item--location flex--1">
                <label htmlFor="company">Company Location</label>
                <input id="name" type="text" placeholder="Jamnagar" />
              </div>
              <div className="contact-form__item form-item--message flex--2">
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  placeholder="Type Your Message Here..."
                ></textarea>
              </div>
              <input
                type="submit"
                className="contact-form__submit-btn"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
