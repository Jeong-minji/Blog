import React from "react";

import Home from "../components/Home/Home";
import { getSortedPostsData } from "../lib/posts";

const Index = ({ allPostsData }) => {
  return <Home allPostsData={allPostsData} />;
};

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Index;
