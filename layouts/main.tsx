import React from "react";
import Head from "next/head";
import * as Styled from "./styled-components";
import Nav from "../components/nav";
import Footer from "../components/Footer";

interface IMainProps {}

const Main: React.FunctionComponent<IMainProps> = ({ children }) => {
  return (
    <Styled.Container>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700,800,900"
          rel="stylesheet"
        ></link>
      </Head>

      <Nav />
      {children}
      <Footer />
    </Styled.Container>
  );
};

export default Main;
