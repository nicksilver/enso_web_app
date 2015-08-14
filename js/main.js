/**
 * Created by nick on 3/26/15.
 */

var map = L.map('map').setView([47, -111], 6);
var southWest = new L.LatLng(43.9375, -116.6250);
var northEast = new L.LatLng(49.4375, -103.5625);
// var bounds = new L.LatLngBounds(southWest, northEast);
// var URL = 'http://localhost/cgi-bin/mt_anomalies/qgis_mapserv.fcgi'
var URL = 'http://ec2-54-69-91-170.us-west-2.compute.amazonaws.com/cgi-bin/mt_anomalies/qgis_mapserv.fcgi';

// Background map ----------------------------------------
L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var osmGeocoder = new L.Control.OSMGeocoder({
    collapsed: true,
    position: 'topright',
    text: 'Location Search'
});
map.addControl(osmGeocoder);

// Layers ------------------------------------------------
var PptElW = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'Ppt ElW (mm)',
    version: '1.3.0',
    opacity: 0.8
});

var PptElS = L.tileLayer.wms(URL, {
    format: 'image/png',
    transparent: true,
    layers: 'Ppt ElS (mm)',
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
map.addLayer(PptElWarmW);

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

// Initialize variables for dropdown menu
var vstr = "Ppt";
var estr = "El";
var pstr = "Warm";
var sstr = "W";
var tstr = vstr + estr + pstr + sstr;
var shownLayer = window[tstr];  // this turns string into previously defined variable

// Climate variable dropdown menu
var varMenu = L.control({position: 'topright'});  // initialize dropdown control
varMenu.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'menu');  // create div of class 'menu'
    div.innerHTML = '<select name="vmenu" id="vmenu">' +  // html code for the div
                        '<option value="Ppt">Precipitation (mm)</option>' +
                        '<option value="T">Temperature (C)</option>' +
                    '</select>';
    div.firstChild.onmousedown = div.firstChild.onclick = L.DomEvent.stopPropagation;  // stops the propagation of mouse events when on dropdown menu
    return div;
};
varMenu.addTo(map);

$('#vmenu').change(function(e){  // jQuery function to add new layer to map when menu is changed
    vstr = $("#vmenu option:selected").val();  // get value of the selected variable
    if(shownLayer !== undefined){
        map.removeLayer(shownLayer);  // remove previous layer
    };
    tstr = vstr + estr + pstr + sstr;  // create new layer string
    shownLayer = window[tstr];  // convert layer string into predefined variable
    map.addLayer(shownLayer);  // add new layer to the map
});

// ENSO dropdown menu
var ENSOMenu = L.control({position: 'topright'});
ENSOMenu.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'menu');
    div.innerHTML = '<select name="emenu" id="emenu">' +
                        '<option value="El">El Ni&ntilde;o</option>' +
                        '<option value="La">La Ni&ntilde;a</option>' +
                        '<option value="Neu">Neutral</option>' +
                        '<option value="">None</option>' +
                    '</select>';
    div.firstChild.onmousedown = div.firstChild.onclick = L.DomEvent.stopPropagation;
    return div;
};
ENSOMenu.addTo(map);

$('#emenu').change(function(){
    estr = $("#emenu option:selected").val();
    if(shownLayer !== undefined){
        map.removeLayer(shownLayer);
    };
    tstr = vstr+estr+pstr+sstr;
    shownLayer = window[tstr];
    if (estr === "" && pstr === ""){
        alert('Our sincere apologies but an ENSO or PDO phase must be selected in order for anomalies to be calculated.');
        return;
    };
    map.addLayer(shownLayer);
});

// PDO dropdown menu

var PDOMenu = L.control({position: 'topright'});
PDOMenu.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'menu');
    div.innerHTML = '<select name="pmenu" id="pmenu">' +
                        '<option value="Warm">PDO Warm</option>' +
                        '<option value="Cool">PDO Cool</option>' +
                        '<option value="">None</option>' +
                    '</select>';
    div.firstChild.onmousedown = div.firstChild.onclick = L.DomEvent.stopPropagation;
    return div;
};
PDOMenu.addTo(map);

$('#pmenu').change(function(){
    pstr = $("#pmenu option:selected").val();
    if(shownLayer !== undefined){
        map.removeLayer(shownLayer);
    };
    tstr = vstr+estr+pstr+sstr;
    if (estr === "" && pstr === ""){
        alert('Our sincere apologies but an ENSO or PDO phase must be selected in order for anomalies to be calculated.');
        return;
    };
    shownLayer = window[tstr];
    map.addLayer(shownLayer);
});

// Season dropdown menu
var seasonMenu = L.control({position: 'topright'});
seasonMenu.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'menu');
    div.innerHTML = '<select name="smenu" id="smenu">' +
                        '<option value="W">Winter (DJF)</option>' +
                        '<option value="S">Summer (JJA)</option>' +
                    '</select>';
    div.firstChild.onmousedown = div.firstChild.onclick = L.DomEvent.stopPropagation;
    return div;
};
seasonMenu.addTo(map);

$('#smenu').change(function(){
    sstr = $("#smenu option:selected").val();
    if(shownLayer !== undefined){
        map.removeLayer(shownLayer);
    };
    tstr = vstr+estr+pstr+sstr;
    shownLayer = window[tstr];
    map.addLayer(shownLayer);
});


// Legend ------------------------------------------
var PptLegend = L.control({position: 'bottomleft'});
var TLegend = L.control({position: 'bottomleft'});

PptLegend.onAdd = function(map){
    var layer = 'Precipitation (mm)';
    var div = L.DomUtil.create('div', 'legend');
        div.innerHTML +=
            '<h3>Anomaly</h3>' +
            '<img src="' + URL + '?' +
            'SERVICE=WMS&FORMAT=image/png&VERSION=1.3.0&REQUEST=GetLegendGraphic&' +
            'LAYER=' + layer + '">';
    return div;
};

TLegend.onAdd = function(map){
    var layer = 'Temperature (C)';
    var div = L.DomUtil.create('div', 'legend');
        div.innerHTML +=
            '<h3>Anomaly</h3>' +
            '<img src="' + URL + '?' +
            'SERVICE=WMS&FORMAT=image/png&VERSION=1.3.0&REQUEST=GetLegendGraphic&' +
            'LAYER=' + layer + '">';
    return div;
};

PptLegend.addTo(map);

map.on('layeradd', function (eventLayer) {
    //Switch to the Temperature legend...
    if(typeof(eventLayer.layer.options.version) !== 'undefined'){  // The popup triggers a layeradd which should be avoided when adding legend
        if (eventLayer.layer.wmsParams.layers.substring(0, 1) === 'T') {
            if(typeof(TLegend._map) !== "undefined" && TLegend._map !== null){
                return;
            } else{
                this.removeControl(PptLegend);
                TLegend.addTo(this);
            };

        } else { // Or switch to the Precipitation legend...
            if(PptLegend._map !== null){
                return;
            } else{
                this.removeControl(TLegend);
                PptLegend.addTo(this);
            };
        };
    };
});


// Feature Popup -------------------------------------------
popup = new L.Popup({maxWidth: 400});

function onMapClick(e){
    var BBOX = map.getBounds().toBBoxString();
    var WIDTH = map.getSize().x;
    var HEIGHT = map.getSize().y;
    var X = map.layerPointToContainerPoint(e.layerPoint).x.toFixed(0);
    var Y = map.layerPointToContainerPoint(e.layerPoint).y.toFixed(0);

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

    var gfURL = URL + '?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&LAYERS=' + alayer + '&' + //Ppt%20ElS%20(mm)&' +
        'BBOX=' + BBOX + '&HEIGHT=' + HEIGHT + '&WIDTH=' + WIDTH + '&FORMAT=image%2Fpng&' +
        'INFO_FORMAT=text%2Fhtml&X=' + X + '&Y=' + Y + '&CRS=EPSG:4326&QUERY_LAYERS='+alayer;

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
};

map.on('click', onMapClick);
