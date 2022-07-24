import React from "react";
import Link from "next/link";

import { Line, Wrapper, Content, Title } from "./NavigationStyle";

const Navigation = () => {
  return (
    <>
      <Line />
      <Wrapper>
        <Content>
          <Title>DDangji-log</Title>
          <Link href="/">
            <a>About</a>
          </Link>
        </Content>
      </Wrapper>
    </>
  );
};

export default Navigation;
