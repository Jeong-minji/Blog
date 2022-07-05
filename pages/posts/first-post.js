import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout/Layout";

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </Layout>
  );
};

export default FirstPost;
