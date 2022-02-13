import React from "react";
import * as S from "./styled";

const RepositoryItem = ({
  name,
  linkToRepo,
  fullName,
  language,
  description,
  updated_at,
}) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </S.WrapperLink>
      <S.WrapperDescription>{description}</S.WrapperDescription>
      <S.WrapperRow>
        <S.WrapperLanguage>
          {language ? language : "A definir"}
        </S.WrapperLanguage>
        <S.WrapperDatetime>
          Modificado: {new Date(updated_at).toLocaleDateString()}
        </S.WrapperDatetime>
      </S.WrapperRow>
    </S.Wrapper>
  );
};

export default RepositoryItem;
