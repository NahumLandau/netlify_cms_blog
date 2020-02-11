import App, {Container} from "next/app";
import React from "react";
import {DefaultSeo} from "next-seo";
import SEO from "../seo.config";

export default class MyApp extends App {
  render() {
    const {Component, pageProps} = this.props;
    return (
      <Container>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Container>
    );
  }
}
