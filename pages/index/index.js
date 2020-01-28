import React from "react";
import MainLayout from "../../layouts/main";
import styled from "styled-components";

import SectionOne from './partials/sectionOne';
import SectionTwo from './partials/sectionTwo';
import SectionThree from './partials/sectionThree';

const Home = () => (
  <MainLayout>
    <Styles>
      <div className="container">
        <SectionOne />
        <SectionTwo/>
        <SectionThree/>
      </div>
    </Styles>
  </MainLayout>
);

export default Home;

const Styles = styled.div`
  .container {
    background: #2c2929;
  }
`;
