/**
 * Created by nick on 3/26/15.
 */

var map = L.map('map').setView([47,-111], 6);
var southWest = new L.LatLng(43.9375, -116.6250);
var northEast = new L.LatLng(49.4375, -103.5625);
var bounds = new L.LatLngBounds(southWest, northEast);
//var URL = 'http://localhost/cgi-bin/mt_anomalies/qgis_mapserv.fcgi'
var URL = 'http://ec2-52-24-142-184.us-west-2.compute.amazonaws.com/'

// Background map ----------------------------------------
L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Layers ------------------------------------------------
var PptElS = L.tileLayer.wms(URL, {
    map: '/usr/lib/cgi-bin/mt_anomalies/mt_anomalies3.qgs',
    format: 'image/png',
    transparent: true,
    layers: 'Ppt ElS (mm)',
    version: '1.3.0',
    opacity: 0.8
}).addTo(map)

var PptElW = L.tileLayer.wms(URL, {
    map: '/usr/lib/cgi-bin/mt_anomalies/mt_anomalies3.qgs',
    format: 'image/png',
    transparent: true,
    layers: 'Ppt ElW (mm)',
    version: '1.3.0',
    opacity: 0.8
})

var TElW = L.tileLayer.wms(URL, {
    map: '/usr/lib/cgi-bin/mt_anomalies/mt_anomalies3.qgs',
    format: 'image/png',
    transparent: true,
    layers: 'T ElW (C)',
    version: '1.3.0',
    opacity: 0.8
})

var TElS = L.tileLayer.wms(URL, {
    map: '/usr/lib/cgi-bin/mt_anomalies/mt_anomalies3.qgs',
    format: 'image/png',
    transparent: true,
    layers: 'T ElS (C)',
    version: '1.3.0',
    opacity: 0.8
})

var baseMaps = {
    "Precip. El Nino Winter": PptElW,
    "Precip. El Nino Summer": PptElS,
    "Temp. El Nino Winter": TElW,
    "Temp. El Nino Summer": TElS
};

L.control.layers(baseMaps).addTo(map);

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

    if (map.hasLayer(PptElW)){
        var alayer = 'Ppt%20ElW%20(mm)';
    } else if(map.hasLayer(PptElS)){
        var alayer = 'Ppt%20ElS%20(mm)';
    } else if(map.hasLayer(TElW)){
        var alayer = 'T%20ElW%20(C)';
    }else if(map.hasLayer(TElS)){
        var alayer = 'T%20ElS%20(C)';
    };

    var gfURL = URL + '?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&LAYERS=Ppt%20ElS%20(mm)&' +
        'BBOX=' + BBOX + '&HEIGHT=' + HEIGHT + '&WIDTH=' + WIDTH + '&FORMAT=image%2Fpng&' +
        'INFO_FORMAT=text%2Fhtml&X=' + X + '&Y=' + Y + '&SRS=EPSG:4326&QUERY_LAYERS='+alayer;

    $.ajax({
        url: gfURL,
        dataType: "html",
        type: "GET",
        success: function(data){
            //var intro = 'The anomaly for this gridcell is ';
            //var anomaly = data.substring(55,60);
            //var fulltext = intro.concat(anomaly);
            popup.setContent(data);
            popup.setLatLng(e.latlng);
            map.openPopup(popup);
        }
    });
}

map.on('click', onMapClick);