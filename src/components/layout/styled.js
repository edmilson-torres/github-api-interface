import styled from "styled-components";

export const WrapperLayout = styled.section`
  padding: 16px;

  @media Screen and (min-width: 600px) {
    justify-content: space-around;
    display: flex;
    flex-direction: column;
  }
  @media Screen and (min-width: 992px) {
    display: flex;
    flex-direction: row;
`;
