import React from "react";
import Styles from "../css/section-three";

const SectionThree = () => {
  return (
    <Styles>
      <div className="section-three">
        <div className="left">
          <h3>
            DISCOVER <br />
            TIKAL’S
            <br />
            <span className="orange">TECH RADAR</span>
          </h3>

          <h2>
            START, KEEP <span>OR</span> STOP?
          </h2>

          <p>
            The Radar is a new initiative from Tikal to summarize our usage and
            opinion about certain technology topics in our client solutions.{" "}
            <br />
            Are you in or out of the game?
            <br />
            <br />
            Discover Tikal’s Tech Radar by attending high profile talks and
            expert workshops on all aspects of fullstack.
          </p>
        </div>
        <div className="right">
          <a href="/radar">
            <img src="../img/radar-sample.jpg" />
          </a>
        </div>
      </div>
    </Styles>
  );
};

export default SectionThree;
