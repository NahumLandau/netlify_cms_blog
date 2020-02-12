import React from "react";
import Styles from "../css/section-six";
import Fade from "react-reveal/Fade";
import {shuffle} from "../../../helpers";
import {logEvent} from "../../../helpers/analytics";
import sortBy from "lodash.sortby";

const SectionSix = props => {
  const {speakers = []} = props;
  const sortedSpeakers = sortBy(speakers, ["first_name"]);

  return (
    <Styles>
      <div className="section-six">
        <h2>SPEAKERS</h2>

        <ul className="speakers">
          {sortedSpeakers.map((speaker, index) => {
            const {first_name, last_name, image, company} = speaker;
            return (
              <Fade key={first_name + last_name} top delay={(index + 1) * 200} distance="20px">
                <li key={`${first_name}-${last_name}`}>
                  <div className="image" style={{backgroundImage: `url(..${image})`}}></div>
                  <div className="overlay">
                    <span>{`${first_name} ${last_name}`}</span>
                    <small>{company}</small>
                  </div>
                </li>
              </Fade>
            );
          })}
        </ul>

        <a
          className="get-tickets-button"
          href="https://docs.google.com/forms/d/e/1FAIpQLScIajS252lrhkA8U92Gt3YlTFJClkOJjLjRdk3y-bbRs4DCqw/viewform"
          target="_blank"
          onClick={() => {
            logEvent("Become a Speaker", "Cliked", "Home page");
          }}
        >
          BECOME A SPEAKER
        </a>
      </div>
    </Styles>
  );
};

export default SectionSix;
