import React from "react";
import Styles from "../css/section-one";

const SectionOne = () => {
  return (
    <Styles>
      <div className="section-one">
        <div>
          <div className="radar-wrapper">
            <div className="radar-outer">
              <img className="text" />
              <div className="radar">
                <div className="cross-section"></div>
                <div className="spinner-outer">
                  <div className="spinner"></div>
                </div>
                <img className="octopus" />
              </div>
            </div>
          </div>

          <div className="text">
            <h1>
              FULL STACK TECH
              <br />
              RADAR DAY 2020
            </h1>
            <h2>FULL DAY OF FULL STACK.</h2>

            <h3>
              <span className="orange">Full Stack, </span>
              <span>full house </span>
              <span className="orange">thank you for being there. </span>
              <span>See you next time!</span>
              <div>
                <a
                  href="https://www.youtube.com/channel/UCV7lV9Lq2sc7t0QEKS4xH7A/playlists?view=50&amp;sort=dd&amp;shelf_id=2"
                  target="_blank"
                >
                  Watch the videos on our channel
                </a>
              </div>
            </h3>

            <div className="get-tickets-btn">
              <a
                href="https://www.eventbrite.com/e/fullstack-tech-radar-day-tickets-55203831145#tickets"
                target="_blank"
              >
                Buy Ticket
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
