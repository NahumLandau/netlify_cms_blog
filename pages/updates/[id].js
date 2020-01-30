import React from "react";

const Post = props => {
  const {
    post: {
      attributes: { title, content }
    }
  } = props;
  return <div>{`${title}: ${content}`}</div>;
};

Post.getInitialProps = async (req, res) => {
  let post = require(`../../content/updates/${req.query.id}.md`);
  return { post };
};
export default Post;
