import React from "react";

import { getAllPostIds, getPostData } from "../../lib/posts";
import PostTemplate from "../../components/PostTemplate/PostTemplate";

const Post = ({ postData }) => {
  return <PostTemplate postData={postData} />;
};

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export default Post;
