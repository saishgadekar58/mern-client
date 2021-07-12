import React from "react";
import { NavLink } from "react-router-dom";
import loginpic from "./../images/img8.jpg";

const Login = () => {
  return (
    <>
      <section className="sign-in">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signin-image">
              <figure>
                <img src={loginpic} alt="login pic" />
              </figure>
              <NavLink to="/signup" className="signin-image-link">
                signup
              </NavLink>
            </div>
            <div className="signin-form">
              <h2 className="form-title">signin</h2>
              <form className="register-form" id="register-form">
                {/* -------------------- */}
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="off"
                    placeholder="enter name"
                  />
                </div>
                {/* ------------------ */}

                {/* -------------------- */}
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="zmdi zmdi-lock material-icons-name"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="enter password"
                  />
                </div>
                {/* ------------------ */}

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log In"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
