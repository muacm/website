import React from "react";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/contact.css";
import Helmet from "react-helmet";
import Footer from "../components/Footer";
const Contact = () => {
  return (
    <div id="contact">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Helmet>
      <div className="pt-5">
        <h1
          className="text-center pt-5"
          style={{ color: "white; !important", paddingTop: "100px;" }}
        >
          Contact Us
        </h1>
      </div>
      <br />
      <br />
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="wrimagecard card wrimagecard-topimage">
              <div class="wrimagecard-topimage_header">
                <center>
                  <i class="fa fa-envelope" style={{ color: "white" }}></i>
                </center>
              </div>
              <br />
              <center>
                <h3>acm@medicaps.ac.in</h3>
              </center>
              <br />
            </div>
          </div>
          <div class="col-md-4">
            <div class="wrimagecard card wrimagecard-topimage">
              <div class="wrimagecard-topimage_header">
                <center>
                  <i class="fa fa-phone" style={{ color: "white" }}></i>
                </center>
              </div>
              <br />
              <center>
                <h3>91+ 86592-56892</h3>
              </center>
              <br />
            </div>
          </div>
          <div class="col-md-4">
            <div class="wrimagecard card wrimagecard-topimage">
              <div class="wrimagecard-topimage_header">
                <center>
                  <i class="fa fa-map-marker" style={{ color: "white" }}>
                    {" "}
                  </i>
                </center>
              </div>
              <br />
              <center>
                <h3>Medi-Caps University</h3>
              </center>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div class="container wrimagecard-2">
        <div class="row">
          <div class="col-lg-7">
            <div class="wrap-contact100">
              <form class="contact100-form validate-form">
                <div
                  class="wrap-input100 rs1-wrap-input100 validate-input"
                  data-validate="Name is required"
                >
                  <span class="label-input100">Tell us your name *</span>
                  <input
                    class="input100"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                  ></input>
                </div>

                <div
                  class="wrap-input100 rs1-wrap-input100 validate-input"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <span class="label-input100">Enter your email *</span>
                  <input
                    class="input100"
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                  ></input>
                </div>

                <div class="wrap-input100">
                  <span class="label-input100">Subject</span>
                  <input
                    class="input100"
                    type="text"
                    name="web"
                    placeholder="This Message is For..."
                  ></input>
                </div>

                <div
                  class="wrap-input100 validate-input"
                  data-validate="Message is required"
                >
                  <span class="label-input100">Message</span>
                  <textarea
                    class="input100"
                    name="message"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <div class="container-contact100-form-btn">
                  <div class="wrap-contact100-form-btn">
                    <div class="contact100-form-bgbtn"></div>
                    <button class="contact100-form-btn">Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.8782185370846!2d75.8014020148084!3d22.621022385157897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f958dcb7169d%3A0xd877c12078e50f0f!2sMedi-Caps%20University!5e0!3m2!1sen!2sin!4v1616399882435!5m2!1sen!2sin"
              width="85%"
              height="62%"
              style={{ border: "5px", borderRadius: "15px" }}
              class="mapmedi"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <Footer />
    </div>
  );
};

export default Contact;
