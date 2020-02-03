import * as React from "react";
import MainLayout from "../layouts/main";
import { NextPage } from "next";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Person from "../components/Person";

interface ISpeakersProps {
  speakers: Array<any>;
}

const Speakers: NextPage<ISpeakersProps> = props => {
  const { speakers } = props;

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
            return <Person {...speaker.attributes} />;
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

  return { speakers };
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
  }
  .speakers li {
    list-style-type: none;
    width: 25%;
    margin-left: 26px;
    padding: 0 30px;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 20px;
  }
  .speakers li > div {
    cursor: pointer;
    box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.15);
  }
  .speakers li .head {
    height: 200px;
    overflow: hidden;
    position: relative;
  }
  .overlay {
    background: none;
    transition: all 0.3s ease;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
  }
  .speakers li:hover > div {
    box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.35);
  }
  .speakers li:hover .overlay {
    background: rgba(37, 32, 31, 0.5);
  }
  .speakers li:hover .name {
    top: 110px;
  }
  .speakers li:hover h4 {
    top: 170px;
  }
  .speakers li:hover .head img {
    transform: scale(1);
  }
  .speakers li .head img {
    width: 100%;
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
  .name {
    position: absolute;
    top: 130px;
    left: 20px;
    transition: all 0.3s ease;
  }
  .name h3 {
    font-size: 16px;
    line-height: 18px;
    font-weight: 300;
    transition: all 0.3s;
    word-spacing: -2px;
    text-shadow: 0.5px 0.5px 0.5px #000;
    color: #ffffff;
  }
  .name h3 span {
    display: block;
    font-weight: 600;
  }
  h4 {
    margin: 0;
    font-size: 11px;
    transition: all 0.3s;
    transition-delay: 0.05s;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.9);
    position: absolute;
    top: 200px;
    left: 20px;
  }

  .bottom {
    height: 80px;
    padding: 10px;
    box-sizing: border-box;
    font-size: 12px;
    padding-top: 15px;
    overflow: hidden;
  }
`;
