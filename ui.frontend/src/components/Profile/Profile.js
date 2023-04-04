import { MapTo } from "@adobe/aem-react-editable-components";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
//import Text from "../HomeText/HomeText";
//import Timer from "../HomeTimer/HomeTimer";
//import HomeButton from "../HomeButton/HomeButton";
import {Container, SubContainer} from "./style";


const Profile = ({
  title,
  titleSize,
  titleColor,
  subTitle,
  subTitleSize,
  subTitleColor,
  titleFont,
  text4,
  textSize,
  textColor, 
  subtitleFont,
  textFont, 
  buttonColorAccess,
  labelColorAccess,
  labelSizeAccess, 
  labelAccess,
  labelFontAccess, 
}) => {

  return (
    <>
      <Container>
        <SubContainer>
          
        </SubContainer> 
      </Container>
    </>
  );
};

export default MapTo("reactapp/components/profile-component")(Profile);
