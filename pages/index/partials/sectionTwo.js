import React from "react";
import Styles from "../css/section-two";
import Fade from 'react-reveal/Fade';


const SectionTwo = () => {
  return (
    <Styles>
      <div className="section-two">
        <Fade left distance="50px">
          <h3>DEVELOPERS:</h3>
          <h4>STAY AHEAD OF THE GAME<span className="black">.</span></h4>
        </Fade>

        <Fade right distance="50px">
          <p>
            Tikal invites you to the first full stack day in Israel, featuring high profile speakers, cool<br/>
            case studies, workshops, high quality networking and the engineering team exhibition hall.
          </p>
        </Fade>
        
        <Fade top distance="50px" cascade>
          <div className="statistic">
            <div>
              <h3>400+</h3>
              <h5>Attendees</h5>
            </div>
            <div>
              <h3>20+</h3>
              <h5>Hours</h5>
            </div>
            <div>
              <h3>20+</h3>
              <h5>Speakers</h5>
            </div>
            <div>
              <h3>4</h3>
              <h5>Parallel Tracks</h5>
            </div>
          </div>
        </Fade>
        

        <div className="become-sponsor-btn">
          <a href="https://bit.ly/2RRzifW">Become a sponsor</a>
        </div>
      
      </div>
    </Styles>
  );
};
export default SectionTwo;
