<?xml version="1.0" ?>
<sld:StyledLayerDescriptor version="1.0.0" xmlns="http://www.opengis.net/sld" xmlns:gml="http://www.opengis.net/gml" xmlns:ogc="http://www.opengis.net/ogc" xmlns:sld="http://www.opengis.net/sld">
    <sld:UserLayer>
        <sld:LayerFeatureConstraints>
            <sld:FeatureTypeConstraint/>
        </sld:LayerFeatureConstraints>
        <sld:UserStyle>
            <sld:Name>Temperature Anomaly</sld:Name>
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
                            <sld:ColorMapEntry color="#d7191c" label="-3.000000" opacity="1.0" quantity="-3"/>
                            <sld:ColorMapEntry color="#fdae61" label="-1.500000" opacity="1.0" quantity="-1.5"/>
                            <sld:ColorMapEntry color="#ffffbf" label="0.000000" opacity="1.0" quantity="0"/>
                            <sld:ColorMapEntry color="#abd9e9" label="1.500000" opacity="1.0" quantity="1.5"/>
                            <sld:ColorMapEntry color="#2c7bb6" label="3.000000" opacity="1.0" quantity="3"/>
                            <sld:ColorMapEntry color="#000000" label="No Data" opacity="0.0" quantity="9.96920996838686905e+36"/>
                        </sld:ColorMap>
                    </sld:RasterSymbolizer>
                </sld:Rule>
            </sld:FeatureTypeStyle>
        </sld:UserStyle>
    </sld:UserLayer>
</sld:StyledLayerDescriptor>
