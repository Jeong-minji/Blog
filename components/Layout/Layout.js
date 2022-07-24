import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { Container, Header, BackToHome } from "./LayoutStyle";

import profile_image from "../../public/images/profile.png";
import { Heading2Xl } from "../../styles/CommonStyle";

const name = "DDangji";

export const siteTitle = "DDangji-log";

const Layout = ({ children, home }) => {
  return (
    <Container>
      <Head>
        <meta name="description" content="Welcome to Ddangji blog!" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Header>
        {home ? (
          <>
            <Image
              priority
              src={profile_image}
              height={144}
              width={144}
              alt={name}
            />
            <Heading2Xl>{name}</Heading2Xl>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src={profile_image}
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </Header>
      <main>{children}</main>
      {!home && (
        <BackToHome>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </BackToHome>
      )}
    </Container>
  );
};

export default Layout;
