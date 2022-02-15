import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media Screen and (min-width: 1024px) {
    padding-right: 16px;
    align-items: flex-start;
  }
  @media Screen and (min-width: 768px) {
    margin: 0px;
    align-items: center;
  }
`;

export const WrapperRow = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  @media Screen and (min-width: 1024px) {
    flex-direction: column;

    align-items: center;
  }
`;

export const WrapperUser = styled.div`
  margin: auto;
  h1 {
    margin-right: 8px;
    font-size: 1.5em;
    padding-bottom: 5px;
  }

  a {
    font-size: 1em;
  }
  @media Screen and (min-width: 992px) {
    margin: 0px;
  }
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;

  @media Screen and (min-width: 768px) {
    margin: 0px;
    align-items: center;
  }
  @media Screen and (min-width: 1024px) {
    margin: 0px;
    align-items: flex-start;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  div {
    text-align: center;
    padding: 16px 0px;
  }

  @media Screen and (min-width: 768px) {
    justify-content: space-around;
  }
  @media Screen and (min-width: 1024px) {
    justify-content: space-around;
    div {
      text-align: center;
      padding: 16px 16px 16px 0;
    }
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  margin: 16px 0px;
  h3 {
    margin-right: 8px;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  border: 1px solid #333;
  box-shadow: 3px 2px 5px rgba(0, 0, 0, 0.2);
  width: 60px;
  margin-right: 16px;

  @media Screen and (min-width: 768px) {
    margin-bottom: 16px;
    width: 80px;
  }
  @media Screen and (min-width: 1024px) {
    margin-bottom: 16px;
    width: 120px;
  }
`;
