import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { useHistory } from 'react-router-dom'; 
import {Container} from "./style";

const Login = () => {
    const history = useHistory()
    function handleClick() {
        history.push("/content/reactapp/us/en/home0.html");
    }
    return(
        <Container>
            
            {/*<button onClick = {handleClick}>Prox</button>
            <p>Login</p>*/} 
        </Container>
                    
    )
}; export default MapTo("reactapp/components/login-component")(Login);