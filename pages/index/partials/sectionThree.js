import React from "react";
import Styles from "../css/section-three";
import Fade from "react-reveal/Fade";
import {logEvent} from "../../../helpers/analytics";

const SectionThree = () => {
  return (
    <Styles>
      <div className="section-three">
        <Fade left distance="50px">
          <div className="left">
            <h3>
              DISCOVER THE <br />
              TECH RADAR
              <br />
            </h3>

            <h2 className="orange">Try, Start, Keep or Stop?</h2>

            <p>
              Tikal’s Tech Radar summarizes the usage and opinions gathered from our experts’ research about current
              trends and technologies. The radar presents four rings: Try, Start, Keep and Stop and 4 domains: Backend,
              Frontend, DevOps and Mobile. During Tech Radar Day 2020 We will focus on the Try and Start rings, in order
              to provide you with information and hands-on experience in cutting-edge technologies.
            </p>
            <a
              className="get-tickets-button hide-in-mobile"
              href="/radar"
              onClick={() => {
                logEvent("Radar link", "Clicked", "Home page");
              }}
            >
              EXPLORE THE RADAR
            </a>
          </div>
        </Fade>

        <Fade right distance="50px">
          <div className="right">
            <a href="/radar">
              <img src="../img/radar-sample.jpg" />
            </a>
          </div>
        </Fade>
      </div>
    </Styles>
  );
};

export default SectionThree;
