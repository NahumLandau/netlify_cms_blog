import React from "react";
import Styles from "../css/section-four";

const SectionFour = () => {
  return (
    <Styles>
      <div className="section-four">
        <h2>
          A Taste of
          <br />
          Tech Radar Day 2019
        </h2>

        <div className="videoWrapper shadow-effect">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/xjHOdXkN6P0"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </Styles>
  );
};

export default SectionFour;
