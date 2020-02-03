import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Footer from "../components/Footer";

interface IMainProps {}

const Main: React.FunctionComponent<IMainProps> = ({children}) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700,800,900" rel="stylesheet"></link>
        <script type="text/javascript" src="https://cdn.emailjs.com/sdk/2.3.2/email.min.js"></script>
        <script src="../radar/jquery.js"></script>
        <script src="../radar/radar.js" />
      </Head>

      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default Main;
