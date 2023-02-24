import React from "react";
import "./style.css";

const home = () => {
  return (
    <>
      <div className="top-bar">
        <h3>Digital Marketing Agency - Grow Revenue with Us!!</h3>
      </div>
      <div className="menu-bar">
        <div>
          <img src="Group 111.png" alt="" />
        </div>
        <div className="menu-btn">
          <button className="appointment">BOOK AN APPOINTMENT</button>
          <h1>Menu</h1>
        </div>
      </div>
      <div className="hero-section">
        <div className="hero-content">
          <p>
            We Convert your idea into its
            <span className="special-text"> best perception</span>
          </p>
          <div className="image2">
            <img src="Group 502.png" alt="" />
            <img className="eimage" src="Group 503.png" alt="" />
            <img className="optimizeimg" src="OPTIMISE.png" />
          </div>

          <p className="hero-p">
            Webreate Offers a Wide range of technical and marketing Services to
            bring out the best of you Online.
          </p>
          <button className="btn-1">EXPLORE</button>
        </div>
        <div className="w_logo">
          {" "}
          <img className="wlogo" src="Path 12289.png" />
        </div>
      </div>
    </>
  );
};

export default home;
