import React from "react";
import Head from "next/head";

import Layout from "../Layout/Layout";
import Date from "../Common/Date/Date";

const PostTemplate = ({ postData }) => {
  return (
    <Layout>
      <Head>{postData.title}</Head>
      <article>
        <h1>{postData.title}</h1>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export default PostTemplate;
