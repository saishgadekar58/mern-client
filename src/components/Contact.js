import React from "react";
import phonepic from "../images/p2.png";

const Contact = () => {
  return (
    <>
      <div className="contact_info">
        <div className="conatiner">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
              {/* phone number */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img src={phonepic} alt="phone" />
                <div className="contact_info_content">
                  <div className="contact_info_title">Phone</div>
                  <div className="contact_info_text">9067194769</div>
                </div>
              </div>
              {/* end */}
              {/* email  */}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img src={phonepic} alt="phone" />
                <div className="contact_info_content">
                  <div className="contact_info_title">Email</div>
                  <div className="contact_info_text">
                    saish.gadekar.58@gmail.com
                  </div>
                </div>
              </div>
              {/* end */}
              {/* address*/}
              <div className="contact_info_item d-flex justify-content-start align-items-center">
                <img src={phonepic} alt="phone" />
                <div className="contact_info_content">
                  <div className="contact_info_title">Address</div>
                  <div className="contact_info_text">Rajiv nagar,Nagpur</div>
                </div>
              </div>
              {/* end */}
            </div>
          </div>
        </div>
      </div>

      {/* contactusform */}
      <div className="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact_form_container py-5">
                <div className="contact_form_title">
                  <h1>Get in Touch</h1>
                </div>
                <form id="contact_form">
                  <div className="contact_form_name d-flex justify-content-between align-items-between">
                    <input
                      type="text"
                      id="contact_form_name"
                      name="contact_form_name"
                      className="contact_form_name input_field"
                      placeholder="enter name"
                      required="true"
                    />
                    <input
                      type="email"
                      id="contact_form_email"
                      name="contact_form_email"
                      className="contact_form_email input_field"
                      placeholder="enter email"
                      required="true"
                    />
                    <input
                      type="number"
                      id="contact_form_phone"
                      name="contact_form_phone"
                      className="contact_form_phone input_field"
                      placeholder="enter phone number"
                      required="true"
                    />
                  </div>
                  <div className="contact_form_text mt-5">
                    <label htmlFor="msg">Enter your message</label>
                    <textarea
                      className="text_field contact_form_message"
                      placeholder="enter your message...."
                      cols="10"
                      id="msg"
                      name="msg"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="contact_form_button">
                    <button
                      type="submit"
                      className="button contact_submit_button"
                    >
                      send message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
