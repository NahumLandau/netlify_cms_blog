import React from "react";
import MainLayout from "../../layouts/main";
import styled from "styled-components";

import SectionOne from "./partials/sectionOne";
import SectionTwo from "./partials/sectionTwo";
import SectionThree from "./partials/sectionThree";
import SectionFour from "./partials/sectionFour";
import SectionFive from "./partials/sectionFive";
import SectionSix from "./partials/sectionSix";

const Home = props => (
  <MainLayout>
    <Styles>
      <div className="container">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive speakers={props.speakers} />
        <SectionSix updates={props.updates} />
      </div>
    </Styles>
  </MainLayout>
);

Home.getInitialProps = async () => {
  // get all speakers
  let ctx = require.context("../../content/speakers", false, /\.md$/);
  let keys = ctx.keys();
  const speakers = keys.map(ctx);

  // get all updates
  ctx = require.context("../../content/updates", false, /\.md$/);
  keys = ctx.keys();
  // include the file name as url for routing
  const updates = keys.map(ctx).map((u, i) => ({ ...u, url: keys[i] }));

  return { speakers, updates };
};

export default Home;

const Styles = styled.div`
  .container {
    background: #2c2929;
  }
`;
