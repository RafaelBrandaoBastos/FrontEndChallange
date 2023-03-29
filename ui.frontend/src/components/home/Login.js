import { MapTo } from '@adobe/aem-react-editable-components';
import { useHistory } from 'react-router-dom'; 
import {useForm} from "react-hook-form";
import React from "react";
import {} from "./style";

const Login = ({login, backgroundImage, logoImage}) => {
    
    const onSubmit = (userData, event) => {
        event.preventDefault();
        history.push("/content/reactapp/us/en/home0.html");
    };


    return(
        <>
            {login.map(({}, index) => (
                <div key={index}>

                    <Container>
                        
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