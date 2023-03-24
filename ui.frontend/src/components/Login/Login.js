import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { useHistory } from 'react-router-dom'; 
import {Container, Img, SubContainer, LoginContainer} from "./style";

const Login = ({

    backgroundImage,
    titleColor,
    titleSize,
    title,
    subTitleColor,
    subTitleSize,
    subTitle,
    textColor,
    textSize,
    text,
    label,
    labelSize,
    labelColor,
    buttonColor,
    inputUserText,
    inputUserColor,
    inputPasswordText,
    inputPasswordColor

}) => {

    {/*const history = useHistory()
    function handleClick() {
        history.push("/content/reactapp/us/en/home0.html");
    }*/}

    return(
        <Container>
            <SubContainer>
            <LoginContainer>
                <div style={{display: "block", height: "30%"}}>
                   
                </div>
                
                <div>
                    
                </div>

            </LoginContainer>             
            </SubContainer>
            <Img src={backgroundImage.src} alt="ImageComponent"/>
            {/*<button onClick = {handleClick}>Prox</button>
            <p>Login</p>*/} 
        </Container>
                    
    )
};Login.defaultProps = {
    textcontent: [ 
        {  
            inputUsercolor: "#E0E0E0",
            inputUserText: "Usuário",
            inputPasswordcolor: "#E0E0E0",
            inputPasswordText: "Senha",
            titleColor: "#E0E0E0",
            titleSize: "60px" ,
            title: "Olá",
            subTitleColor: "#E0E0E0",
            subTitleSize: "30px" ,
            subTitle: "Olá",
            textColor: "#E0E0E0",
            textSize: "16px" ,
            text: "Para continuar navegando de forma segura, efetue o login na rede.",
            buttonColor: "#FF2D04",
            labelColor: "#FFFFFF" ,
            llabelSize: "18px", 
            label: "Continuar"    
        },
    ],
}; 

export default  MapTo("reactapp/components/login-component")(Login);