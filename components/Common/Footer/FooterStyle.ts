import styled from "styled-components";

export const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 40px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  a {
    color: #1756a9;
  }
`;

export const Container = styled.div`
  width: 48rem;
`;

export const Contact = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
`;

export const Box = styled.div`
  display: flex;
  gap: 60px;
  color: rgba(0, 0, 0, 0.6);
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const IconList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 10px;

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
  }
`;

export const Description = styled.p`
  flex: 1;
  line-height: 1.6;
`;
