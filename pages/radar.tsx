import * as React from "react";
import { NextPage } from "next";
import MainLayout from "../layouts/main";
import styled from "styled-components";
import marked from "marked";
import Person from "../components/Person";

interface IRadarProps {}

const Radar: NextPage<IRadarProps> = props => {
  console.log(props);
  const { trends = [], contributors = [] } = props;
  const articlesRefs = [];
  const scrollToRef = ref =>
    window.scrollTo({
      top: ref.current.offsetTop - 70,
      left: 0,
      behavior: "smooth"
    });

  return (
    <MainLayout>
      <Styles>
        <div className="radar">
          <div>TECH RADAR</div>

          <div className="trends">
            <header>
              <h3>Trends</h3>
              <ul>
                {trends.map((trend, index) => {
                  const { title, image } = trend.attributes;
                  articlesRefs.push(React.useRef(null));
                  console.log(articlesRefs);
                  return (
                    <li
                      key={title}
                      onClick={() => scrollToRef(articlesRefs[index])}
                    >
                      <a>
                        <span>
                          <img src={image} />
                        </span>
                        <div>
                          <hr />
                          <h5>{title}</h5>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </header>

            <section className="posts">
              {trends.map((trend, index) => {
                const { title, image, content, tags } = trend.attributes;
                return (
                  <article ref={articlesRefs[index]}>
                    <h3>{title}</h3>
                    <hr />
                    <img src={image} />
                    <p dangerouslySetInnerHTML={{ __html: marked(content) }} />
                    <ul>
                      {tags.map(tag => (
                        <li key={`${title}_${tag}`}>{tag}</li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </section>
          </div>

          <section className="contributors">
            <h3>Contributors</h3>

            <ul>
              {contributors.map(c => (
                <Person {...c.attributes} />
              ))}
            </ul>
          </section>
        </div>
      </Styles>
    </MainLayout>
  );
};

Radar.getInitialProps = () => {
  let ctx = require.context("../content/radar/trends", false, /\.md$/);
  let keys = ctx.keys();
  const trends = keys.map(ctx);

  ctx = require.context("../content/radar/contributors", false, /\.md$/);
  keys = ctx.keys();
  const contributors = keys.map(ctx);

  return { trends, contributors };
};

export default Radar;

const Styles = styled.div`
  .radar {
    margin: 50px auto;
  }
  .trends {
    margin: 50px auto;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.04);
    width: 80%;
    padding: 15px;
  }
  h3 {
    margin: 20px 0 35px 5px;
    color: #4a4a4a;
    letter-spacing: 0.7px;
    font-weight: 300;
    font-size: 26px;
    line-height: 0.9;
  }
  .trends ul {
    display: flex;
    justify-content: flex-start;
    padding: 0;
  }
  .trends li {
    list-style-type: none;
    width: 150px;
    margin: 0 10px;
  }
  .trends header li:hover {
    box-shadow: 0px 0px 6px 0 rgba(0, 0, 0, 0.5);
  }
  .trends li a {
    color: #000000;
    border-radius: 0;
    border: solid 0.5px rgba(0, 0, 0, 0.1);
    padding: 15px;
    background: white;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    transition: 0.4s ease-out;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.04);
    text-decoration: none;
    cursor: pointer;
  }
  .trends li a > span {
    min-height: 120px;
    display: flex;
    align-items: center;
  }
  .trends li a img {
    max-width: 100%;
  }
  .trends li a > div h5 {
    font-size: 11px;
    font-weight: 300;
  }
  .trends li a > div hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  article {
    margin-bottom: 40px;
    background-color: #ffffff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.04);
    padding: 30px 32px 0;
  }
  article h3 {
    overflow: hidden;
    margin: 6px 0;
    color: #404041;
    font-size: 20px;
    line-height: 1.12;
  }
  article hr {
    border-top: 1px solid #eee;
    margin: 22px 0;
  }
  article img {
    max-width: 40%;
  }
  article ul {
    overflow: hidden;
    margin: 20px 0 15px !important;
    padding: 18px 0 0 !important;
    height: 50px;
    border-top: solid 1px #e8e7e7;
    display: flex;
  }
  .trends article ul li {
    margin-right: 5px;
    margin-bottom: 1px;
    padding: 0 15px;
    height: 30px;
    border: solid 1px #dbdbdb;
    border-radius: 82.2px;
    color: #616161;
    list-style: none;
    font-size: 13px;
    line-height: 30px;
    width: unset;
  }
  .contributors {
    text-align: center;
    margin-top: 60px;
  }
  .contributors ul {
    display: flex;
    width: 80%;
    margin: 0 auto;
  }
`;
