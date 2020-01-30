import React from "react";
import Styles from "../css/section-eight";

const SectionEight = () => {
  return (
    <Styles>
      <div className="section-eight">
        <h2>ORGANIZERS</h2>

        <h3>MAIN ORGANIZER</h3>

        <ul class="list-inline">
          <li class="hover14">
            <a href="http://www.tikalk.com" target="_blank">
              <div class="partner-logo">
                <img
                  src="../img/tikal.png"
                  title="Tikal Knowledge"
                  alt="Tikal"
                />
              </div>
            </a>
            <div class="partner-name">Tikal</div>
          </li>
        </ul>

        <h3>PARTNERS</h3>
        <h2>SPONSORS</h2>
      </div>
    </Styles>
  );
};
export default SectionEight;
