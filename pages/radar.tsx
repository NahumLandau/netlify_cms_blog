import * as React from "react";
import {NextPage} from "next";
import MainLayout from "../layouts/main";
import styled from "styled-components";
import ReactMarkDown from "react-markdown";
import {Devices} from "../layouts/styled-components";
import {NextSeo} from "next-seo";
import {fetchApiData} from "../helpers";

interface IRadarProps {
  trends: Array<any>;
}
declare global {
  interface Window {
    initThoughtRadars: any;
  }
}

const Radar: NextPage<IRadarProps> = props => {
  const {trends = []} = props;
  console.log(trends);
  const articlesRefs = [];
  const scrollToRef = ref =>
    window.scrollTo({
      top: ref.current.offsetTop - 90,
      left: 0,
      behavior: "smooth"
    });

  React.useEffect(() => {
    if (process.browser) {
      if (window && window.initThoughtRadars) {
        window.initThoughtRadars();
      }
    }
  }, []);

  return (
    <MainLayout>
      <NextSeo {...SEO} />
      <Styles>
        <div className="radar">
          <div>TECH RADAR</div>

          <div className="thought-radar" data-sheet="/data/radar.csv">
            <a href="javascript:;" id="showRadar">
              Show Full Radar
            </a>
          </div>

          <div className="trends">
            <header>
              <h3>Trends</h3>
              <ul>
                {trends.map((trend, index) => {
                  const {title, image} = trend;
                  const img = process.env.BASE_URL + image[0].url;
                  articlesRefs.push(React.useRef(null));
                  return (
                    <li key={title} onClick={() => scrollToRef(articlesRefs[index])}>
                      <a>
                        <span>
                          <img src={img} />
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
          </div>

          <section className="posts">
            {trends.map((trend, index) => {
              const {title, image, content, trend_tags} = trend;
              const img = process.env.BASE_URL + image[0].url;
              return (
                <article ref={articlesRefs[index]} key={title}>
                  <h3>{title}</h3>
                  <hr />
                  <img src={img} />
                  <ReactMarkDown source={content} />
                  <ul className="tags">
                    {trend_tags.map(tag => (
                      <li key={`${title}_${tag.name}`}>{tag.name}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </section>

          <section className="about">
            <h3>About The Radar</h3>

            <article>
              The Radar is a new initiative from Tikal to summarize our usage & opinion about certain technology topics
              in our client solutions. Our Radar has 4 domains , Backend & ML , Frontend and Mobile & Things which are
              mapped to our main core expertise. Our Radar has four rings, which are described from the middle:
              <ul>
                <li>
                  <span>The Try ring is for interested topics that we think you should explore and keep eye on.</span>
                </li>
                <li>
                  <span>
                    The Start ring is for topics that we think are ready for use, but not as completely proven as those
                    in the Keep ring.
                  </span>
                </li>
                <li>
                  <span>
                    The Keep ring represents topics that we think you should keep using now in the appropriate context.
                  </span>
                </li>
                <li>
                  <span>
                    The Stop ring is for topics that are getting attention in the industry, but we don't think you
                    should continue using it.
                  </span>
                </li>
              </ul>
            </article>
          </section>
        </div>
      </Styles>
    </MainLayout>
  );
};

Radar.getInitialProps = async () => {
  const trends = await fetchApiData("trends");
  return {trends};
};

export default Radar;

const Styles = styled.div`
  .radar {
    margin: 50px auto;
  }
  .trends {
    margin: 50px auto;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.04);
    width: 970px;
    max-width: 100%;
    padding: 15px;
    box-sizing: border-box;
  }
  h3 {
    margin: 20px 0 35px 5px;
    color: #4a4a4a;
    letter-spacing: 0.7px;
    font-weight: 300;
    font-size: 26px;
    line-height: 0.9;
  }
  .thought-radar {
    margin-top: 30px;
    position: relative;
  }
  #showRadar {
    display: none;
    color: #fe885f !important;
    text-align: right;
    transition: 1s;
    font-size: 14px;
    position: absolute;
    right: 30px;
    top: 25px;
    z-index: 22;
    text-decoration: none;
  }
  #showRadar.home-link-show {
    display: block;
  }
  .powered-by {
    margin-top: 30px;
    text-align: center;
    font-weight: 300;
    font-size: 10px;
  }
  iframe {
    width: 100%;
    min-height: 600px;
    border: none;
  }
  .trends ul {
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin: 50px 0;
  }
  .trends li {
    list-style-type: none;
    width: 150px;
    margin: 0 20px;
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
    height: 100%;
    box-sizing: border-box;
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
  .posts {
    width: 900px;
    max-width: 100%;
    margin: 0 auto;
  }
  article {
    margin-bottom: 40px;
    background-color: #ffffff;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.04);
    padding: 30px 32px 0;
    color: #4a4a4a;
  }
  article h3 {
    overflow: hidden;
    margin: 6px 0;
    color: #404041;
    font-size: 20px;
    line-height: 1.12;
  }
  article p {
    line-height: 1.5;
    margin: 20px 0 10px;
    font-weight: 300;
  }
  article hr {
    border-top: 1px solid #eee;
    margin: 22px 0;
  }
  article img {
    /* max-width: 40%; */
  }
  article ol li,
  article ul:not(.tags) li {
    margin: 10px 0;
    color: #4a4a4a;
  }
  article ul.tags {
    overflow: hidden;
    margin: 20px 0 15px !important;
    padding: 18px 0 0 !important;
    height: 50px;
    border-top: solid 1px #e8e7e7;
    display: flex;
  }
  .posts article ul.tags li {
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
  .about {
    text-align: left;
    width: 900px;
    max-width: 100%;
    margin: 0 auto;
    margin-top: 60px;
  }
  .about article {
    text-align: left;
    line-height: 1.5;
    font-size: 16px;
    margin: 0 auto;
    padding-bottom: 20px;
  }
  .about article ul {
    list-style: disc;
    border-top: none;
    display: initial;
    list-style-position: inside;
  }
  .about article ul li {
    padding-left: 15px;
  }
  .about article ul li span {
    display: inline-flex;
  }

  @media (${Devices.tablet}) {
    .contributors ul {
      width: 100%;
    }
  }

  @media (${Devices.mobile}) {
    .trends {
      width: 100%;
      padding: 15px 0;
    }
    ul {
      flex-direction: column;
    }
    .trends li {
      width: 100%;
      margin: 0;
      margin-bottom: 20px;
    }
    li a span {
      height: 120px;
      width: 100%;
      justify-content: center;
    }
    li a span img {
      max-width: 100%;
      height: 100%;
    }
    li a div {
      width: 100%;
    }
    .posts {
      width: calc(100% - 40px);
      margin: 0 auto;
    }
    article img {
      max-width: 100%;
    }
    article ul {
      flex-direction: row;
    }
    .contributors ul {
      flex-direction: column;
      padding: 0px;
    }
  }
`;

const title = "Tikal's Tech Radar | Stay Ahead of the Game";
const description =
  "Tikal’s Tech Radar summarizes the usage and opinions gathered from our experts’ research about current trends and technologies. The radar presents four rings: Try, Start, Keep and Stop and 4 domains: Backend, Frontend, DevOps and Mobile. Where are you on the radar? ";
const SEO = {
  title,
  description,
  openGraph: {
    title,
    description
  }
};
