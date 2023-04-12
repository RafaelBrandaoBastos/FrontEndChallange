import { MapTo } from '@adobe/aem-react-editable-components';
import { useHistory } from 'react-router-dom'; 
import {useForm} from "react-hook-form";
import React, { useState, useEffect } from "react";
import {Container, Img, Logo, LogoContainer, SubContainer, LoginForm, ErrorMessage} from "./style";
import LoginButton from "../LoginButton/LoginButton";
import Text from "../LoginText/LoginText";
import Input from "../LoginInput/LoginInput";

const Login = ({ 
    backgroundImage, 
    logoImage, 
    title,
    titleSize,
    titleColor,
    subTitle,
    subTitleSize,
    subTitleColor,
    text,
    textSize,
    textColor,
    buttonColor,
    labelColor,
    labelSize, 
    label,  
    inputPasswordColor, 
    inputPassword, 
    inputUserColor, 
    inputUser,
    titlefont, 
    subtitlefont,
    textfont, 
    labelfont,
}) => {
        
    const {register, handleSubmit, formState: { errors }} =  useForm();
    const history = useHistory();
    let [placeholderu, setplaceholderu] = useState();


    useEffect(() => { },[]);

    const onSubmit = (userData, event) => {
        event.preventDefault();
        console.log("Click");
        localStorage.setItem("user.user", userData.user);
        console.log(userData.user);
        localStorage.setItem("user.password", userData.password);
        console.log(userData.password);
        history.push("/content/reactapp/us/en/home0.html");
    };

    let [datauser, setDatauser] = useState(localStorage.getItem("userData.user"));
    let [datapassword, setDatapassword] = useState(localStorage.getItem("userData.password")); 
  
    const handleChangeuser = event => {
        console.log(event.target.value);
        setDatauser(event.target.value);
    }

    const handleChangepassword = event => {
        console.log(event.target.value);
        setDatapassword(event.target.value);
        
    }

    return(
        <>
                    <Container>
                        <SubContainer>
                            <LoginForm onSubmit={handleSubmit(onSubmit)}>
                                <div style={{display: "block", height: "30%"}}>
                                    <Text type = {"title"} titlefont = {titlefont} titleColor={titleColor} titleSize={titleSize} title={title}/>
                                    <Text type = {"text"} textfont = {textfont} textColor={textColor} textSize={textSize} text={text}/>
                                </div>
                                    
                                <div>
                                    <Text type = {"subtitle"} subtitlefont = {subtitlefont} subTitleColor={subTitleColor} subTitlesize={subTitleSize} subtitle={subTitle}/>  
                                    <Input type = {"user"} inputUserColor={inputUserColor} inputUserText={inputUser} inputdata = {datauser} onChange = {handleChangeuser} className={errors.user?"invalid": " "} {...{register:register("user", {required:true, pattern: /^(admin)$/})}}/>
                                    <Input type = {"password"} inputPasswordColor={inputPasswordColor} inputPasswordText={inputPassword} inputdata = {datapassword} onChange = {handleChangepassword} className={errors.password?"invalid": " "} {...{register:register("password", {required:true, pattern: /^(admin)$/})}}/>    
                                    {errors.password && <ErrorMessage>Ops, usuário ou senha inválidos.<br/>Tente novamente!</ErrorMessage> || errors.user && <ErrorMessage>Ops, usuário ou senha inválidos.<br/>Tente novamente!</ErrorMessage>}
                                </div>
                                <LoginButton lfont = {labelfont} btype={"Submit"} ltext={label} bcolor={buttonColor} lcolor={labelColor} lsize={labelSize}/>
                            </LoginForm>             
                        </SubContainer>
                        
                            <Img src={backgroundImage && backgroundImage.src} alt="ImageComponent"/>
                            <LogoContainer>
                                <Logo src={logoImage && logoImage.src} alt="LogoComponent"/>
                            </LogoContainer>
                    </Container>             
        </>
    );
};
    

export default MapTo("reactapp/components/login-component")(Login);