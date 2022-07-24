import React from "react";
import Link from "next/link";

import { Line, Wrapper, Title } from "./NavigationStyle";

const Navigation = () => {
  return (
    <>
      <Line />
      <Wrapper>
        <Title>DDangji-log</Title>
        <Link href="/">
          <a>About</a>
        </Link>
      </Wrapper>
    </>
  );
};

export default Navigation;
