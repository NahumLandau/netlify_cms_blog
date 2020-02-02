import * as React from "react";
import MainLayout from "../layouts/main";
import { NextPage } from "next";
import styled from "styled-components";

interface ISpeakersProps {
  speakers: Array<any>;
}

const Speakers: NextPage<ISpeakersProps> = props => {
  const { speakers } = props;

  return (
    <MainLayout>
      <Styles>
        <header>
          <h1>SPEAKERS</h1>
        </header>

        <ul className="speakers">
          {speakers.map(speaker => {
            const {
              first_name,
              last_name,
              company,
              position,
              subject,
              image
            } = speaker.attributes;
            return (
              <li key={`${first_name}_${last_name}`}>
                <div>
                  <div className="head">
                    <img src={image} />
                  </div>
                  <div className="name">
                    <h3>
                      {first_name}
                      <span>{last_name}</span>
                    </h3>
                  </div>

                  <h3>{company}</h3>
                  <h5>{position}</h5>
                </div>
              </li>
            );
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
    padding-top: 50px;
  }
  .speakers li {
    list-style-type: none;
    width: 25%;
    margin-left: 26px;
    padding: 0 30px;
    box-sizing: border-box;
    position: relative;
  }
  .speakers li > div {
    cursor: pointer;
    box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.15);
  }
  .speakers li .head {
    height: 200px;
    overflow: hidden;
  }
  .speakers li .head img {
    width: 100%;
  }
  .name {
    position: absolute;
    top: 130px;
    left: 50px;
  }
  .name h3 {
    font-size: 16px;
    line-height: 18px;
    font-weight: 300;
    transition: all 0.3s;
    // transform: translateY(-10px);
    word-spacing: -2px;
    text-shadow: 0.5px 0.5px 0.5px #000;
    color: #ffffff;
  }
  .name h3 span {
    display: block;
    font-weight: 600;
  }
`;
