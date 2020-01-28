import React from "react";
import Styles from "../css/section-four";

const SectionFour = () => {
  return (
    <Styles>
      <div className="section-four">
        <div className="photos-grid">
          <div className="grid-item" data-delay="0">
            <div
              role="img"
              aria-label="84.jpg"
              style={{
                backgroundImage: 'url("/img/event-photos/84.jpg?alt=media")'
              }}
            ></div>
          </div>
          <div className="grid-item" data-delay="50">
            <div
              role="img"
              aria-label="158.jpg"
              style={{
                backgroundImage: 'url("/img/event-photos/158.jpg?alt=media")'
              }}
            ></div>
          </div>
          <div className="grid-item">
            <div
              role="img"
              aria-label="125.jpg"
              style={{
                backgroundImage: 'url("/img/event-photos/125.jpg?alt=media")'
              }}
            ></div>
          </div>
          <div className="grid-item">
            <div
              role="img"
              aria-label="135.jpg"
              style={{
                backgroundImage: 'url("/img/event-photos/135.jpg?alt=media")'
              }}
            ></div>
          </div>
          <div className="grid-item">
            <div
              role="img"
              aria-label="151.jpg"
              style={{
                backgroundImage: 'url("/img/event-photos/151.jpg?alt=media")'
              }}
            ></div>
          </div>
          <div className="grid-item">
            <div
              role="img"
              aria-label="146.jpg"
              style={{
                backgroundImage: 'url("/img/event-photos/146.jpg?alt=media")'
              }}
            ></div>
          </div>
          <div className="grid-item">
            <div
              role="img"
              aria-label="115.jpg"
              style={{
                backgroundImage: 'url("/img/event-photos/115.jpg?alt=media")'
              }}
            ></div>
          </div>
          <div className="grid-item">
            <div
              role="img"
              aria-label="535.jpg"
              style={{
                backgroundImage: 'url("/img/event-photos/535.jpg?alt=media")'
              }}
            ></div>
          </div>
          <div className="gallery-info">
            <div>
              <h2>Full Stack Tech Radar Day Highlights</h2>
              <p>
                Check out photos from featured sessions, tech talks and
                workshops.
              </p>
            </div>
            <a
              href="https://www.facebook.com/pg/TikalKnowledge/photos/?tab=album&amp;album_id=2545732625439807&amp;__xts__%5B0%5D=68.ARDrTR54_cc0c3GLv-uvxnAccekNWT9TcVpNnk37oY7yfHF8dRnPm0OAi-_2o-ZLXDX1OVww4c9JZaZXr4V62aBk-kmLzod51hr9aXvi7_i8tZ9lOnmdGZ7vbsssnpU56AHJNlsRyKYpHEUpu0D-NXmWimLRhTj0BlxAjAvW-1bbBy25B9kqOiaiEHGcOlO_bonJtqmM2WwLJqWXfkX9x-w9IThCaYQ7l9ktho8IB2u6l8fEd58C4t_ZxkPbYb89Pc_YsBWSqiWSLxGoIIDGRNMzXfpZ9D624Lbj2ZhXi0AHukqgZ-AofHZfxf7rKi_M7NbzTSaCZdTbgMtpUfLWaQ4xzr_InkH_vmSfIihc7OnCV4C7sN8KZUblpNpRwS5Nbb98zu0L3n_d4n-jrDxD56Zomj4tQGPWl2H-cjFY9RQzG1_4PTuHSY-gFp_39EcKu95q2mmMIJBpPxspc2YE&amp;__tn__=-UC-R"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              See all photos{" "}
            </a>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default SectionFour;
