import * as React from "react";
import MainLayout from "../layouts/main";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import {Devices} from "../layouts/styled-components";
import {NextPage} from "next";

interface IScheduleProps {
  schedule: Array<any>;
  speakers: Array<any>;
}

const Schedule: NextPage<IScheduleProps> = props => {
  console.log(props);
  const {schedule = [], speakers = []} = props;

  const getFullSpeaker = speaker => (speakers.find(s => s.attributes.last_name === speaker) || {}).attributes;

  return (
    <MainLayout>
      <Styles>
        <header>
          <Fade left distance="20px">
            <h1>SCHEDULE</h1>
          </Fade>
        </header>
        <div className="schedule-table">
          {/* <h4 className="schedule-table-heading">May 15</h4> */}

          <div className="timeslot track-header stick-header">
            <div className="track-header-label">Day 1</div>
            <div className="timeslot-elements flexbox-wrapper">
              <div className="track-header-slot">
                <h5 className="track-header-title">Backend &amp; ML</h5>
              </div>
              <div className="track-header-slot">
                <h5 className="track-header-title">DevOps</h5>
              </div>
              <div className="track-header-slot">
                <h5 className="track-header-title">Frontend</h5>
              </div>
              <div className="track-header-slot">
                <h5 className="track-header-title">Mobile &amp; Things</h5>
              </div>
            </div>
          </div>

          {schedule.map(slot => {
            const {is_break, time, speakers = []} = slot.attributes;

            if (is_break) {
              return <Break time={time} key={time} />;
            }
            const fullSpeakers = Object.keys(speakers).map(speaker => {
              console.log(speakers[speaker], speakers, speaker);
              return {
                type: speaker,
                ...getFullSpeaker(speakers[speaker])
              };
            });
            if (fullSpeakers && fullSpeakers.length == 1) {
              return (
                <OneSpeaker
                  time={time}
                  speaker={fullSpeakers[0]}
                  key={`${fullSpeakers[0].first_name}_${fullSpeakers[0].last_name}`}
                />
              );
            }
            return <Speakers time={time} speakers={fullSpeakers} key={time} />;
          })}
        </div>
      </Styles>
    </MainLayout>
  );
};

Schedule.getInitialProps = async () => {
  let ctx = require.context("../content/speakers", false, /\.md$/);
  let keys = ctx.keys();
  const speakers = keys.map(ctx);

  ctx = require.context("../content/schedule", false, /\.md$/);
  keys = ctx.keys();
  const schedule = keys.map(ctx);

  return {speakers, schedule};
};

export default Schedule;

const Break = ({time}) => (
  <div className="timeslot break">
    <div className="timeslot-label">
      <span className="start-time"> {time}</span>
    </div>
    <div className="timeslot-elements">
      <div className="slot" data-slot-detail="">
        <div className="color-line"></div>
        <div className="slot-content general">
          <h5 className="slot-title">Break</h5>
        </div>
      </div>
    </div>
  </div>
);

const OneSpeaker = ({time, speaker}) => {
  if (!speaker) return;

  const {first_name, last_name, company, subject, image, language = "he"} = speaker;
  return (
    <div className="timeslot">
      <div className="timeslot-label">
        <span className="start-time">{time}</span>
      </div>
      <div className="timeslot-elements flexbox-wrapper">
        <div className="slot single">
          <div className="color-line"></div>
          <div className="slot-content-even">
            <h5 className="slot-title">{subject}</h5>
            <span className="slot-language">{language}</span>
            <ul className="slot-speakers">
              <li>
                <div className="speaker-img" style={{backgroundImage: `url(..${image})`}}></div>
                <p className="speaker-name">
                  {`${first_name} ${last_name}`}
                  <span className="speaker-position"> {company}</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Speakers = ({time, speakers}) => {
  return (
    <div className="timeslot">
      <div className="timeslot-label">
        <span className="start-time"> {time} </span>
      </div>
      <div className="timeslot-elements">
        {speakers.map(s => {
          const {first_name, last_name, company, subject, image, type, language = "he"} = s;
          return (
            <div className={`slot ${type}`} key={`${first_name}_${last_name}`}>
              <div className="color-line"></div>
              <div className="slot-content-even">
                <h5 className="slot-title">{subject}</h5>
                <span className="slot-language">{language}</span>
                <ul className="slot-speakers">
                  <li>
                    <div className="speaker-img" style={{backgroundImage: `url(..${image})`}}></div>
                    <p className="speaker-name">
                      {`${first_name} ${last_name}`}
                      <span className="speaker-position"> {company}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Styles = styled.div`
  .schedule {
    padding: 50px 0;
  }
  header {
    position: relative;
    min-height: 300px;
    padding-top: 87px;
    background-image: url(../img/middle-bg.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  header h1 {
    font-size: 63px;
    color: #ffffff;
    margin-left: 115px;
    text-shadow: 1px 1px 2px #000000;
    font-weight: 900;
    margin-top: 150px;
  }
  .schedule-table {
    margin-bottom: 90px;
    width: 80%;
    margin: 40px auto;
    border: 1px solid #e7e7e7;
  }
  .schedule-table-heading {
    margin: 10px 0 20px;
    text-align: left;
  }

  .timeslot {
    background: #f7f7f7;
    border-top: 1px solid #cecece;
    border-left: 1px solid #cecece;
  }

  .timeslot:last-child {
    border-bottom: 1px solid #e7e7e7;
  }
  .speaker-img {
    width: 40px;
    height: 40px;
    border: 2px solid #fff;
    position: absolute;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    background-position: center center;
    background-size: cover;
    border-radius: 50%;
  }

  .track-header {
    z-index: 10;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .slot-speakers {
    list-style: none;
    padding: 0;
  }

  .slot.backend .color-line,
  .slot.single .color-line {
    background: #90be4e;
  }
  .slot.devops .color-line {
    background: #03a9f4;
  }
  .slot.frontend .color-line {
    background: #e91e63;
  }
  .slot.mobile .color-line {
    background: #f5b318;
  }

  .track-header.sticky {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2), 0 1px 0 rgba(255, 255, 255, 0.15);
  }
  .speaker-position {
    color: #555;
    display: block;
    line-height: 12px;
    font-size: 12px;
    margin-top: -5px;
  }
  .track-header-label,
  .timeslot-label {
    position: absolute;
    padding: 10px 15px 20px;
    width: 180px;
    text-align: left;
    margin: 0;
    font-size: 25px;
    line-height: 1;
  }

  .track-header-label span,
  .timeslot-label span {
    font-size: 20px;
  }

  .timeslot-label {
    position: relative;
    float: left;
    display: block;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    font-size: 18px;
    font-weight: 100;
  }
  .speaker-name {
    line-height: 28px;
    margin-left: 48px;
  }

  .time-element {
    position: relative;
    height: 100%;
  }

  .timeslot-elements {
    overflow: hidden;
    margin-left: 180px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    display: flex;
  }
  .track-header .timeslot-elements {
    display: flex;
    justify-content: space-between;
    margin-left: 210px;
    text-align: center;
  }
  .track-header .timeslot-elements .track-header-slot {
    width: 25%;
    text-align: center;
  }
  .track-header .timeslot-elements .track-header-slot h5 {
    padding: 0;
  }
  .slot-title,
  .track-header-title {
    font-size: 22px;
    font-weight: 300;
    margin: 0;
    padding-right: 20px;
  }
  .slot-content.general {
    min-height: 0;
  }
  .slot-content.general .slot-title {
    text-align: center;
  }
  .timeslot.break {
    flex-direction: row;
  }
  .break .slot-content.general {
    background: #000000;
    color: #ffffff;
  }

  .track-header-slot,
  .slot {
    padding: 10px 15px 10px;
    text-align: left;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    border-right: 1px solid #e7e7e7;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .slot {
    width: 100%;
  }

  .track-header-slot:first-child,
  .slot:first-child {
    border-left: 1px solid #e7e7e7;
  }

  .slot {
    padding: 0;
    cursor: pointer;
    position: relative;
  }

  .slot.blank-col,
  .slot.service-slot {
    cursor: default;
  }

  .color-line {
    height: 5px;
    position: absolute;
    display: block;
    width: 100%;
    top: 0;
    background: #ccc;
  }

  .slot-content {
    padding: 20px 15px 20px;
    min-height: 40px;
    height: 100%;
    background: #ebebeb;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .slot-content-even {
    padding: 20px 15px 20px;
    min-height: 40px;
    height: 100%;
    background: #f7f7f7;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .slot-content-even:hover {
    -webkit-transform: translateY(5px);
    -ms-transform: translateY(5px);
    transform: translateY(5px);
  }

  .slot-content:hover {
    -webkit-transform: translateY(5px);
    -ms-transform: translateY(5px);
    transform: translateY(5px);
  }

  .slot-language {
    position: absolute;
    font-size: 11px;
    right: 15px;
    top: 20px;
    text-transform: uppercase;
  }

  .service-description {
    margin-top: 15px;
  }
  @media (${Devices.tablet}) {
    header {
      min-height: 120px;
      height: 120px;
    }
    header h1 {
      font-size: 37px;
      margin-left: 20px;
      margin-top: 60px;
    }
    .timeslot.track-header {
      display: none;
    }
    .timeslot-elements {
      flex-direction: column;
    }
    .timeslot-elements .slot {
      border-bottom: 1px solid #e7e7e7;
      border-left: 1px solid #e7e7e7;
    }
  }
  @media (${Devices.mobile}) {
    .schedule-table {
      border-right-width: 2px;
    }
    .timeslot {
      display: flex;
      flex-direction: column;
    }
    .timeslot-elements {
      margin-left: 0;
    }
    .timeslot-label {
      width: 100%;
      box-sizing: border-box;
      text-align: center;
      font-weight: 700;
      padding: 10px;
      border-bottom: 1px solid #e7e7e7;
    }
    .break .timeslot-label {
      width: 50%;
      line-height: 1.2;
    }
    .break .timeslot-elements {
      width: 100%;
    }
    .timeslot-label {
      position: sticky;
      top: 52px;
      background: #f7f7f7;
      z-index: 10;
    }
  }
`;
