import React from "react";
import Header from "../header";
import * as S from "./styled";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <S.WrapperLayout>{children}</S.WrapperLayout>
    </>
  );
};

export default Layout;
