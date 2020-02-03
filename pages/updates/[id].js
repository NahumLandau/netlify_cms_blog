import React from "react";
import Error from "next/error";
import marked from "marked";

const Post = props => {
  if (!props.post) {
    return <Error statusCode="404" />;
  }

  const {
    post: {
      attributes: { title, content }
    }
  } = props;
  return <div>{`${title}: ${content}`}</div>;
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
