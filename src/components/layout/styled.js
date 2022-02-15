import styled from "styled-components";

export const WrapperLayout = styled.section`
  padding: 16px;
  /* align-items: center; */
  margin: auto;

  @media Screen and (min-width: 600px) {
    display: flex;
    flex-direction: column;
  }

  @media Screen and (min-width: 1050px) {
    display: flex;
    flex-direction: row;
    margin: auto;
    width: 1050px;
  }

  @media Screen and (min-width: 1400px) {
    display: flex;
    flex-direction: row;
    width: 1400px;
    margin: auto;
    justify-items: center;
    align-items: flex-start;
  }
`;
