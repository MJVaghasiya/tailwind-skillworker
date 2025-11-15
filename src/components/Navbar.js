import React from "react";
import { Link } from "react-router-dom";

import { HashLink } from "react-router-hash-link";
import { IoIosArrowDown } from "react-icons/io";
import { ImSearch } from "react-icons/im";
import img1 from "../assets/Logo PNG.webp";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <img class="navbar-brand" src={img1} />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active black-underline"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <Link to="/AboutUs" class="nav-link black-underline">
                  About US
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link black-underline" to="/OurServices">
                  Services
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/ContactUs" class="nav-link black-underline">
                  Contact US
                </Link>
              </li>
              {/* <li class="nav-item">
                <Link to="/Job" class="nav-link black-underline">
                  Job Search
                </Link>
              </li> */}
            </ul>
            <a href="https://skillworkers.co.uk/candidate/" className="button">
              <button class="btn btn-primary signup neu-morphism w-100">
                Apply now
              </button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
