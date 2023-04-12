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
 * Defines the {@code HomeComponent} Sling Model used for the {@code reactapp/components/home-component} component.
 * 
 */
@ConsumerType
public interface HomeComponent
    extends ComponentExporter
{


    @JsonProperty("title1")
    String getTitle1();

    @JsonProperty("title2")
    String getTitle2();

    @JsonProperty("title3")
    String getTitle3();

    @JsonProperty("titleColor")
    String getTitleColor();

    @JsonProperty("titleSize")
    String getTitleSize();

    @JsonProperty("titleFont")
    String getTitleFont();

    @JsonProperty("footer")
    String getFooter();

    @JsonProperty("footerColor")
    String getFooterColor();

    @JsonProperty("footerSize")
    String getFooterSize();

    @JsonProperty("footerFont")
    String getFooterFont();

    @JsonProperty("subTitle")
    String getSubTitle();

    @JsonProperty("subTitleColor")
    String getSubTitleColor();

    @JsonProperty("subTitleSize")
    String getSubTitleSize();

    @JsonProperty("subtitleFont")
    String getSubitleFont();

    @JsonProperty("text1")
    String getText1();

    @JsonProperty("text2")
    String getText2();

    @JsonProperty("text3")
    String getText3();

    @JsonProperty("text4")
    String getText4();

    @JsonProperty("textColor")
    String getTextColor();

    @JsonProperty("textSize")
    String getTextSize();

    @JsonProperty("textFont")
    String getTextFont();

    @JsonProperty("labelAccess")
    String getLabelAccess();

    @JsonProperty("labelColorAccess")
    String getLabelColorAccess();

    @JsonProperty("labelSizeAccess")
    String getLabelSizeAccess();

    @JsonProperty("buttonColorAccess")
    String getButtonColorAccess();

    @JsonProperty("labelFontAccess")
    String getLabelFontAccess();

    @JsonProperty("labelLogout")
    String getLabelLogout();

    @JsonProperty("labelColorLogout")
    String getLabelColorLogout();

    @JsonProperty("labelSizeLogout")
    String getLabelSizeLogout();

    @JsonProperty("buttonColorLogout")
    String getButtonColorLogout();

    @JsonProperty("labelFontLogout")
    String getLabelFontLogout();

    @JsonProperty("clockSize")
    String getClockSize();

    @JsonProperty("clockFont")
    String getClockFont();

    @JsonProperty("backgroundImage")
    com.adobe.cq.wcm.core.components.models.Image getBackgroundImage();

    @JsonProperty("logoImage")
    com.adobe.cq.wcm.core.components.models.Image getLogoImage();

}
