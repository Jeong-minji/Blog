import styled from "styled-components";

export const Content = styled.article`
  display: flex;
  flex-direction: column;
  margin: 32px 0;
  gap: 10px;
  font-size: 18px;
  line-height: 150%;
  word-break: keep-all;
`;

export const Title = styled.h1`
  line-height: 1.2;
  font-size: 34px;
`;

export const CreatedDate = styled.small`
  margin-bottom: 12px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
`;
