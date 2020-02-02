import React from "react";

const Post = props => {
  if (!props.post) {
    return <div>Page not Found</div>;
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
