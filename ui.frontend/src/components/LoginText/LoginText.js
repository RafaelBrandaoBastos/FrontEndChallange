import React from 'react'
import {CustomTitle, CustomText, CustomSubTitle} from'./style.js'
import { MapTo } from '@adobe/aem-react-editable-components';

const Text = ({
    titlefont,
    titleColor,
    titleSize,
    title,
    subtitlefont,
    subTitleColor,
    subTitleSize,
    subtitle,
    textfont,
    textColor,
    textSize,
    text,
    type
}) => {
        if(type == "title"){
            return (
                <CustomTitle font = {titlefont} titlecolor={titleColor} titlesize={titleSize}>{title}</CustomTitle>       
            )       
        }
        if(type == "subtitle"){
            return (
                <CustomSubTitle font = {subtitlefont} subtitlecolor={subTitleColor} subtitlesize={subTitleSize}>{subtitle}</CustomSubTitle>       
            )       
        }
        if(type == "text"){
            return (
                <CustomText font = {textfont} textcolor={textColor} textsize={textSize}>{text}</CustomText>       
            )       
        }
        
}; 
Text.defaultProps = {  
            title: "Olá",
            titleSize: "60px",
            titleColor: "#E0E0E0",
            subtitle: "Login",
            subTitleSize: "30px",
            subTitleColor: "#E0E0E0",
            text: "Para continuar navegando de forma segura, efetue o login na rede.",
            textSize: "16px",
            textColor: "#E0E0E0",
}; 
export default MapTo("reactapp/components/logintext-component")(Text);
