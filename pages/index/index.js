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
        <SectionSix />
      </div>
    </Styles>
  </MainLayout>
);

Home.getInitialProps = async () => {
  // get all speakers
  const ctx = require.context("../../content/speakers", false, /\.md$/);
  const keys = ctx.keys();
  const speakers = keys.map(ctx);

  return { speakers };
};

export default Home;

const Styles = styled.div`
  .container {
    background: #2c2929;
  }
`;
