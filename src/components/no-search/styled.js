import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 16px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: bold;
    font-size: 32px;
  }
`;

export const WrapperImage = styled.img`
  margin: 16px;
  width: 120px;
  @media Screen and (min-width: 600px) {
    width: 220px;
  }
`;
