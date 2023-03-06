import React, { useEffect} from "react";
import lottie from "lottie-web";


import Ourservice from "../components/Ourservice";
import Aboutus from "../components/Aboutus";
import Ourwork from "../components/Ourwork";
import Ourteam from "../components/Ourteam";
import Subscribe from "../components/Subscribe";
import Footer from "../../../common/Footer/Footer";
import "../styles/Header.scss"


import "../styles/Home.scss";
import Header from "../../../common/Header/Header";

const Home = () => {
  useEffect(() => {
     lottie.loadAnimation({
      container: document.querySelector("#logo"),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../../lottie_files/logo.json')
    })
     lottie.loadAnimation({
      container: document.querySelector("#logo1"),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../../lottie_files/logo.json')
    })
    return () => lottie.destroy();


  },[])
  return (
    <>
      <Header/>
      <div className="hero-section">
        <div className="main_left">
          <h2>We Convert your idea into its<span> best perception.</span></h2>
          <div className="mainleft-typing">
            <img src="Group 502.png" alt="" />
            <img className="eimage" src="Group 503.png" alt="" />
            <div className="scroller_box">

              <div className="scroller">
                <div>
                  <p>DEVELOP</p>
                </div>
                <div>
                  <p>CREATE</p>
                </div>
                <div>
                  <p>OPTIMISE</p>
                </div>
                <div>
                  <p>MANAGE</p>
                </div>
                <div>
                  <p>BREATE</p>
                </div>
              </div>

            </div>
          </div>
          <h3>Webreate Offers a Wide range of technical and marketing Services to bring out the best of you
            Online.</h3>
          <div className="main-btn">
            <a className="mainbtn" href="services/development.html">
              Explore
            </a>
          </div>
        </div>
        <div className="main_right" data-aos="fade-down" data-aos-delay="100" data-aos-duration="600">
          <div className="form_box" data-aos="fade-in" data-aos-delay="400" data-aos-duration="600">

            <h2>Make an</h2>
            <h1>Appointment</h1>
            <h3>Just make an appointment to get help from our experts.</h3>
          </div>
          <h2 className="attach-line">EXPERTS</h2>
          <form action=" " data-aos="fade-in" data-aos-delay="400" data-aos-duration="600">
            <input type="text" placeholder="Name" />
            <input type="tel" name="" id="" placeholder="Mobile Number" max="10" />
            <input type="text" placeholder="Select Service you want to help with" />
            <textarea name="" id="" cols="25" rows="6" placeholder="Message(optional)"></textarea>
            <input type="button" value="Book a Call" id="form_btn" />
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
