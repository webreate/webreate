import React, { useEffect } from "react";
import Accordion from "./Accordion";
import lottie from "lottie-web";


const Ourwork = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#lottie2"),

      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../../lottie_files/creation.json')
    })

    lottie.loadAnimation({
      container: document.querySelector("#lottie1"),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../../lottie_files/development.json')
    })

    lottie.loadAnimation({
     container: document.querySelector("#lottie3"),
     renderer: 'svg',
     loop: true,
     autoplay: true,
     animationData: require('../../../lottie_files/marketing.json')
   })
    lottie.loadAnimation({
     container: document.querySelector("#lottie4"),
     renderer: 'svg',
     loop: true,
     autoplay: true,
     animationData: require('../../../lottie_files/managment.json')
   })
   const instance = lottie.loadAnimation({
     container: document.querySelector("#lottie5"),
     renderer: 'svg',
     loop: true,
     autoplay: true,
     animationData: require('../../../lottie_files/optimisation.json')
   })
    return () => lottie.destroy();

  }, [])
 
  return (
    <div className="ourwork-section">
      <div className="ourwork">
        <h2>-----Our Work-----</h2>
        <p>
          An Idea is the first step towards the success and we provide an all in
          one support to grow your Idea at its maximal height.
        </p>
        <Accordion />

        <h2>-----A One stop solution-----</h2>
        <p>
          An Idea is the first step towards the success and we provide an all in{" "}
          <br />
          one support to grow your Idea at its maximal height.
        </p>
        <div className="icon-5">
          <div className="icon-5img">
            <a href="services/creation.html" data-aos="flip-left" data-aos-delay="500" data-aos-duration="600">
              <div className="info_box" id="info2" data-aos="fade-in" data-aos-delay="600" data-aos-duration="600">
                <div className=" lottie" id="lottie2" style={{ width: 100, height: 100 }}></div>
                <p className="icon5-text">Creation</p>
              </div>
            </a>
          </div>
          <div className="icon-5img">
            <a href="services/development.html" data-aos="flip-left" data-aos-delay="300" data-aos-duration="600">
              <div className="info_box" id="info1" data-aos="fade-in" data-aos-delay="400" data-aos-duration="600">
                <div className="lottie1 lottie" id="lottie1" style={{ width: 100, height: 100 }}></div>
                <p className="icon5-text">Development</p>
              </div>
            </a>
          </div>
          <div className="icon-5img">
            <a href="services/marketing.html" data-aos="flip-left" data-aos-delay="700" data-aos-duration="600">
              <div className="info_box" id="info3" data-aos="fade-in" data-aos-delay="800" data-aos-duration="600">
                <div className="lottie3 lottie" id="lottie3" style={{ width: 100, height: 100 }} ></div>
                <p className="icon5-text">Marketing</p>
              </div>
            </a>
          </div>
          <div className="icon-5img">
            <a href="services/management.html" data-aos="flip-left" data-aos-delay="900" data-aos-duration="600">
              <div className="info_box" id="info4" data-aos="fade-in" data-aos-delay="1000" data-aos-duration="600">
                <div className="lottie4 lottie" id="lottie4" style={{ width: 100, height: 100 }}></div>
                <p className="icon5-text" >Management</p>
              </div>
            </a>
          </div>
          <div className="icon-5img">
            <a href="services/optimisation.html" data-aos="flip-left" data-aos-delay="1100" data-aos-duration="600">
              <div className="info_box" id="info5" data-aos="fade-in" data-aos-delay="1200" data-aos-duration="600">
                <div className="lottie5 lottie" id="lottie5" style={{ width: 100, height: 100 }}></div>
                <p className="icon5-text">Optimization</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* xyxxxx*/}
      <div className="ourwork-success">
        <div className="ourwork-success-main">
          <h1>OUR WORK NARRATES THEIR SUCCESS STORIES</h1>
          <h3>A place where your growth matters.</h3>
          <p className="success-line">
            With many satisfied clients and successful projects. We upgraded
            ourself many times.
          </p>
        </div>
        <div className="review-main">
          <div className="review">
            <img className="success" src="work1.png" alt="work1" />
            <div className="review-section">
              <p>
                Working with Webreate on our social media needs, including
                content and digital marketing, has allowed us to build a loyal
                following across all social media platforms.
              </p>
              <br />
              <p>Best Wishes-</p>
              <p>Easy CamScan</p>
              <h3>Abhinav Garg</h3>
            </div>
          </div>
          <div className="review">
            <img className="success" src="work4.png" alt="work4" />
            <div className="review-section">
              <p>
                Webreate created our websites and applications. Webreate's crew
                is highly professional, and they completely understand your
                business before developing content for it.
              </p>
              <br />

              <p>Best Wishes-</p>

              <p>Riyo Rent It Over</p>
              <h3>Adhiraj Mishra</h3>
            </div>
          </div>
        </div>
      </div>
    </div>);
};

export default Ourwork;


// onMouseEnter={() => lottie.play()}  onMouseLeave={() => lottie.pause()}