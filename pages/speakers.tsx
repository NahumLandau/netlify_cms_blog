import * as React from "react";
import MainLayout from "../layouts/main";
import {NextPage} from "next";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Person from "../components/Person";
import {Devices} from "../layouts/styled-components";

interface ISpeakersProps {
  speakers: Array<any>;
}

const Speakers: NextPage<ISpeakersProps> = props => {
  const {speakers} = props;

  return (
    <MainLayout>
      <Styles>
        <header>
          <Fade left distance="20px">
            <h1>SPEAKERS</h1>
          </Fade>
        </header>

        <ul className="speakers">
          {speakers.map(speaker => {
            return <Person {...speaker.attributes} key={speaker.attributes.last_name} />;
          })}
        </ul>
      </Styles>
    </MainLayout>
  );
};

Speakers.getInitialProps = async () => {
  const ctx = require.context("../content/speakers", false, /\.md$/);
  const keys = ctx.keys();
  const speakers = keys.map(ctx);

  return {speakers};
};

export default Speakers;

const Styles = styled.div`
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
  .speakers {
    display: flex;
    width: 80%;
    margin: 0 auto;
    padding: 50px 0;
    flex-wrap: wrap;
  }

  @media (${Devices.mobile}) {
    header {
      min-height: 120px;
      height: 120px;
    }
    header h1 {
      font-size: 37px;
      margin-left: 20px;
      margin-top: 60px;
    }
    ul {
      flex-direction: column;
    }
  }
`;
