import styled from "styled-components";
import { Anchor } from "../../../styles/CommonStyle";

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const CreatedDate = styled.small`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
`;

export const Title = styled(Anchor)`
  margin-top: -6px;
  font-size: 22px;
`;
