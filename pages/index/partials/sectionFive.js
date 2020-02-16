import React from "react";
import Styles from "../css/section-five";
import Domains from "../../../components/Domains";

const SectionFive = props => {
  return (
    <Styles>
      <div className="section-five">
        <h3>GET ON THE RADAR</h3>

        <h4 className="orange">Discover the Full Range of Full Stack </h4>

        <p>
          We designed Tech Radar Day to give you the best full stack hands-on experience. During the first part of the
          day, you'll hear excellent lectures from our keynote speakers. Right afterwards, we will split into 4 tracks,
          and run 4 different workshops on the most up-to-date technologies from the tech radar.
        </p>
        <Domains />
      </div>
    </Styles>
  );
};

export default SectionFive;
