import React from "react";
import Styles from "../css/section-eight";
import {logEvent} from "../../../helpers/analytics";

const SectionEight = props => {
  const {sponsors = []} = props;
  const sponsor = sponsors.filter(s => s.attributes.type === "sponsor");
  const exhibitors = sponsors.filter(s => s.attributes.type === "exhibitor");
  const media = sponsors.filter(s => s.attributes.type === "media");

  return (
    <Styles>
      <div className="section-eight" id="sponsors">
        <h2>SPONSORS</h2>
        <p>
          Tech Radar Day 2020 is a unique opportunity to connect with our growing community. During the event, you will
          meet and engage with more than 500 developers from different domains and positions, from a wide range of
          startups and tech companies.
        </p>

        <a
          className="get-tickets-button m-semi-bold"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdZP6u-sqo2-l-JfJNTtS0P5eAJ3yqD-CfwnhP32FcMIihS8w/viewform"
          target="_blank"
          onClick={() => {
            logEvent("Become a Sponsor", "Cliked", "Home page");
          }}
        >
          BECOME A SPONSOR
        </a>

        <p>
          Tikal is open to creative sponsorship suggestions that retain our mission of providing the best possible
          experience for our community. Feel free to contact us for more details -
          <a href="mailto:techradarday@tikalk.com">techradarday@tikalk.com</a>
        </p>

        <div className="seperator"></div>

        <div className="main-orgenizers">
          <div>Main organizer: </div>
          <img src="/img/logo_white.svg" alt="logo" className="white-logo" />
          <img src="/img/logo_black.svg" alt="logo" className="black-logo" />
        </div>

        {/* <h2>ORGANIZERS</h2>

        <h3>MAIN ORGANIZER</h3>

        <ul className="list-inline">
          <Partner
            key="tikal"
            name="tikal"
            logo="../img/tikal.png"
            link="http://www.tikalk.com"
          />
        </ul>

        <h2>PARTNERS</h2>

        <h3>SPONSORS</h3>
        <ul className="list-inline sponsors">
          {sponsor.map(partner => (
            <Partner key={partner.attributes.name} {...partner.attributes} />
          ))}
        </ul>

        <h3>EXHIBITORS</h3>
        <ul className="list-inline sponsors">
          {exhibitors.map(partner => (
            <Partner key={partner.attributes.name} {...partner.attributes} />
          ))}
        </ul>

        <h3>MEDIA</h3>
        <ul className="list-inline media">
          {media.map(partner => (
            <Partner key={partner.attributes.name} {...partner.attributes} />
          ))}
        </ul>

        <a className="become-sponsor-btn" href="/sponsor">
          become a sponsor
        </a> */}
      </div>
    </Styles>
  );
};
export default SectionEight;

const Partner = props => {
  const {name, logo, link} = props;
  return (
    <li className="hover14">
      <a href={link} target="_blank">
        <div className="partner-logo">
          <img src={logo} title={name} alt={name} />
        </div>
      </a>
      <div className="partner-name">{name}</div>
    </li>
  );
};
