import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 16px;
  background-color: ${({ theme }) => theme.headerBackground};
  @media Screen and (min-width: 810px) {
    justify-content: center;
  }
  input {
    color: ${({ theme }) => theme.headerText};
    border: 1px solid #ccc;
    border-radius: 6px;
    margin-right: 8px;
    padding: 8px;
    font-weight: 500;
    width: 100%;
    &:focus {
      outline: none;
      border-color: #719ece;
      box-shadow: 0 0 3px #719ece;
    }
    @media Screen and (min-width: 810px) {
      max-width: 550px;
    }
  }

  button {
    background-color: ${({ theme }) => theme.headerButtonBackground};
    padding: 8px 16px;
    border-radius: 6px;
    height: 44px;

    &:hover {
      border: 2px solid #347d39;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      font-weight: bold;
      color: ${({ theme }) => theme.headerButtonText};
    }
  }
`;
