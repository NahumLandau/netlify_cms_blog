import React, {useEffect} from "react";
import Head from "next/head";
import {useRouter} from "next/router";
import Nav from "../components/nav";
import Footer from "../components/Footer";
import {initGA, logEvent} from "../helpers/analytics";

interface IMainProps {}

const Main: React.FunctionComponent<IMainProps> = ({children}) => {
  useEffect(() => {
    initGA();
  }, []);

  const location = useRouter();
  useEffect(() => {
    const isHome = location.pathname === "/";
    logEvent("page view", isHome ? "home" : location.pathname.replace("/", ""));
  }, [location]);

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="../img/favicon.ico" type="image/x-icon" />
        <meta name="msapplication-TileColor" content="#ff6f00" />

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
