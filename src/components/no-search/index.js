import React from "react";
import * as S from "./styled";
import imageOctocat from "../../assets/images/Octocat.png";

const NoSearch = () => {
  return (
    <S.Wrapper>
      <S.WrapperImage src={imageOctocat} alt="Imagem Octocat" />
      <h2>Nenhum usuário encontrado</h2>
    </S.Wrapper>
  );
};

export default NoSearch;
