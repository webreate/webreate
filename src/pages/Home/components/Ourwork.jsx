import React from "react";

const Ourwork = () => {
  return (
    <div className="ourwork-section">
      <div className="ourwork">
        <h2>-----Our Work-----</h2>
        <p>
          An Idea is the first step towards the success and we provide an all in
          one support to grow your Idea at its maximal height.
        </p>
        {/* <div className="boxes">
          <div className="box1">
            <h2>Mehandi Hub</h2>
            <hr />
          </div>
          <div className="box2"></div>
          <div className="box3"></div>
          <div className="box4"></div>
        </div> */}
        <h2>-----A One stop solution-----</h2>
        <p>
          An Idea is the first step towards the success and we provide an all in{" "}
          <br />
          one support to grow your Idea at its maximal height.
        </p>
        <div className="icon-5">
          <div className="icon-5img">
            <img src="Group 15156.png" alt="" />
            <h3 className="icon5-text">Creation</h3>
          </div>
          <div className="icon-5img">
            <img src="Group 15157.png" alt="" />
            <h3 className="icon5-text">Development</h3>
          </div>
          <div className="icon-5img">
            <img src="Group 15158.png" alt="" />
            <h3 className="icon5-text">Marketing</h3>
          </div>
          <div className="icon-5img">
            <img src="Group 15159.png" alt="" />
            <h3 className="icon5-text">Management</h3>
          </div>
          <div className="icon-5img">
            <img src="Group 15160.png" alt="" />
            <h3 className="icon5-text">Optimization</h3>
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
    </div>
  );
};

export default Ourwork;
