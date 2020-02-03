import React from "react";
import Error from "next/error";
import MainLayout from "../../layouts/main";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import ReactMarkDown from "react-markdown";
import { Devices } from "../../layouts/styled-components";

const Post = props => {
  if (!props.post) {
    return <Error statusCode="404" />;
  }

  const {
    post: {
      attributes: { title, content }
    }
  } = props;

  return (
    <MainLayout>
      <Styles>
        <header>
          <Fade left distance="20px">
            <h1>{title}</h1>
          </Fade>
        </header>
        <div className="content">
          <ReactMarkDown source={content} />
        </div>
      </Styles>
    </MainLayout>
  );
};

Post.getInitialProps = async (req, res) => {
  const fileName = req.query.id;
  try {
    let post = require(`../../content/updates/${fileName}.md`);
    return { post };
  } catch (error) {
    return {};
  }
};
export default Post;

const Styles = styled.div`
  padding: 50px 0;

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
  .content {
    padding: 20px;
  }
  @media (${Devices.mobile}) {
    header {
      min-height: 120px;
      height: 120px;
    }
    header h1 {
      font-size: 37px;
      margin-left: 20px;
      margin-top: 10px;
    }
  }
`;
