import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="Address">
        <img src="Group 111.png" alt="" />
        <p>
          Webreate, A young team of passionate minds delivering the best result
          driven strategies to enhance your Online appearance with the best
          Creation, Development, Optimisation, Management, And Marketing.{" "}
        </p>
        <h2>ADDRESS</h2>
        <p>
          2nd Floor, SK Tower Behind Reliance Market, Niranjanpur Dehradun,India
        </p>
        <h2>MOBILE NO.</h2>
        <p>1234-567-890</p>
      </div>
      <div className="icons">
        <h2>FOLLOW US ON</h2>
        <div className="icon-imgs">
          <div className="socialmedia">
            <img className="insta" src="instagram.png" alt="instagram" />
          </div>
          <div className="socialmedia">
            <img className="youtube" src="yt.png" alt="yt" />
          </div>
          <div className="socialmedia">
            <img className="facebook" src="fb.png" alt="fb" />
          </div>
          {/* <div className="socialmedia">
            <img className="whatsapp" src="whatsapp.png" alt="whatsapp" />
          </div>
          <div className="socialmedia">
            <img className="linkedin" src="linkedin.png" alt="linkedin" />
          </div>
          <div className="socialmedia">
            <img className="twitter" src="twitter.png" alt="twitter" />
          </div> */}
        </div>
        <h2>COMPANY</h2>
        <p>About US | Privacy Policy</p>
        <h2>SERVICE WE OFFER</h2>
        <p>Market | Optimization| Management | Development | Creation</p>
        <h2>OUR PROJECTS</h2>
        <p>Celereate | Mehandi Hub | Easy CamScan | RIYO</p>
      </div>
    </div>
  );
};

export default Footer;
