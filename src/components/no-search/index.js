import React, { useState } from "react";
import * as S from "./styled";
import imageOctocat from "../../assets/images/Octocat.png";
import useGithub from "../../hooks/github-hooks";

const NoSearch = () => {
  const { githubState } = useGithub();

  return (
    <S.Wrapper>
      <S.WrapperImage src={imageOctocat} alt="Imagem Octocat" />
      <h2>
        {githubState.errorMessage
          ? githubState.errorMessage
          : "Bem-vindo, projeto do bootcamp Eduzz Fullstack Developer #3 da DIO, aula Criando um front-end totalmente componentizado na prática com ReactJS com o instrutor Matheus Benites"}
      </h2>
    </S.Wrapper>
  );
};

export default NoSearch;
