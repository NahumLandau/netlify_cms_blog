import React from "react";
import Styles from "../css/section-seven";
import Fade from "react-reveal/Fade";
import {logEvent} from "../../../helpers/analytics";

const SectionSeven = props => {
  const {tickets = []} = props;
  return (
    <Styles>
      <div className="section-seven">
        <h2>CHOOSE YOUR PASS</h2>

        <div className="tickets-wrapper">
          {tickets.map(ticket => {
            const {is_active, title, tickets_left, end_date} = ticket.attributes;
            return (
              <Fade right distance="20px" key={title}>
                <div className={`ticket ${!is_active ? "disabled" : ""}`}>
                  <div className="ticket-title">{title}</div>
                  <div className="ticket-description">
                    <div className="desc">
                      <div>{tickets_left}</div>
                      <div className="desc-second-line">{end_date}</div>
                    </div>
                  </div>
                  {is_active && (
                    <div className="buy-tickets-wrapper">
                      <a
                        className="get-tickets-button"
                        href="https://www.eventbrite.com/e/tech-radar-day-2020-tickets-86701092301"
                        target="_blank"
                        onClick={() => {
                          logEvent("Tickets", "Clicked", `Home page - ${title}`);
                        }}
                      >
                        Get Tickets
                      </a>
                    </div>
                  )}
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
    </Styles>
  );
};
export default SectionSeven;
