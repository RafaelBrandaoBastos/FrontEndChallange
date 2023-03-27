import { MapTo } from '@adobe/aem-react-editable-components';
import { useHistory } from 'react-router-dom'; 
import {useForm} from "react-hook-form";
import React, {useState, useEffect} from "react";
import {Container, Img, Logo, LogoContainer, SubContainer, LoginForm, ErrorMessage} from "./style";
import LoginButton from "../LoginButton/LoginButton";
import Text from "../LoginText/LoginText";
import Input from "../LoginInput/LoginInput";

const Login = ({login, backgroundImage, logoImage}) => {
        
    const {register, handleSubmit, formState: { errors }} =  useForm();
    const history = useHistory()
    

    useEffect(() => {    
        if(localStorage.getItem("userData.user") != null && localStorage.getItem("userData.password") !=null) {  
            setTimeout(() => {{
            if(localStorage.getItem("userData.user") != null && localStorage.getItem("userData.password") !=null) { 
                console.log("NextPage");
                history.push("/content/reactapp/us/en/home0.html");
            }}}, 5500);
        }
    },[]);

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
            {login.map(({label, buttonColor, labelColor, labelSize, title, titleColor, titleSize, 
            subTitle, subTitleColor, subTitleSize, text, textColor, textSize, inputPasswordColor, 
            inputPasswordText, inputUserColor, inputUserText = {} }, index) => (

                <div key={index}>

                    <Container>
                        <SubContainer>
                            <LoginForm onSubmit={handleSubmit(onSubmit)}>
                                <div style={{display: "block", height: "30%"}}>
                                    <Text type = {"title"} titleColor={titleColor} titleSize={titleSize} title={title}/>
                                    <Text type = {"text"} textColor={textColor} textSize={textSize} text={text}/>
                                </div>
                                    
                                <div>
                                    <Text type = {"subtitle"} subTitleColor={subTitleColor} subTitlesize={subTitleSize} subtitle={subTitle}/>  
                                    <Input type = {"user"} inputUserColor={inputUserColor} inputUserText={inputUserText} inputdata = {datauser} onChange = {handleChangeuser} className={errors.user?"invalid": " "} {...{register:register("user", {required:true, pattern: /^(admin)$/})}}/>
                                    <Input type = {"password"} inputPasswordColor={inputPasswordColor} inputPasswordText={inputPasswordText} inputdata = {datapassword} onChange = {handleChangepassword} className={errors.password?"invalid": " "} {...{register:register("password", {required:true, pattern: /^(admin)$/})}}/>    
                                    {errors.password && <ErrorMessage>Ops, usuário ou senha inválidos.<br/>Tente novamente!</ErrorMessage> || errors.user && <ErrorMessage>Ops, usuário ou senha inválidos.<br/>Tente novamente!</ErrorMessage>}
                                </div>
                                <LoginButton type={"Submit"} text={label} color={buttonColor} labelcolor={labelColor} size={labelSize}/>
                            </LoginForm>             
                        </SubContainer>
                        
                            <Img src={backgroundImage && backgroundImage.src} alt="ImageComponent"/>
                            <LogoContainer>
                                <Logo src={logoImage && logoImage.src} alt="LogoComponent"/>
                            </LogoContainer>
                    </Container>
                    
                </div>               
            ))} 
        </>
    );
};
    

Login.defaultProps = {
    login: [ 
        {   
            title: "Olá",
            titleSize: "60px",
            titleColor: "#E0E0E0",
            subTitletitle: "Login",
            subTitleSize: "30px",
            subTitleColor: "#E0E0E0",
            text: "Para continuar navegando de forma segura, efetue o login na rede.",
            textSize: "16px",
            textColor: "#E0E0E0",
            buttonColor: "#FF2D04",
            labelColor: "#FFFFFF" ,
            labelSize: "18px", 
            label: "Continuar",  
            inputPasswordColor: "#E0E0E0", 
            inputPasswordText: "Senha", 
            inputUserColor: "#E0E0E0", 
            inputUserText: "Usuário"
        },
    ],
}; 

export default MapTo("reactapp/components/login-component")(Login);