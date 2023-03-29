import React from 'react'
import {BtnContinuar} from'./style.js'
import { MapTo } from '@adobe/aem-react-editable-components';

const LoginButton = ({lfont, btype, bcolor, lcolor, lsize, ltext}) => {

    return (
        <BtnContinuar font = {lfont} type = {btype} color={bcolor} labelcolor={lcolor} labelsize={lsize}>{ltext}</BtnContinuar>       
    )  
}; 
LoginButton.defaultProps = {       
    bcolor: "#C13216",
    lcolor: "#FFFFFF" ,
    lsize: "18px", 
    lfont: "Poppins",
    ltext: "Continuar",  
}; 
export default MapTo("reactapp/components/loginbutton-component")(LoginButton);
