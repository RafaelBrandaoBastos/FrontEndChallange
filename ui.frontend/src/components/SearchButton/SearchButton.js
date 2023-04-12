import React from 'react'
import {BtnSearch} from'./style.js'
import { MapTo } from '@adobe/aem-react-editable-components';

const Button = ({lfont, btype, bcolor, lcolor, lsize, ltext}) => {

    return (
        <BtnSearch font = {lfont} type = {btype} color={bcolor} labelcolor={lcolor} labelsize={lsize}>{ltext}</BtnSearch>       
    )  
}; 
Button.defaultProps = {       
    bcolor: "#C13216",
    lcolor: "#FFFFFF" ,
    lsize: "18px", 
    lfont: "Poppins",
    ltext: "Buscar",  
}; 

export default MapTo("reactapp/components/searchbutton-component")(Button);
