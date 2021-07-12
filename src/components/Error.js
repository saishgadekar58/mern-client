import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404 - Not Found</h1>
          </div>
          <h2>page not found</h2>
          <p className="mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Laudantium, consequatur.
          </p>
          <NavLink to="/">Back Home</NavLink>
        </div>
      </div>
    </>
  );
};

export default Error;
