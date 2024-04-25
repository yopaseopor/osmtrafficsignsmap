/**
 * OSM Cat config
 */


var imgSrc = 'src/img/';

var config = {
	initialConfig: {
		lon: 1.59647,
		lat: 41.69689,
		rotation: 0, //in radians (positive rotation clockwise, 0 means North)
		zoom: 8,
		zoomGeolocation: 17,
		units: 'metric'
	},
	i18n: {
		layersLabel: 'Capas',
		completeWith: 'Completar con:',
		editWith: 'Editar con:',
		openWith: 'Abrir con:',
		showWith: 'Mostrar con:',
		show2With: 'Mostrar también con:',
		checkTools: 'Validar con:',
		copyDialog: 'S\'ha copiat l\'enllaç al porta-retalls.Enlace copiado. Link has been copied',
		nodeLabel: 'Nodo:',
		noNodesFound: 'No se ha encontrado información.',
		wayLabel: 'Vía:'
	},
	overpassApi: function(){
		// https://overpass-turbo.eu/
		var proxyOverpassApi = true;
		var overpassApi = 'https://overpass-api.de/api/interpreter';
		if (proxyOverpassApi)
		{
			overpassApi = 'https://overpass.kumi.systems/api/interpreter';
		}
		return overpassApi;
	},
	// Base layers
	layers: [
		new ol.layer.Tile({
			title: 'OpenStreetMap',
			iconSrc: imgSrc + 'osm_logo-layer.svg',
			source: new ol.source.OSM()
		}),
		new ol.layer.Tile({
			title: 'OpenStreetMap DE',
			iconSrc: imgSrc + 'osmbw_logo-layer.png',
			maxZoom: 18,
			source: new ol.source.XYZ({
				attributions: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
				url: 'https://{a-c}.tile.openstreetmap.de/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({// OpenStreetMap France https://openstreetmap.fr
			title: 'OpenStreetMap FR',
			iconSrc: imgSrc + 'osmfr_logo-layer.png',
			source: new ol.source.OSM({
				attributions: '&copy; <a href="https://www.openstreetmap.fr/" target="_blank">OpenStreetMap France</a>',
				url: 'https://{a-c}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'OpenCycleMap',
			iconSrc: imgSrc + 'opencycle_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a>, powered by &copy; <a href="http://www.thunderforest.com/" target="_blank">Thunderforest</a>',
				url: 'https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=a5dd6a2f1c934394bce6b0fb077203eb'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Topotresc',
			iconSrc: imgSrc + 'topotresc_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data <a href="https://www.topotresc.com/" target="_blank">TopoTresk</a> by <a href="https://github.com/aresta/topotresc" target="_blank">aresta</a>',
				url: 'https://api.topotresc.com/tiles/{z}/{x}/{y}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'ArcGIS World Topo',
			iconSrc: imgSrc + 'worldtopomap_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer" target="_blank">ArcGIS</a>',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Positron (CartoDB)',
			iconSrc: imgSrc + 'cartodb_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions" target="_blank">CartoDB</a>',
				url: 'https://s.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Dark Matter (CartoDB)',
			iconSrc: imgSrc + 'cartodb_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, &copy; <a href="https://cartodb.com/attributions" target="_blank">CartoDB</a>',
				url: 'https://s.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'Esri Sat',
			iconSrc: imgSrc + 'esri_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
				url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
			}),
			visible: false
		}),
		new ol.layer.Tile({
			title: 'ES_IGN - PNOA - Actual',
			iconSrc: imgSrc + 'logo_ign.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; IGN &mdash; Source: IGN',
				url: 'http://www.ign.es/wms-inspire/pnoa-ma?',
				params: {'LAYERS': 'OI.OrthoimageCoverage', 'VERSION': '1.3.0'}
			}),
			visible: false
		}),
		
				new ol.layer.Tile({
			title: 'ES_CAT_ICGC - Actual',
			iconSrc: imgSrc + 'logo_icgc.png',
			source: new ol.source.TileWMS({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,Tiles &copy; ICGC &mdash; Source: ICGC',
				url: 'https://geoserveis.icgc.cat/icc_mapesbase/wms/service?',
				params: {'LAYERS': 'orto25c', 'VERSION': '1.1.1'}
			}),
			visible: false

		}),

		new ol.layer.Tile({
			title: 'Google Maps',
			iconSrc: imgSrc + 'gmaps_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,&copy; <a href="https://www.google.com/maps/" target="_blank">Google Maps</a>',
				url: 'https://mt{0-3}.google.com/vt/lyrs=m&z={z}&x={x}&y={y}'
			}),
			visible: false
		}),
		new ol.layer.Tile({// Google Sat
			title: 'Google Sat',
			iconSrc: imgSrc + 'gmaps_logo_layer.png',
			source: new ol.source.XYZ({
				attributions: 'Map data &copy; <a href="https://www.openstreetmap.org/" target="_blank">OpenStreetMap Contributors</a>,&copy; <a href="https://www.google.com/maps/" target="_blank">Google Maps</a>',
				url: 'https://mt{0-3}.google.com/vt/lyrs=s&z={z}&x={x}&y={y}'
			}),
			visible: false
		})
	],
	/**
	* @type Array
	* Overlay
	* group: string nom del grup
	* title: string titol de la capa
	* query: string consulta tal como https://overpass-turbo.eu
	* iconSrc: string ruta de la imatge
	* style: function see https://openlayers.org/en/latest/apidoc/module-ol_style_Style-Style.html
	*/
	overlays: [

{
group: 'ES – Balizas',
title: 'ES:',
query: '(nwr["traffic_sign"="ES:"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Balizas',
title: 'ES:B1a',
query: '(nwr["traffic_sign"="ES:B1a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B1a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B1a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B1a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Balizas',
title: 'ES:B1b',
query: '(nwr["traffic_sign"="ES:B1b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B1b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B1b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B1b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Balizas',
title: 'ES:B2a',
query: '(nwr["traffic_sign"="ES:B2a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Balizas',
title: 'ES:B2b',
query: '(nwr["traffic_sign"="ES:B2b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Balizas',
title: 'ES:B2c',
query: '(nwr["traffic_sign"="ES:B2c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2c.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2c.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2c.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Balizas',
title: 'ES:B2d',
query: '(nwr["traffic_sign"="ES:B2d"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2d.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2d.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2d.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Balizas',
title: 'ES:B2e',
query: '(nwr["traffic_sign"="ES:B2e"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2e.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2e.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2e.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Balizas',
title: 'ES:H75',
query: '(nwr["traffic_sign"="ES:H75"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_H75.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_H75.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_H75.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Balizas',
title: 'ES:HV120',
query: '(nwr["traffic_sign"="ES:HV120"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_HV120.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_HV120.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_HV120.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S50a',
query: '(nwr["traffic_sign"="ES:S50a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S50a-50',
query: '(nwr["traffic_sign"="ES:S50a-50"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50a-50.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50a-50.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50a-50.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S50a-60',
query: '(nwr["traffic_sign"="ES:S50a-60"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50a-60.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50a-60.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50a-60.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S50a-70',
query: '(nwr["traffic_sign"="ES:S50a-70"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50a-70.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50a-70.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50a-70.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S50b',
query: '(nwr["traffic_sign"="ES:S50b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S50b-60',
query: '(nwr["traffic_sign"="ES:S50b-60"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50b-60.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50b-60.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50b-60.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S50b-70',
query: '(nwr["traffic_sign"="ES:S50b-70"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50b-70.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50b-70.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50b-70.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S50c',
query: '(nwr["traffic_sign"="ES:S50c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50c.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50c.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50c.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S50d',
query: '(nwr["traffic_sign"="ES:S50d"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50d.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50d.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50d.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S50d-50',
query: '(nwr["traffic_sign"="ES:S50d-50"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50d-50.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50d-50.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50d-50.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S50d-60',
query: '(nwr["traffic_sign"="ES:S50d-60"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50d-60.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50d-60.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50d-60.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S50d-70',
query: '(nwr["traffic_sign"="ES:S50d-70"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50d-70.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50d-70.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50d-70.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S50e',
query: '(nwr["traffic_sign"="ES:S50e"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50e.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50e.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50e.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S50e-50',
query: '(nwr["traffic_sign"="ES:S50e-50"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50e-50.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50e-50.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50e-50.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S50e-60',
query: '(nwr["traffic_sign"="ES:S50e-60"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50e-60.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50e-60.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50e-60.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S50e-70',
query: '(nwr["traffic_sign"="ES:S50e-70"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50e-70.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50e-70.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50e-70.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S51',
query: '(nwr["traffic_sign"="ES:S51"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S51.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S51.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S51.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S510',
query: '(nwr["traffic_sign"="ES:S510"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S510.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S510.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S510.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S52',
query: '(nwr["traffic_sign"="ES:S52"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S520',
query: '(nwr["traffic_sign"="ES:S520"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S520.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S520.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S520.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S52a',
query: '(nwr["traffic_sign"="ES:S52a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S52b',
query: '(nwr["traffic_sign"="ES:S52b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S53',
query: '(nwr["traffic_sign"="ES:S53"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S53.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S53.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S53.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S53a',
query: '(nwr["traffic_sign"="ES:S53a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S53a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S53a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S53a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S53b',
query: '(nwr["traffic_sign"="ES:S53b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S53b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S53b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S53b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S53c',
query: '(nwr["traffic_sign"="ES:S53c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S53c.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S53c.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S53c.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S60a',
query: '(nwr["traffic_sign"="ES:S60a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S60a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S60a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S60a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S60b',
query: '(nwr["traffic_sign"="ES:S60b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S60b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S60b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S60b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S610',
query: '(nwr["traffic_sign"="ES:S610"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S610.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S610.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S610.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S61a',
query: '(nwr["traffic_sign"="ES:S61a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S61a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S61a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S61a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S61b',
query: '(nwr["traffic_sign"="ES:S61b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S61b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S61b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S61b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S61b:(variant)',
query: '(nwr["traffic_sign"="ES:S61b:(variant)"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S61b_(variant).png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S61b_(variant).png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S61b_(variant).png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S62a',
query: '(nwr["traffic_sign"="ES:S62a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S62a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S62a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S62a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S62b',
query: '(nwr["traffic_sign"="ES:S62b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S62b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S62b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S62b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S62c',
query: '(nwr["traffic_sign"="ES:S62c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S62c.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S62c.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S62c.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S63',
query: '(nwr["traffic_sign"="ES:S63"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S63.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S63.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S63.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S64a',
query: '(nwr["traffic_sign"="ES:S64a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S64a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S64a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S64a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Carriles',
title: 'ES:S64b',
query: '(nwr["traffic_sign"="ES:S64b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S64b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S64b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S64b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:com:s860',
query: '(nwr["traffic_sign"="ES:CAT:com:s860"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_com_s860.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_com_s860.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_com_s860.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:ID400',
query: '(nwr["traffic_sign"="ES:CAT:ID400"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID400.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID400.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID400.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:ID410',
query: '(nwr["traffic_sign"="ES:CAT:ID410"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID410.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID410.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID410.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:ID420',
query: '(nwr["traffic_sign"="ES:CAT:ID420"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID420.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID420.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID420.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:ID430',
query: '(nwr["traffic_sign"="ES:CAT:ID430"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID430.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID430.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID430.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:ID440',
query: '(nwr["traffic_sign"="ES:CAT:ID440"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID440.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID440.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID440.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:ID450',
query: '(nwr["traffic_sign"="ES:CAT:ID450"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID450.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID450.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID450.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:LOC500',
query: '(nwr["traffic_sign"="ES:CAT:LOC500"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC500.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC500.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC500.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:LOC510',
query: '(nwr["traffic_sign"="ES:CAT:LOC510"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC510.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC510.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC510.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:LOC512',
query: '(nwr["traffic_sign"="ES:CAT:LOC512"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC512.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC512.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC512.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:LOC512a',
query: '(nwr["traffic_sign"="ES:CAT:LOC512a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC512a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC512a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC512a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:LOC520',
query: '(nwr["traffic_sign"="ES:CAT:LOC520"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC520.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC520.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC520.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:LOC530',
query: '(nwr["traffic_sign"="ES:CAT:LOC530"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC530.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC530.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC530.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:LOC540',
query: '(nwr["traffic_sign"="ES:CAT:LOC540"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC540.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC540.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC540.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:LOC541',
query: '(nwr["traffic_sign"="ES:CAT:LOC541"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC541.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC541.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC541.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:LOC550',
query: '(nwr["traffic_sign"="ES:CAT:LOC550"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC550.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC550.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC550.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR10',
query: '(nwr["traffic_sign"="ES:CAT:OR10"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR10.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR10.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR10.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR21',
query: '(nwr["traffic_sign"="ES:CAT:OR21"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR21.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR21.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR21.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR21a',
query: '(nwr["traffic_sign"="ES:CAT:OR21a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR21a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR21a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR21a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR21b',
query: '(nwr["traffic_sign"="ES:CAT:OR21b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR21b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR21b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR21b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR21c',
query: '(nwr["traffic_sign"="ES:CAT:OR21c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR21c.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR21c.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR21c.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR24a',
query: '(nwr["traffic_sign"="ES:CAT:OR24a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR24a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR24a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR24a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR24b',
query: '(nwr["traffic_sign"="ES:CAT:OR24b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR24b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR24b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR24b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR24c',
query: '(nwr["traffic_sign"="ES:CAT:OR24c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR24c.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR24c.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR24c.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR25',
query: '(nwr["traffic_sign"="ES:CAT:OR25"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR25.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR25.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR25.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR25b',
query: '(nwr["traffic_sign"="ES:CAT:OR25b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR25b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR25b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR25b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR25c',
query: '(nwr["traffic_sign"="ES:CAT:OR25c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR25c.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR25c.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR25c.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR30',
query: '(nwr["traffic_sign"="ES:CAT:OR30"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR30.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR30.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR30.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR31',
query: '(nwr["traffic_sign"="ES:CAT:OR31"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR31.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR31.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR31.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR32',
query: '(nwr["traffic_sign"="ES:CAT:OR32"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR32.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR32.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR32.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR41a',
query: '(nwr["traffic_sign"="ES:CAT:OR41a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR41a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR41a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR41a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR41b',
query: '(nwr["traffic_sign"="ES:CAT:OR41b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR41b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR41b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR41b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR41c',
query: '(nwr["traffic_sign"="ES:CAT:OR41c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR41c.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR41c.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR41c.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR42a',
query: '(nwr["traffic_sign"="ES:CAT:OR42a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR42a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR42a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR42a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR42b',
query: '(nwr["traffic_sign"="ES:CAT:OR42b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR42b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR42b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR42b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR42c',
query: '(nwr["traffic_sign"="ES:CAT:OR42c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR42c.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR42c.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR42c.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR43a',
query: '(nwr["traffic_sign"="ES:CAT:OR43a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR43a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR43a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR43a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR43b',
query: '(nwr["traffic_sign"="ES:CAT:OR43b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR43b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR43b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR43b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR43c',
query: '(nwr["traffic_sign"="ES:CAT:OR43c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR43c.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR43c.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR43c.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR44a',
query: '(nwr["traffic_sign"="ES:CAT:OR44a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR44a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR44a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR44a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR44b',
query: '(nwr["traffic_sign"="ES:CAT:OR44b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR44b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR44b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR44b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR44c',
query: '(nwr["traffic_sign"="ES:CAT:OR44c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR44c.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR44c.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR44c.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR51',
query: '(nwr["traffic_sign"="ES:CAT:OR51"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR51.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR51.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR51.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR52',
query: '(nwr["traffic_sign"="ES:CAT:OR52"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR52.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR52.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR52.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR53punt1',
query: '(nwr["traffic_sign"="ES:CAT:OR53punt1"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR53punt1.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR53punt1.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR53punt1.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR53punt2',
query: '(nwr["traffic_sign"="ES:CAT:OR53punt2"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR53punt2.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR53punt2.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR53punt2.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR59',
query: '(nwr["traffic_sign"="ES:CAT:OR59"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR59.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR59.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR59.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR60',
query: '(nwr["traffic_sign"="ES:CAT:OR60"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR60.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR60.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR60.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR61',
query: '(nwr["traffic_sign"="ES:CAT:OR61"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR61.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR61.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR61.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR62',
query: '(nwr["traffic_sign"="ES:CAT:OR62"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR62.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR62.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR62.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:OR63',
query: '(nwr["traffic_sign"="ES:CAT:OR63"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR63.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR63.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR63.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:radar',
query: '(nwr["traffic_sign"="ES:CAT:radar"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_radar.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_radar.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_radar.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:radar2',
query: '(nwr["traffic_sign"="ES:CAT:radar2"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_radar2.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_radar2.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_radar2.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:S230',
query: '(nwr["traffic_sign"="ES:CAT:S230"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_S230.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_S230.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_S230.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:S270',
query: '(nwr["traffic_sign"="ES:CAT:S270"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_S270.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_S270.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_S270.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:S300',
query: '(nwr["traffic_sign"="ES:CAT:S300"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_S300.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_S300.png'',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.10
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_S300.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.10
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:URB',
query: '(nwr["traffic_sign"="ES:CAT:URB"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_URB.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_URB.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_URB.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Catalunya',
title: 'ES:CAT:URBL',
query: '(nwr["traffic_sign"="ES:CAT:URBL"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_URBL.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_URBL.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_URBL.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Confirmación',
title: 'ES:S600',
query: '(nwr["traffic_sign"="ES:S600"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S600.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S600.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S600.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Confirmación',
title: 'ES:S602',
query: '(nwr["traffic_sign"="ES:S602"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S602.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S602.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S602.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Dirección',
title: 'ES:S300',
query: '(nwr["traffic_sign"="ES:S300"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S300.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S300.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S300.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Dirección',
title: 'ES:S301',
query: '(nwr["traffic_sign"="ES:S301"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S301.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S301.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S301.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Dirección',
title: 'ES:S31',
query: '(nwr["traffic_sign"="ES:S31"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S31.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S31.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S31.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Dirección',
title: 'ES:S310',
query: '(nwr["traffic_sign"="ES:S310"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S310.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S310.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S310.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Dirección',
title: 'ES:S320',
query: '(nwr["traffic_sign"="ES:S320"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S320.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S320.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S320.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Dirección',
title: 'ES:S321',
query: '(nwr["traffic_sign"="ES:S321"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S321.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S321.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S321.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Dirección',
title: 'ES:S322',
query: '(nwr["traffic_sign"="ES:S322"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S322.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S322.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S322.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Dirección',
title: 'ES:S341',
query: '(nwr["traffic_sign"="ES:S341"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S341.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S341.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S341.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Dirección',
title: 'ES:S342',
query: '(nwr["traffic_sign"="ES:S342"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S342.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S342.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S342.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Dirección',
title: 'ES:S344',
query: '(nwr["traffic_sign"="ES:S344"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S344.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S344.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S344.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Dirección',
title: 'ES:S347',
query: '(nwr["traffic_sign"="ES:S347"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S347.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S347.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S347.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Dirección',
title: 'ES:S350',
query: '(nwr["traffic_sign"="ES:S350"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S350.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S350.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S350.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Dirección',
title: 'ES:S351',
query: '(nwr["traffic_sign"="ES:S351"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S351.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S351.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S351.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Dirección',
title: 'ES:S354',
query: '(nwr["traffic_sign"="ES:S354"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S354.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S354.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S354.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Dirección',
title: 'ES:S355',
query: '(nwr["traffic_sign"="ES:S355"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S355.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S355.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S355.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Dirección',
title: 'ES:S360',
query: '(nwr["traffic_sign"="ES:S360"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S360.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S360.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S360.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Dirección',
title: 'ES:S362',
query: '(nwr["traffic_sign"="ES:S362"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S362.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S362.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S362.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Dirección',
title: 'ES:S366',
query: '(nwr["traffic_sign"="ES:S366"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S366.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S366.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S366.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Dirección',
title: 'ES:S368',
query: '(nwr["traffic_sign"="ES:S368"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S368.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S368.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S368.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Dirección',
title: 'ES:S373',
query: '(nwr["traffic_sign"="ES:S373"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S373.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S373.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S373.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Dirección',
title: 'ES:S375',
query: '(nwr["traffic_sign"="ES:S375"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S375.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S375.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S375.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Fin prohibición',
title: 'ES:R500',
query: '(nwr["traffic_sign"="ES:R500"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R500.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R500.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R500.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Fin prohibición',
title: 'ES:R501',
query: '(nwr["traffic_sign"="ES:R501"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Fin prohibición',
title: 'ES:R501-100',
query: '(nwr["traffic_sign"="ES:R501-100"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-100.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-100.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-100.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Fin prohibición',
title: 'ES:R501-20',
query: '(nwr["traffic_sign"="ES:R501-20"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-20.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-20.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-20.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Fin prohibición',
title: 'ES:R501-30',
query: '(nwr["traffic_sign"="ES:R501-30"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-30.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-30.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-30.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Fin prohibición',
title: 'ES:R501-40',
query: '(nwr["traffic_sign"="ES:R501-40"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-40.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-40.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-40.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Fin prohibición',
title: 'ES:R501-50',
query: '(nwr["traffic_sign"="ES:R501-50"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-50.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-50.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-50.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Fin prohibición',
title: 'ES:R501-60',
query: '(nwr["traffic_sign"="ES:R501-60"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-60.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-60.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-60.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Fin prohibición',
title: 'ES:R501-70',
query: '(nwr["traffic_sign"="ES:R501-70"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-70.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-70.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-70.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Fin prohibición',
title: 'ES:R501-80',
query: '(nwr["traffic_sign"="ES:R501-80"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-80.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-80.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-80.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Fin prohibición',
title: 'ES:R501-90',
query: '(nwr["traffic_sign"="ES:R501-90"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-90.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-90.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-90.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Fin prohibición',
title: 'ES:R502',
query: '(nwr["traffic_sign"="ES:R502"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R502.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R502.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R502.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Fin prohibición',
title: 'ES:R503',
query: '(nwr["traffic_sign"="ES:R503"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R503.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R503.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R503.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Fin prohibición',
title: 'ES:R504',
query: '(nwr["traffic_sign"="ES:R504"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R504.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R504.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R504.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Fin prohibición',
title: 'ES:R505',
query: '(nwr["traffic_sign"="ES:R505"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R505.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R505.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R505.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Fin prohibición',
title: 'ES:R505a',
query: '(nwr["traffic_sign"="ES:R505a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R505a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R505a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R505a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Fin prohibición',
title: 'ES:R506',
query: '(nwr["traffic_sign"="ES:R506"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Fin prohibición',
title: 'ES:R506-30',
query: '(nwr["traffic_sign"="ES:R506-30"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-30.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-30.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-30.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Fin prohibición',
title: 'ES:R506-50',
query: '(nwr["traffic_sign"="ES:R506-50"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-50.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-50.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-50.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Fin prohibición',
title: 'ES:R506-60',
query: '(nwr["traffic_sign"="ES:R506-60"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-60.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-60.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-60.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Fin prohibición',
title: 'ES:R506-70',
query: '(nwr["traffic_sign"="ES:R506-70"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-70.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-70.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-70.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Fin prohibición',
title: 'ES:R506-90',
query: '(nwr["traffic_sign"="ES:R506-90"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-90.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-90.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-90.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Identificación vías',
title: 'ES:S400',
query: '(nwr["traffic_sign"="ES:S400"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S400.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S400.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S400.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Identificación vías',
title: 'ES:S410',
query: '(nwr["traffic_sign"="ES:S410"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S410.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S410.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S410.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Identificación vías',
title: 'ES:S420',
query: '(nwr["traffic_sign"="ES:S420"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S420.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S420.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S420.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Identificación vías',
title: 'ES:S430',
query: '(nwr["traffic_sign"="ES:S430"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S430.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S430.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S430.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Identificación vías',
title: 'ES:S440',
query: '(nwr["traffic_sign"="ES:S440"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S440.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S440.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S440.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Identificación vías',
title: 'ES:S450',
query: '(nwr["traffic_sign"="ES:S450"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S450.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S450.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S450.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S1',
query: '(nwr["traffic_sign"="ES:S1"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S1.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S1.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S1.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S10',
query: '(nwr["traffic_sign"="ES:S10"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S10.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S10.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S10.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S11a',
query: '(nwr["traffic_sign"="ES:S11a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S11a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S11a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S11a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S11b',
query: '(nwr["traffic_sign"="ES:S11b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S11b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S11b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S11b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S12',
query: '(nwr["traffic_sign"="ES:S12"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S12.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S12.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S12.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S120',
query: '(nwr["traffic_sign"="ES:S120"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S120.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S120.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S120.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S121',
query: '(nwr["traffic_sign"="ES:S121"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S121.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S121.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S121.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S122',
query: '(nwr["traffic_sign"="ES:S122"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S122.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S122.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S122.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S123',
query: '(nwr["traffic_sign"="ES:S123"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S123.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S123.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S123.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S124',
query: '(nwr["traffic_sign"="ES:S124"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S124.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S124.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S124.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S125',
query: '(nwr["traffic_sign"="ES:S125"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S125.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S125.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S125.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S126',
query: '(nwr["traffic_sign"="ES:S126"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S126.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S126.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S126.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S127',
query: '(nwr["traffic_sign"="ES:S127"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S127.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S127.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S127.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S13',
query: '(nwr["traffic_sign"="ES:S13"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S13.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S13.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S13.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S14a',
query: '(nwr["traffic_sign"="ES:S14a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S14a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S14a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S14a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S14b',
query: '(nwr["traffic_sign"="ES:S14b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S14b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S14b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S14b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S15a',
query: '(nwr["traffic_sign"="ES:S15a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S15b',
query: '(nwr["traffic_sign"="ES:S15b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S15c',
query: '(nwr["traffic_sign"="ES:S15c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15c.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15c.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15c.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S15d',
query: '(nwr["traffic_sign"="ES:S15d"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15d.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15d.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15d.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S16',
query: '(nwr["traffic_sign"="ES:S16"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S16.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S16.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S16.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S17',
query: '(nwr["traffic_sign"="ES:S17"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S17-500',
query: '(nwr["traffic_sign"="ES:S17-500"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17-500.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17-500.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17-500.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S18',
query: '(nwr["traffic_sign"="ES:S18"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S18.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S18.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S18.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S19',
query: '(nwr["traffic_sign"="ES:S19"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S19.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S19.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S19.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S1a',
query: '(nwr["traffic_sign"="ES:S1a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S1a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S1a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S1a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S2',
query: '(nwr["traffic_sign"="ES:S2"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S2.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S2.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S2.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S20',
query: '(nwr["traffic_sign"="ES:S20"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S20.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S20.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S20.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S21',
query: '(nwr["traffic_sign"="ES:S21"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S21.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S21.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S21.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S22',
query: '(nwr["traffic_sign"="ES:S22"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S22:100',
query: '(nwr["traffic_sign"="ES:S22:100"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_100.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_100.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_100.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S22:1000',
query: '(nwr["traffic_sign"="ES:S22:1000"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_1000.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_1000.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_1000.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S22:1200',
query: '(nwr["traffic_sign"="ES:S22:1200"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_1200.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_1200.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_1200.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S22:1300',
query: '(nwr["traffic_sign"="ES:S22:1300"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_1300.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_1300.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_1300.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S22:1500',
query: '(nwr["traffic_sign"="ES:S22:1500"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_1500.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_1500.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_1500.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S22:200',
query: '(nwr["traffic_sign"="ES:S22:200"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_200.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_200.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_200.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S22:300',
query: '(nwr["traffic_sign"="ES:S22:300"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_300.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_300.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_300.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S22:400',
query: '(nwr["traffic_sign"="ES:S22:400"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_400.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_400.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_400.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S22:50',
query: '(nwr["traffic_sign"="ES:S22:50"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_50.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_50.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_50.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S22:500',
query: '(nwr["traffic_sign"="ES:S22:500"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_500.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_500.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_500.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S22:600',
query: '(nwr["traffic_sign"="ES:S22:600"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_600.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_600.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_600.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S22:700',
query: '(nwr["traffic_sign"="ES:S22:700"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_700.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_700.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_700.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S22:800',
query: '(nwr["traffic_sign"="ES:S22:800"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_800.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_800.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_800.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S22:900',
query: '(nwr["traffic_sign"="ES:S22:900"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_900.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_900.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_900.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S23',
query: '(nwr["traffic_sign"="ES:S23"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S23.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S23.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S23.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S24',
query: '(nwr["traffic_sign"="ES:S24"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S24.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S24.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S24.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S25',
query: '(nwr["traffic_sign"="ES:S25"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S25.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S25.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S25.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S26a',
query: '(nwr["traffic_sign"="ES:S26a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S26a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S26a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S26a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S26b',
query: '(nwr["traffic_sign"="ES:S26b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S26b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S26b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S26b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S26c',
query: '(nwr["traffic_sign"="ES:S26c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S26c.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S26c.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S26c.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S27',
query: '(nwr["traffic_sign"="ES:S27"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S27.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S27.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S27.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S28',
query: '(nwr["traffic_sign"="ES:S28"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S28.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S28.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S28.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S29',
query: '(nwr["traffic_sign"="ES:S29"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S29.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S29.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S29.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S2a',
query: '(nwr["traffic_sign"="ES:S2a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S2a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S2a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S2a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S3',
query: '(nwr["traffic_sign"="ES:S3"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S3.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S3.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S3.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S30',
query: '(nwr["traffic_sign"="ES:S30"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S30.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S30.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S30.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S32',
query: '(nwr["traffic_sign"="ES:S32"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S32.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S32.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S32.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S33',
query: '(nwr["traffic_sign"="ES:S33"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S33.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S33.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S33.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S34',
query: '(nwr["traffic_sign"="ES:S34"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S34.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S34.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S34.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S34a',
query: '(nwr["traffic_sign"="ES:S34a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S34a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S34a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S34a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S4',
query: '(nwr["traffic_sign"="ES:S4"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S4.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S4.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S4.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S5',
query: '(nwr["traffic_sign"="ES:S5"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S5.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S5.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S5.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S6',
query: '(nwr["traffic_sign"="ES:S6"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S6.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S6.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S6.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S7',
query: '(nwr["traffic_sign"="ES:S7"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S7:10',
query: '(nwr["traffic_sign"="ES:S7:10"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_10.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_10.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_10.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S7:100',
query: '(nwr["traffic_sign"="ES:S7:100"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_100.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_100.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_100.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S7:20',
query: '(nwr["traffic_sign"="ES:S7:20"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_20.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_20.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_20.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S7:30',
query: '(nwr["traffic_sign"="ES:S7:30"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_30.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_30.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_30.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S7:40',
query: '(nwr["traffic_sign"="ES:S7:40"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_40.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_40.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_40.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S7:50',
query: '(nwr["traffic_sign"="ES:S7:50"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_50.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_50.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_50.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S7:60',
query: '(nwr["traffic_sign"="ES:S7:60"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_60.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_60.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_60.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S7:70',
query: '(nwr["traffic_sign"="ES:S7:70"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_70.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_70.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_70.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S7:80',
query: '(nwr["traffic_sign"="ES:S7:80"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_80.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_80.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_80.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S7:90',
query: '(nwr["traffic_sign"="ES:S7:90"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_90.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_90.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_90.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S8:10',
query: '(nwr["traffic_sign"="ES:S8:10"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_10.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_10.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_10.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S8:100',
query: '(nwr["traffic_sign"="ES:S8:100"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_100.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_100.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_100.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S8:20',
query: '(nwr["traffic_sign"="ES:S8:20"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_20.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_20.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_20.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S8:30',
query: '(nwr["traffic_sign"="ES:S8:30"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_30.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_30.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_30.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S8:40',
query: '(nwr["traffic_sign"="ES:S8:40"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_40.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_40.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_40.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S8:50',
query: '(nwr["traffic_sign"="ES:S8:50"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_50.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_50.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_50.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S8:60',
query: '(nwr["traffic_sign"="ES:S8:60"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_60.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_60.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_60.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S8:70',
query: '(nwr["traffic_sign"="ES:S8:70"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_70.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_70.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_70.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S8:80',
query: '(nwr["traffic_sign"="ES:S8:80"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_80.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_80.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_80.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S8:90',
query: '(nwr["traffic_sign"="ES:S8:90"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_90.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_90.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_90.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Indicaciones generales',
title: 'ES:S9',
query: '(nwr["traffic_sign"="ES:S9"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S9.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S9.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S9.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Localización',
title: 'ES:S500',
query: '(nwr["traffic_sign"="ES:S500"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S500.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S500.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S500.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Localización',
title: 'ES:S540',
query: '(nwr["traffic_sign"="ES:S540"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S540.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S540.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S540.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Localización',
title: 'ES:S550',
query: '(nwr["traffic_sign"="ES:S550"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S550.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S550.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S550.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Localización',
title: 'ES:S560',
query: '(nwr["traffic_sign"="ES:S560"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S560.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S560.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S560.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Localización',
title: 'ES:S570',
query: '(nwr["traffic_sign"="ES:S570"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S570.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S570.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S570.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Localización',
title: 'ES:S570a',
query: '(nwr["traffic_sign"="ES:S570a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S570a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S570a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S570a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Localización',
title: 'ES:S571',
query: '(nwr["traffic_sign"="ES:S571"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S571.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S571.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S571.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Localización',
title: 'ES:S572',
query: '(nwr["traffic_sign"="ES:S572"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Localización',
title: 'ES:S572a',
query: '(nwr["traffic_sign"="ES:S572a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Localización',
title: 'ES:S572n',
query: '(nwr["traffic_sign"="ES:S572n"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572n.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572n.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572n.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Localización',
title: 'ES:S572r',
query: '(nwr["traffic_sign"="ES:S572r"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572r.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572r.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572r.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Localización',
title: 'ES:S572v',
query: '(nwr["traffic_sign"="ES:S572v"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572v.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572v.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572v.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Localización',
title: 'ES:S573',
query: '(nwr["traffic_sign"="ES:S573"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S573.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S573.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S573.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Localización',
title: 'ES:S574',
query: '(nwr["traffic_sign"="ES:S574"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S574.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S574.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S574.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Localización',
title: 'ES:S574a',
query: '(nwr["traffic_sign"="ES:S574a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S574a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S574a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S574a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Localización',
title: 'ES:S574b',
query: '(nwr["traffic_sign"="ES:S574b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S574b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S574b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S574b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Localización',
title: 'ES:S575',
query: '(nwr["traffic_sign"="ES:S575"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S575.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S575.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S575.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Localización',
title: 'ES:S575a',
query: '(nwr["traffic_sign"="ES:S575a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S575a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S575a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S575a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Localización',
title: 'ES:S575n',
query: '(nwr["traffic_sign"="ES:S575n"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S575n.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S575n.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S575n.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Localización',
title: 'ES:S575v',
query: '(nwr["traffic_sign"="ES:S575v"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S575v.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S575v.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S575v.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R400a',
query: '(nwr["traffic_sign"="ES:R400a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R400b',
query: '(nwr["traffic_sign"="ES:R400b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R400c',
query: '(nwr["traffic_sign"="ES:R400c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400c.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400c.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400c.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R400d',
query: '(nwr["traffic_sign"="ES:R400d"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400d.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400d.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400d.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R400e',
query: '(nwr["traffic_sign"="ES:R400e"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400e.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400e.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400e.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R401a',
query: '(nwr["traffic_sign"="ES:R401a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R401a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R401a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R401a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R401b',
query: '(nwr["traffic_sign"="ES:R401b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R401b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R401b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R401b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R401c',
query: '(nwr["traffic_sign"="ES:R401c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R401c.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R401c.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R401c.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R402',
query: '(nwr["traffic_sign"="ES:R402"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R402.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R402.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R402.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R403a',
query: '(nwr["traffic_sign"="ES:R403a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R403b',
query: '(nwr["traffic_sign"="ES:R403b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R403c',
query: '(nwr["traffic_sign"="ES:R403c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403c.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403c.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403c.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R404',
query: '(nwr["traffic_sign"="ES:R404"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R404.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R404.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R404.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R405',
query: '(nwr["traffic_sign"="ES:R405"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R405.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R405.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R405.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R406',
query: '(nwr["traffic_sign"="ES:R406"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R406.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R406.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R406.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R407',
query: '(nwr["traffic_sign"="ES:R407"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R407.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R407.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R407.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R407b',
query: '(nwr["traffic_sign"="ES:R407b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R407b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R407b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R407b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R408',
query: '(nwr["traffic_sign"="ES:R408"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R408.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R408.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R408.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R409',
query: '(nwr["traffic_sign"="ES:R409"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R409.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R409.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R409.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R410',
query: '(nwr["traffic_sign"="ES:R410"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R410.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R410.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R410.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R411',
query: '(nwr["traffic_sign"="ES:R411"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R411-20',
query: '(nwr["traffic_sign"="ES:R411-20"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-20.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-20.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-20.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R411-30',
query: '(nwr["traffic_sign"="ES:R411-30"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-30.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-30.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-30.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R411-50',
query: '(nwr["traffic_sign"="ES:R411-50"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-50.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-50.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-50.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R411-60',
query: '(nwr["traffic_sign"="ES:R411-60"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-60.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-60.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-60.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R411-70',
query: '(nwr["traffic_sign"="ES:R411-70"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-70.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-70.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-70.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R411-80',
query: '(nwr["traffic_sign"="ES:R411-80"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-80.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-80.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-80.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R411-90',
query: '(nwr["traffic_sign"="ES:R411-90"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-90.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-90.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-90.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R412',
query: '(nwr["traffic_sign"="ES:R412"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R412.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R412.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R412.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R413',
query: '(nwr["traffic_sign"="ES:R413"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R413.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R413.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R413.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R414',
query: '(nwr["traffic_sign"="ES:R414"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R414.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R414.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R414.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R415',
query: '(nwr["traffic_sign"="ES:R415"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R415.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R415.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R415.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R416',
query: '(nwr["traffic_sign"="ES:R416"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R416.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R416.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R416.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R417',
query: '(nwr["traffic_sign"="ES:R417"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R417.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R417.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R417.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Obligación',
title: 'ES:R418',
query: '(nwr["traffic_sign"="ES:R418"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R418.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R418.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R418.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Orientación preseñalización',
title: 'ES:S200',
query: '(nwr["traffic_sign"="ES:S200"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S200.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S200.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S200.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Orientación preseñalización',
title: 'ES:S220',
query: '(nwr["traffic_sign"="ES:S220"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S220.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S220.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S220.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Orientación preseñalización',
title: 'ES:S221',
query: '(nwr["traffic_sign"="ES:S221"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S221.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S221.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S221.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Orientación preseñalización',
title: 'ES:S221a',
query: '(nwr["traffic_sign"="ES:S221a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S221a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S221a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S221a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Orientación preseñalización',
title: 'ES:S222',
query: '(nwr["traffic_sign"="ES:S222"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S222.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S222.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S222.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Orientación preseñalización',
title: 'ES:S222a',
query: '(nwr["traffic_sign"="ES:S222a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S222a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S222a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S222a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Orientación preseñalización',
title: 'ES:S225',
query: '(nwr["traffic_sign"="ES:S225"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S225.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S225.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S225.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Orientación preseñalización',
title: 'ES:S230',
query: '(nwr["traffic_sign"="ES:S230"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S230.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S230.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S230.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Orientación preseñalización',
title: 'ES:S230a',
query: '(nwr["traffic_sign"="ES:S230a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S230a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S230a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S230a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Orientación preseñalización',
title: 'ES:S232',
query: '(nwr["traffic_sign"="ES:S232"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S232.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S232.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S232.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Orientación preseñalización',
title: 'ES:S232a',
query: '(nwr["traffic_sign"="ES:S232a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S232a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S232a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S232a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Orientación preseñalización',
title: 'ES:S235',
query: '(nwr["traffic_sign"="ES:S235"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S235.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S235.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S235.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Orientación preseñalización',
title: 'ES:S235a',
query: '(nwr["traffic_sign"="ES:S235a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S235a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S235a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S235a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Orientación preseñalización',
title: 'ES:S242',
query: '(nwr["traffic_sign"="ES:S242"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S242.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S242.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S242.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Orientación preseñalización',
title: 'ES:S242a',
query: '(nwr["traffic_sign"="ES:S242a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S242a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S242a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S242a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Orientación preseñalización',
title: 'ES:S250',
query: '(nwr["traffic_sign"="ES:S250"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S250.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S250.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S250.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Orientación preseñalización',
title: 'ES:S260',
query: '(nwr["traffic_sign"="ES:S260"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S260.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S260.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S260.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Orientación preseñalización',
title: 'ES:S261',
query: '(nwr["traffic_sign"="ES:S261"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S261.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S261.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S261.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Orientación preseñalización',
title: 'ES:S263',
query: '(nwr["traffic_sign"="ES:S263"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S263.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S263.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S263.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Orientación preseñalización',
title: 'ES:S263a',
query: '(nwr["traffic_sign"="ES:S263a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S263a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S263a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S263a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Orientación preseñalización',
title: 'ES:S264',
query: '(nwr["traffic_sign"="ES:S264"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S264.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S264.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S264.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Orientación preseñalización',
title: 'ES:S266',
query: '(nwr["traffic_sign"="ES:S266"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S266.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S266.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S266.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Orientación preseñalización',
title: 'ES:S266a',
query: '(nwr["traffic_sign"="ES:S266a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S266a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S266a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S266a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Orientación preseñalización',
title: 'ES:S270',
query: '(nwr["traffic_sign"="ES:S270"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S270.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S270.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S270.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Orientación preseñalización',
title: 'ES:S271',
query: '(nwr["traffic_sign"="ES:S271"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S271.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S271.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S271.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras',
title: 'ES:road:beacon:big',
query: '(nwr["traffic_sign"="ES:road:beacon:big"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_road_beacon_big.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_road_beacon_big.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_road_beacon_big.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras',
title: 'ES:S900',
query: '(nwr["traffic_sign"="ES:S900"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S900.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S900.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S900.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras',
title: 'ES:S910',
query: '(nwr["traffic_sign"="ES:S910"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S910.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S910.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S910.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras',
title: 'ES:S920',
query: '(nwr["traffic_sign"="ES:S920"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S920.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S920.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S920.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras',
title: 'ES:S930',
query: '(nwr["traffic_sign"="ES:S930"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S930.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S930.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S930.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras',
title: 'ES:S940',
query: '(nwr["traffic_sign"="ES:S940"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S940.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S940.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S940.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras',
title: 'ES:S950',
query: '(nwr["traffic_sign"="ES:S950"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S950.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S950.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S950.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras',
title: 'ES:S960',
query: '(nwr["traffic_sign"="ES:S960"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S960.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S960.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S960.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras',
title: 'ES:S970',
query: '(nwr["traffic_sign"="ES:S970"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S970.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S970.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S970.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras',
title: 'ES:S980',
query: '(nwr["traffic_sign"="ES:S980"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S980.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S980.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S980.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras',
title: 'ES:S980l',
query: '(nwr["traffic_sign"="ES:S980l"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S980l.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S980l.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S980l.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras',
title: 'ES:S980r',
query: '(nwr["traffic_sign"="ES:S980r"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S980r.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S980r.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S980r.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras',
title: 'ES:S990',
query: '(nwr["traffic_sign"="ES:S990"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S990.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S990.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S990.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras',
title: 'ES:S990l',
query: '(nwr["traffic_sign"="ES:S990l"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S990l.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S990l.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S990l.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras',
title: 'ES:S990r',
query: '(nwr["traffic_sign"="ES:S990r"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S990r.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S990r.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S990r.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras',
title: 'ES:TCA',
query: '(nwr["traffic_sign"="ES:TCA"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_TCA.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_TCA.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_TCA.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras',
title: 'ES:TCAF',
query: '(nwr["traffic_sign"="ES:TCAF"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_TCAF.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_TCAF.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_TCAF.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras',
title: 'ES:traffic:sign:dir',
query: '(nwr["traffic_sign"="ES:traffic:sign:dir"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_traffic_sign_dir.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_traffic_sign_dir.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_traffic_sign_dir.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R300',
query: '(nwr["traffic_sign"="ES:R300"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R300-100',
query: '(nwr["traffic_sign"="ES:R300-100"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300-100.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300-100.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300-100.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R300-60',
query: '(nwr["traffic_sign"="ES:R300-60"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300-60.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300-60.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300-60.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R300-70',
query: '(nwr["traffic_sign"="ES:R300-70"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300-70.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300-70.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300-70.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R300-80',
query: '(nwr["traffic_sign"="ES:R300-80"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300-80.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300-80.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300-80.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R301-10',
query: '(nwr["traffic_sign"="ES:R301-10"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-10.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-10.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-10.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R301-100',
query: '(nwr["traffic_sign"="ES:R301-100"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-100.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-100.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-100.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R301-110',
query: '(nwr["traffic_sign"="ES:R301-110"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-110.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-110.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-110.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R301-120',
query: '(nwr["traffic_sign"="ES:R301-120"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-120.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-120.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-120.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R301-20',
query: '(nwr["traffic_sign"="ES:R301-20"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-20.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-20.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-20.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R301-30',
query: '(nwr["traffic_sign"="ES:R301-30"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-30.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-30.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-30.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R301-40',
query: '(nwr["traffic_sign"="ES:R301-40"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-40.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-40.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-40.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R301-50',
query: '(nwr["traffic_sign"="ES:R301-50"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-50.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-50.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-50.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R301-60',
query: '(nwr["traffic_sign"="ES:R301-60"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-60.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-60.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-60.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R301-70',
query: '(nwr["traffic_sign"="ES:R301-70"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-70.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-70.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-70.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R301-80',
query: '(nwr["traffic_sign"="ES:R301-80"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-80.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-80.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-80.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R301-90',
query: '(nwr["traffic_sign"="ES:R301-90"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-90.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-90.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-90.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R302',
query: '(nwr["traffic_sign"="ES:R302"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R302.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R302.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R302.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R303',
query: '(nwr["traffic_sign"="ES:R303"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R303.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R303.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R303.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R304',
query: '(nwr["traffic_sign"="ES:R304"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R304.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R304.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R304.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R305',
query: '(nwr["traffic_sign"="ES:R305"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R305.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R305.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R305.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R306',
query: '(nwr["traffic_sign"="ES:R306"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R306.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R306.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R306.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R307',
query: '(nwr["traffic_sign"="ES:R307"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R308',
query: '(nwr["traffic_sign"="ES:R308"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R308a',
query: '(nwr["traffic_sign"="ES:R308a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R308b',
query: '(nwr["traffic_sign"="ES:R308b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R308c',
query: '(nwr["traffic_sign"="ES:R308c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308c.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308c.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308c.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R308d',
query: '(nwr["traffic_sign"="ES:R308d"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308d.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308d.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308d.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R308e',
query: '(nwr["traffic_sign"="ES:R308e"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308e.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308e.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308e.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R309',
query: '(nwr["traffic_sign"="ES:R309"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R309.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R309.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R309.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Otras restricciones',
title: 'ES:R310',
query: '(nwr["traffic_sign"="ES:R310"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R310.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R310.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R310.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S800',
query: '(nwr["traffic_sign"="ES:S800"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S800-100',
query: '(nwr["traffic_sign"="ES:S800-100"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-100.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-100.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-100.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S800-1000',
query: '(nwr["traffic_sign"="ES:S800-1000"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-1000.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-1000.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-1000.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S800-1300',
query: '(nwr["traffic_sign"="ES:S800-1300"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-1300.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-1300.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-1300.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S800-150',
query: '(nwr["traffic_sign"="ES:S800-150"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-150.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-150.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-150.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S800-1500',
query: '(nwr["traffic_sign"="ES:S800-1500"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-1500.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-1500.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-1500.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S800-1km',
query: '(nwr["traffic_sign"="ES:S800-1km"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-1km.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-1km.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-1km.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S800-200',
query: '(nwr["traffic_sign"="ES:S800-200"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-200.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-200.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-200.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S800-250',
query: '(nwr["traffic_sign"="ES:S800-250"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-250.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-250.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-250.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S800-300',
query: '(nwr["traffic_sign"="ES:S800-300"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-300.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-300.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-300.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S800-350',
query: '(nwr["traffic_sign"="ES:S800-350"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-350.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-350.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-350.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S800-400',
query: '(nwr["traffic_sign"="ES:S800-400"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-400.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-400.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-400.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S800-450',
query: '(nwr["traffic_sign"="ES:S800-450"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-450.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-450.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-450.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S800-50',
query: '(nwr["traffic_sign"="ES:S800-50"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-50.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-50.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-50.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S800-500',
query: '(nwr["traffic_sign"="ES:S800-500"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-500.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-500.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-500.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S800-5km',
query: '(nwr["traffic_sign"="ES:S800-5km"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-5km.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-5km.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-5km.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S800-600',
query: '(nwr["traffic_sign"="ES:S800-600"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-600.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-600.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-600.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S800-700',
query: '(nwr["traffic_sign"="ES:S800-700"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-700.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-700.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-700.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S800-800',
query: '(nwr["traffic_sign"="ES:S800-800"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-800.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-800.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-800.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S800-900',
query: '(nwr["traffic_sign"="ES:S800-900"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-900.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-900.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-900.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S810',
query: '(nwr["traffic_sign"="ES:S810"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S810-100',
query: '(nwr["traffic_sign"="ES:S810-100"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-100.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-100.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-100.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S810-15km',
query: '(nwr["traffic_sign"="ES:S810-15km"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-15km.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-15km.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-15km.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S810-1km',
query: '(nwr["traffic_sign"="ES:S810-1km"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-1km.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-1km.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-1km.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S810-200',
query: '(nwr["traffic_sign"="ES:S810-200"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-200.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-200.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-200.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S810-25km',
query: '(nwr["traffic_sign"="ES:S810-25km"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-25km.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-25km.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-25km.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S810-2km',
query: '(nwr["traffic_sign"="ES:S810-2km"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-2km.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-2km.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-2km.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S810-350',
query: '(nwr["traffic_sign"="ES:S810-350"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-350.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-350.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-350.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S810-3500m',
query: '(nwr["traffic_sign"="ES:S810-3500m"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-3500m.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-3500m.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-3500m.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S810-35km',
query: '(nwr["traffic_sign"="ES:S810-35km"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-35km.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-35km.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-35km.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S810-3km',
query: '(nwr["traffic_sign"="ES:S810-3km"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-3km.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-3km.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-3km.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S810-425km',
query: '(nwr["traffic_sign"="ES:S810-425km"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-425km.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-425km.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-425km.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S810-4km',
query: '(nwr["traffic_sign"="ES:S810-4km"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-4km.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-4km.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-4km.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S810-5km',
query: '(nwr["traffic_sign"="ES:S810-5km"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-5km.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-5km.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-5km.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S820',
query: '(nwr["traffic_sign"="ES:S820"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S820.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S820.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S820.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S821',
query: '(nwr["traffic_sign"="ES:S821"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S821.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S821.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S821.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S830',
query: '(nwr["traffic_sign"="ES:S830"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S830.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S830.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S830.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S840-1000m',
query: '(nwr["traffic_sign"="ES:S840-1000m"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-1000m.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-1000m.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-1000m.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S840-100m',
query: '(nwr["traffic_sign"="ES:S840-100m"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-100m.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-100m.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-100m.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S840-150m',
query: '(nwr["traffic_sign"="ES:S840-150m"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-150m.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-150m.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-150m.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S840-200m',
query: '(nwr["traffic_sign"="ES:S840-200m"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-200m.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-200m.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-200m.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S840-300m',
query: '(nwr["traffic_sign"="ES:S840-300m"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-300m.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-300m.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-300m.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S840-50m',
query: '(nwr["traffic_sign"="ES:S840-50m"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-50m.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-50m.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-50m.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S840-900m',
query: '(nwr["traffic_sign"="ES:S840-900m"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-900m.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-900m.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-900m.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S850',
query: '(nwr["traffic_sign"="ES:S850"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S850.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S850.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S850.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S851',
query: '(nwr["traffic_sign"="ES:S851"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S851.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S851.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S851.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S852',
query: '(nwr["traffic_sign"="ES:S852"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S852.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S852.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S852.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S853',
query: '(nwr["traffic_sign"="ES:S853"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S853.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S853.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S853.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S860',
query: '(nwr["traffic_sign"="ES:S860"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S860.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S860.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S860.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S860-tow',
query: '(nwr["traffic_sign"="ES:S860-tow"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S860-tow.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S860-tow.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S860-tow.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S860g',
query: '(nwr["traffic_sign"="ES:S860g"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S860g.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S860g.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S860g.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S870',
query: '(nwr["traffic_sign"="ES:S870"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S870.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S870.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S870.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S880-bicycle',
query: '(nwr["traffic_sign"="ES:S880-bicycle"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S880-bicycle.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S880-bicycle.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S880-bicycle.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S880-bus',
query: '(nwr["traffic_sign"="ES:S880-bus"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S880-bus.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S880-bus.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S880-bus.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S880-hgv',
query: '(nwr["traffic_sign"="ES:S880-hgv"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S880-hgv.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S880-hgv.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S880-hgv.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S880-truck',
query: '(nwr["traffic_sign"="ES:S880-truck"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S880-truck.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S880-truck.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S880-truck.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Paneles complementarios',
title: 'ES:S890',
query: '(nwr["traffic_sign"="ES:S890"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S890.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S890.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S890.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P1',
query: '(nwr["traffic_sign"="ES:P1"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P10a',
query: '(nwr["traffic_sign"="ES:P10a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P10b',
query: '(nwr["traffic_sign"="ES:P10b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P10c',
query: '(nwr["traffic_sign"="ES:P10c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10c.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10c.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10c.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P11',
query: '(nwr["traffic_sign"="ES:P11"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P11.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P11.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P11.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P11a',
query: '(nwr["traffic_sign"="ES:P11a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P11a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P11a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P11a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P12',
query: '(nwr["traffic_sign"="ES:P12"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P12.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P12.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P12.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P13a',
query: '(nwr["traffic_sign"="ES:P13a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P13a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P13a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P13a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P13b',
query: '(nwr["traffic_sign"="ES:P13b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P13b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P13b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P13b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P14a',
query: '(nwr["traffic_sign"="ES:P14a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P14a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P14a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P14a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P14b',
query: '(nwr["traffic_sign"="ES:P14b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P14b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P14b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P14b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P15',
query: '(nwr["traffic_sign"="ES:P15"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P15a',
query: '(nwr["traffic_sign"="ES:P15a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P15b',
query: '(nwr["traffic_sign"="ES:P15b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16a',
query: '(nwr["traffic_sign"="ES:P16a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16a-10',
query: '(nwr["traffic_sign"="ES:P16a-10"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-10.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-10.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-10.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16a-11',
query: '(nwr["traffic_sign"="ES:P16a-11"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-11.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-11.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-11.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16a-12',
query: '(nwr["traffic_sign"="ES:P16a-12"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-12.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-12.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-12.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16a-13',
query: '(nwr["traffic_sign"="ES:P16a-13"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-13.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-13.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-13.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16a-15',
query: '(nwr["traffic_sign"="ES:P16a-15"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-15.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-15.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-15.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16a-17',
query: '(nwr["traffic_sign"="ES:P16a-17"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-17.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-17.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-17.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16a-20',
query: '(nwr["traffic_sign"="ES:P16a-20"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-20.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-20.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-20.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16a-4',
query: '(nwr["traffic_sign"="ES:P16a-4"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-4.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-4.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-4.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16a-5',
query: '(nwr["traffic_sign"="ES:P16a-5"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-5.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-5.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-5.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16a-6',
query: '(nwr["traffic_sign"="ES:P16a-6"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-6.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-6.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-6.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16a-7',
query: '(nwr["traffic_sign"="ES:P16a-7"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-7.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-7.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-7.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16a-75',
query: '(nwr["traffic_sign"="ES:P16a-75"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-75.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-75.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-75.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16a-8',
query: '(nwr["traffic_sign"="ES:P16a-8"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-8.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-8.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-8.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16a-9',
query: '(nwr["traffic_sign"="ES:P16a-9"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-9.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-9.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-9.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16b',
query: '(nwr["traffic_sign"="ES:P16b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16b-10',
query: '(nwr["traffic_sign"="ES:P16b-10"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-10.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-10.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-10.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16b-11',
query: '(nwr["traffic_sign"="ES:P16b-11"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-11.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-11.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-11.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16b-12',
query: '(nwr["traffic_sign"="ES:P16b-12"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-12.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-12.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-12.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16b-13',
query: '(nwr["traffic_sign"="ES:P16b-13"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-13.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-13.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-13.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16b-15',
query: '(nwr["traffic_sign"="ES:P16b-15"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-15.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-15.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-15.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16b-17',
query: '(nwr["traffic_sign"="ES:P16b-17"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-17.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-17.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-17.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16b-20',
query: '(nwr["traffic_sign"="ES:P16b-20"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-20.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-20.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-20.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16b-4',
query: '(nwr["traffic_sign"="ES:P16b-4"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-4.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-4.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-4.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16b-5',
query: '(nwr["traffic_sign"="ES:P16b-5"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-5.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-5.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-5.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16b-6',
query: '(nwr["traffic_sign"="ES:P16b-6"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-6.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-6.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-6.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16b-7',
query: '(nwr["traffic_sign"="ES:P16b-7"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-7.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-7.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-7.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16b-75',
query: '(nwr["traffic_sign"="ES:P16b-75"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-75.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-75.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-75.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16b-8',
query: '(nwr["traffic_sign"="ES:P16b-8"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-8.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-8.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-8.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P16b-9',
query: '(nwr["traffic_sign"="ES:P16b-9"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-9.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-9.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-9.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P17',
query: '(nwr["traffic_sign"="ES:P17"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P17a',
query: '(nwr["traffic_sign"="ES:P17a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P17b',
query: '(nwr["traffic_sign"="ES:P17b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P18',
query: '(nwr["traffic_sign"="ES:P18"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P18.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P18.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P18.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P19',
query: '(nwr["traffic_sign"="ES:P19"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P19.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P19.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P19.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P1a',
query: '(nwr["traffic_sign"="ES:P1a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P1b',
query: '(nwr["traffic_sign"="ES:P1b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P1c',
query: '(nwr["traffic_sign"="ES:P1c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1c.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1c.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1c.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P1d',
query: '(nwr["traffic_sign"="ES:P1d"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1d.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1d.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1d.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P2',
query: '(nwr["traffic_sign"="ES:P2"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P2.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P2.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P2.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P20',
query: '(nwr["traffic_sign"="ES:P20"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P20.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P20.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P20.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P20aP',
query: '(nwr["traffic_sign"="ES:P20aP"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P20aP.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P20aP.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P20aP.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P21',
query: '(nwr["traffic_sign"="ES:P21"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P21.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P21.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P21.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P22',
query: '(nwr["traffic_sign"="ES:P22"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P22.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P22.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P22.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P23',
query: '(nwr["traffic_sign"="ES:P23"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P23.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P23.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P23.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P24',
query: '(nwr["traffic_sign"="ES:P24"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P24.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P24.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P24.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P25',
query: '(nwr["traffic_sign"="ES:P25"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P25.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P25.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P25.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P26',
query: '(nwr["traffic_sign"="ES:P26"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P26.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P26.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P26.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P27',
query: '(nwr["traffic_sign"="ES:P27"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P27.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P27.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P27.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P28',
query: '(nwr["traffic_sign"="ES:P28"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P28.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P28.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P28.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P29',
query: '(nwr["traffic_sign"="ES:P29"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P29.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P29.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P29.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P3',
query: '(nwr["traffic_sign"="ES:P3"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P3.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P3.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P3.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P30',
query: '(nwr["traffic_sign"="ES:P30"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P30.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P30.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P30.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P31',
query: '(nwr["traffic_sign"="ES:P31"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P31.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P31.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P31.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P32',
query: '(nwr["traffic_sign"="ES:P32"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P32.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P32.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P32.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P33',
query: '(nwr["traffic_sign"="ES:P33"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P33.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P33.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P33.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P34',
query: '(nwr["traffic_sign"="ES:P34"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P34.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P34.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P34.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P4',
query: '(nwr["traffic_sign"="ES:P4"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P4.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P4.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P4.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P5',
query: '(nwr["traffic_sign"="ES:P5"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P5.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P5.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P5.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P50',
query: '(nwr["traffic_sign"="ES:P50"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P50.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P50.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P50.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P6',
query: '(nwr["traffic_sign"="ES:P6"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P6.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P6.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P6.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P7',
query: '(nwr["traffic_sign"="ES:P7"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P7.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P7.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P7.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P8',
query: '(nwr["traffic_sign"="ES:P8"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P8.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P8.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P8.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P9a',
query: '(nwr["traffic_sign"="ES:P9a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P9b',
query: '(nwr["traffic_sign"="ES:P9b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9b.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9b.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9b.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Peligro',
title: 'ES:P9c',
query: '(nwr["traffic_sign"="ES:P9c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9c.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9c.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9c.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Poblado',
title: 'ES:S700',
query: '(nwr["traffic_sign"="ES:S700"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S700.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S700.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S700.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Poblado',
title: 'ES:S710',
query: '(nwr["traffic_sign"="ES:S710"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S710.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S710.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S710.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Poblado',
title: 'ES:S720',
query: '(nwr["traffic_sign"="ES:S720"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S720.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S720.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S720.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Poblado',
title: 'ES:S730',
query: '(nwr["traffic_sign"="ES:S730"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S730.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S730.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S730.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Poblado',
title: 'ES:S740',
query: '(nwr["traffic_sign"="ES:S740"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S740.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S740.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S740.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Poblado',
title: 'ES:S750',
query: '(nwr["traffic_sign"="ES:S750"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S750.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S750.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S750.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Poblado',
title: 'ES:S760',
query: '(nwr["traffic_sign"="ES:S760"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S760.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S760.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S760.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Poblado',
title: 'ES:S770',
query: '(nwr["traffic_sign"="ES:S770"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S770.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S770.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S770.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prioridad',
title: 'ES:R1',
query: '(nwr["traffic_sign"="ES:R1"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R1.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R1.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R1.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prioridad',
title: 'ES:R2',
query: '(nwr["traffic_sign"="ES:R2"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prioridad',
title: 'ES:R3',
query: '(nwr["traffic_sign"="ES:R3"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R3.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R3.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R3.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prioridad',
title: 'ES:R4',
query: '(nwr["traffic_sign"="ES:R4"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R4.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R4.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R4.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prioridad',
title: 'ES:R5',
query: '(nwr["traffic_sign"="ES:R5"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R5.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R5.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R5.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prioridad',
title: 'ES:R6',
query: '(nwr["traffic_sign"="ES:R6"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R6.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R6.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R6.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R100',
query: '(nwr["traffic_sign"="ES:R100"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R100.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R100.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R100.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R101',
query: '(nwr["traffic_sign"="ES:R101"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R101.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R101.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R101.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R102',
query: '(nwr["traffic_sign"="ES:R102"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R102.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R102.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R102.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R103',
query: '(nwr["traffic_sign"="ES:R103"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R103.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R103.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R103.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R104',
query: '(nwr["traffic_sign"="ES:R104"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R104.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R104.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R104.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R105',
query: '(nwr["traffic_sign"="ES:R105"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R105.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R105.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R105.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R106',
query: '(nwr["traffic_sign"="ES:R106"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R106.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R106.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R106.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R107',
query: '(nwr["traffic_sign"="ES:R107"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R107-10',
query: '(nwr["traffic_sign"="ES:R107-10"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-10.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-10.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-10.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R107-12',
query: '(nwr["traffic_sign"="ES:R107-12"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-12.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-12.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-12.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R107-16',
query: '(nwr["traffic_sign"="ES:R107-16"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-16.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-16.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-16.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R107-18',
query: '(nwr["traffic_sign"="ES:R107-18"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-18.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-18.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-18.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R107-2',
query: '(nwr["traffic_sign"="ES:R107-2"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-2.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-2.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-2.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R107-25',
query: '(nwr["traffic_sign"="ES:R107-25"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-25.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-25.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-25.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R107-3',
query: '(nwr["traffic_sign"="ES:R107-3"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-3.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-3.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-3.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R107-35',
query: '(nwr["traffic_sign"="ES:R107-35"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-35.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-35.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-35.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R107-4',
query: '(nwr["traffic_sign"="ES:R107-4"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-4.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-4.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-4.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R107-45',
query: '(nwr["traffic_sign"="ES:R107-45"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-45.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-45.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-45.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R107-5',
query: '(nwr["traffic_sign"="ES:R107-5"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-5.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-5.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-5.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R107-55',
query: '(nwr["traffic_sign"="ES:R107-55"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-55.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-55.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-55.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R107-6',
query: '(nwr["traffic_sign"="ES:R107-6"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-6.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-6.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-6.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R107-65',
query: '(nwr["traffic_sign"="ES:R107-65"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-65.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-65.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-65.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R107-7',
query: '(nwr["traffic_sign"="ES:R107-7"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-7.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-7.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-7.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R107-75',
query: '(nwr["traffic_sign"="ES:R107-75"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-75.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-75.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-75.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R107-8',
query: '(nwr["traffic_sign"="ES:R107-8"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-8.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-8.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-8.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R107-85',
query: '(nwr["traffic_sign"="ES:R107-85"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-85.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-85.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-85.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R107-9',
query: '(nwr["traffic_sign"="ES:R107-9"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-9.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-9.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-9.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R107-95',
query: '(nwr["traffic_sign"="ES:R107-95"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-95.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-95.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-95.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R108',
query: '(nwr["traffic_sign"="ES:R108"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R108.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R108.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R108.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R109',
query: '(nwr["traffic_sign"="ES:R109"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R109.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R109.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R109.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R110',
query: '(nwr["traffic_sign"="ES:R110"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R110.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R110.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R110.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R111',
query: '(nwr["traffic_sign"="ES:R111"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R111.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R111.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R111.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R112',
query: '(nwr["traffic_sign"="ES:R112"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R112.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R112.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R112.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R113',
query: '(nwr["traffic_sign"="ES:R113"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R113.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R113.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R113.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R114',
query: '(nwr["traffic_sign"="ES:R114"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R114.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R114.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R114.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R115',
query: '(nwr["traffic_sign"="ES:R115"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R115.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R115.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R115.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R116',
query: '(nwr["traffic_sign"="ES:R116"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R116.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R116.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R116.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Prohibición paso',
title: 'ES:R117',
query: '(nwr["traffic_sign"="ES:R117"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R117.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R117.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R117.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R200',
query: '(nwr["traffic_sign"="ES:R200"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R200.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R200.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R200.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R200a',
query: '(nwr["traffic_sign"="ES:R200a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R200a.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R200a.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R200a.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R201',
query: '(nwr["traffic_sign"="ES:R201"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R201-10',
query: '(nwr["traffic_sign"="ES:R201-10"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-10.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-10.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-10.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R201-11',
query: '(nwr["traffic_sign"="ES:R201-11"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-11.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-11.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-11.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R201-12',
query: '(nwr["traffic_sign"="ES:R201-12"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-12.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-12.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-12.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R201-14',
query: '(nwr["traffic_sign"="ES:R201-14"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-14.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-14.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-14.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R201-15',
query: '(nwr["traffic_sign"="ES:R201-15"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-15.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-15.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-15.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R201-16',
query: '(nwr["traffic_sign"="ES:R201-16"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-16.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-16.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-16.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R201-17',
query: '(nwr["traffic_sign"="ES:R201-17"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-17.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-17.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-17.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R201-20',
query: '(nwr["traffic_sign"="ES:R201-20"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-20.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-20.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-20.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R201-24',
query: '(nwr["traffic_sign"="ES:R201-24"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-24.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-24.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-24.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R201-29',
query: '(nwr["traffic_sign"="ES:R201-29"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-29.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-29.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-29.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R201-3',
query: '(nwr["traffic_sign"="ES:R201-3"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-3.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-3.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-3.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R201-35',
query: '(nwr["traffic_sign"="ES:R201-35"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-35.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-35.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-35.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R201-38',
query: '(nwr["traffic_sign"="ES:R201-38"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-38.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-38.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-38.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R201-4',
query: '(nwr["traffic_sign"="ES:R201-4"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-4.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-4.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-4.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R201-5',
query: '(nwr["traffic_sign"="ES:R201-5"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-5.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-5.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-5.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R201-55',
query: '(nwr["traffic_sign"="ES:R201-55"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-55.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-55.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-55.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R201-6',
query: '(nwr["traffic_sign"="ES:R201-6"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-6.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-6.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-6.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R201-65',
query: '(nwr["traffic_sign"="ES:R201-65"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-65.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-65.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-65.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R201-75',
query: '(nwr["traffic_sign"="ES:R201-75"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-75.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-75.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-75.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R201-8',
query: '(nwr["traffic_sign"="ES:R201-8"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-8.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-8.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-8.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R202',
query: '(nwr["traffic_sign"="ES:R202"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R202-10',
query: '(nwr["traffic_sign"="ES:R202-10"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-10.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-10.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-10.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R202-2',
query: '(nwr["traffic_sign"="ES:R202-2"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-2.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-2.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-2.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R202-24',
query: '(nwr["traffic_sign"="ES:R202-24"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-24.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-24.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-24.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R202-5',
query: '(nwr["traffic_sign"="ES:R202-5"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-5.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-5.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-5.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R202-7',
query: '(nwr["traffic_sign"="ES:R202-7"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-7.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-7.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-7.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R203',
query: '(nwr["traffic_sign"="ES:R203"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R203-10',
query: '(nwr["traffic_sign"="ES:R203-10"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203-10.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203-10.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203-10.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R203-7',
query: '(nwr["traffic_sign"="ES:R203-7"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203-7.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203-7.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203-7.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R204',
query: '(nwr["traffic_sign"="ES:R204"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R204-2',
query: '(nwr["traffic_sign"="ES:R204-2"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-2.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-2.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-2.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R204-21',
query: '(nwr["traffic_sign"="ES:R204-21"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-21.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-21.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-21.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R204-22',
query: '(nwr["traffic_sign"="ES:R204-22"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-22.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-22.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-22.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R204-23',
query: '(nwr["traffic_sign"="ES:R204-23"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-23.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-23.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-23.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R204-25',
query: '(nwr["traffic_sign"="ES:R204-25"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-25.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-25.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-25.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R204-3',
query: '(nwr["traffic_sign"="ES:R204-3"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-3.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-3.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-3.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R204-32',
query: '(nwr["traffic_sign"="ES:R204-32"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-32.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-32.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-32.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R204-34',
query: '(nwr["traffic_sign"="ES:R204-34"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-34.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-34.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-34.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R204-35',
query: '(nwr["traffic_sign"="ES:R204-35"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-35.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-35.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-35.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R204-36',
query: '(nwr["traffic_sign"="ES:R204-36"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-36.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-36.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-36.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R204-37',
query: '(nwr["traffic_sign"="ES:R204-37"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-37.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-37.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-37.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R204-38',
query: '(nwr["traffic_sign"="ES:R204-38"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-38.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-38.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-38.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R204-4',
query: '(nwr["traffic_sign"="ES:R204-4"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-4.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-4.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-4.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R204-41',
query: '(nwr["traffic_sign"="ES:R204-41"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-41.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-41.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-41.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R204-43',
query: '(nwr["traffic_sign"="ES:R204-43"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-43.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-43.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-43.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R204-45',
query: '(nwr["traffic_sign"="ES:R204-45"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-45.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-45.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-45.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205',
query: '(nwr["traffic_sign"="ES:R205"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-21',
query: '(nwr["traffic_sign"="ES:R205-21"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-21.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-21.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-21.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-22',
query: '(nwr["traffic_sign"="ES:R205-22"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-22.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-22.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-22.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-23',
query: '(nwr["traffic_sign"="ES:R205-23"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-23.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-23.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-23.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-24',
query: '(nwr["traffic_sign"="ES:R205-24"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-24.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-24.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-24.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-25',
query: '(nwr["traffic_sign"="ES:R205-25"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-25.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-25.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-25.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-26',
query: '(nwr["traffic_sign"="ES:R205-26"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-26.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-26.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-26.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-27',
query: '(nwr["traffic_sign"="ES:R205-27"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-27.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-27.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-27.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-28',
query: '(nwr["traffic_sign"="ES:R205-28"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-28.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-28.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-28.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-29',
query: '(nwr["traffic_sign"="ES:R205-29"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-29.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-29.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-29.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-31',
query: '(nwr["traffic_sign"="ES:R205-31"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-31.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-31.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-31.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-32',
query: '(nwr["traffic_sign"="ES:R205-32"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-32.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-32.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-32.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-33',
query: '(nwr["traffic_sign"="ES:R205-33"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-33.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-33.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-33.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-34',
query: '(nwr["traffic_sign"="ES:R205-34"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-34.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-34.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-34.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-35',
query: '(nwr["traffic_sign"="ES:R205-35"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-35.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-35.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-35.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-36',
query: '(nwr["traffic_sign"="ES:R205-36"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-36.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-36.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-36.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-37',
query: '(nwr["traffic_sign"="ES:R205-37"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-37.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-37.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-37.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-38',
query: '(nwr["traffic_sign"="ES:R205-38"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-38.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-38.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-38.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-39',
query: '(nwr["traffic_sign"="ES:R205-39"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-39.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-39.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-39.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-41',
query: '(nwr["traffic_sign"="ES:R205-41"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-41.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-41.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-41.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-42',
query: '(nwr["traffic_sign"="ES:R205-42"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-42.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-42.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-42.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-43',
query: '(nwr["traffic_sign"="ES:R205-43"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-43.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-43.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-43.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-44',
query: '(nwr["traffic_sign"="ES:R205-44"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-44.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-44.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-44.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-45',
query: '(nwr["traffic_sign"="ES:R205-45"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-45.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-45.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-45.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-46',
query: '(nwr["traffic_sign"="ES:R205-46"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-46.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-46.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-46.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-47',
query: '(nwr["traffic_sign"="ES:R205-47"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-47.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-47.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-47.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-48',
query: '(nwr["traffic_sign"="ES:R205-48"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-48.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-48.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-48.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-49',
query: '(nwr["traffic_sign"="ES:R205-49"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-49.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-49.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-49.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-51',
query: '(nwr["traffic_sign"="ES:R205-51"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-51.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-51.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-51.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-52',
query: '(nwr["traffic_sign"="ES:R205-52"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-52.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-52.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-52.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-53',
query: '(nwr["traffic_sign"="ES:R205-53"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-53.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-53.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-53.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-54',
query: '(nwr["traffic_sign"="ES:R205-54"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-54.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-54.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-54.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-55',
query: '(nwr["traffic_sign"="ES:R205-55"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-55.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-55.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-55.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-56',
query: '(nwr["traffic_sign"="ES:R205-56"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-56.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-56.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-56.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Restricción paso',
title: 'ES:R205-59',
query: '(nwr["traffic_sign"="ES:R205-59"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-59.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-59.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-59.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S100',
query: '(nwr["traffic_sign"="ES:S100"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S100-200',
query: '(nwr["traffic_sign"="ES:S100-200"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100-200.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100-200.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100-200.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S100-250',
query: '(nwr["traffic_sign"="ES:S100-250"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100-250.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100-250.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100-250.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S100-300',
query: '(nwr["traffic_sign"="ES:S100-300"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100-300.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100-300.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100-300.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S100-500',
query: '(nwr["traffic_sign"="ES:S100-500"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100-500.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100-500.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100-500.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S101',
query: '(nwr["traffic_sign"="ES:S101"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S101.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S101.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S101.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S102',
query: '(nwr["traffic_sign"="ES:S102"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S102.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S102.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S102.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S103',
query: '(nwr["traffic_sign"="ES:S103"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S103.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S103.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S103.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S104',
query: '(nwr["traffic_sign"="ES:S104"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S104.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S104.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S104.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S105',
query: '(nwr["traffic_sign"="ES:S105"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S105-1000',
query: '(nwr["traffic_sign"="ES:S105-1000"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-1000.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-1000.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-1000.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S105-200',
query: '(nwr["traffic_sign"="ES:S105-200"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-200.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-200.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-200.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S105-300',
query: '(nwr["traffic_sign"="ES:S105-300"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-300.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-300.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-300.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S105-400',
query: '(nwr["traffic_sign"="ES:S105-400"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-400.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-400.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-400.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S105-500',
query: '(nwr["traffic_sign"="ES:S105-500"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-500.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-500.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-500.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S106',
query: '(nwr["traffic_sign"="ES:S106"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S106.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S106.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S106.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S107',
query: '(nwr["traffic_sign"="ES:S107"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S107.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S107.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S107.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S108',
query: '(nwr["traffic_sign"="ES:S108"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S108.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S108.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S108.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S109',
query: '(nwr["traffic_sign"="ES:S109"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S109.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S109.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S109.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S11',
query: '(nwr["traffic_sign"="ES:S11"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S11.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S11.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S11.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S110',
query: '(nwr["traffic_sign"="ES:S110"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S110-1000',
query: '(nwr["traffic_sign"="ES:S110-1000"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110-1000.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110-1000.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110-1000.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S110-200',
query: '(nwr["traffic_sign"="ES:S110-200"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110-200.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110-200.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110-200.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S110-300',
query: '(nwr["traffic_sign"="ES:S110-300"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110-300.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110-300.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110-300.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S110-500',
query: '(nwr["traffic_sign"="ES:S110-500"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110-500.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110-500.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110-500.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S111',
query: '(nwr["traffic_sign"="ES:S111"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S111-100',
query: '(nwr["traffic_sign"="ES:S111-100"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-100.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-100.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-100.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S111-1000',
query: '(nwr["traffic_sign"="ES:S111-1000"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-1000.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-1000.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-1000.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S111-200',
query: '(nwr["traffic_sign"="ES:S111-200"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-200.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-200.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-200.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S111-250',
query: '(nwr["traffic_sign"="ES:S111-250"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-250.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-250.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-250.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S111-300',
query: '(nwr["traffic_sign"="ES:S111-300"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-300.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-300.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-300.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S111-500',
query: '(nwr["traffic_sign"="ES:S111-500"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-500.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-500.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-500.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S112',
query: '(nwr["traffic_sign"="ES:S112"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S112.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S112.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S112.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S113',
query: '(nwr["traffic_sign"="ES:S113"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S113.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S113.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S113.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S114',
query: '(nwr["traffic_sign"="ES:S114"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S114.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S114.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S114.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S115',
query: '(nwr["traffic_sign"="ES:S115"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S115.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S115.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S115.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S116',
query: '(nwr["traffic_sign"="ES:S116"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S116.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S116.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S116.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S117',
query: '(nwr["traffic_sign"="ES:S117"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S117.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S117.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S117.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S118',
query: '(nwr["traffic_sign"="ES:S118"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S118-100',
query: '(nwr["traffic_sign"="ES:S118-100"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-100.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-100.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-100.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S118-1000',
query: '(nwr["traffic_sign"="ES:S118-1000"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-1000.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-1000.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-1000.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S118-200',
query: '(nwr["traffic_sign"="ES:S118-200"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-200.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-200.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-200.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S118-250',
query: '(nwr["traffic_sign"="ES:S118-250"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-250.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-250.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-250.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S118-300',
query: '(nwr["traffic_sign"="ES:S118-300"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-300.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-300.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-300.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S118-400',
query: '(nwr["traffic_sign"="ES:S118-400"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-400.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-400.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-400.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S118-500',
query: '(nwr["traffic_sign"="ES:S118-500"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-500.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-500.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-500.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S118-800',
query: '(nwr["traffic_sign"="ES:S118-800"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-800.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-800.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-800.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES – Servicio',
title: 'ES:S119',
query: '(nwr["traffic_sign"="ES:S119"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S119.png',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S119.png',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S119.png',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},
 {

   group: 'ES – Indicación',
   title: 'ES:trunk',
   query: '(nwr[~"^traffic_sign"~"ES:trunk"]({{bbox}});node(w););out meta;',
   iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_trunk.png',
   iconStyle: 'background-color:rgba(255,255,255,0.4)',
   style: function (feature) {
    var key_regex = /^traffic_sign/
    var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
    var name = feature.get(name_key) || '';
    var styles = {
     'traffic_sign:forward': {
      'ES:trunk': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_trunk.png',
       rotation: 0,
       scale: 0.30
      })
      })
     },
     'traffic_sign:backward': {
      'ES:trunk': new ol.style.Style({
       image: new ol.style.Icon({
       src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_trunk.png',
       rotation:9.4,
       scale: 0.30
      })
      })
     },
     'traffic_sign': {
      'ES:trunk': new ol.style.Style({
       zIndex: 100,
       stroke: new ol.style.Stroke({
        color: 'rgba(246, 99, 79, 1.0)',
        width: 1
       }),
       fill: new ol.style.Fill({
        color: 'rgba(246, 99, 79, 0.3)'
       }),
       text: new ol.style.Text({
        text: name
       })
      })
     }
    };
    for (var key in styles) {
     var value = feature.get(key);
     if (value !== undefined) {
      for (var regexp in styles[key]) {
       if (new RegExp(regexp).test(value)) {
        return styles[key][regexp];
       }
      }
     }
    }
    return null;
   } 
   
  }

		
	],

	//Es crida sempre que es fa click sobre el mapa
	onClickEvent: function(evt, view, coordinateLL) {

		var complete = $('<div>').html(config.i18n.completeWith);
		
		//Mapcomplete direcciones
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'Direcciones', href: 'https://mapcomplete.org/index.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Fwherethestreetshavenonumber.json&language=en#welcome', target: '_blank'}).html($('<img>').attr({src:'https://raw.githubusercontent.com/yopaseopor/mcquests/master/images/icones_adreces/casa_plena.svg', height: 20, width: 20})));
		
		//Mapcomplete nombres antiguos
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'Nombres antiguos', href: 'https://mapcomplete.org/index.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Fturnbacktime.json&language=en#welcome', target: '_blank'}).html($('<img>').attr({src:'https://cdn.pixabay.com/photo/2016/12/20/05/24/store-1919713_960_720.png', height: 20, width: 20})));
		
		//OSM Hydrants
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Hydrants', href: 'https://www.osmhydrant.org/en/#zoom=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0], target: '_blank'}).html($('<img>').attr({src: imgSrc + 'icones/mc_operationalstatusdate.svg', height: 20, width: 20})));
		
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'Mapcomplete hidrantes', href: 'https://mapcomplete.org/hailhydrant.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&language=en&background=osm', target: '_blank'}).html($('<img>').attr({src:'https://yopaseopor.github.io/osmpoismap/src/img/osmffmap_logo.svg', height: 20, width: 20})));
		
		//Mapcomplete nombres antiguos
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'Pasos peatones', href: 'https://mapcomplete.org/index.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] +'&userlayout=https%3A%2F%2Fraw.githubusercontent.com%2Fyopaseopor%2Fmcquests%2Fmain%2Fcrossingtime.json&language=en#welcome', target: '_blank'}).html($('<img>').attr({src:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S13.png', height: 20, width: 20})));
		
		//Mapcomplete basura
		complete.append($('<a>').css('marginLeft', 5).attr({title: 'Basura y reciclaje', href: 'https://mapcomplete.org/waste.html?z=' + view.getZoom() +'&lat='+ coordinateLL[1] +'&lon='+ coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src:'https://mapcomplete.org/assets_generated_images_theme_waste_white_background512.eecde45b.png', height: 20, width: 20})));
		
		var edit = $('<div>').html(config.i18n.editWith);
		//ID editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'iD', href: 'https://www.openstreetmap.org/edit?editor=id&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'ID.svg', height: 20, width: 20})));
		//Potlatch 2 editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'Potlatch 2', href: 'https://www.openstreetmap.org/edit?editor=potlatch2&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'potlatch2logobig.png', height: 20, width: 20})));
		//JOSM editor
		edit.append($('<a>').css('marginLeft', 5).attr({title: 'JOSM', href: 'https://www.openstreetmap.org/edit?editor=remote&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'JOSM Logotype 2019.svg', height: 20, width: 20})));

		var open = $('<div>').html(config.i18n.openWith);
		//OSM
		open.append($('<a>').css('marginLeft', 5).attr({title: 'OSM', href: 'https://www.openstreetmap.org/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom(), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osm_logo-layer.svg', height: 20, width: 20})));
		//Here WeGo
		open.append($('<a>').css('marginLeft', 5).attr({title: 'HERE WeGo', href: 'https://wego.here.com/?map=' + coordinateLL[1] + ',' + coordinateLL[0] + ',' + Math.min(view.getZoom(), 18) + ',transit', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'here_logo.png', height: 20, width: 20})));
		//Google
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Google Maps', href: 'https://maps.google.es/maps?ll=' + coordinateLL[1] + ',' + coordinateLL[0] + '&z=' + Math.min(view.getZoom(), 21), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'gmaps_logo_layer.png', height: 20, width: 20})));
		//Apple
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Apple Maps', href: 'https://duckduckgo.com/?t=ffab&q=' + coordinateLL[1] + ',' + coordinateLL[0] + '+Show+on+Map&ia=maps&iaxm=maps,' + Math.min(view.getZoom(), 21), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'applemaps_logo.png', height: 20, width: 20})));
		//Bing
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Bing', href: 'https://www.bing.com/maps?cp=' + coordinateLL[1] + '~' + coordinateLL[0] + '&lvl=' + Math.min(view.getZoom(), 20), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'bing_logo.png', height: 20, width: 20})));
		//Mapillary
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Mapillary', href: 'https://www.mapillary.com/app/?lat=' + coordinateLL[1] + '&lng=' + coordinateLL[0] + '&z=' + Math.min(view.getZoom(), 20), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'mapillary_logo.png', height: 20, width: 20})));
		
		//Karta View
		open.append($('<a>').css('marginLeft', 5).attr({title: 'Karta View', href: 'https://kartaview.org/map/@' + coordinateLL[1] + ',' + coordinateLL[0] + ',' + Math.min(view.getZoom(), 20) + 'z' , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'kartaview_logo.png', height: 20, width: 20})));
		
		var tool = $('<div>').html(config.i18n.checkTools);
		//Notes a OSM
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Notes a OSM', href: 'https://www.openstreetmap.org/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + view.getZoom() + '&layers=N', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osm_logo-layer.svg', height: 20, width: 20})));
		//Keep right!
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Keep right!', href: 'https://www.keepright.at/report_map.php?lang=es&lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + Math.min(view.getZoom(), 19) + '&ch50=1&ch191=1&ch195=1&ch201=1&ch205=1&ch206=1&ch311=1&ch312=1&ch313=1&ch402=1&number_of_tristate_checkboxes=8&highlight_error_id=0&highlight_schema=0show_ign=1&show_tmpign=1&layers=B0T&ch=0%2C50%2C70%2C170%2C191%2C195%2C201%2C205%2C206%2C220%2C231%2C232%2C311%2C312%2C313%2C402', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'keepright_logo.png', height: 20, width: 20})));
		//Geofabrik Tools
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Geofabrik Tools', href: 'https://tools.geofabrik.de/osmi/?lon=' + coordinateLL[0] + '&lat=' + coordinateLL[1] + '&zoom=' + Math.min(view.getZoom(), 18) + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'geofabrik.png', height: 20, width: 20})));
		
		//Notes Review
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Notes Review', href: 'https://ent8r.github.io/NotesReview/?view=map&map=' + Math.min(view.getZoom(), 20) + '%2F' + coordinateLL[1] + '%2F' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'notesreview_logo.png', height: 20, width: 20})));
		
		//Latest OpenStreetMap Edits per Tile
		tool.append($('<a>').css('marginLeft', 5).attr({title: 'Latest OpenStreetMap Edits per Tile', href: 'https://resultmaps.neis-one.org/osm-change-tiles#' + view.getZoom() + '/' + coordinateLL[1] + '/' + coordinateLL[0], target: '_blank'}).html($('<img>').attr({src: imgSrc + 'neis-one_logo.png', height: 20, width: 20})));
		
		var show = $('<div>').html(config.i18n.showWith);
		//OpenLevelUp
		show.append($('<a>').css('marginLeft', 5).attr({title: 'OpenLevelUp!', href: 'https://openlevelup.net/#' + Math.min(view.getZoom(), 20) + '/' + coordinateLL[1] + '/' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'openlevelup_logo.png', height: 20, width: 20})));
		
		//Waymarkedtrails
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Waymarked trails', href: 'https://hiking.waymarkedtrails.org/#?map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'waymarkedtrails_logo.png', height: 20, width: 20})));
		
		//OpenCampingMap
		show.append($('<a>').css('marginLeft', 5).attr({title: 'OpenCampingMap', href: 'https://opencampingmap.org/#' + Math.min(view.getZoom(), 20) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '/0/1/fff', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'opencampingmap_logo.svg', height: 20, width: 20})));
		
		//Osmand
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Osmand', href: 'https://osmand.net/map#' + Math.min(view.getZoom(), 20) + '/' + coordinateLL[1] + '/' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmand_logo.png', height: 20, width: 20})));
		
		//Openrouteservice
		show.append($('<a>').css('marginLeft', 5).attr({title: 'OpenRouteService', href: 'https://maps.openrouteservice.org/#/place/@' + coordinateLL[0] + ',' + coordinateLL[1] + ',' + Math.min(view.getZoom(), 20) , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'ors_logo.svg', height: 20, width: 20})));
		
		//OSM Routing Machine
		show.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Routing Machine', href: 'http://map.project-osrm.org/?z=' + Math.min(view.getZoom(), 20) + '&center=' + coordinateLL[1] + '%2C' + coordinateLL[0] + '&hl=en&alt=0&srv=0', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osrm_logo.png', height: 20, width: 20})));
		
		//Graphhopper
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Graphhopper', href: 'https://graphhopper.com/maps/?point=' + coordinateLL[1] + '%2C' + coordinateLL[0] + '&locale=en&elevation=true&profile=car&use_miles=false&selected_detail=Elevation&layer=Omniscale', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'graphhopper_logo.png', height: 20, width: 20})));
		
		//Brouter
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Brouter', href: 'http://brouter.de/brouter-web/#map=' + Math.min(view.getZoom(), 20) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '/standard', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'brouter_logo.png', height: 20, width: 20})));
		
		//F4 Map 3D
		show.append($('<a>').css('marginLeft', 5).attr({title: 'F4 Map 3D', href: 'https://demo.f4map.com/#lat=' + coordinateLL[1] + '&lon=' + coordinateLL[0] + '&zoom=' + Math.min(view.getZoom(), 20) + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'f4map_logo.png', height: 20, width: 20})));
		
		//Qwant
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Qwant', href: 'https://www.qwant.com/maps/place/latlon:' + coordinateLL[1] + ':' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'qwantmaps_logo.svg', height: 20, width: 20})));
		
		//Mapy.cz
		show.append($('<a>').css('marginLeft', 5).attr({title: 'Mapy.cz', href: 'https://en.mapy.cz/zakladni?x=' + coordinateLL[0] + '&y=' + coordinateLL[1] + '&z=' + Math.min(view.getZoom(), 20), target: '_blank'}).html($('<img>').attr({src: imgSrc + 'mapycz_logo.png', height: 20, width: 20})));
		
		//OpenStreetBrowser
		show.append($('<a>').css('marginLeft', 5).attr({title: 'OpenStreetBrowser', href: 'https://www.openstreetbrowser.org/#map=' + Math.min(view.getZoom(), 20) + '/' + coordinateLL[1] + '/' + coordinateLL[0] , target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osb_logo.png', height: 20, width: 20})));
		
		var show2 = $('<div>').html(config.i18n.show2With);
		
		//OSM Accessibility Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Accessibility Map', href: 'https://yopaseopor.github.io/osmaccessibilitymap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmaccessibilitymap_logo.svg', height: 20, width: 20})));
		
				//OSM FireFighters Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Fire Fighters Map', href: 'https://yopaseopor.github.io/osmffmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmffmap_logo.svg', height: 20, width: 20})));
		
				//OSM Historic Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Historic Map', href: 'https://yopaseopor.github.io/osmhistoricmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmhistoricmap_logo.png', height: 20, width: 20})));
				
				//OSM Lit Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Lit Map', href: 'https://yopaseopor.github.io/osmlitmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmlitmap_logo.svg', height: 20, width: 20})));
		
				//OSM Lit Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Limits Map', href: 'https://yopaseopor.github.io/osmlimitsmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmlimitsmap_logo.svg', height: 20, width: 20})));
		
				//OSM Library Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Library Map', href: 'https://yopaseopor.github.io/osmlibrarymap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmlibrarymap_logo.svg', height: 20, width: 20})));
		
				//OSM MTB Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM MTB Map', href: 'https://yopaseopor.github.io/osmmtbmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmaccessibilitymap_logo.svg', height: 20, width: 20})));
		
				//OSM Parking Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Parking Map', href: 'https://osm-es.github.io/osmparkingmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmparkingmap_logo.svg', height: 20, width: 20})));
		
				//OSM Recycling Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Recycling Map', href: 'https://yopaseopor.github.io/osmrecyclingmap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmrecyclingmap_logo.svg', height: 20, width: 20})));
		
				//OSM Validator Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM Validator Map', href: 'https://yopaseopor.github.io/osmvalidatormap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmvalidatormap_logo.svg', height: 20, width: 20})));
		
				//OSM POIs Map
		show2.append($('<a>').css('marginLeft', 5).attr({title: 'OSM POIs Map', href: 'https://yopaseopor.github.io/osmpoismap/#map=' + Math.min(view.getZoom(), 18) + '/' + coordinateLL[1] + '/' + coordinateLL[0] + '&view=tagging', target: '_blank'}).html($('<img>').attr({src: imgSrc + 'osmpoismap_logo.svg', height: 20, width: 20})));
		
					return $.merge($.merge($.merge($.merge($.merge(open, show), show2), tool), complete), edit);
	},

	//Es crida per cada element trobat al fer click
	forFeatureAtPixel: function(evt, feature) {
		var node = $('<div>').css('borderTop', '1px solid');
		var metaNode = feature.get('meta');

		if (metaNode && metaNode['type']) {
			var nodeType = metaNode['type'];
			node.append([config.i18n[nodeType==='node' ? 'nodeLabel' : 'wayLabel'], ' ', $('<a>').css('fontWeight', 900).attr({href: 'https://www.openstreetmap.org/' + nodeType + '/' + feature.getId(), target: '_blank'}).html(feature.getId()), '<br/>']);
		} else {
			node.append([config.i18n.nodeLabel, ' ', $('<span>').css('fontWeight', 900).html(feature.getId()), '<br/>']);
		}

		$.each(feature.getProperties(), function (index, value) {
			if (typeof value !== 'object') {
				node.append([$('<a>').attr({href: 'https://wiki.openstreetmap.org/wiki/Key:' + index + '?uselang=ca', target: '_blank'}).html(index), ': ', value, '<br/>']);
			}
		});

		if (metaNode) {
			var metaNodeDiv = $('<div>').css({'borderLeft': '1px solid', 'margin': '2px 0 0 3px', 'paddingLeft': '3px'});
			$.each(metaNode, function (index, value) {
				if (index !== 'id' && index !== 'type' && index !== 'uid') {
					var valueEl = value;
					switch (index) {
						case 'user':
							valueEl = $('<a>').attr({href: 'https://www.openstreetmap.org/user/' + value, target: '_blank'}).html(value);
							break;
						case 'changeset':
							valueEl = $('<a>').attr({href: 'https://www.openstreetmap.org/changeset/' + value, target: '_blank'}).html(value);
							break;
					}
					metaNodeDiv.append([index, ': ', valueEl, '<br/>']);
				}
			});
			node.append(metaNodeDiv);
		}

		return node;
	},

	//Es crida sempre que es fa click sobre el mapa
	onClickEventExtra: function(evt, view, coordinateLL, numFeatures) {

		if (!numFeatures) {
			//TODO Consulta dels nodes proxims a la posicio
			var marge = 0.0003,
				query = 'node({{bbox}});out;';

			query = query.replace('{{bbox}}', (coordinateLL[1] - marge) + ',' + (coordinateLL[0] - marge) + ',' + (coordinateLL[1] + marge) + ',' + (coordinateLL[0] + marge));
			console.log('query:', query);
		}

		return {};
	}
};
