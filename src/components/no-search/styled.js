import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 16px;
  padding: 32px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.noSearchImageBackground};
  border-radius: 6px;
  line-height: 24px;
  text-align: center;
  max-width: 500px;
`;

export const WrapperImage = styled.img`
  margin: 16px;
  width: 120px;

  @media Screen and (min-width: 600px) {
    width: 220px;
  }
`;

export const WrapperConteiner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
