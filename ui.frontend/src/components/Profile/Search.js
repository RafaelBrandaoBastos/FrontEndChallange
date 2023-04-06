import { MapTo } from "@adobe/aem-react-editable-components";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useState, useEffect, useContext } from "react";

import {
  UserLogo,
  BioContainer,
  ProfileContainer,
  PopUpContainer,
  Title,
  SubTitle,
  TextContainer,
  ReposContainer,
  ButtonVoltar,
  Header,
  Body,
  ButtonRepos,
  ButtonFavs,
  Ball,
  Slide,
  ReposList,
  Repos,
  ReposTitle,
  ReposDescription,
  ButonShare,
  ButtonsContainer,
} from "./style";

const Profile = ({ nick }) => {
  //https://api.github.com/users/USER_GITHUB/starred{/owner}{/repo}
  //https://api.github.com/users/USER_GITHUB/repos
  //https://api.github.com/users/USER_GITHUB
  const { handleSubmit } = useForm();
  const [userData, setUserData] = useState({});
  const [userRepos, setUserRepos] = useState([]);
  const [userFavRepos, setUserFavRepos] = useState([]);
  const [showuserRepos, setShowUserRepos] = useState([]);
  const [slidestyle, setStyle] = useState("repos");

  useEffect(() => {
    fetch(`https://api.github.com/users/${nick}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => {
        console.error(`API error: ${error}`);
      });
    fetch(`https://api.github.com/users/${nick}/starred`)
      .then((response) => response.json())
      .then((data) => setUserFavRepos(data))
      .catch((error) => {
        console.error(`API error: ${error}`);
      });
    fetch(`https://api.github.com/users/${nick}/repos`)
      .then((response) => response.json())
      .then((data) => setUserRepos(data))
      .catch((error) => {
        console.error(`API error: ${error}`);
      });
  }, []);

  const sliding = () => {
    if (slidestyle == "repos") {
      setStyle("fav");
    } else {
      setStyle("repos");
    }
  };
  if (slidestyle == "repos") {
    return (
      <PopUpContainer>
        {userData && (
          <Body>
            <BioContainer>
              <UserLogo src={userData.avatar_url} />
              <TextContainer>
                <Title>{nick}</Title>
                <SubTitle>{userData.bio}</SubTitle>
              </TextContainer>
            </BioContainer>

            <ReposContainer>
              <ButtonsContainer>
                <div style={{ display: "flex", width: "100%" }}>
                  <ButtonRepos onClick={sliding}>
                    Repositórios<Ball>{userData.public_repos}</Ball>{" "}
                  </ButtonRepos>
                  <ButtonFavs onClick={sliding}>
                    Favoritos
                    {userFavRepos && <Ball>{userFavRepos.length}</Ball>}
                  </ButtonFavs>
                </div>
                <Slide className={slidestyle} />
              </ButtonsContainer>

              <ReposList>
                {userRepos.map((repos, index) => {
                  return (
                    <Repos key={index}>
                      <div>
                        <ReposTitle>{repos.name}</ReposTitle>
                        <ReposDescription>
                          {repos.description || "Sem Descrição"}
                        </ReposDescription>
                      </div>
                      <ButonShare>Compartilhar</ButonShare>
                    </Repos>
                  );
                })}
              </ReposList>
            </ReposContainer>
          </Body>
        )}
      </PopUpContainer>
    );
  } else {
    return (
      <PopUpContainer>
        {userData && (
          <Body>
            <BioContainer>
              <UserLogo src={userData.avatar_url} />
              <TextContainer>
                <Title>{nick}</Title>
                <SubTitle>{userData.bio}</SubTitle>
              </TextContainer>
            </BioContainer>

            <ReposContainer>
              <ButtonsContainer>
                <div style={{ display: "flex", width: "100%" }}>
                  <ButtonRepos onClick={sliding}>
                    Repositórios<Ball>{userData.public_repos}</Ball>{" "}
                  </ButtonRepos>
                  <ButtonFavs onClick={sliding}>
                    Favoritos
                    {userFavRepos && <Ball>{userFavRepos.length}</Ball>}
                  </ButtonFavs>
                </div>
                <Slide className={slidestyle} />
              </ButtonsContainer>
              
              <ReposList>
                {userFavRepos.map((repos, index) => {
                  return (
                    <Repos key={index}>
                      <div>
                        <ReposTitle>{repos.name}</ReposTitle>
                        <ReposDescription>
                          {repos.description || "Sem Descrição"}
                        </ReposDescription>
                      </div>
                      <ButonShare>Compartilhar</ButonShare>
                    </Repos>
                  );
                })}
              </ReposList>
            </ReposContainer>
          </Body>
        )}
      </PopUpContainer>
    );
  }
};

export default MapTo("reactapp/components/searchprofile-component")(Profile);
