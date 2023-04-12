import React from 'react'
import {InputS} from'./style.js'
import { MapTo } from '@adobe/aem-react-editable-components';

const Input = ({onChange}) => {
        return (
            <InputS onChange = {onChange}/>   
        )     
}; 


export default MapTo("reactapp/components/searchinput-component")(Input);
