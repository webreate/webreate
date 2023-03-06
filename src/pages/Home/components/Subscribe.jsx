import React from "react";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribe-main">
        <h1>
          FOR LATEST TIPS <br /> AND TRICKS <br /> JOINS US.
        </h1>
        <p>
          Get the best updates, tricks and tips to enhance the <br /> way you
          design, think and write. We are here to help <br /> you out through
          every hurdle.
        </p>
      </div>

      <div className="subscribe-form">
        <div className="form-section">
          {/* <h3>JOIN US!</h3> */}
          <div className="subscribe-form-head">
            <h3>Subscribe Our</h3>
            <h2>Newsletter</h2>
          </div>
          <h2 className="joinus-line">JOIN US!</h2>


          <form>
            <div className="subscribe-formtype">
              <input type="text" placeholder="Name" required />
            </div>
            <div className="subscribe-formtype">
              <input type="text" placeholder="Mobile Number" required />
            </div>
            <div className="subscribe-formtype">
              <input type="text" placeholder="Email ID" required />
            </div>

            {/* <div>
              <label for="select-where">Where did you hear from us?</label>
              <select id="select-where" required>
                <option value="">Please choose one option:</option>
                <option value="friends">Friends and family</option>
                <option value="youtube">YouTube video</option>
                <option value="podcast">Podcast</option>
                <option value="ad">Facebook ad</option>
                <option value="others">Others</option>
              </select>
            </div> */}
            <div className="subscribe-btn">
              <button className="btn-2">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;