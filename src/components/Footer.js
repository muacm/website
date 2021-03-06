/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "jquery";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Helmet from "react-helmet";
import "../styles/slider.css";

const Footer = () => {
  return (
    <>
      <Helmet>
        <script src="slider.js"></script>
      </Helmet>
      <div
        id="footer"
        style={{
          background:
            "linear-gradient(to right, slateblue 0%, deepskyblue 100%)",
        }}
      >
        <div className="f_container">
          <div className="box1">
            <img src="MuACMlogo.png" alt="MUACM Demo Logo" />
          </div>
          <div className="box2">
            <h3>Useful Links</h3>
            <ul>
              <a href="http://medicaps.ac.in">
                <li>Medicaps University</li>
              </a>
              <a href="https://sticmedicaps.org.in">
                <li>STIC</li>
              </a>
              <a href="https://acm.org">
                <li>ACM</li>
              </a>
              <a href="">
                <li>Terms and Conditions</li>
              </a>
            </ul>
          </div>
          <div className="box2">
            <h3>Social Media Handles</h3>
            <ul>
              <a href="https://www.instagram.com/mu_acm/">
                <li>
                  <i
                    className="fa fa-instagram"
                    style={{ fontSize: "30px" }}
                  ></i>
                </li>
              </a>
              <a href="https://www.linkedin.com/company/acm-student-chapter-medicaps/?trk=public_pos">
                <li>
                  <i
                    className="fa fa-linkedin"
                    style={{ fontSize: "30px" }}
                  ></i>
                </li>
              </a>
            </ul>
          </div>
          <div className="slideshow-container d-none d-md-block">
            <div className="mySlides fade">
              <div className="numbertext">1 / 3</div>
              <img
                src="profile/IMG_20210402_092458 - Rajesh Nathani.jpg"
                alt="pic"
              ></img>
              <br />
              <p classNameName="lead text-center">Rajesh Nathani</p>
            </div>

            <div className="mySlides fade">
              <div className="numbertext">2 / 3</div>
              <img src="profile/IMG-20200426-WA0003-01 - Sarthak Khandelwal.jpeg"></img>
              <br />
              <p classNameName="lead text-center">Sarthak Khandelwal</p>
            </div>

            <div className="mySlides fade">
              <div className="numbertext">3 / 3</div>
              <img src="profile\profilePhotoRed - Yash Sehgal.jpg" />
              <br />
              <p classNameName="lead">Yash Sehgal</p>
            </div>
            <div className="mySlides fade">
              <div className="numbertext">3 / 3</div>
              <img src="profile/IMG_20190309_221336_573 - mihir dutta.jpg" />
              <br />
              <p classNameName="lead text-center">Mihir Dutta</p>
            </div>
          </div>
        </div>
        <hr background-color="white" />
        <br />
        <div>
          <center>
            <p>
              Copyright &copy; 2021 <a>MUACM</a> All rights Reserved
            </p>
          </center>
          <br />
        </div>
      </div>
    </>
  );
};

export default Footer;
