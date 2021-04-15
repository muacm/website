import React from "react";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/contact.css";
import Footer from "../components/Footer";
import "../styles/new.css";
import "../styles/event.css";
const Events = () => {
  return (
    <div id="contact">
      <div class="container bootdey pt-5">
        <div class="row gutters">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div class="">
              <div class="card-body">
                <div class="timeline">
                  <div class="timeline-row">
                    <div class="timeline-time">
                      7:45PM<small>May 21</small>
                    </div>
                    <div class="timeline-dot fb-bg"></div>
                    <div class="timeline-content">
                      <i class="fa fa-map-marker"></i>
                      <h4>Event 1</h4>
                      <p>lorem ipsum</p>
                    </div>
                  </div>

                  <div class="timeline-row">
                    <div class="timeline-time">
                      8:00 AM<small>May 18</small>
                    </div>
                    <div class="timeline-dot green-one-bg"></div>
                    <div class="timeline-content green-one">
                      <i class="fa fa-warning"></i>
                      <h4>Event 2</h4>
                      <p>Event 2</p>
                    </div>
                  </div>

                  <div class="timeline-row">
                    <div class="timeline-time">
                      7:25 PM<small>May 6</small>
                    </div>
                    <div class="timeline-dot green-two-bg"></div>
                    <div class="timeline-content green-two">
                      <i class="fa fa-list"></i>
                      <h4>Event 3</h4>
                      <p>Event 3</p>
                    </div>
                  </div>

                  <div class="timeline-row">
                    <div class="timeline-time">
                      3:55 PM<small>Apr 26</small>
                    </div>
                    <div class="timeline-dot green-three-bg"></div>
                    <div class="timeline-content green-three">
                      <i class="icon-directions"></i>
                      <h4>Event 4</h4>
                      <p>Event 4</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
