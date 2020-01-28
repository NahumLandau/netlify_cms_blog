import React from "react";
import MainLayout from "../../layouts/main";
import styled from "styled-components";

import SectionOne from './partials/sectionOne';
import SectionTwo from './partials/sectionTwo';

const Home = () => (
  <MainLayout>
    <Styles>
      <div className="container">
        <SectionOne />
        <SectionTwo/>
        
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
