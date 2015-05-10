/**
 * Created by nick on 3/26/15.
 */

var map = L.map('map').setView([47,-111], 6);
var southWest = new L.LatLng(43.9375, -116.6250);
var northEast = new L.LatLng(49.4375, -103.5625);
var bounds = new L.LatLngBounds(southWest, northEast);
// var URL = 'http://localhost/cgi-bin/mt_anomalies/qgis_mapserv.fcgi'
var URL = 'http://ec2-52-24-169-123.us-west-2.compute.amazonaws.com/cgi-bin/mt_anomalies/qgis_mapserv.fcgi'

// Background map ----------------------------------------
L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var osmGeocoder = new L.Control.OSMGeocoder({
    collapsed: false,
    position: 'topright',
    text: 'Location Search'
});
map.addControl(osmGeocoder);

// Layers ------------------------------------------------
var PptElS = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'Ppt ElS (mm)',
    version: '1.3.0',
    opacity: 0.8
}).addTo(map);

var PptElW = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'Ppt ElW (mm)',
    version: '1.3.0',
    opacity: 0.8
});

var PptLaW = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'Ppt LaW (mm)',
    version: '1.3.0',
    opacity: 0.8
});

var PptLaS = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'Ppt LaS (mm)',
    version: '1.3.0',
    opacity: 0.8
});

var PptNeuW = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'Ppt NeuW (mm)',
    version: '1.3.0',
    opacity: 0.8
});

var PptNeuS = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'Ppt NeuS (mm)',
    version: '1.3.0',
    opacity: 0.8
});

var PptCoolW = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'Ppt CoolW (mm)',
    version: '1.3.0',
    opacity: 0.8
});

var PptCoolS = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'Ppt CoolS (mm)',
    version: '1.3.0',
    opacity: 0.8
});

var PptWarmW = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'Ppt WarmW (mm)',
    version: '1.3.0',
    opacity: 0.8
});

var PptWarmS = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'Ppt WarmS (mm)',
    version: '1.3.0',
    opacity: 0.8
});

var PptElCoolW = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'Ppt ElCoolW (mm)',
    version: '1.3.0',
    opacity: 0.8
});

var PptElCoolS = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'Ppt ElCoolS (mm)',
    version: '1.3.0',
    opacity: 0.8
});

var PptElWarmW = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'Ppt ElWarmW (mm)',
    version: '1.3.0',
    opacity: 0.8
});

var PptElWarmS = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'Ppt ElWarmS (mm)',
    version: '1.3.0',
    opacity: 0.8
});

var PptLaCoolW = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'Ppt LaCoolW (mm)',
    version: '1.3.0',
    opacity: 0.8
});

var PptLaCoolS = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'Ppt LaCoolS (mm)',
    version: '1.3.0',
    opacity: 0.8
});

var PptLaWarmW = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'Ppt LaWarmW (mm)',
    version: '1.3.0',
    opacity: 0.8
});

var PptLaWarmS = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'Ppt LaWarmS (mm)',
    version: '1.3.0',
    opacity: 0.8
});

var PptNeuCoolW = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'Ppt NeuCoolW (mm)',
    version: '1.3.0',
    opacity: 0.8
});

var PptNeuCoolS = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'Ppt NeuCoolS (mm)',
    version: '1.3.0',
    opacity: 0.8
});

var PptNeuWarmW = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'Ppt NeuWarmW (mm)',
    version: '1.3.0',
    opacity: 0.8
});

var PptNeuWarmS = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'Ppt NeuWarmS (mm)',
    version: '1.3.0',
    opacity: 0.8
});


var TElS = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'T ElS (C)',
    version: '1.3.0',
    opacity: 0.8
});

var TElW = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'T ElW (C)',
    version: '1.3.0',
    opacity: 0.8
});

var TLaW = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'T LaW (C)',
    version: '1.3.0',
    opacity: 0.8
});

var TLaS = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'T LaS (C)',
    version: '1.3.0',
    opacity: 0.8
});

var TNeuW = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'T NeuW (C)',
    version: '1.3.0',
    opacity: 0.8
});

var TNeuS = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'T NeuS (C)',
    version: '1.3.0',
    opacity: 0.8
});

var TCoolW = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'T CoolW (C)',
    version: '1.3.0',
    opacity: 0.8
});

var TCoolS = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'T CoolS (C)',
    version: '1.3.0',
    opacity: 0.8
});

var TWarmW = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'T WarmW (C)',
    version: '1.3.0',
    opacity: 0.8
});

var TWarmS = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'T WarmS (C)',
    version: '1.3.0',
    opacity: 0.8
});

var TElCoolW = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'T ElCoolW (C)',
    version: '1.3.0',
    opacity: 0.8
});

var TElCoolS = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'T ElCoolS (C)',
    version: '1.3.0',
    opacity: 0.8
});

var TElWarmW = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'T ElWarmW (C)',
    version: '1.3.0',
    opacity: 0.8
});

var TElWarmS = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'T ElWarmS (C)',
    version: '1.3.0',
    opacity: 0.8
});

var TLaCoolW = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'T LaCoolW (C)',
    version: '1.3.0',
    opacity: 0.8
});

var TLaCoolS = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'T LaCoolS (C)',
    version: '1.3.0',
    opacity: 0.8
});

var TLaWarmW = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'T LaWarmW (C)',
    version: '1.3.0',
    opacity: 0.8
});

var TLaWarmS = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'T LaWarmS (C)',
    version: '1.3.0',
    opacity: 0.8
});

var TNeuCoolW = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'T NeuCoolW (C)',
    version: '1.3.0',
    opacity: 0.8
});

var TNeuCoolS = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'T NeuCoolS (C)',
    version: '1.3.0',
    opacity: 0.8
});

var TNeuWarmW = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'T NeuWarmW (C)',
    version: '1.3.0',
    opacity: 0.8
});

var TNeuWarmS = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'T NeuWarmS (C)',
    version: '1.3.0',
    opacity: 0.8
});


var baseMaps = {
    "Precip. El Nino Winter": PptElW,
    "Precip. El Nino Summer": PptElS,
    "Precip. La Nina Winter": PptLaW,
    "Precip. La Nina Summer": PptLaS,
    "Precip. Neutral Winter": PptNeuW,
    "Precip. Neutral Summer": PptNeuS,
    "Precip. PDO Cool Winter": PptCoolW,
    "Precip. PDO Cool Summer": PptCoolS,
    "Precip. PDO Warm Winter": PptWarmW,
    "Precip. PDO Warm Summer": PptWarmS,
    "Precip. El Nino, PDO Cool Winter": PptElCoolW,
    "Precip. El Nino, PDO Cool Summer": PptElCoolS,
    "Precip. El Nino, PDO Warm Winter": PptElWarmW,
    "Precip. El Nino, PDO Warm Summer": PptElWarmS,
    "Precip. La Nina, PDO Cool Winter": PptLaCoolW,
    "Precip. La Nina, PDO Cool Summer": PptLaCoolS,
    "Precip. La Nina, PDO Warm Winter": PptLaWarmW,
    "Precip. La Nina, PDO Warm Summer": PptLaWarmS,
    "Precip. Neutral, PDO Cool Winter": PptNeuCoolW,
    "Precip. Neutral, PDO Cool Summer": PptNeuCoolS,
    "Precip. Neutral, PDO Warm Winter": PptNeuWarmW,
    "Precip. Neutral, PDO Warm Summer": PptNeuWarmS,

    "Temp. El Nino Winter": TElW,
    "Temp. El Nino Summer": TElS,
    "Temp. La Nina Winter": TLaW,
    "Temp. La Nina Summer": TLaS,
    "Temp. Neutral Winter": TNeuW,
    "Temp. Neutral Summer": TNeuS,
    "Temp. PDO Cool Winter": TCoolW,
    "Temp. PDO Cool Summer": TCoolS,
    "Temp. PDO Warm Winter": TWarmW,
    "Temp. PDO Warm Summer": TWarmS,
    "Temp. El Nino, PDO Cool Winter": TElCoolW,
    "Temp. El Nino, PDO Cool Summer": TElCoolS,
    "Temp. El Nino, PDO Warm Winter": TElWarmW,
    "Temp. El Nino, PDO Warm Summer": TElWarmS,
    "Temp. La Nina, PDO Cool Winter": TLaCoolW,
    "Temp. La Nina, PDO Cool Summer": TLaCoolS,
    "Temp. La Nina, PDO Warm Winter": TLaWarmW,
    "Temp. La Nina, PDO Warm Summer": TLaWarmS,
    "Temp. Neutral, PDO Cool Winter": TNeuCoolW,
    "Temp. Neutral, PDO Cool Summer": TNeuCoolS,
    "Temp. Neutral, PDO Warm Winter": TNeuWarmW,
    "Temp. Neutral, PDO Warm Summer": TNeuWarmS
};

L.control.layers(baseMaps, null, {
    collapsed: false
}).addTo(map);

// Legend ------------------------------------------
var PptLegend = L.control({position: 'bottomleft'});
var TLegend = L.control({position: 'bottomleft'});

PptLegend.onAdd = function(map){
    var layer = 'Precipitation (mm)';
    var div = L.DomUtil.create('div', 'legend');
        div.innerHTML +=
            '<h3>Anomaly</h3>' +
            '<img src="' + URL +'?' +
            'SERVICE=WMS&FORMAT=image/png&VERSION=1.3.0&REQUEST=GetLegendGraphic&' +
            'LAYER=' + layer + '">';
    return div;
};

TLegend.onAdd = function(map){
    var layer = 'Temperature (C)';
    var div = L.DomUtil.create('div', 'legend');
        div.innerHTML +=
            '<h3>Anomaly</h3>' +
            '<img src="' + URL +'?' +
            'SERVICE=WMS&FORMAT=image/png&VERSION=1.3.0&REQUEST=GetLegendGraphic&' +
            'LAYER=' + layer + '">';
    return div;
};

PptLegend.addTo(map);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// The below function gives two errors when switching baselayers. This is because it does not cover all conditions.
// It does, however, function correctly. Maybe see info .hasLayer()
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

map.on('baselayerchange', function (eventLayer) {
    // Switch to the Temperature legend...
    if (eventLayer.name.substring(0, 1) === 'T') {
        this.removeControl(PptLegend);
        TLegend.addTo(this);
    } else { // Or switch to the Precipitation legend...
        this.removeControl(TLegend);
        PptLegend.addTo(this);
    }
});

// Feature Popup -------------------------------------------
popup = new L.Popup({maxWidth: 400});

function onMapClick(e){
    var BBOX = map.getBounds().toBBoxString();
    //var BBOX = "-112.6250,45.9375,-106.5625,47.4375"
    var WIDTH = map.getSize().x;
    var HEIGHT = map.getSize().y;
    var X = map.layerPointToContainerPoint(e.layerPoint).x.toFixed(0);
    var Y = map.layerPointToContainerPoint(e.layerPoint).y.toFixed(0);

// TODO need to add switch for all layers
    if (map.hasLayer(PptElW)){
        var alayer = 'Ppt%20ElW%20(mm)';
    }else if(map.hasLayer(PptElS)){
        var alayer = 'Ppt%20ElS%20(mm)';
    }else if(map.hasLayer(PptLaW)){
        var alayer = 'Ppt%20LaW%20(mm)';
    }else if(map.hasLayer(PptLaS)){
        var alayer = 'Ppt%20LaS%20(mm)';
    }else if(map.hasLayer(PptNeuW)){
        var alayer = 'Ppt%20NeuW%20(mm)';
    }else if(map.hasLayer(PptNeuS)){
        var alayer = 'Ppt%20NeuS%20(mm)';
    }else if(map.hasLayer(PptCoolW)){
        var alayer = 'Ppt%20CoolW%20(mm)';
    }else if(map.hasLayer(PptCoolS)){
        var alayer = 'Ppt%20CoolS%20(mm)';
    }else if(map.hasLayer(PptWarmW)){
        var alayer = 'Ppt%20WarmW%20(mm)';
    }else if(map.hasLayer(PptWarmS)){
        var alayer = 'Ppt%20WarmS%20(mm)';
    }else if(map.hasLayer(PptElCoolW)){
        var alayer = 'Ppt%20ElCoolW%20(mm)';
    }else if(map.hasLayer(PptElCoolS)){
        var alayer = 'Ppt%20ElCoolS%20(mm)';
    }else if(map.hasLayer(PptElWarmW)){
        var alayer = 'Ppt%20ElWarmW%20(mm)';
    }else if(map.hasLayer(PptElWarmS)){
        var alayer = 'Ppt%20ElWarmS%20(mm)';
    }else if(map.hasLayer(PptLaCoolW)){
        var alayer = 'Ppt%20LaCoolW%20(mm)';
    }else if(map.hasLayer(PptLaCoolS)){
        var alayer = 'Ppt%20LaCoolS%20(mm)';
    }else if(map.hasLayer(PptLaWarmW)){
        var alayer = 'Ppt%20LaWarmW%20(mm)';
    }else if(map.hasLayer(PptLaWarmS)){
        var alayer = 'Ppt%20LaWarmS%20(mm)';
    }else if(map.hasLayer(PptNeuCoolW)){
        var alayer = 'Ppt%20NeuCoolW%20(mm)';
    }else if(map.hasLayer(PptNeuCoolS)){
        var alayer = 'Ppt%20NeuCoolS%20(mm)';
    }else if(map.hasLayer(PptNeuWarmW)){
        var alayer = 'Ppt%20NeuWarmW%20(mm)';
    }else if(map.hasLayer(PptNeuWarmS)){
        var alayer = 'Ppt%20NeuWarmS%20(mm)';

    }else if(map.hasLayer(TElW)){
        var alayer = 'T%20ElW%20(C)';
    }else if(map.hasLayer(TElS)){
        var alayer = 'T%20ElS%20(C)';
    }else if(map.hasLayer(TLaW)){
        var alayer = 'T%20LaW%20(C)';
    }else if(map.hasLayer(TLaS)){
        var alayer = 'T%20LaS%20(C)';
    }else if(map.hasLayer(TNeuW)){
        var alayer = 'T%20NeuW%20(C)';
    }else if(map.hasLayer(TNeuS)){
        var alayer = 'T%20NeuS%20(C)';
    }else if(map.hasLayer(TCoolW)){
        var alayer = 'T%20CoolW%20(C)';
    }else if(map.hasLayer(TCoolS)){
        var alayer = 'T%20CoolS%20(C)';
    }else if(map.hasLayer(TWarmW)){
        var alayer = 'T%20WarmW%20(C)';
    }else if(map.hasLayer(TWarmS)){
        var alayer = 'T%20WarmS%20(C)';
    }else if(map.hasLayer(TElCoolW)){
        var alayer = 'T%20ElCoolW%20(C)';
    }else if(map.hasLayer(TElCoolS)){
        var alayer = 'T%20ElCoolS%20(C)';
    }else if(map.hasLayer(TElWarmW)){
        var alayer = 'T%20ElWarmW%20(C)';
    }else if(map.hasLayer(TElWarmS)){
        var alayer = 'T%20ElWarmS%20(C)';
    }else if(map.hasLayer(TLaCoolW)){
        var alayer = 'T%20LaCoolW%20(C)';
    }else if(map.hasLayer(TLaCoolS)){
        var alayer = 'T%20LaCoolS%20(C)';
    }else if(map.hasLayer(TLaWarmW)){
        var alayer = 'T%20LaWarmW%20(C)';
    }else if(map.hasLayer(TLaWarmS)){
        var alayer = 'T%20LaWarmS%20(C)';
    }else if(map.hasLayer(TNeuCoolW)){
        var alayer = 'T%20NeuCoolW%20(C)';
    }else if(map.hasLayer(TNeuCoolS)){
        var alayer = 'T%20NeuCoolS%20(C)';
    }else if(map.hasLayer(TNeuWarmW)){
        var alayer = 'T%20NeuWarmW%20(C)';
    }else if(map.hasLayer(TNeuWarmS)){
        var alayer = 'T%20NeuWarmS%20(C)'
    };

    var gfURL = URL + '?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&LAYERS=Ppt%20ElS%20(mm)&' +
        'BBOX=' + BBOX + '&HEIGHT=' + HEIGHT + '&WIDTH=' + WIDTH + '&FORMAT=image%2Fpng&' +
        'INFO_FORMAT=text%2Fhtml&X=' + X + '&Y=' + Y + '&SRS=EPSG:4326&QUERY_LAYERS='+alayer;

    $.ajax({
        url: gfURL,
        dataType: "html",
        type: "GET",
        success: function(data){
            popup.setContent(data);
            popup.setLatLng(e.latlng);
            map.openPopup(popup);
        }
    });
}

map.on('click', onMapClick);