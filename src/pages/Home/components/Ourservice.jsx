import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
const Ourservice = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      container: document.querySelector("#lottie_2"),

      renderer: 'svg',
      loop: true,
      autoplay: false,
      controls: true,
      reset: true,
      animationData: require('../../../lottie_files/creation.json')
    })
    lottie.loadAnimation({
      container: container.current,

      container: document.querySelector("#lottie_1"),
      renderer: 'svg',
      loop: true,
      autoplay: false,
      animationData: require('../../../lottie_files/development.json')
    })
    
    lottie.loadAnimation({
      container: document.querySelector("#lottie_3"),
      renderer: 'svg',
      loop: true,
      autoplay: false,
      animationData: require('../../../lottie_files/marketing.json')
    })
    lottie.loadAnimation({
      container: document.querySelector("#lottie_4"),
      renderer: 'svg',
      loop: true,
      autoplay: false,
      animationData: require('../../../lottie_files/managment.json')
    })
    lottie.loadAnimation({
      container: document.querySelector("#lottie_5"),
      renderer: 'svg',
      loop: true,
      autoplay: false,
      animationData: require('../../../lottie_files/optimisation.json')
    })
    return () => lottie.destroy();
  }, [])
  return (
    <div className="ourservice">
      <div className="ourServiceContent">
        <p className="ourservicep">
          We provide an all in one support to grow your Idea at the maximal
          potential.
        </p>
        <h3>OUR SERVICE--------- </h3>
      </div>
      <div className="ourservice-main">
        <div className="service-section">
          <div className="icons-5">
            <div className="icons-5img">
              <div className=" lottie" id="lottie_2" style={{ width: 80, height: 80 }} ></div>
            </div>
            <div className="icons-5img">
            <div className="lottie1 lottie" id="lottie_1" style={{ width: 80, height: 80 }}></div>
            </div>
            <div className="icons-5img">
            <div className="lottie1 lottie" id="lottie_3" style={{ width: 80, height: 80 }}></div>
            </div>
            <div className="icons-5img">
            <div className="lottie1 lottie" id="lottie_4" style={{ width: 80, height: 80 }}></div>
            </div>
            <div className="icons-5img">
            <div className="lottie1 lottie" id="lottie_5" style={{ width: 80, height: 80 }}></div>
            </div>
          </div>
          <p className="ourservice-p">Webreate- A One stop solution.</p>
          <p className="ourservice-p">
            To create the best perception of your idea we provide CREATION For
            an unstoppable online performance we provide every ideas from ground
            to digital, through MARKETING. To develop a revenue generating
            platform we create and design web/app through DEVELOPMENT. Reducing
            your daily hurdles with the best online MANAGMENT of your business.
            To never miss an opportunity and to convert every face buying, we
            provide every aspect of OPTIMIZATION.
          </p>
          <button className="btn-2">EXPLORE</button>
        </div>
      </div>
    </div>
  );
};

export default Ourservice;
