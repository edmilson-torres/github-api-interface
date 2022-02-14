import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 100vw;

  align-content: center;
  margin-top: 16px;

  @media Screen and (min-width: 600px) {
    width: 350px;
    margin-right: 16px;
  }
`;

export const WrapperTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
`;

export const WrapperFullName = styled.h2`
  font-size: 16px;
  margin: 8px 0;
`;

export const WrapperLink = styled.a`
  font-size: 16px;
  margin: 8px 0;
  color: ${({ theme }) => theme.a}; ;
`;

export const WrapperDescription = styled.h3`
  font-size: 14px;
  margin: 8px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const WrapperRow = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
`;
export const WrapperLanguage = styled.h3`
  font-size: 12px;
  padding: 5px 10px;
  background-color: #ccc;
  color: #333;
  width: fit-content;
  border-radius: 30px;
  margin-right: 5px;
`;

export const WrapperDatetime = styled.h3`
  font-size: 12px;
  padding: 5px 0px;
  width: fit-content;
  border-radius: 30px;
`;
