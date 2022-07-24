import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Wrapper,
  Contact,
  Box,
  Information,
  IconList,
  Description,
} from "./FooterStyle";
import { Anchor, Container } from "../../../styles/CommonStyle";

import { links } from "../../../lib/links";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Contact>Contact</Contact>
        <Box>
          <Information>
            Email
            <br />
            <Link href={links.email}>
              <Anchor>jeongminji5181@gmail.com</Anchor>
            </Link>
          </Information>
          <IconList>
            <li>
              <Image src="/images/github.png" width={16} height={16} />
              <Anchor href={links.github}>github</Anchor>
            </li>
            <li>
              <Image src="/images/instagram.png" width={16} height={16} />
              <Anchor href={links.instagram}>sns</Anchor>
            </li>
          </IconList>
          <Description>
            Write an awesome description for your new site here. You can edit
            this line in _config.yml. It will appear in your document head meta
            (for Google search results) and in your feed.xml site description.
          </Description>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default Footer;
