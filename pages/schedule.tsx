import * as React from "react";
import MainLayout from "../layouts/main";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

interface IScheduleProps {}

const Schedule: React.FC<IScheduleProps> = props => {
  return (
    <MainLayout>
      <Styles>
        <header>
          <Fade left distance="20px">
            <h1>SCHEDULE</h1>
          </Fade>
        </header>
      </Styles>
    </MainLayout>
  );
};

export default Schedule;

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
`;
