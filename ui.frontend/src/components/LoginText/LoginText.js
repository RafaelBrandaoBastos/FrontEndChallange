import React from 'react'
import {CustomTitle, CustomText, CustomSubTitle} from'./style.js'
import { MapTo } from '@adobe/aem-react-editable-components';

const Text = (props) => {
        if(props.type == "title"){
            return (
                <CustomTitle titlecolor={props.titleColor} titlesize={props.titleSize}>{props.title}</CustomTitle>       
            )       
        }
        if(props.type == "subtitle"){
            return (
                <CustomSubTitle subtitlecolor={props.subTitleColor} subtitlesize={props.subTitleSize}>{props.subtitle}</CustomSubTitle>       
            )       
        }
        if(props.type == "text"){
            return (
                <CustomText textcolor={props.textColor} textsize={props.textSize}>{props.text}</CustomText>       
            )       
        }
        
}; export default MapTo("reactapp/components/logintext-component")(Text);
