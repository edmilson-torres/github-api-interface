import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const WrapperRow = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
`;

export const WrapperUser = styled.div`
  margin: auto;
  h1 {
    margin-right: 8px;
    font-size: 1.5em;
  }

  a {
    font-size: 1em;
  }
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
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
  width: 60px;
  margin-right: 16px;
`;
