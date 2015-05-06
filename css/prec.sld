<?xml version="1.0" ?>
<sld:StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" xmlns:sld="http://www.opengis.net/sld">
    <sld:UserLayer>
        <sld:LayerFeatureConstraints>
            <sld:FeatureTypeConstraint/>
        </sld:LayerFeatureConstraints>
        <sld:UserStyle>
            <sld:Name>Precipitation Anomaly</sld:Name>
            <sld:Title/>
            <sld:FeatureTypeStyle>
                <sld:Name/>
                <sld:Rule>
                    <sld:RasterSymbolizer>
                        <sld:Geometry>
                            <ogc:PropertyName>grid</ogc:PropertyName>
                        </sld:Geometry>
                        <sld:Opacity>1</sld:Opacity>
                        <sld:ColorMap>
                            <sld:ColorMapEntry color="#a6611a" label="-30.000000" opacity="1.0" quantity="-20"/>
                            <sld:ColorMapEntry color="#dfc27d" label="-15.000000" opacity="1.0" quantity="-10"/>
                            <sld:ColorMapEntry color="#f5f5f5" label="0.000000" opacity="1.0" quantity="0"/>
                            <sld:ColorMapEntry color="#80cdc1" label="15.000000" opacity="1.0" quantity="10"/>
                            <sld:ColorMapEntry color="#018571" label="30.000000" opacity="1.0" quantity="20"/>
                            <sld:ColorMapEntry color="#000000" label="No Data" opacity="0.0" quantity="9.96920996838686905e+36"/>
                        </sld:ColorMap>
                    </sld:RasterSymbolizer>
                </sld:Rule>
            </sld:FeatureTypeStyle>
        </sld:UserStyle>
    </sld:UserLayer>
</sld:StyledLayerDescriptor>
