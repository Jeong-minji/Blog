import React from "react";

import { Title } from "./HomeStyle";

import Layout from "../Layout/Layout";
import PostItem from "../PostTemplate/PostItem/PostItem";

const Home = ({ allPostsData }) => {
  return (
    <Layout home>
      <Title>Posts</Title>
      <ul>
        {allPostsData.map(({ id, date, title }) => (
          <PostItem key={id} id={id} date={date} title={title} />
        ))}
      </ul>
    </Layout>
  );
};

export default Home;
