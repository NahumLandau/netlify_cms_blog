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
import {NextSeo} from "next-seo";

const Home = props => (
  <MainLayout>
    <NextSeo {...SEO} />
    <Styles>
      <div className="container">
        <SectionOne />
        <SectionThree />
        <SectionTwo />
        <SectionFour />
        <SectionFive />
        <SectionSix speakers={props.speakers} />
        <SectionSeven tickets={props.tickets} />
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
  const speakers = keys.map(ctx).map(s => s.attributes);

  // get all sponsors
  ctx = require.context("../../content/sponsors", false, /\.md$/);
  keys = ctx.keys();
  const sponsors = keys.map(ctx);

  // get all tickets
  ctx = require.context("../../content/tickets", false, /\.md$/);
  keys = ctx.keys();
  const tickets = keys.map(ctx);

  return {speakers, sponsors, tickets};
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

const SEO = {
  title: "Tech Radar Day 2020 | Full Day of Full Stack",
  description:
    "Welcome to Israel's largest Full Stack conference. Lectures, lightening talks workshops and lots of treats! Get your tickets now! Have an interesting talk you want to share with the community? Send us your CFP. Want to become a sponsor? We're open to collaborations,",
  openGraph: {
    title: "Tech Radar Day 2020 | Full Day of Full Stack",
    description:
      "Welcome to Israel's largest Full Stack conference. Lectures, lightening talks workshops and lots of treats! Get your tickets now! Have an interesting talk you want to share with the community? Send us your CFP. Want to become a sponsor? We're open to collaborations,"
  }
};
