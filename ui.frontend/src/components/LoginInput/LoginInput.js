import React from 'react'
import {InputU, InputP} from'./style.js'
import { MapTo } from '@adobe/aem-react-editable-components';

const Input = (props) => {
        if(props.type == "user"){
            return (
                <InputU labelcolor={props.inputUsercolor} placeholder = {props.inputUserText}/>   
            ) 
        }
        if(props.type == "password"){
            return (
                <InputP labelcolor={props.inputPasswordcolor} placeholder = {props.inputPasswordText}/>   
            ) 
        }
         
     
}; export default MapTo("reactapp/components/logininput-component")(Input);
