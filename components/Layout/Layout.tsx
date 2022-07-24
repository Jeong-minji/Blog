import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { Container, Header, BackToHome } from "./LayoutStyle";

const name = "DDangji";

export const siteTitle = "DDangji-log";

interface LayoutProps {
  children: ReactNode;
  home?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, home }) => {
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
              src="/images/profile.png"
              height={144}
              width={144}
              alt={name}
            />
            <h2>{name}</h2>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.png"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2>
              <Link href="/">
                <a>{name}</a>
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
