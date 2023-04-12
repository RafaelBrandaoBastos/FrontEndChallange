import React from 'react'
import {CustomTitle, CustomText} from'./style.js'
import { MapTo } from '@adobe/aem-react-editable-components';

const Text = ({
    titlefont,
    titleColor,
    titleSize,
    title,
    textfont,
    textColor,
    textSize,
    text,
    type
}) => {
        if(type == "title"){
            return (
                <CustomTitle font={titlefont} color={titleColor} size={titleSize}>{title}</CustomTitle>       
            )       
        }
        if(type == "text"){
            return (
                <CustomText font={textfont} color={textColor} size={textSize}>{text}</CustomText>       
            )       
        }
        
}; 
Text.defaultProps = {  
    title: "Busca",
    titleSize: "60px",
    titleColor: "#E0E0E0",
    text: "Para encontrar o usuário desejado digite seu nome abaixo.",
    textSize: "16px",
    textColor: "#E0E0E0",
}; 
export default MapTo("reactapp/components/hometext-component")(Text);
