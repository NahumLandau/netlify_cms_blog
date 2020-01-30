import React from "react";
import Styles from "../css/section-seven";

const SectionSeven = () => {
  return (
    <Styles>
      <div className="section-seven">
        <h2>CHOOSE YOUR PASS</h2>

        <div className="tickets-wrapper">
          <div
            className="ticket animated fadeInRight visible"
            data-animation="fadeInRight"
            data-delay="500"
          >
            <div className="ticket-title m-bold"> Early Bird</div>
            <div className="ticket-price-section m-regular">
              <div>
                Early Bird<span className="orange m-semi-bold"> 300 NIS</span>
              </div>
              <div className="ticket-valid m-regular">
                Valid until 31 March 2019
              </div>
            </div>
            <div className="ticket-description">
              <div className="desc">
                Day pass to main hall, tracks and exhibition hall
              </div>
              <div className="desc">
                For developers, tech leads, R&amp;D managers, CTOs
              </div>
              <div className="desc"> Breakfast &amp; lunch included</div>
              <div className="desc">
                Includes access to one 3-hours workshop of your choice
              </div>
              <div className="desc">
                <span className="m-bold">
                  For Workshop Bring your own Laptop
                </span>
              </div>
            </div>
            <a className="disabled-button m-semi-bold"> Sold Out </a>
          </div>
          <div
            className="ticket animated fadeInLeft visible"
            data-animation="fadeInLeft"
            data-delay="500"
          >
            <div className="ticket-title m-bold"> Regular</div>
            <div className="ticket-price-section m-regular">
              <div>
                Regular<span className="orange m-semi-bold"> 500 NIS</span>
              </div>
              <div className="ticket-valid m-regular">
                Valid until 30 April 2019
              </div>
            </div>
            <div className="ticket-description">
              <div className="desc">
                Day pass to main hall, tracks and exhibition hall
              </div>
              <div className="desc">
                For developers, tech leads, R&amp;D managers, CTOs
              </div>
              <div className="desc"> Breakfast &amp; lunch included</div>
              <div className="desc">
                Includes access to one 3-hours workshop of your choice
              </div>
              <div className="desc">
                <span className="m-bold">
                  For Workshop Bring your own Laptop
                </span>
              </div>
            </div>
            <a className="disabled-button m-semi-bold"> Sold Out </a>
          </div>
          <div
            className="ticket animated fadeInRight visible"
            data-animation="fadeInRight"
            data-delay="500"
          >
            <div className="ticket-title m-bold"> Late Bird</div>
            <div className="ticket-price-section m-regular">
              <div>
                Late Bird<span className="orange m-semi-bold"> 700 NIS</span>
              </div>
              <div className="ticket-valid m-regular">
                Valid until 14 May 2019
              </div>
            </div>
            <div className="ticket-description">
              <div className="desc">
                Day pass to main hall, tracks and exhibition hall
              </div>
              <div className="desc">
                For developers, tech leads, R&amp;D managers, CTOs
              </div>
              <div className="desc"> Breakfast &amp; lunch included</div>
              <div className="desc">
                Includes access to one 3-hours workshop of your choice
              </div>
              <div className="desc">
                <span className="m-bold">
                  For Workshop Bring your own Laptop
                </span>
              </div>
            </div>
            <a className="disabled-button m-semi-bold"> Sold Out </a>
          </div>
        </div>
      </div>
    </Styles>
  );
};
export default SectionSeven;
