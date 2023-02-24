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
        <h2>-----A One stop solution-----</h2>
        <p>
          An Idea is the first step towards the success and we provide an all in
          one support to grow your Idea at its maximal height.
        </p>
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
