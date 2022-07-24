import Head from "next/head";
import Link from "next/link";
import React from "react";

import Date from "../components/Date";
import Layout, { siteTitle } from "../components/Layout/Layout";

import { getSortedPostsData } from "../lib/posts";
import { HeadingMd, HeadingLg } from "../styles/CommonStyle";

const Home = ({ allPostsData }) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <HeadingMd>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on
          <a href="https://nextjs.org/learn"> our Next.js tutorial</a>.)
        </p>
      </HeadingMd>
      <HeadingMd>
        <HeadingLg>Blog</HeadingLg>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </HeadingMd>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Home;
