import React from "react";
import Styles from "../css/section-six";
import { urlFromFileName } from "../../../helpers";

const SectionSix = props => {
  const { updates = [] } = props;
  console.log(props);
  return (
    <Styles>
      <div className="section-six">
        <h2>STAY UPDATED</h2>
        <div className="updates">
          {updates.slice(0, 2).map(update => {
            const {
              attributes: { title, teaser },
              url
            } = update;
            const href = `updates/${urlFromFileName(url)}`;
            return (
              <div key={title}>
                <a href={href}>{title}</a>
                <p>{teaser}...</p>
                <a href={href} className="continue-reading">
                  continue reading
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </Styles>
  );
};

export default SectionSix;
