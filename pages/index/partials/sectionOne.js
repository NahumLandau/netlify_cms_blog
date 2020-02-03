import React from "react";
import Styles from "../css/section-one";
import RadarLogo from "../../../components/RadarLogo";

const SectionOne = () => {
  return (
    <Styles>
      <div className="section-one">
        <div className="section-one-container">
          <RadarLogo />

          <div className="text">
            <h1>
              TECH RADAR
              <br />
              DAY 2020
            </h1>
            <h2>Full Day of Full Stack</h2>

            <h3>
              <div>May 6th, 2020</div>
              <div>David Intercontinental, Tel-Aviv</div>
              <div className="discount-notification">
                Early bird tickets are on sale now.
                <br />
                Save up to <span className="orange">40%</span>. Valid Until March 1st.
              </div>
            </h3>

            <div className="get-tickets-btn">
              <a
                href="https://www.eventbrite.com/e/fullstack-tech-radar-day-tickets-55203831145#tickets"
                target="_blank"
              >
                get tickets
              </a>
            </div>
          </div>
        </div>

        <svg className="icon-arrow-down" viewBox="0 0 32 32">
          <use xlinkHref="../img/sprites.svg#icon-arrow-down"></use>
        </svg>
      </div>
    </Styles>
  );
};
export default SectionOne;
