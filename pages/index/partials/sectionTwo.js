import React from "react";
import Styles from "../css/section-two";
import Fade from "react-reveal/Fade";

const SectionTwo = () => {
  return (
    <Styles>
      <div className="section-two">
        <Fade left distance="50px">
          <h3>TECH RADAR DAY IN NUMBERS</h3>
        </Fade>

        <Fade top distance="50px" cascade>
          <div className="statistic">
            <div>
              <img src="../img/people.svg" />
              <h3>500+</h3>
              <h5>Attendees</h5>
            </div>
            <div>
              <img src="../img/hours.svg" />
              <h3>20+</h3>
              <h5>Hours</h5>
            </div>
            <div>
              <img src="../img/speakers.svg" />
              <h3>20+</h3>
              <h5>Speakers</h5>
            </div>
            <div>
              <img src="../img/tracks.svg" />
              <h3>4</h3>
              <h5>Tech Tracks</h5>
            </div>
          </div>
        </Fade>
      </div>
    </Styles>
  );
};
export default SectionTwo;
