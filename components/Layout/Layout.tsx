import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";

import { Wrapper, Container, BackToHome } from "./LayoutStyle";

export const siteTitle = "DDangji-log";

interface LayoutProps {
  children: ReactNode;
  home?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, home }) => {
  return (
    <Wrapper>
      <Container>
        <Head>
          <meta name="description" content="Welcome to Ddangji blog!" />
          <meta name="og:title" content={siteTitle} />
        </Head>
        <main>{children}</main>
        {!home && (
          <BackToHome>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </BackToHome>
        )}
      </Container>
    </Wrapper>
  );
};

export default Layout;
