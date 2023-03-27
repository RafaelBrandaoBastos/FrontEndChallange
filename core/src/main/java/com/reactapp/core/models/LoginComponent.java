/*
 * ***********************************************************************
 * React App CONFIDENTIAL
 * ___________________
 *
 * Copyright 2023 React App.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of React App and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to React App
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from React App.
 * ***********************************************************************
 */

package com.reactapp.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code LoginComponent} Sling Model used for the {@code reactapp/components/login-component} component.
 * 
 */
@ConsumerType
public interface LoginComponent
    extends ComponentExporter
{


    @JsonProperty("title")
    String getTitle();

    @JsonProperty("titleColor")
    String getTitleColor();

    @JsonProperty("titleSize")
    String getTitleSize();

    @JsonProperty("subTitle")
    String getSubTitle();

    @JsonProperty("subTitleColor")
    String getSubTitleColor();

    @JsonProperty("subTitleSize")
    String getSubTitleSize();

    @JsonProperty("text")
    String getText();

    @JsonProperty("textColor")
    String getTextColor();

    @JsonProperty("textSize")
    String getTextSize();

    @JsonProperty("label")
    String getLabel();

    @JsonProperty("labelColor")
    String getLabelColor();

    @JsonProperty("labelSize")
    String getLabelSize();

    @JsonProperty("buttonColor")
    String getButtonColor();

    @JsonProperty("inputUser")
    String getInputUser();

    @JsonProperty("inputUserColor")
    String getInputUserColor();

    @JsonProperty("inputPassword")
    String getInputPassword();

    @JsonProperty("inputPasswordColor")
    String getInputPasswordColor();

    @JsonProperty("backgroundImage")
    com.adobe.cq.wcm.core.components.models.Image getBackgroundImage();

    @JsonProperty("logoImage")
    com.adobe.cq.wcm.core.components.models.Image getLogoImage();

}
