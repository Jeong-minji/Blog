import React from "react";
import Link from "next/link";

import { Wrapper, CreatedDate, Title } from "./PostItemStyle";

import Date from "../../Common/Date/Date";

const PostItem = ({ id, title, date }) => {
  return (
    <Wrapper key={id}>
      <CreatedDate>
        <Date dateString={date} />
      </CreatedDate>
      <br />
      <Link href={`/posts/${id}`}>
        <Title>{title}</Title>
      </Link>
    </Wrapper>
  );
};

export default PostItem;
