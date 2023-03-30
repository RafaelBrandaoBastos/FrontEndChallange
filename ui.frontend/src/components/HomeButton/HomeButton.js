import React from 'react'
import {BtnAccess,BtnLogout} from'./style.js'
import { MapTo } from '@adobe/aem-react-editable-components';

const HomeButton = ({type, afont, acolor, alcolor, asize, atext, lfont, lcolor, llcolor, lsize, ltext}) => {
    if (type == "access") {
        return (
            <BtnAccess  font = {afont} color={acolor} labelcolor={alcolor} labelsize={asize}>{atext}</BtnAccess>       
        )  
    }
    if (type == "logout") {
        return (
            <BtnLogout font = {lfont} color={lcolor} labelcolor={llcolor} labelsize={lsize}>{ltext}</BtnLogout>       
        )  
    }
}; 
HomeButton.defaultProps = {  
    alcolor: "#C13216",
    acolor: "#FFFFFF" ,
    asize: "12px", 
    afont: "Poppins",
    atext: "Acessar",      
    llcolor: "#FFFFFF",
    lcolor: "#33383D",
    lsize: "12px", 
    lfont: "Poppins",
    ltext: "Logout",  
}; 
export default MapTo("reactapp/components/homebutton-component")(HomeButton);
