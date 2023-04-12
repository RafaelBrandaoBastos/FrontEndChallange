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
import com.reactapp.core.models.SearchComponent;
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
    SearchComponent.class,
    ComponentExporter.class
}, resourceType = "reactapp/components/search-component")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class SearchComponentImpl
    implements SearchComponent
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String title;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleColor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleSize;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titlefont;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String text;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textColor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textSize;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textfont;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String label;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelColor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelSize;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonColor;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String labelfont;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image backgroundImage;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image logoImage;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("title")
    public String getTitle() {
        return title;
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
    @JsonProperty("titlefont")
    public String getTitlefont() {
        return titlefont;
    }

    @Override
    @JsonProperty("text")
    public String getText() {
        return text;
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
    @JsonProperty("textfont")
    public String getTextfont() {
        return textfont;
    }

    @Override
    @JsonProperty("label")
    public String getLabel() {
        return label;
    }

    @Override
    @JsonProperty("labelColor")
    public String getLabelColor() {
        return labelColor;
    }

    @Override
    @JsonProperty("labelSize")
    public String getLabelSize() {
        return labelSize;
    }

    @Override
    @JsonProperty("buttonColor")
    public String getButtonColor() {
        return buttonColor;
    }

    @Override
    @JsonProperty("labelfont")
    public String getLabelfont() {
        return labelfont;
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
