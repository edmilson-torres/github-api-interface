import * as S from "./styled";
import imageOctocat from "../../assets/images/Octocat.png";
import useGithub from "../../hooks/github-hooks";

const NoSearch = () => {
  const { githubState } = useGithub();

  return (
    <S.WrapperConteiner>
      <S.Wrapper>
        <S.WrapperImage src={imageOctocat} alt="Imagem Octocat" />
        <h2>
          {githubState.errorMessage
            ? githubState.errorMessage
            : "Projeto do bootcamp Eduzz Fullstack Developer #3 da DIO, aula Criando um front-end totalmente componentizado na prática com ReactJS. Instrutor Matheus Benites"}
        </h2>
      </S.Wrapper>
    </S.WrapperConteiner>
  );
};

export default NoSearch;
