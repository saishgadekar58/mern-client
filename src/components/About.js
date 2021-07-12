import React from "react";
import mypic from "../images/saish.jpg";

const About = () => {
  return (
    <>
      <div className="container emp-profile">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={mypic} alt="pic" />
              </div>
            </div>
            {/* ------------------------ */}
            <div className="col-md-6">
              <div className="profile-head">
                <h5>saish gadekar</h5>
                <h6>web developer</h6>
                <p className="profile-rating mt-3 mb-5">
                  Power: <span>Over 9000</span>
                </p>

                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#home"
                      id="home-tab"
                      data-toggle="tab"
                      role="tab"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="#profile"
                      id="profile-tab"
                      data-toggle="tab"
                      role="tab"
                    >
                      TimeLine
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* -------------------- */}

            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn"
                value="Edit Profile"
                name="btnAddMore"
              />
            </div>
          </div>

          <div className="row">
            {/* left-side-url */}
            <div className="col-md-4">
              <div className="profile-work">
                <p>work links</p>
                <a href="www.google.com" target="_blank">
                  Linkedin
                </a>
                <br />
                <a href="www.google.com" target="_blank">
                  Github
                </a>
                <br />
                <a href="www.google.com" target="_blank">
                  Instagram
                </a>
                <br />
              </div>
            </div>

            {/* rightsidedata */}
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  {/* -------------- */}
                  <div className="row">
                    <div className="col-md-6">
                      <label> User Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Saish Gadekar</p>
                    </div>
                  </div>
                  {/* ------------------ */}

                  {/* -------------- */}
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label> User Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Saish Gadekar</p>
                    </div>
                  </div>
                  {/* ------------------ */}
                  {/* -------------- */}
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label> User Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Saish Gadekar</p>
                    </div>
                  </div>
                  {/* ------------------ */}
                  {/* -------------- */}
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label> User Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Saish Gadekar</p>
                    </div>
                  </div>
                  {/* ------------------ */}
                  {/* -------------- */}
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label> User Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Saish Gadekar</p>
                    </div>
                  </div>
                  {/* ------------------ */}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
