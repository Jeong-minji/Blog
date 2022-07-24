import Head from "next/head";

import Date from "../../components/Date";
import Layout from "../../components/Layout/Layout";

import { getAllPostIds, getPostData } from "../../lib/posts";
import { HeadingXl } from "../../styles/CommonStyle";

const Post = ({ postData }) => {
  return (
    <Layout>
      <Head>{postData.title}</Head>
      <article>
        <HeadingXl>{postData.title}</HeadingXl>
        <div>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
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
