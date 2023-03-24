import React from 'react'
import {BtnContinuar} from'./style.js'
import { MapTo } from '@adobe/aem-react-editable-components';

const LoginButton = (props) => {
            return (
                <BtnContinuar color={props.color} labelcolor={props.labelcolor} labelsize={props.labelsize}>{props.text}</BtnContinuar>       
            )  
}; export default MapTo("reactapp/components/loginbutton-component")(LoginButton);