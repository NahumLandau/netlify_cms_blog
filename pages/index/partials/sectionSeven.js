import React from "react";
import Styles from "../css/section-seven";
import Fade from "react-reveal/Fade";

const SectionSeven = () => {
  const passes = [
    {
      type: "early bird",
      isActive: true,
      price: 400,
      ticketsLeft: "Only 50 Tickets!",
      endDate: "Available until March 1st"
    },
    {
      type: "regular",
      isActive: false,
      price: 600,
      ticketsLeft: "available",
      endDate: "until May 1st"
    },
    {
      type: "regular",
      isActive: false,
      price: 800,
      ticketsLeft: "available",
      endDate: "until April 25th"
    }
  ];
  return (
    <Styles>
      <div className="section-seven">
        <h2>CHOOSE YOUR PASS</h2>

        <div className="tickets-wrapper">
          {passes.map(pass => {
            const { type, isActive, price, ticketsLeft, endDate } = pass;
            return (
              <Fade right distance="20px" key={price}>
                <div className={`ticket ${!isActive ? "disabled" : ""}`}>
                  <div className="ticket-title">
                    {type}
                    <br />
                    {price}
                  </div>
                  <div className="ticket-description">
                    <div className="desc">
                      <div>{ticketsLeft}</div>
                      <div className="desc-second-line">{endDate}</div>
                    </div>
                  </div>
                  {isActive && (
                    <div className="buy-tickets-wrapper">
                      <a
                        className="get-tickets-button"
                        href="https://www.eventbrite.com/e/fullstack-tech-radar-day-tickets-55203831145#tickets"
                        target="_blank"
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
