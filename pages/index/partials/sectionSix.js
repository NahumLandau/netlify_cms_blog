import React from "react";
import Styles from "../css/section-six";
import Fade from "react-reveal/Fade";
import {logEvent} from "../../../helpers/analytics";
import sortBy from "lodash.sortby";
import Person from "../../../components/Person";

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
            const img = process.env.BASE_URL + image[0].url;
            return <Person key={first_name + last_name} index={index} {...speaker} image={img} />;
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
