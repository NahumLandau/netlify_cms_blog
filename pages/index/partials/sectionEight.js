import React from "react";
import Styles from "../css/section-eight";

const SectionEight = props => {
  const sponsors = props.sponsors.filter(s => s.attributes.type === "sponsor");
  const exhibitors = props.sponsors.filter(
    s => s.attributes.type === "exhibitor"
  );
  const media = props.sponsors.filter(s => s.attributes.type === "media");

  return (
    <Styles>
      <div className="section-eight">
        <h2>ORGANIZERS</h2>

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
          {sponsors.map(partner => (
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
        </a>
      </div>
    </Styles>
  );
};
export default SectionEight;

const Partner = props => {
  const { name, logo, link } = props;
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
