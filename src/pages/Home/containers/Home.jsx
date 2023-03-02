import React from "react";
import Ourservice from "../components/Ourservice";
import Aboutus from "../components/Aboutus";
import Ourwork from "../components/Ourwork";
import Ourteam from "../components/Ourteam";
import Subscribe from "../components/Subscribe";
import Footer from "../../../common/Footer/Footer";

import "../styles/Home.scss";

const Home = () => {
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
            <img className="optimizeimg" src="OPTIMISE.png" alt="" />
          </div>

          <p className="hero-p">
            Webreate Offers a Wide range of technical and marketing Services to
            bring out the best of you Online.
          </p>
          <button className="btn-1">EXPLORE</button>
        </div>
        <div className="main_right" data-aos="fade-down" data-aos-delay="100" data-aos-duration="600">
            <div className="form_box" data-aos="fade-in" data-aos-delay="400" data-aos-duration="600">

                <h2>Make an</h2>
                <h1>Appointment</h1>
                <h3>Just make an appointment to get help from our experts.</h3>
            </div>
            <h2 className="attach-line">EXPERTS</h2>
            <form action=" " data-aos="fade-in" data-aos-delay="400" data-aos-duration="600">
                <input type="text" placeholder="Name"/>
                <input type="tel" name="" id="" placeholder="Mobile Number" max="10"/>
                <input type="text" placeholder="Select Service you want to help with"/>
                <textarea name="" id="" cols="25" rows="6" placeholder="Message(optional)"></textarea>
                <input type="button" value="Book a Call" id="form_btn"/>
            </form>
        </div>
      </div>
      <Ourservice />
      <Aboutus />
      <Ourwork />
      <Ourteam />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
