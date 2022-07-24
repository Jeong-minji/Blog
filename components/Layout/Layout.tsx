import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";

import { Wrapper, BackToHome } from "./LayoutStyle";
import { Container, Anchor } from "../../styles/CommonStyle";

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
          <meta name="og:title" content={siteTitle} />
          <meta name="description" content="Welcome to Ddangji blog!" />
        </Head>
        <main>{children}</main>
        {!home && (
          <BackToHome>
            <Link href="/">
              <Anchor>← Back to home</Anchor>
            </Link>
          </BackToHome>
        )}
      </Container>
    </Wrapper>
  );
};

export default Layout;
