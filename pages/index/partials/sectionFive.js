import React from "react";
import Styles from "../css/section-five";

const SectionFive = props => {
  const { speakers = [] } = props;

  return (
    <Styles>
      <div className="section-five">
        <h3>
          GET ON THE
          <br />
          <span className="orange">FULL STACK RADAR.</span>
        </h3>

        <h4>
          For the first time in Israel: Discover the full range of full stack.
        </h4>

        <div className="domains m-bold uppercase">
          <div>
            <img src="../img/BACKEND-icon.png" />
            <span>backend &amp; ML</span>
          </div>
          <div>
            <img src="../img/DEVOPS-icon.png" />
            <span>devOps</span>
          </div>
          <div>
            <img src="../img/FRONTEND-icon.png" />
            <span>Frontend</span>
          </div>
          <div>
            <img src="../img/MOBILE-icon.png" />
            <span>mobile and things</span>
          </div>
        </div>

        <div className="speakers">
          <ul>
            {speakers.map(speaker => {
              const { name, position, image, company } = speaker.attributes;
              return (
                <li key={name}>
                  <img src={image} />
                  <h3>{name}</h3>
                  <h4>{position}</h4>
                  <h4 className="company">{company}</h4>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="action-buttons">
          <a href="/schedule">See full schedule</a>
          <a href="/speakers">Full speakers list</a>
        </div>
      </div>
    </Styles>
  );
};

export default SectionFive;
