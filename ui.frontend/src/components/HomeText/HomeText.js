import React from 'react'
import {CustomTitle, CustomText, CustomSubTitle} from'./style.js'
import { MapTo } from '@adobe/aem-react-editable-components';

const Text = (props) => {
        if(props.type == "title"){
            return (
                <CustomTitle font = {props.font} titlecolor={props.color} titlesize={props.size}>{props.title}</CustomTitle>       
            )       
        }
        if(props.type == "footer"){
            return (
                <CustomFooter font = {props.font} footercolor={props.color} footersize={props.size}>{props.footer}</CustomFooter>       
            )       
        }
        if(props.type == "text"){
            return (
                <CustomText font = {props.textfont} textcolor={props.color} textsize={props.size}>{props.text}</CustomText>       
            )       
        }
        
}; export default MapTo("reactapp/components/hometext-component")(Text);
