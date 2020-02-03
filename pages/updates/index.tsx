import * as React from "react";
import { NextPage } from "next";
import MainLayout from "../../layouts/main";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import { urlFromFileName } from "../../helpers";

interface IUpdatesProps {}

const Updates: NextPage<IUpdatesProps> = props => {
  console.log(props);
  const { updates = [] } = props;
  return (
    <MainLayout>
      <Styles>
        <div className="updates">
          <header>
            <Fade left distance="20px">
              <h1>UPDATES</h1>
            </Fade>
          </header>

          <ul>
            {updates.map(item => {
              const {
                attributes: { title, teaser, date_published },
                url
              } = item;
              const dateFormat = {
                year: "numeric",
                month: "long",
                day: "numeric"
              };
              const date = new Date(date_published).toLocaleDateString(
                "en-US",
                dateFormat
              );
              const href = `updates/${urlFromFileName(url)}`;

              return (
                <li key={title}>
                  <a href={href}>
                    <h3>{title}</h3>
                  </a>
                  <h5>
                    Posted: <span>{date}</span>
                  </h5>
                  <p>
                    {teaser}...
                    <a href={href}> continue reading</a>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </Styles>
    </MainLayout>
  );
};

Updates.getInitialProps = async () => {
  const ctx = require.context("../../content/updates", false, /\.md$/);
  const keys = ctx.keys();
  const updates = keys
    .map(ctx)
    .map((u, i) => ({ ...(u as object), url: keys[i] }));

  return { updates };
};

export default Updates;

const Styles = styled.div`
  .updates {
    padding: 50px 0;
  }
  header {
    position: relative;
    min-height: 300px;
    padding-top: 87px;
    background-image: url(../img/middle-bg.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  header h1 {
    font-size: 63px;
    color: #ffffff;
    margin-left: 115px;
    text-shadow: 1px 1px 2px #000000;
    font-weight: 900;
    margin-top: 150px;
  }
  ul {
    width: 50%;
    margin: 0 auto;
    padding-right: 10%;
  }
  li {
    list-style-type: none;
    margin: 40px 0;
    margin-top: 80px;
  }
  a {
    text-decoration: none;
    color: #03a9f4;
  }
  li a h3 {
    color: #ff6f00;
    font-size: 40.625px;
    font-weight: normal;
    margin: 0;
  }
  h5 {
    margin: 10px 0;
    font-weight: 500;
  }
  h5 span {
    color: #656565;
  }
  p {
    margin-top: 19px;
    font-size: 15px;
    font-weight: 300;
  }
`;
