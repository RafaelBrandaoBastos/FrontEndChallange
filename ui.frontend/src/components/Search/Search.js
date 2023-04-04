import { MapTo } from "@adobe/aem-react-editable-components";
import { useHistory, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";

import {
  Container,
  Img,
  Logo,
  LogoContainer,
  InputContainer,
  SubContainer,
  LoginForm,
  ListContainer,
  NextPage,
  UserContainer,
  UserLogo,
  UserText,
  List,
  ButtonVerMais,
  UserInfo
} from "./style";
import Button from "../SearchButton/SearchButton";
import Text from "../SearchText/SearchText";
import Input from "../SearchInput/SearchInput";

const Search = ({
  backgroundImage,
  logoImage,
  title,
  titleSize,
  titleColor,
  text,
  textSize,
  textColor,
  buttonColor,
  labelColor,
  labelSize,
  label,
  titlefont,
  textfont,
  labelfont,
}) => {
  const { handleSubmit } = useForm();
  const [input, setInput] = useState("");
  const [userData, setUserData] = useState([]);
  const [userDescription, setUserDescription] = useState({});
  //+"+in:user&per_page=5" {userDescription.bio}
  const onSubmit = () => {
    fetch(`https://api.github.com/search/users?q=${input}`)
      .then((response) => response.json())
      .then((data) => setUserData(data.items))
      .catch((error) => {
        console.error(`API error: ${error}`);
      });
    
    fetch(`https://api.github.com/users/${input}`)
      .then((response) => response.json())
      .then((data) => setUserDescription(data))
      .catch((error) => {
        console.error(`API error: ${error}`);
      });
    console.log(JSON.stringify(userDescription));
  };

  return (
    <>
      <Container>
        <SubContainer>
          <LoginForm onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Text
                type={"title"}
                titlefont={titlefont}
                titleColor={titleColor}
                titleSize={titleSize}
                title={title}
              />
              <Text
                type={"text"}
                textfont={textfont}
                textColor={textColor}
                textSize={textSize}
                text={text}
              />
            </div>
          
            <InputContainer>
              <div style={{ display: "flex" }}>
                <Input
                  onChange={(e) => {
                    setInput(e.target.value);
                    console.log(JSON.stringify(e.target.value));
                  }}
                />
              </div>
              <Button
                lfont={labelfont}
                btype={"Submit"}
                ltext={label}
                bcolor={buttonColor}
                lcolor={labelColor}
                lsize={labelSize}
              />
            </InputContainer>
            <List style={{width: "100%", height: "60%"}}>
              {userData.map((user, index) => {
                return (
                  <UserContainer key={index}>
                        <UserInfo>
                        <UserLogo src={user.avatar_url} />
                        <UserText>{user.login}</UserText>
                      </UserInfo >
                    
                    <ButtonVerMais>Ver Mais</ButtonVerMais> 
                  </UserContainer>  
                );
              })}
            </List>       
          </LoginForm>
        </SubContainer>

        <Img
          src={backgroundImage && backgroundImage.src}
          alt='ImageComponent'
        />
        <LogoContainer>
          <Logo src={logoImage && logoImage.src} alt='LogoComponent' />
        </LogoContainer>
      </Container>
    </>
  );
};

export default MapTo("reactapp/components/search-component")(Search);
