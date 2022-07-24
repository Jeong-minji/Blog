import React from "react";
import Head from "next/head";

import Layout from "../Layout/Layout";
import Date from "../Common/Date/Date";

import { Content, Title, CreatedDate } from "./PostTemplateStyle";

const PostTemplate = ({ postData }) => {
  const { title, date, contentHtml } = postData;

  return (
    <Layout>
      <Head>{title}</Head>
      <Content>
        <Title>{title}</Title>
        <CreatedDate>
          <Date dateString={date} />
        </CreatedDate>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </Content>
    </Layout>
  );
};

export default PostTemplate;
