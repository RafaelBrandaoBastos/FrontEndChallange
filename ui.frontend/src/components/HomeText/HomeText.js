import React from 'react'
import {CustomTitle, CustomText, CustomSubTitle, CustomFooter} from'./style.js'
import { MapTo } from '@adobe/aem-react-editable-components';

const Text = ({
    type,
    subtitle,
    sfont,
    scolor,
    ssize,
    tfont,
    tcolor,
    tsize,
    text1,
    text2,
    text3,
    text4,
    Tfont,
    Tcolor,
    Tsize,
    title1,
    title2,
    title3,
    ffont,
    fcolor,
    fsize,
    fsubtitle
}) => { 
        if(type == "subtitle"){
            return (
                <CustomSubTitle sfont = {sfont} scolor={scolor} ssize={ssize}>{subtitle}</CustomSubTitle>       
            )       
        }
        if(type == "text1"){
            return (
                <CustomText font = {tfont} color={tcolor} size={tsize}>{text1}</CustomText>       
            )       
        }
        if(type == "title1"){
            return (
                <CustomTitle font = {Tfont} color={Tcolor} size={Tsize}>{title1}</CustomTitle>       
            )       
        }
        if(type == "text2"){
            return (
                <CustomText font = {tfont} color={tcolor} size={tsize}>{text2}</CustomText>       
            )       
        }
        if(type == "title2"){
            return (
                <CustomTitle font = {Tfont} color={Tcolor} size={Tsize}>{title2}</CustomTitle>       
            )       
        }
        if(type == "text3"){
            return (
                <CustomText font = {tfont} color={tcolor} size={tsize}>{text3}</CustomText>       
            )       
        }
        if(type == "title3"){
            return (
                <CustomTitle font = {Tfont} color={Tcolor} size={Tsize}>{title3}</CustomTitle>       
            )       
        }
        if(type == "text4"){
            return (
                <CustomText font = {tfont} color={tcolor} size={tsize}>{text4}</CustomText>       
            )       
        }
        if(type == "footer"){
            return (
                <CustomFooter font = {ffont} color={fcolor} size={fsize}>{fsubtitle}</CustomFooter>       
            )       
        }
}; 
 
Text.defaultProps = { 
    sfont: "Poppins",
    scolor: "#C12D18",
    ssize: "36px",
    subtitle: "Our mission is",
    tfont: "Poppins",
    tcolor: "#222222",
    tsize: "24px",
    text1: "Nossa missão é",
    text2: "transformar o mundo",
    text3: "construindo experiências digitais",
    text4: "que permitam o crescimento dos nossos clientes",
    Tfont: "Poppins",
    Tcolor: "#C12D18",
    Tsize: "64px",
    title1: "to transform the world",
    title2: "building digital experiences",
    title3: "that enable our client’s growth",
    ffont: "Poppins",
    fcolor: "#FFFFFF",
    fsize: "12px",
    fsubtitle: "Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe aberta em segundo plano e abra uma nova janela para continuar a navegar.",
}; 
export default MapTo("reactapp/components/hometext-component")(Text);
