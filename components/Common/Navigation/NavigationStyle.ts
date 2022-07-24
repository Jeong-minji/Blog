import styled from "styled-components";
import { Container } from "../../../styles/CommonStyle";

export const Line = styled.div`
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.7);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px 0;
  border-top: 2px solid rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Content = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 24px;
`;
