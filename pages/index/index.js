import React from "react";
import MainLayout from "../../layouts/main";
import styled from "styled-components";

import SectionOne from "./partials/sectionOne";
import SectionTwo from "./partials/sectionTwo";
import SectionThree from "./partials/sectionThree";
import SectionFour from "./partials/sectionFour";
import SectionFive from "./partials/sectionFive";
import SectionSix from "./partials/sectionSix";
import SectionSeven from "./partials/sectionSeven";
import SectionEight from "./partials/sectionEight";
import {Venue} from "../venue";

const Home = props => (
  <MainLayout>
    <Styles>
      <div className="container">
        <SectionOne />
        <SectionThree />
        <SectionTwo />
        <SectionFour />
        <SectionFive />
        <SectionSix speakers={props.speakers} />
        <SectionSeven />
        <SectionEight sponsors={props.sponsors} />
        <Venue />
      </div>
    </Styles>
  </MainLayout>
);

Home.getInitialProps = async () => {
  // get all speakers
  let ctx = require.context("../../content/speakers", false, /\.md$/);
  let keys = ctx.keys();
  const speakers = keys.map(ctx);

  // get all sponsors
  ctx = require.context("../../content/sponsors", false, /\.md$/);
  keys = ctx.keys();
  const sponsors = keys.map(ctx);

  return {speakers, sponsors};
};

export default Home;

const Styles = styled.div`
  .container {
    background: #2c2929;
  }
  .venue {
    margin-top: 0;
    margin-bottom: 0;
  }
`;
