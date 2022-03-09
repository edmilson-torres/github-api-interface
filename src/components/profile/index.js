import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";
import { useTheme } from "styled-components";

const Profile = () => {
  const { githubState } = useGithub();
  const theme = useTheme();
  return (
    <S.Wrapper>
      <S.WrapperRow>
        <S.WrapperImage src={githubState.user.avatar} alt="Avatar of user" />
        <S.WrapperUser>
          <a href={githubState.user.html_url} target="_blank" rel="noreferrer">
            <h1>{githubState.user.name}</h1>
            <span style={{ color: theme.a }}>{githubState.user.login}</span>
          </a>
        </S.WrapperUser>
      </S.WrapperRow>
      <S.WrapperInfoUser>
        <div>
          <S.WrapperUserGeneric>
            <h3>Company:</h3>
            <span>{githubState.user.company}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Location:</h3>
            <span>{githubState.user.location}</span>
          </S.WrapperUserGeneric>
          <S.WrapperUserGeneric>
            <h3>Blog:</h3>
            <a
              href={githubState.user.blog}
              style={{ color: theme.a }}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.blog}
            </a>
          </S.WrapperUserGeneric>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span> {githubState.user.followers}</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span> {githubState.user.following}</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span> {githubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span> {githubState.user.public_repos}</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
