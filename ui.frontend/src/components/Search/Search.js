import { MapTo } from '@adobe/aem-react-editable-components';
import { useHistory } from 'react-router-dom'; 
import {useForm} from "react-hook-form";
import React, { useState, useEffect } from "react";
import {Container, Img, Logo, LogoContainer, SubContainer, LoginForm} from "./style";
import LoginButton from "../LoginButton/LoginButton";
import Text from "../SearchText/SearchText";

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
        
  
    return(
        <>
                    <Container>
                        <SubContainer>
                            <div>
                                <Text type = {"title"} titlefont = {titlefont} titleColor={titleColor} titleSize={titleSize} title={title}/>
                                <Text type = {"text"} textfont = {textfont} textColor={textColor} textSize={textSize} text={text}/>
                                <LoginButton lfont = {labelfont} btype={"Submit"} ltext={label} bcolor={buttonColor} lcolor={labelColor} lsize={labelSize}/>
                            </div>          
                        </SubContainer>
                        
                            <Img src={backgroundImage && backgroundImage.src} alt="ImageComponent"/>
                            <LogoContainer>
                                <Logo src={logoImage && logoImage.src} alt="LogoComponent"/>
                            </LogoContainer>
                    </Container>             
        </>
    );
};
    

export default MapTo("reactapp/components/search-component")(Search);