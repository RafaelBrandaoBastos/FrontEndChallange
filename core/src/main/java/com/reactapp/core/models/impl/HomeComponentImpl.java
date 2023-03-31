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

package com.reactapp.core.models.impl;

import com.adobe.acs.commons.models.injectors.annotation.ChildResourceFromRequest;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.reactapp.core.models.HomeComponent;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    HomeComponent.class,
    ComponentExporter.class
}, resourceType = "reactapp/components/home-component")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class HomeComponentImpl
    implements HomeComponent
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String title1;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String title2;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String title3;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleColor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleSize;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleFont;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String footer;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String footerColor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String footerSize;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String footerFont;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String subTitle;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String subTitleColor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String subTitleSize;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String subitleFont;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text1;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text2;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text3;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text4;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textColor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textSize;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textFont;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelAccess;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelColorAccess;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelSizeAccess;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonColorAccess;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelFontAccess;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelLogout;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelColorLogout;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelSizeLogout;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonColorLogout;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelFontLogout;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String clockSize;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String clockFont;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image backgroundImage;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image logoImage;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("title1")
    public String getTitle1() {
        return title1;
    }

    @Override
    @JsonProperty("title2")
    public String getTitle2() {
        return title2;
    }

    @Override
    @JsonProperty("title3")
    public String getTitle3() {
        return title3;
    }

    @Override
    @JsonProperty("titleColor")
    public String getTitleColor() {
        return titleColor;
    }

    @Override
    @JsonProperty("titleSize")
    public String getTitleSize() {
        return titleSize;
    }

    @Override
    @JsonProperty("titleFont")
    public String getTitleFont() {
        return titleFont;
    }

    @Override
    @JsonProperty("footer")
    public String getFooter() {
        return footer;
    }

    @Override
    @JsonProperty("footerColor")
    public String getFooterColor() {
        return footerColor;
    }

    @Override
    @JsonProperty("footerSize")
    public String getFooterSize() {
        return footerSize;
    }

    @Override
    @JsonProperty("footerFont")
    public String getFooterFont() {
        return footerFont;
    }

    @Override
    @JsonProperty("subTitle")
    public String getSubTitle() {
        return subTitle;
    }

    @Override
    @JsonProperty("subTitleColor")
    public String getSubTitleColor() {
        return subTitleColor;
    }

    @Override
    @JsonProperty("subTitleSize")
    public String getSubTitleSize() {
        return subTitleSize;
    }

    @Override
    @JsonProperty("subtitleFont")
    public String getSubitleFont() {
        return subitleFont;
    }

    @Override
    @JsonProperty("text1")
    public String getText1() {
        return text1;
    }

    @Override
    @JsonProperty("text2")
    public String getText2() {
        return text2;
    }

    @Override
    @JsonProperty("text3")
    public String getText3() {
        return text3;
    }

    @Override
    @JsonProperty("text4")
    public String getText4() {
        return text4;
    }

    @Override
    @JsonProperty("textColor")
    public String getTextColor() {
        return textColor;
    }

    @Override
    @JsonProperty("textSize")
    public String getTextSize() {
        return textSize;
    }

    @Override
    @JsonProperty("textFont")
    public String getTextFont() {
        return textFont;
    }

    @Override
    @JsonProperty("labelAccess")
    public String getLabelAccess() {
        return labelAccess;
    }

    @Override
    @JsonProperty("labelColorAccess")
    public String getLabelColorAccess() {
        return labelColorAccess;
    }

    @Override
    @JsonProperty("labelSizeAccess")
    public String getLabelSizeAccess() {
        return labelSizeAccess;
    }

    @Override
    @JsonProperty("buttonColorAccess")
    public String getButtonColorAccess() {
        return buttonColorAccess;
    }

    @Override
    @JsonProperty("labelFontAccess")
    public String getLabelFontAccess() {
        return labelFontAccess;
    }

    @Override
    @JsonProperty("labelLogout")
    public String getLabelLogout() {
        return labelLogout;
    }

    @Override
    @JsonProperty("labelColorLogout")
    public String getLabelColorLogout() {
        return labelColorLogout;
    }

    @Override
    @JsonProperty("labelSizeLogout")
    public String getLabelSizeLogout() {
        return labelSizeLogout;
    }

    @Override
    @JsonProperty("buttonColorLogout")
    public String getButtonColorLogout() {
        return buttonColorLogout;
    }

    @Override
    @JsonProperty("labelFontLogout")
    public String getLabelFontLogout() {
        return labelFontLogout;
    }

    @Override
    @JsonProperty("clockSize")
    public String getClockSize() {
        return clockSize;
    }

    @Override
    @JsonProperty("clockFont")
    public String getClockFont() {
        return clockFont;
    }

    @Override
    @JsonProperty("backgroundImage")
    public com.adobe.cq.wcm.core.components.models.Image getBackgroundImage() {
        return backgroundImage;
    }

    @Override
    @JsonProperty("logoImage")
    public com.adobe.cq.wcm.core.components.models.Image getLogoImage() {
        return logoImage;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
