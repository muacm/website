import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="row m-0">
      <div className="col-12">
        <div
          class="navbar navbar-expand-lg navbar-dark text-secondary fixed-top"
          style={{ background: "#121212", color: "white" }}
          id="nav"
        >
          <div class="container">
            <div className="d-flex">
              <Link class="navbar-brand" to="/">
                <img src="MuACMlogo.png" className="logo" alt="logo"></img>
              </Link>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div
              class="collapse navbar-collapse"
              id="navbarSupportedContent"
              style={{ background: "#121212", color: "white" }}
            >
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <Link class="nav-link" to="/">
                    About{" "}
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/teams">
                    Team
                  </Link>
                </li>

                <li class="nav-item">
                  <Link class="nav-link" to="/event">
                    Events
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/blogs">
                    Blog
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
