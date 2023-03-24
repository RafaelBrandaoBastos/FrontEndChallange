import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { useHistory } from 'react-router-dom'; 
import {Container, Img, SubContainer, LoginContainer} from "./style";
import LoginButton from "../LoginButton/LoginButton";
import Text from "../LoginText/LoginText";
import Input from "../LoginInput/LoginInput";

const Login = ({login, backgroundImage}) => {

    {/*const history = useHistory()
    function handleClick() {
        history.push("/content/reactapp/us/en/home0.html");
    }*/}
    return(
        <>
            {login.map(({label, buttonColor, labelColor, labelSize, title, titleColor, titleSize, 
            subTitle, subTitleColor, subTitleSize, text, textColor, textSize, inputPasswordColor, 
            inputPasswordText, inputUserColor, inputUserText = {} }, index) => (

                <div key={index}>

                    <Container>
                        <SubContainer>
                        <LoginContainer>
                        <div style={{display: "block", height: "30%"}}>
                            <Text type = {"title"} titleColor={titleColor} titleSize={titleSize} title={title}/>
                            <Text type = {"text"} textColor={textColor} textSize={textSize} text={text}/>
                        </div>
                            
                        <div>
                            <Text type = {"subtitle"} subTitleColor={subTitleColor} subTitlesize={subTitleSize} subtitle={subTitle}/>  
                            <Input type = {"user"} inputUserColor={inputUserColor} inputUserText={inputUserText}/>
                            <Input type = {"password"} inputPasswordColor={inputPasswordColor} inputPasswordText={inputPasswordText}/>    
                        </div>
                        <LoginButton btype = {"continuar"} text={label} color={buttonColor} labelcolor={labelColor} size={labelSize}/>
                        </LoginContainer>             
                        </SubContainer>
                        <Img src={backgroundImage && backgroundImage.src} alt="ImageComponent"/>
                        {/*<button onClick = {handleClick}>Prox</button>
                        <p>Login</p>*/} 
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