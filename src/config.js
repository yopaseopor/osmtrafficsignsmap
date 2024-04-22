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
			group: 'ES - Test',
			title: 'ES:R2',
			query: '(nwr[~"^traffic_sign"~"ES:R2"]({{bbox}});node(w););out meta;',
			iconSrc: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png',
			iconStyle: 'background-color:rgba(255,255,255,0.4)',
			style: function (feature) {
				var key_regex = /^traffic_sign/
				var name_key = feature.getKeys().filter(function(t){return t.match(key_regex)}).pop() || "name"
				var name = feature.get(name_key) || '';
				var styles = {
					'traffic_sign:forward': {
						'ES:R2': new ol.style.Style({
							image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png',
							rotation: 0,
							scale: 0.30
						})
						})
					},
					'traffic_sign:backward': {
						'ES:R2': new ol.style.Style({
							image: new ol.style.Icon({
							src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.png',
							rotation:9.4,
							scale: 0.30
						})
						})
					},
					'traffic_sign': {
						'ES:R2': new ol.style.Style({
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
		 
},{
group: 'ES',
title: 'ES:',
query: '(nwr[~"^traffic_sign"~"ES:"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:B1a',
query: '(nwr[~"^traffic_sign"~"ES:B1a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B1a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B1a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B1a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:B1b',
query: '(nwr[~"^traffic_sign"~"ES:B1b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B1b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B1b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B1b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:B2a',
query: '(nwr[~"^traffic_sign"~"ES:B2a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:B2b',
query: '(nwr[~"^traffic_sign"~"ES:B2b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:B2c',
query: '(nwr[~"^traffic_sign"~"ES:B2c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2c.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2c.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2c.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:B2d',
query: '(nwr[~"^traffic_sign"~"ES:B2d"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2d.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2d.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2d.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:B2e',
query: '(nwr[~"^traffic_sign"~"ES:B2e"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2e.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2e.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_B2e.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:com:s860',
query: '(nwr[~"^traffic_sign"~"ES:CAT:com:s860"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_com_s860.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_com_s860.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_com_s860.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:ID400',
query: '(nwr[~"^traffic_sign"~"ES:CAT:ID400"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID400.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID400.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID400.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:ID410',
query: '(nwr[~"^traffic_sign"~"ES:CAT:ID410"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID410.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID410.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID410.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:ID420',
query: '(nwr[~"^traffic_sign"~"ES:CAT:ID420"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID420.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID420.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID420.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:ID430',
query: '(nwr[~"^traffic_sign"~"ES:CAT:ID430"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID430.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID430.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID430.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:ID440',
query: '(nwr[~"^traffic_sign"~"ES:CAT:ID440"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID440.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID440.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID440.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:ID450',
query: '(nwr[~"^traffic_sign"~"ES:CAT:ID450"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID450.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID450.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_ID450.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:LOC500',
query: '(nwr[~"^traffic_sign"~"ES:CAT:LOC500"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC500.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC500.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC500.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:LOC510',
query: '(nwr[~"^traffic_sign"~"ES:CAT:LOC510"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC510.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC510.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC510.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:LOC512',
query: '(nwr[~"^traffic_sign"~"ES:CAT:LOC512"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC512.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC512.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC512.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:LOC512a',
query: '(nwr[~"^traffic_sign"~"ES:CAT:LOC512a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC512a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC512a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC512a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:LOC520',
query: '(nwr[~"^traffic_sign"~"ES:CAT:LOC520"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC520.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC520.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC520.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:LOC530',
query: '(nwr[~"^traffic_sign"~"ES:CAT:LOC530"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC530.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC530.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC530.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:LOC540',
query: '(nwr[~"^traffic_sign"~"ES:CAT:LOC540"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC540.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC540.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC540.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:LOC541',
query: '(nwr[~"^traffic_sign"~"ES:CAT:LOC541"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC541.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC541.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC541.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:LOC550',
query: '(nwr[~"^traffic_sign"~"ES:CAT:LOC550"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC550.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC550.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_LOC550.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR10',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR10"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR10.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR10.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR10.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR21',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR21"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR21.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR21.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR21.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR21a',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR21a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR21a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR21a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR21a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR21b',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR21b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR21b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR21b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR21b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR21c',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR21c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR21c.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR21c.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR21c.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR24a',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR24a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR24a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR24a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR24a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR24b',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR24b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR24b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR24b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR24b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR24c',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR24c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR24c.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR24c.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR24c.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR25',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR25"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR25.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR25.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR25.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR25b',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR25b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR25b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR25b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR25b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR25c',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR25c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR25c.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR25c.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR25c.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR30',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR30"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR30.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR30.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR30.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR31',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR31"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR31.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR31.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR31.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR32',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR32"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR32.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR32.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR32.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR41a',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR41a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR41a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR41a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR41a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR41b',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR41b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR41b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR41b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR41b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR41c',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR41c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR41c.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR41c.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR41c.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR42a',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR42a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR42a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR42a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR42a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR42b',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR42b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR42b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR42b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR42b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR42c',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR42c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR42c.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR42c.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR42c.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR43a',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR43a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR43a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR43a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR43a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR43b',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR43b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR43b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR43b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR43b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR43c',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR43c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR43c.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR43c.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR43c.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR44a',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR44a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR44a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR44a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR44a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR44b',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR44b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR44b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR44b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR44b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR44c',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR44c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR44c.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR44c.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR44c.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR51',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR51"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR51.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR51.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR51.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR52',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR52"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR52.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR52.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR52.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR53punt1',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR53punt1"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR53punt1.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR53punt1.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR53punt1.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR53punt2',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR53punt2"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR53punt2.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR53punt2.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR53punt2.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR59',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR59"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR59.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR59.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR59.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR60',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR60"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR60.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR60.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR60.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR61',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR61"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR61.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR61.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR61.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR62',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR62"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR62.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR62.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR62.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:OR63',
query: '(nwr[~"^traffic_sign"~"ES:CAT:OR63"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR63.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR63.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_OR63.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:radar',
query: '(nwr[~"^traffic_sign"~"ES:CAT:radar"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_radar.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_radar.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_radar.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:radar2',
query: '(nwr[~"^traffic_sign"~"ES:CAT:radar2"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_radar2.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_radar2.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_radar2.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:S230',
query: '(nwr[~"^traffic_sign"~"ES:CAT:S230"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_S230.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_S230.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_S230.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:S270',
query: '(nwr[~"^traffic_sign"~"ES:CAT:S270"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_S270.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_S270.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_S270.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:S300',
query: '(nwr[~"^traffic_sign"~"ES:CAT:S300"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_S300.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_S300.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_S300.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:URB',
query: '(nwr[~"^traffic_sign"~"ES:CAT:URB"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_URB.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_URB.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_URB.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:CAT:URBL',
query: '(nwr[~"^traffic_sign"~"ES:CAT:URBL"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_URBL.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_URBL.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_CAT_URBL.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:H75',
query: '(nwr[~"^traffic_sign"~"ES:H75"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_H75.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_H75.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_H75.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:HV120',
query: '(nwr[~"^traffic_sign"~"ES:HV120"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_HV120.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_HV120.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_HV120.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P1',
query: '(nwr[~"^traffic_sign"~"ES:P1"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P10a',
query: '(nwr[~"^traffic_sign"~"ES:P10a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P10b',
query: '(nwr[~"^traffic_sign"~"ES:P10b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P10c',
query: '(nwr[~"^traffic_sign"~"ES:P10c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10c.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10c.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P10c.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P11',
query: '(nwr[~"^traffic_sign"~"ES:P11"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P11.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P11.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P11.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P11a',
query: '(nwr[~"^traffic_sign"~"ES:P11a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P11a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P11a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P11a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P12',
query: '(nwr[~"^traffic_sign"~"ES:P12"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P12.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P12.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P12.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P13a',
query: '(nwr[~"^traffic_sign"~"ES:P13a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P13a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P13a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P13a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P13b',
query: '(nwr[~"^traffic_sign"~"ES:P13b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P13b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P13b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P13b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P14a',
query: '(nwr[~"^traffic_sign"~"ES:P14a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P14a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P14a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P14a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P14b',
query: '(nwr[~"^traffic_sign"~"ES:P14b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P14b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P14b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P14b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P15',
query: '(nwr[~"^traffic_sign"~"ES:P15"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P15a',
query: '(nwr[~"^traffic_sign"~"ES:P15a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P15b',
query: '(nwr[~"^traffic_sign"~"ES:P15b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P15b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16a-10',
query: '(nwr[~"^traffic_sign"~"ES:P16a-10"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-10.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-10.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-10.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16a-11',
query: '(nwr[~"^traffic_sign"~"ES:P16a-11"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-11.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-11.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-11.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16a-12',
query: '(nwr[~"^traffic_sign"~"ES:P16a-12"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-12.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-12.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-12.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16a-13',
query: '(nwr[~"^traffic_sign"~"ES:P16a-13"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-13.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-13.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-13.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16a-15',
query: '(nwr[~"^traffic_sign"~"ES:P16a-15"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-15.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-15.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-15.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16a-17',
query: '(nwr[~"^traffic_sign"~"ES:P16a-17"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-17.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-17.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-17.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16a-20',
query: '(nwr[~"^traffic_sign"~"ES:P16a-20"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-20.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-20.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-20.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16a-4',
query: '(nwr[~"^traffic_sign"~"ES:P16a-4"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-4.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-4.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-4.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16a-5',
query: '(nwr[~"^traffic_sign"~"ES:P16a-5"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-5.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-5.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-5.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16a-6',
query: '(nwr[~"^traffic_sign"~"ES:P16a-6"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-6.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-6.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-6.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16a-7',
query: '(nwr[~"^traffic_sign"~"ES:P16a-7"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-7.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-7.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-7.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16a-75',
query: '(nwr[~"^traffic_sign"~"ES:P16a-75"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-75.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-75.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-75.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16a-8',
query: '(nwr[~"^traffic_sign"~"ES:P16a-8"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-8.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-8.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-8.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16a-9',
query: '(nwr[~"^traffic_sign"~"ES:P16a-9"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-9.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-9.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a-9.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16a',
query: '(nwr[~"^traffic_sign"~"ES:P16a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16b-10',
query: '(nwr[~"^traffic_sign"~"ES:P16b-10"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-10.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-10.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-10.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16b-11',
query: '(nwr[~"^traffic_sign"~"ES:P16b-11"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-11.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-11.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-11.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16b-12',
query: '(nwr[~"^traffic_sign"~"ES:P16b-12"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-12.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-12.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-12.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16b-13',
query: '(nwr[~"^traffic_sign"~"ES:P16b-13"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-13.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-13.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-13.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16b-15',
query: '(nwr[~"^traffic_sign"~"ES:P16b-15"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-15.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-15.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-15.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16b-17',
query: '(nwr[~"^traffic_sign"~"ES:P16b-17"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-17.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-17.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-17.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16b-20',
query: '(nwr[~"^traffic_sign"~"ES:P16b-20"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-20.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-20.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-20.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16b-4',
query: '(nwr[~"^traffic_sign"~"ES:P16b-4"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-4.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-4.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-4.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16b-5',
query: '(nwr[~"^traffic_sign"~"ES:P16b-5"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-5.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-5.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-5.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16b-6',
query: '(nwr[~"^traffic_sign"~"ES:P16b-6"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-6.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-6.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-6.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16b-7',
query: '(nwr[~"^traffic_sign"~"ES:P16b-7"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-7.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-7.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-7.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16b-75',
query: '(nwr[~"^traffic_sign"~"ES:P16b-75"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-75.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-75.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-75.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16b-8',
query: '(nwr[~"^traffic_sign"~"ES:P16b-8"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-8.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-8.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-8.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16b-9',
query: '(nwr[~"^traffic_sign"~"ES:P16b-9"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-9.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-9.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b-9.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P16b',
query: '(nwr[~"^traffic_sign"~"ES:P16b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P16b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P17',
query: '(nwr[~"^traffic_sign"~"ES:P17"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P17a',
query: '(nwr[~"^traffic_sign"~"ES:P17a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P17b',
query: '(nwr[~"^traffic_sign"~"ES:P17b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P17b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P18',
query: '(nwr[~"^traffic_sign"~"ES:P18"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P18.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P18.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P18.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P19',
query: '(nwr[~"^traffic_sign"~"ES:P19"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P19.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P19.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P19.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P1a',
query: '(nwr[~"^traffic_sign"~"ES:P1a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P1b',
query: '(nwr[~"^traffic_sign"~"ES:P1b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P1c',
query: '(nwr[~"^traffic_sign"~"ES:P1c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1c.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1c.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1c.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P1d',
query: '(nwr[~"^traffic_sign"~"ES:P1d"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1d.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1d.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P1d.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P2',
query: '(nwr[~"^traffic_sign"~"ES:P2"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P2.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P2.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P2.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P20',
query: '(nwr[~"^traffic_sign"~"ES:P20"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P20.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P20.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P20.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P20aP',
query: '(nwr[~"^traffic_sign"~"ES:P20aP"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P20aP.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P20aP.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P20aP.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P21',
query: '(nwr[~"^traffic_sign"~"ES:P21"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P21.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P21.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P21.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P22',
query: '(nwr[~"^traffic_sign"~"ES:P22"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P22.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P22.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P22.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P23',
query: '(nwr[~"^traffic_sign"~"ES:P23"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P23.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P23.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P23.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P24',
query: '(nwr[~"^traffic_sign"~"ES:P24"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P24.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P24.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P24.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P25',
query: '(nwr[~"^traffic_sign"~"ES:P25"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P25.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P25.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P25.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P26',
query: '(nwr[~"^traffic_sign"~"ES:P26"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P26.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P26.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P26.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P27',
query: '(nwr[~"^traffic_sign"~"ES:P27"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P27.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P27.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P27.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P28',
query: '(nwr[~"^traffic_sign"~"ES:P28"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P28.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P28.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P28.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P29',
query: '(nwr[~"^traffic_sign"~"ES:P29"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P29.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P29.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P29.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P3',
query: '(nwr[~"^traffic_sign"~"ES:P3"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P3.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P3.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P3.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P30',
query: '(nwr[~"^traffic_sign"~"ES:P30"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P30.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P30.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P30.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P31',
query: '(nwr[~"^traffic_sign"~"ES:P31"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P31.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P31.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P31.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P32',
query: '(nwr[~"^traffic_sign"~"ES:P32"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P32.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P32.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P32.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P33',
query: '(nwr[~"^traffic_sign"~"ES:P33"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P33.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P33.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P33.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P34',
query: '(nwr[~"^traffic_sign"~"ES:P34"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P34.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P34.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P34.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P4',
query: '(nwr[~"^traffic_sign"~"ES:P4"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P4.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P4.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P4.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P5',
query: '(nwr[~"^traffic_sign"~"ES:P5"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P5.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P5.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P5.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P50',
query: '(nwr[~"^traffic_sign"~"ES:P50"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P50.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P50.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P50.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P6',
query: '(nwr[~"^traffic_sign"~"ES:P6"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P6.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P6.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P6.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P7',
query: '(nwr[~"^traffic_sign"~"ES:P7"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P7.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P7.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P7.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P8',
query: '(nwr[~"^traffic_sign"~"ES:P8"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P8.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P8.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P8.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P9a',
query: '(nwr[~"^traffic_sign"~"ES:P9a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P9b',
query: '(nwr[~"^traffic_sign"~"ES:P9b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:P9c',
query: '(nwr[~"^traffic_sign"~"ES:P9c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9c.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9c.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_P9c.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R1',
query: '(nwr[~"^traffic_sign"~"ES:R1"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R1.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R1.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R1.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R100',
query: '(nwr[~"^traffic_sign"~"ES:R100"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R100.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R100.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R100.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R101',
query: '(nwr[~"^traffic_sign"~"ES:R101"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R101.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R101.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R101.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R102',
query: '(nwr[~"^traffic_sign"~"ES:R102"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R102.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R102.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R102.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R103',
query: '(nwr[~"^traffic_sign"~"ES:R103"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R103.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R103.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R103.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R104',
query: '(nwr[~"^traffic_sign"~"ES:R104"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R104.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R104.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R104.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R105',
query: '(nwr[~"^traffic_sign"~"ES:R105"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R105.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R105.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R105.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R106',
query: '(nwr[~"^traffic_sign"~"ES:R106"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R106.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R106.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R106.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R107-10',
query: '(nwr[~"^traffic_sign"~"ES:R107-10"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-10.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-10.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-10.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R107-12',
query: '(nwr[~"^traffic_sign"~"ES:R107-12"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-12.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-12.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-12.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R107-16',
query: '(nwr[~"^traffic_sign"~"ES:R107-16"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-16.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-16.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-16.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R107-18',
query: '(nwr[~"^traffic_sign"~"ES:R107-18"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-18.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-18.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-18.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R107-2',
query: '(nwr[~"^traffic_sign"~"ES:R107-2"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-2.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-2.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-2.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R107-25',
query: '(nwr[~"^traffic_sign"~"ES:R107-25"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-25.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-25.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-25.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R107-3',
query: '(nwr[~"^traffic_sign"~"ES:R107-3"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-3.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-3.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-3.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R107-35',
query: '(nwr[~"^traffic_sign"~"ES:R107-35"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-35.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-35.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-35.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R107-4',
query: '(nwr[~"^traffic_sign"~"ES:R107-4"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-4.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-4.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-4.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R107-45',
query: '(nwr[~"^traffic_sign"~"ES:R107-45"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-45.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-45.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-45.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R107-5',
query: '(nwr[~"^traffic_sign"~"ES:R107-5"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-5.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-5.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-5.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R107-55',
query: '(nwr[~"^traffic_sign"~"ES:R107-55"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-55.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-55.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-55.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R107-6',
query: '(nwr[~"^traffic_sign"~"ES:R107-6"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-6.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-6.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-6.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R107-65',
query: '(nwr[~"^traffic_sign"~"ES:R107-65"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-65.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-65.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-65.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R107-7',
query: '(nwr[~"^traffic_sign"~"ES:R107-7"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-7.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-7.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-7.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R107-75',
query: '(nwr[~"^traffic_sign"~"ES:R107-75"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-75.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-75.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-75.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R107-8',
query: '(nwr[~"^traffic_sign"~"ES:R107-8"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-8.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-8.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-8.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R107-85',
query: '(nwr[~"^traffic_sign"~"ES:R107-85"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-85.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-85.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-85.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R107-9',
query: '(nwr[~"^traffic_sign"~"ES:R107-9"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-9.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-9.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-9.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R107-95',
query: '(nwr[~"^traffic_sign"~"ES:R107-95"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-95.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-95.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107-95.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R107',
query: '(nwr[~"^traffic_sign"~"ES:R107"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R107.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R108',
query: '(nwr[~"^traffic_sign"~"ES:R108"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R108.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R108.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R108.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R109',
query: '(nwr[~"^traffic_sign"~"ES:R109"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R109.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R109.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R109.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R110',
query: '(nwr[~"^traffic_sign"~"ES:R110"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R110.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R110.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R110.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R111',
query: '(nwr[~"^traffic_sign"~"ES:R111"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R111.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R111.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R111.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R112',
query: '(nwr[~"^traffic_sign"~"ES:R112"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R112.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R112.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R112.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R113',
query: '(nwr[~"^traffic_sign"~"ES:R113"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R113.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R113.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R113.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R114',
query: '(nwr[~"^traffic_sign"~"ES:R114"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R114.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R114.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R114.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R115',
query: '(nwr[~"^traffic_sign"~"ES:R115"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R115.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R115.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R115.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R116',
query: '(nwr[~"^traffic_sign"~"ES:R116"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R116.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R116.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R116.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R117',
query: '(nwr[~"^traffic_sign"~"ES:R117"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R117.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R117.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R117.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R2',
query: '(nwr[~"^traffic_sign"~"ES:R2"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R2.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R200',
query: '(nwr[~"^traffic_sign"~"ES:R200"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R200.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R200.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R200.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R200a',
query: '(nwr[~"^traffic_sign"~"ES:R200a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R200a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R200a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R200a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R201-10',
query: '(nwr[~"^traffic_sign"~"ES:R201-10"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-10.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-10.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-10.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R201-11',
query: '(nwr[~"^traffic_sign"~"ES:R201-11"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-11.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-11.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-11.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R201-12',
query: '(nwr[~"^traffic_sign"~"ES:R201-12"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-12.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-12.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-12.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R201-14',
query: '(nwr[~"^traffic_sign"~"ES:R201-14"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-14.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-14.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-14.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R201-15',
query: '(nwr[~"^traffic_sign"~"ES:R201-15"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-15.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-15.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-15.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R201-16',
query: '(nwr[~"^traffic_sign"~"ES:R201-16"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-16.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-16.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-16.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R201-17',
query: '(nwr[~"^traffic_sign"~"ES:R201-17"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-17.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-17.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-17.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R201-20',
query: '(nwr[~"^traffic_sign"~"ES:R201-20"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-20.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-20.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-20.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R201-24',
query: '(nwr[~"^traffic_sign"~"ES:R201-24"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-24.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-24.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-24.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R201-29',
query: '(nwr[~"^traffic_sign"~"ES:R201-29"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-29.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-29.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-29.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R201-3',
query: '(nwr[~"^traffic_sign"~"ES:R201-3"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-3.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-3.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-3.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R201-35',
query: '(nwr[~"^traffic_sign"~"ES:R201-35"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-35.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-35.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-35.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R201-38',
query: '(nwr[~"^traffic_sign"~"ES:R201-38"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-38.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-38.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-38.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R201-4',
query: '(nwr[~"^traffic_sign"~"ES:R201-4"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-4.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-4.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-4.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R201-5',
query: '(nwr[~"^traffic_sign"~"ES:R201-5"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-5.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-5.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-5.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R201-55',
query: '(nwr[~"^traffic_sign"~"ES:R201-55"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-55.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-55.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-55.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R201-6',
query: '(nwr[~"^traffic_sign"~"ES:R201-6"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-6.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-6.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-6.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R201-65',
query: '(nwr[~"^traffic_sign"~"ES:R201-65"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-65.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-65.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-65.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R201-75',
query: '(nwr[~"^traffic_sign"~"ES:R201-75"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-75.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-75.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-75.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R201-8',
query: '(nwr[~"^traffic_sign"~"ES:R201-8"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-8.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-8.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201-8.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R201',
query: '(nwr[~"^traffic_sign"~"ES:R201"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R201.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R202-10',
query: '(nwr[~"^traffic_sign"~"ES:R202-10"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-10.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-10.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-10.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R202-2',
query: '(nwr[~"^traffic_sign"~"ES:R202-2"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-2.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-2.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-2.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R202-24',
query: '(nwr[~"^traffic_sign"~"ES:R202-24"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-24.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-24.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-24.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R202-5',
query: '(nwr[~"^traffic_sign"~"ES:R202-5"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-5.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-5.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-5.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R202-7',
query: '(nwr[~"^traffic_sign"~"ES:R202-7"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-7.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-7.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202-7.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R202',
query: '(nwr[~"^traffic_sign"~"ES:R202"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R202.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R203-10',
query: '(nwr[~"^traffic_sign"~"ES:R203-10"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203-10.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203-10.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203-10.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R203-7',
query: '(nwr[~"^traffic_sign"~"ES:R203-7"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203-7.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203-7.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203-7.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R203',
query: '(nwr[~"^traffic_sign"~"ES:R203"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R203.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R204-2',
query: '(nwr[~"^traffic_sign"~"ES:R204-2"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-2.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-2.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-2.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R204-21',
query: '(nwr[~"^traffic_sign"~"ES:R204-21"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-21.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-21.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-21.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R204-22',
query: '(nwr[~"^traffic_sign"~"ES:R204-22"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-22.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-22.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-22.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R204-23',
query: '(nwr[~"^traffic_sign"~"ES:R204-23"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-23.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-23.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-23.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R204-25',
query: '(nwr[~"^traffic_sign"~"ES:R204-25"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-25.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-25.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-25.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R204-3',
query: '(nwr[~"^traffic_sign"~"ES:R204-3"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-3.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-3.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-3.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R204-32',
query: '(nwr[~"^traffic_sign"~"ES:R204-32"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-32.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-32.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-32.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R204-34',
query: '(nwr[~"^traffic_sign"~"ES:R204-34"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-34.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-34.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-34.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R204-35',
query: '(nwr[~"^traffic_sign"~"ES:R204-35"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-35.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-35.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-35.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R204-36',
query: '(nwr[~"^traffic_sign"~"ES:R204-36"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-36.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-36.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-36.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R204-37',
query: '(nwr[~"^traffic_sign"~"ES:R204-37"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-37.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-37.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-37.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R204-38',
query: '(nwr[~"^traffic_sign"~"ES:R204-38"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-38.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-38.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-38.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R204-4',
query: '(nwr[~"^traffic_sign"~"ES:R204-4"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-4.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-4.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-4.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R204-41',
query: '(nwr[~"^traffic_sign"~"ES:R204-41"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-41.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-41.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-41.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R204-43',
query: '(nwr[~"^traffic_sign"~"ES:R204-43"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-43.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-43.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-43.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R204-45',
query: '(nwr[~"^traffic_sign"~"ES:R204-45"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-45.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-45.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204-45.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R204',
query: '(nwr[~"^traffic_sign"~"ES:R204"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R204.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-21',
query: '(nwr[~"^traffic_sign"~"ES:R205-21"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-21.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-21.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-21.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-22',
query: '(nwr[~"^traffic_sign"~"ES:R205-22"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-22.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-22.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-22.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-23',
query: '(nwr[~"^traffic_sign"~"ES:R205-23"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-23.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-23.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-23.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-24',
query: '(nwr[~"^traffic_sign"~"ES:R205-24"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-24.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-24.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-24.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-25',
query: '(nwr[~"^traffic_sign"~"ES:R205-25"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-25.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-25.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-25.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-26',
query: '(nwr[~"^traffic_sign"~"ES:R205-26"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-26.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-26.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-26.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-27',
query: '(nwr[~"^traffic_sign"~"ES:R205-27"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-27.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-27.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-27.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-28',
query: '(nwr[~"^traffic_sign"~"ES:R205-28"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-28.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-28.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-28.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-29',
query: '(nwr[~"^traffic_sign"~"ES:R205-29"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-29.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-29.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-29.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-31',
query: '(nwr[~"^traffic_sign"~"ES:R205-31"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-31.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-31.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-31.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-32',
query: '(nwr[~"^traffic_sign"~"ES:R205-32"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-32.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-32.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-32.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-33',
query: '(nwr[~"^traffic_sign"~"ES:R205-33"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-33.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-33.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-33.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-34',
query: '(nwr[~"^traffic_sign"~"ES:R205-34"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-34.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-34.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-34.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-35',
query: '(nwr[~"^traffic_sign"~"ES:R205-35"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-35.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-35.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-35.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-36',
query: '(nwr[~"^traffic_sign"~"ES:R205-36"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-36.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-36.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-36.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-37',
query: '(nwr[~"^traffic_sign"~"ES:R205-37"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-37.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-37.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-37.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-38',
query: '(nwr[~"^traffic_sign"~"ES:R205-38"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-38.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-38.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-38.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-39',
query: '(nwr[~"^traffic_sign"~"ES:R205-39"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-39.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-39.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-39.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-41',
query: '(nwr[~"^traffic_sign"~"ES:R205-41"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-41.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-41.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-41.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-42',
query: '(nwr[~"^traffic_sign"~"ES:R205-42"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-42.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-42.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-42.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-43',
query: '(nwr[~"^traffic_sign"~"ES:R205-43"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-43.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-43.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-43.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-44',
query: '(nwr[~"^traffic_sign"~"ES:R205-44"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-44.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-44.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-44.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-45',
query: '(nwr[~"^traffic_sign"~"ES:R205-45"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-45.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-45.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-45.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-46',
query: '(nwr[~"^traffic_sign"~"ES:R205-46"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-46.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-46.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-46.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-47',
query: '(nwr[~"^traffic_sign"~"ES:R205-47"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-47.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-47.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-47.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-48',
query: '(nwr[~"^traffic_sign"~"ES:R205-48"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-48.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-48.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-48.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-49',
query: '(nwr[~"^traffic_sign"~"ES:R205-49"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-49.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-49.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-49.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-51',
query: '(nwr[~"^traffic_sign"~"ES:R205-51"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-51.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-51.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-51.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-52',
query: '(nwr[~"^traffic_sign"~"ES:R205-52"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-52.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-52.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-52.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-53',
query: '(nwr[~"^traffic_sign"~"ES:R205-53"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-53.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-53.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-53.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-54',
query: '(nwr[~"^traffic_sign"~"ES:R205-54"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-54.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-54.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-54.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-55',
query: '(nwr[~"^traffic_sign"~"ES:R205-55"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-55.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-55.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-55.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-56',
query: '(nwr[~"^traffic_sign"~"ES:R205-56"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-56.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-56.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-56.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205-59',
query: '(nwr[~"^traffic_sign"~"ES:R205-59"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-59.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-59.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205-59.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R205',
query: '(nwr[~"^traffic_sign"~"ES:R205"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R205.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R3',
query: '(nwr[~"^traffic_sign"~"ES:R3"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R3.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R3.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R3.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R300-100',
query: '(nwr[~"^traffic_sign"~"ES:R300-100"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300-100.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300-100.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300-100.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R300-60',
query: '(nwr[~"^traffic_sign"~"ES:R300-60"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300-60.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300-60.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300-60.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R300-70',
query: '(nwr[~"^traffic_sign"~"ES:R300-70"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300-70.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300-70.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300-70.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R300-80',
query: '(nwr[~"^traffic_sign"~"ES:R300-80"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300-80.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300-80.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300-80.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R300',
query: '(nwr[~"^traffic_sign"~"ES:R300"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R300.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R301-10',
query: '(nwr[~"^traffic_sign"~"ES:R301-10"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-10.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-10.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-10.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R301-100',
query: '(nwr[~"^traffic_sign"~"ES:R301-100"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-100.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-100.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-100.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R301-110',
query: '(nwr[~"^traffic_sign"~"ES:R301-110"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-110.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-110.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-110.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R301-120',
query: '(nwr[~"^traffic_sign"~"ES:R301-120"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-120.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-120.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-120.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R301-20',
query: '(nwr[~"^traffic_sign"~"ES:R301-20"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-20.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-20.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-20.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R301-30',
query: '(nwr[~"^traffic_sign"~"ES:R301-30"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-30.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-30.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-30.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R301-40',
query: '(nwr[~"^traffic_sign"~"ES:R301-40"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-40.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-40.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-40.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R301-50',
query: '(nwr[~"^traffic_sign"~"ES:R301-50"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-50.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-50.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-50.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R301-60',
query: '(nwr[~"^traffic_sign"~"ES:R301-60"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-60.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-60.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-60.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R301-70',
query: '(nwr[~"^traffic_sign"~"ES:R301-70"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-70.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-70.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-70.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R301-80',
query: '(nwr[~"^traffic_sign"~"ES:R301-80"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-80.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-80.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-80.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R301-90',
query: '(nwr[~"^traffic_sign"~"ES:R301-90"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-90.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-90.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R301-90.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R302',
query: '(nwr[~"^traffic_sign"~"ES:R302"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R302.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R302.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R302.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R303',
query: '(nwr[~"^traffic_sign"~"ES:R303"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R303.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R303.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R303.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R304',
query: '(nwr[~"^traffic_sign"~"ES:R304"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R304.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R304.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R304.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R305',
query: '(nwr[~"^traffic_sign"~"ES:R305"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R305.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R305.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R305.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R306',
query: '(nwr[~"^traffic_sign"~"ES:R306"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R306.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R306.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R306.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R307',
query: '(nwr[~"^traffic_sign"~"ES:R307"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R307.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R308',
query: '(nwr[~"^traffic_sign"~"ES:R308"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R308a',
query: '(nwr[~"^traffic_sign"~"ES:R308a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R308b',
query: '(nwr[~"^traffic_sign"~"ES:R308b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R308c',
query: '(nwr[~"^traffic_sign"~"ES:R308c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308c.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308c.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308c.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R308d',
query: '(nwr[~"^traffic_sign"~"ES:R308d"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308d.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308d.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308d.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R308e',
query: '(nwr[~"^traffic_sign"~"ES:R308e"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308e.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308e.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R308e.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R309',
query: '(nwr[~"^traffic_sign"~"ES:R309"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R309.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R309.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R309.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R310',
query: '(nwr[~"^traffic_sign"~"ES:R310"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R310.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R310.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R310.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R4',
query: '(nwr[~"^traffic_sign"~"ES:R4"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R4.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R4.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R4.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R400a',
query: '(nwr[~"^traffic_sign"~"ES:R400a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R400b',
query: '(nwr[~"^traffic_sign"~"ES:R400b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R400c',
query: '(nwr[~"^traffic_sign"~"ES:R400c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400c.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400c.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400c.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R400d',
query: '(nwr[~"^traffic_sign"~"ES:R400d"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400d.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400d.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400d.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R400e',
query: '(nwr[~"^traffic_sign"~"ES:R400e"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400e.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400e.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R400e.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R401a',
query: '(nwr[~"^traffic_sign"~"ES:R401a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R401a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R401a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R401a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R401b',
query: '(nwr[~"^traffic_sign"~"ES:R401b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R401b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R401b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R401b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R401c',
query: '(nwr[~"^traffic_sign"~"ES:R401c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R401c.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R401c.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R401c.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R402',
query: '(nwr[~"^traffic_sign"~"ES:R402"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R402.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R402.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R402.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R403a',
query: '(nwr[~"^traffic_sign"~"ES:R403a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R403b',
query: '(nwr[~"^traffic_sign"~"ES:R403b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R403c',
query: '(nwr[~"^traffic_sign"~"ES:R403c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403c.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403c.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R403c.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R404',
query: '(nwr[~"^traffic_sign"~"ES:R404"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R404.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R404.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R404.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R405',
query: '(nwr[~"^traffic_sign"~"ES:R405"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R405.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R405.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R405.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R406',
query: '(nwr[~"^traffic_sign"~"ES:R406"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R406.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R406.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R406.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R407',
query: '(nwr[~"^traffic_sign"~"ES:R407"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R407.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R407.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R407.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R407b',
query: '(nwr[~"^traffic_sign"~"ES:R407b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R407b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R407b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R407b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R408',
query: '(nwr[~"^traffic_sign"~"ES:R408"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R408.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R408.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R408.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R409',
query: '(nwr[~"^traffic_sign"~"ES:R409"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R409.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R409.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R409.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R410',
query: '(nwr[~"^traffic_sign"~"ES:R410"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R410.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R410.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R410.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R411-20',
query: '(nwr[~"^traffic_sign"~"ES:R411-20"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-20.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-20.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-20.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R411-30',
query: '(nwr[~"^traffic_sign"~"ES:R411-30"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-30.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-30.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-30.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R411-50',
query: '(nwr[~"^traffic_sign"~"ES:R411-50"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-50.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-50.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-50.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R411-60',
query: '(nwr[~"^traffic_sign"~"ES:R411-60"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-60.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-60.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-60.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R411-70',
query: '(nwr[~"^traffic_sign"~"ES:R411-70"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-70.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-70.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-70.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R411-80',
query: '(nwr[~"^traffic_sign"~"ES:R411-80"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-80.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-80.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-80.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R411-90',
query: '(nwr[~"^traffic_sign"~"ES:R411-90"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-90.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-90.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411-90.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R411',
query: '(nwr[~"^traffic_sign"~"ES:R411"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R411.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R412',
query: '(nwr[~"^traffic_sign"~"ES:R412"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R412.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R412.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R412.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R413',
query: '(nwr[~"^traffic_sign"~"ES:R413"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R413.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R413.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R413.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R414',
query: '(nwr[~"^traffic_sign"~"ES:R414"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R414.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R414.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R414.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R415',
query: '(nwr[~"^traffic_sign"~"ES:R415"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R415.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R415.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R415.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R416',
query: '(nwr[~"^traffic_sign"~"ES:R416"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R416.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R416.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R416.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R417',
query: '(nwr[~"^traffic_sign"~"ES:R417"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R417.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R417.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R417.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R418',
query: '(nwr[~"^traffic_sign"~"ES:R418"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R418.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R418.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R418.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R5',
query: '(nwr[~"^traffic_sign"~"ES:R5"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R5.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R5.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R5.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R500',
query: '(nwr[~"^traffic_sign"~"ES:R500"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R500.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R500.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R500.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R501-100',
query: '(nwr[~"^traffic_sign"~"ES:R501-100"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-100.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-100.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-100.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R501-20',
query: '(nwr[~"^traffic_sign"~"ES:R501-20"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-20.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-20.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-20.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R501-30',
query: '(nwr[~"^traffic_sign"~"ES:R501-30"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-30.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-30.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-30.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R501-40',
query: '(nwr[~"^traffic_sign"~"ES:R501-40"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-40.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-40.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-40.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R501-50',
query: '(nwr[~"^traffic_sign"~"ES:R501-50"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-50.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-50.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-50.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R501-60',
query: '(nwr[~"^traffic_sign"~"ES:R501-60"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-60.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-60.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-60.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R501-70',
query: '(nwr[~"^traffic_sign"~"ES:R501-70"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-70.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-70.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-70.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R501-80',
query: '(nwr[~"^traffic_sign"~"ES:R501-80"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-80.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-80.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-80.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R501-90',
query: '(nwr[~"^traffic_sign"~"ES:R501-90"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-90.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-90.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501-90.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R501',
query: '(nwr[~"^traffic_sign"~"ES:R501"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R501.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R502',
query: '(nwr[~"^traffic_sign"~"ES:R502"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R502.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R502.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R502.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R503',
query: '(nwr[~"^traffic_sign"~"ES:R503"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R503.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R503.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R503.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R504',
query: '(nwr[~"^traffic_sign"~"ES:R504"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R504.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R504.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R504.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R505',
query: '(nwr[~"^traffic_sign"~"ES:R505"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R505.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R505.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R505.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R505a',
query: '(nwr[~"^traffic_sign"~"ES:R505a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R505a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R505a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R505a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R506-30',
query: '(nwr[~"^traffic_sign"~"ES:R506-30"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-30.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-30.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-30.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R506-50',
query: '(nwr[~"^traffic_sign"~"ES:R506-50"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-50.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-50.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-50.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R506-60',
query: '(nwr[~"^traffic_sign"~"ES:R506-60"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-60.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-60.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-60.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R506-70',
query: '(nwr[~"^traffic_sign"~"ES:R506-70"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-70.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-70.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-70.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R506-90',
query: '(nwr[~"^traffic_sign"~"ES:R506-90"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-90.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-90.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506-90.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R506',
query: '(nwr[~"^traffic_sign"~"ES:R506"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R506.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:R6',
query: '(nwr[~"^traffic_sign"~"ES:R6"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R6.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R6.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_R6.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:road:beacon:big',
query: '(nwr[~"^traffic_sign"~"ES:road:beacon:big"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_road_beacon_big.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_road_beacon_big.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_road_beacon_big.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S1',
query: '(nwr[~"^traffic_sign"~"ES:S1"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S1.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S1.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S1.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S10',
query: '(nwr[~"^traffic_sign"~"ES:S10"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S10.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S10.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S10.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S100-200',
query: '(nwr[~"^traffic_sign"~"ES:S100-200"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100-200.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100-200.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100-200.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S100-250',
query: '(nwr[~"^traffic_sign"~"ES:S100-250"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100-250.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100-250.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100-250.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S100-300',
query: '(nwr[~"^traffic_sign"~"ES:S100-300"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100-300.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100-300.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100-300.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S100-500',
query: '(nwr[~"^traffic_sign"~"ES:S100-500"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100-500.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100-500.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100-500.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S100',
query: '(nwr[~"^traffic_sign"~"ES:S100"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S100.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S101',
query: '(nwr[~"^traffic_sign"~"ES:S101"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S101.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S101.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S101.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S102',
query: '(nwr[~"^traffic_sign"~"ES:S102"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S102.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S102.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S102.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S103',
query: '(nwr[~"^traffic_sign"~"ES:S103"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S103.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S103.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S103.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S104',
query: '(nwr[~"^traffic_sign"~"ES:S104"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S104.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S104.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S104.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S105-1000',
query: '(nwr[~"^traffic_sign"~"ES:S105-1000"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-1000.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-1000.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-1000.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S105-200',
query: '(nwr[~"^traffic_sign"~"ES:S105-200"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-200.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-200.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-200.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S105-300',
query: '(nwr[~"^traffic_sign"~"ES:S105-300"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-300.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-300.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-300.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S105-400',
query: '(nwr[~"^traffic_sign"~"ES:S105-400"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-400.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-400.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-400.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S105-500',
query: '(nwr[~"^traffic_sign"~"ES:S105-500"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-500.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-500.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105-500.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S105',
query: '(nwr[~"^traffic_sign"~"ES:S105"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S105.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S106',
query: '(nwr[~"^traffic_sign"~"ES:S106"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S106.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S106.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S106.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S107',
query: '(nwr[~"^traffic_sign"~"ES:S107"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S107.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S107.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S107.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S108',
query: '(nwr[~"^traffic_sign"~"ES:S108"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S108.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S108.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S108.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S109',
query: '(nwr[~"^traffic_sign"~"ES:S109"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S109.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S109.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S109.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S11',
query: '(nwr[~"^traffic_sign"~"ES:S11"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S11.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S11.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S11.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S110-1000',
query: '(nwr[~"^traffic_sign"~"ES:S110-1000"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110-1000.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110-1000.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110-1000.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S110-200',
query: '(nwr[~"^traffic_sign"~"ES:S110-200"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110-200.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110-200.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110-200.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S110-300',
query: '(nwr[~"^traffic_sign"~"ES:S110-300"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110-300.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110-300.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110-300.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S110-500',
query: '(nwr[~"^traffic_sign"~"ES:S110-500"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110-500.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110-500.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110-500.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S110',
query: '(nwr[~"^traffic_sign"~"ES:S110"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S110.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S111-100',
query: '(nwr[~"^traffic_sign"~"ES:S111-100"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-100.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-100.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-100.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S111-1000',
query: '(nwr[~"^traffic_sign"~"ES:S111-1000"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-1000.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-1000.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-1000.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S111-200',
query: '(nwr[~"^traffic_sign"~"ES:S111-200"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-200.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-200.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-200.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S111-250',
query: '(nwr[~"^traffic_sign"~"ES:S111-250"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-250.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-250.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-250.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S111-300',
query: '(nwr[~"^traffic_sign"~"ES:S111-300"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-300.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-300.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-300.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S111-500',
query: '(nwr[~"^traffic_sign"~"ES:S111-500"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-500.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-500.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111-500.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S111',
query: '(nwr[~"^traffic_sign"~"ES:S111"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S111.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S112',
query: '(nwr[~"^traffic_sign"~"ES:S112"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S112.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S112.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S112.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S113',
query: '(nwr[~"^traffic_sign"~"ES:S113"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S113.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S113.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S113.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S114',
query: '(nwr[~"^traffic_sign"~"ES:S114"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S114.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S114.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S114.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S115',
query: '(nwr[~"^traffic_sign"~"ES:S115"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S115.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S115.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S115.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S116',
query: '(nwr[~"^traffic_sign"~"ES:S116"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S116.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S116.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S116.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S117',
query: '(nwr[~"^traffic_sign"~"ES:S117"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S117.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S117.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S117.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S118-100',
query: '(nwr[~"^traffic_sign"~"ES:S118-100"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-100.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-100.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-100.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S118-1000',
query: '(nwr[~"^traffic_sign"~"ES:S118-1000"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-1000.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-1000.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-1000.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S118-200',
query: '(nwr[~"^traffic_sign"~"ES:S118-200"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-200.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-200.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-200.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S118-250',
query: '(nwr[~"^traffic_sign"~"ES:S118-250"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-250.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-250.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-250.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S118-300',
query: '(nwr[~"^traffic_sign"~"ES:S118-300"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-300.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-300.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-300.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S118-400',
query: '(nwr[~"^traffic_sign"~"ES:S118-400"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-400.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-400.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-400.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S118-500',
query: '(nwr[~"^traffic_sign"~"ES:S118-500"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-500.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-500.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-500.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S118-800',
query: '(nwr[~"^traffic_sign"~"ES:S118-800"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-800.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-800.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118-800.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S118',
query: '(nwr[~"^traffic_sign"~"ES:S118"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S118.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S119',
query: '(nwr[~"^traffic_sign"~"ES:S119"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S119.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S119.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S119.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S11a',
query: '(nwr[~"^traffic_sign"~"ES:S11a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S11a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S11a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S11a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S11b',
query: '(nwr[~"^traffic_sign"~"ES:S11b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S11b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S11b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S11b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S12',
query: '(nwr[~"^traffic_sign"~"ES:S12"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S12.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S12.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S12.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S120',
query: '(nwr[~"^traffic_sign"~"ES:S120"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S120.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S120.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S120.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S121',
query: '(nwr[~"^traffic_sign"~"ES:S121"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S121.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S121.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S121.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S122',
query: '(nwr[~"^traffic_sign"~"ES:S122"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S122.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S122.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S122.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S123',
query: '(nwr[~"^traffic_sign"~"ES:S123"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S123.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S123.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S123.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S124',
query: '(nwr[~"^traffic_sign"~"ES:S124"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S124.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S124.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S124.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S125',
query: '(nwr[~"^traffic_sign"~"ES:S125"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S125.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S125.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S125.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S126',
query: '(nwr[~"^traffic_sign"~"ES:S126"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S126.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S126.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S126.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S127',
query: '(nwr[~"^traffic_sign"~"ES:S127"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S127.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S127.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S127.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S13',
query: '(nwr[~"^traffic_sign"~"ES:S13"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S13.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S13.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S13.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S14a',
query: '(nwr[~"^traffic_sign"~"ES:S14a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S14a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S14a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S14a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S14b',
query: '(nwr[~"^traffic_sign"~"ES:S14b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S14b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S14b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S14b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S15a',
query: '(nwr[~"^traffic_sign"~"ES:S15a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S15b',
query: '(nwr[~"^traffic_sign"~"ES:S15b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S15c',
query: '(nwr[~"^traffic_sign"~"ES:S15c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15c.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15c.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15c.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S15d',
query: '(nwr[~"^traffic_sign"~"ES:S15d"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15d.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15d.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S15d.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S16',
query: '(nwr[~"^traffic_sign"~"ES:S16"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S16.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S16.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S16.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S17-500',
query: '(nwr[~"^traffic_sign"~"ES:S17-500"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17-500.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17-500.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17-500.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S17',
query: '(nwr[~"^traffic_sign"~"ES:S17"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S17.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S18',
query: '(nwr[~"^traffic_sign"~"ES:S18"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S18.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S18.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S18.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S19',
query: '(nwr[~"^traffic_sign"~"ES:S19"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S19.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S19.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S19.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S1a',
query: '(nwr[~"^traffic_sign"~"ES:S1a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S1a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S1a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S1a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S2',
query: '(nwr[~"^traffic_sign"~"ES:S2"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S2.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S2.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S2.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S20',
query: '(nwr[~"^traffic_sign"~"ES:S20"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S20.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S20.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S20.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S200',
query: '(nwr[~"^traffic_sign"~"ES:S200"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S200.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S200.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S200.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S21',
query: '(nwr[~"^traffic_sign"~"ES:S21"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S21.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S21.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S21.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S22',
query: '(nwr[~"^traffic_sign"~"ES:S22"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S220',
query: '(nwr[~"^traffic_sign"~"ES:S220"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S220.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S220.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S220.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S221',
query: '(nwr[~"^traffic_sign"~"ES:S221"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S221.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S221.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S221.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S221a',
query: '(nwr[~"^traffic_sign"~"ES:S221a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S221a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S221a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S221a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S222',
query: '(nwr[~"^traffic_sign"~"ES:S222"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S222.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S222.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S222.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S222a',
query: '(nwr[~"^traffic_sign"~"ES:S222a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S222a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S222a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S222a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S225',
query: '(nwr[~"^traffic_sign"~"ES:S225"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S225.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S225.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S225.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S22:100',
query: '(nwr[~"^traffic_sign"~"ES:S22:100"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_100.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_100.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_100.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S22:1000',
query: '(nwr[~"^traffic_sign"~"ES:S22:1000"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_1000.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_1000.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_1000.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S22:1200',
query: '(nwr[~"^traffic_sign"~"ES:S22:1200"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_1200.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_1200.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_1200.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S22:1300',
query: '(nwr[~"^traffic_sign"~"ES:S22:1300"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_1300.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_1300.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_1300.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S22:1500',
query: '(nwr[~"^traffic_sign"~"ES:S22:1500"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_1500.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_1500.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_1500.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S22:200',
query: '(nwr[~"^traffic_sign"~"ES:S22:200"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_200.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_200.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_200.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S22:300',
query: '(nwr[~"^traffic_sign"~"ES:S22:300"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_300.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_300.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_300.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S22:400',
query: '(nwr[~"^traffic_sign"~"ES:S22:400"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_400.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_400.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_400.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S22:50',
query: '(nwr[~"^traffic_sign"~"ES:S22:50"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_50.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_50.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_50.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S22:500',
query: '(nwr[~"^traffic_sign"~"ES:S22:500"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_500.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_500.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_500.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S22:600',
query: '(nwr[~"^traffic_sign"~"ES:S22:600"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_600.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_600.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_600.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S22:700',
query: '(nwr[~"^traffic_sign"~"ES:S22:700"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_700.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_700.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_700.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S22:800',
query: '(nwr[~"^traffic_sign"~"ES:S22:800"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_800.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_800.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_800.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S22:900',
query: '(nwr[~"^traffic_sign"~"ES:S22:900"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_900.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_900.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S22_900.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S23',
query: '(nwr[~"^traffic_sign"~"ES:S23"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S23.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S23.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S23.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S230',
query: '(nwr[~"^traffic_sign"~"ES:S230"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S230.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S230.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S230.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S230a',
query: '(nwr[~"^traffic_sign"~"ES:S230a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S230a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S230a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S230a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S232',
query: '(nwr[~"^traffic_sign"~"ES:S232"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S232.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S232.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S232.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S232a',
query: '(nwr[~"^traffic_sign"~"ES:S232a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S232a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S232a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S232a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S235',
query: '(nwr[~"^traffic_sign"~"ES:S235"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S235.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S235.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S235.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S235a',
query: '(nwr[~"^traffic_sign"~"ES:S235a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S235a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S235a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S235a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S24',
query: '(nwr[~"^traffic_sign"~"ES:S24"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S24.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S24.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S24.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S242',
query: '(nwr[~"^traffic_sign"~"ES:S242"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S242.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S242.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S242.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S242a',
query: '(nwr[~"^traffic_sign"~"ES:S242a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S242a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S242a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S242a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S25',
query: '(nwr[~"^traffic_sign"~"ES:S25"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S25.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S25.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S25.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S250',
query: '(nwr[~"^traffic_sign"~"ES:S250"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S250.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S250.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S250.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S260',
query: '(nwr[~"^traffic_sign"~"ES:S260"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S260.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S260.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S260.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S261',
query: '(nwr[~"^traffic_sign"~"ES:S261"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S261.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S261.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S261.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S263',
query: '(nwr[~"^traffic_sign"~"ES:S263"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S263.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S263.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S263.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S263a',
query: '(nwr[~"^traffic_sign"~"ES:S263a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S263a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S263a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S263a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S264',
query: '(nwr[~"^traffic_sign"~"ES:S264"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S264.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S264.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S264.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S266',
query: '(nwr[~"^traffic_sign"~"ES:S266"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S266.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S266.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S266.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S266a',
query: '(nwr[~"^traffic_sign"~"ES:S266a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S266a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S266a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S266a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S26a',
query: '(nwr[~"^traffic_sign"~"ES:S26a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S26a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S26a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S26a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S26b',
query: '(nwr[~"^traffic_sign"~"ES:S26b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S26b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S26b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S26b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S26c',
query: '(nwr[~"^traffic_sign"~"ES:S26c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S26c.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S26c.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S26c.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S27',
query: '(nwr[~"^traffic_sign"~"ES:S27"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S27.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S27.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S27.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S270',
query: '(nwr[~"^traffic_sign"~"ES:S270"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S270.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S270.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S270.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S271',
query: '(nwr[~"^traffic_sign"~"ES:S271"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S271.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S271.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S271.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S28',
query: '(nwr[~"^traffic_sign"~"ES:S28"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S28.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S28.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S28.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S29',
query: '(nwr[~"^traffic_sign"~"ES:S29"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S29.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S29.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S29.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S2a',
query: '(nwr[~"^traffic_sign"~"ES:S2a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S2a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S2a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S2a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S3',
query: '(nwr[~"^traffic_sign"~"ES:S3"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S3.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S3.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S3.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S30',
query: '(nwr[~"^traffic_sign"~"ES:S30"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S30.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S30.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S30.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S300',
query: '(nwr[~"^traffic_sign"~"ES:S300"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S300.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S300.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S300.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S301',
query: '(nwr[~"^traffic_sign"~"ES:S301"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S301.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S301.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S301.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S31',
query: '(nwr[~"^traffic_sign"~"ES:S31"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S31.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S31.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S31.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S310',
query: '(nwr[~"^traffic_sign"~"ES:S310"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S310.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S310.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S310.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S32',
query: '(nwr[~"^traffic_sign"~"ES:S32"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S32.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S32.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S32.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S320',
query: '(nwr[~"^traffic_sign"~"ES:S320"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S320.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S320.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S320.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S321',
query: '(nwr[~"^traffic_sign"~"ES:S321"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S321.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S321.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S321.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S322',
query: '(nwr[~"^traffic_sign"~"ES:S322"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S322.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S322.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S322.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S33',
query: '(nwr[~"^traffic_sign"~"ES:S33"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S33.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S33.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S33.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S34',
query: '(nwr[~"^traffic_sign"~"ES:S34"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S34.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S34.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S34.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S341',
query: '(nwr[~"^traffic_sign"~"ES:S341"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S341.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S341.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S341.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S342',
query: '(nwr[~"^traffic_sign"~"ES:S342"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S342.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S342.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S342.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S344',
query: '(nwr[~"^traffic_sign"~"ES:S344"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S344.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S344.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S344.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S347',
query: '(nwr[~"^traffic_sign"~"ES:S347"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S347.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S347.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S347.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S34a',
query: '(nwr[~"^traffic_sign"~"ES:S34a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S34a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S34a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S34a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S350',
query: '(nwr[~"^traffic_sign"~"ES:S350"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S350.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S350.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S350.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S351',
query: '(nwr[~"^traffic_sign"~"ES:S351"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S351.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S351.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S351.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S354',
query: '(nwr[~"^traffic_sign"~"ES:S354"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S354.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S354.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S354.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S355',
query: '(nwr[~"^traffic_sign"~"ES:S355"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S355.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S355.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S355.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S360',
query: '(nwr[~"^traffic_sign"~"ES:S360"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S360.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S360.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S360.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S362',
query: '(nwr[~"^traffic_sign"~"ES:S362"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S362.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S362.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S362.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S366',
query: '(nwr[~"^traffic_sign"~"ES:S366"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S366.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S366.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S366.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S368',
query: '(nwr[~"^traffic_sign"~"ES:S368"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S368.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S368.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S368.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S373',
query: '(nwr[~"^traffic_sign"~"ES:S373"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S373.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S373.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S373.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S375',
query: '(nwr[~"^traffic_sign"~"ES:S375"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S375.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S375.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S375.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S4',
query: '(nwr[~"^traffic_sign"~"ES:S4"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S4.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S4.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S4.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S400',
query: '(nwr[~"^traffic_sign"~"ES:S400"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S400.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S400.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S400.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S410',
query: '(nwr[~"^traffic_sign"~"ES:S410"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S410.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S410.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S410.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S420',
query: '(nwr[~"^traffic_sign"~"ES:S420"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S420.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S420.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S420.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S430',
query: '(nwr[~"^traffic_sign"~"ES:S430"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S430.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S430.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S430.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S440',
query: '(nwr[~"^traffic_sign"~"ES:S440"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S440.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S440.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S440.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S450',
query: '(nwr[~"^traffic_sign"~"ES:S450"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S450.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S450.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S450.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S5',
query: '(nwr[~"^traffic_sign"~"ES:S5"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S5.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S5.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S5.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S500',
query: '(nwr[~"^traffic_sign"~"ES:S500"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S500.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S500.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S500.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S50a-50',
query: '(nwr[~"^traffic_sign"~"ES:S50a-50"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50a-50.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50a-50.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50a-50.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S50a-60',
query: '(nwr[~"^traffic_sign"~"ES:S50a-60"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50a-60.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50a-60.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50a-60.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S50a-70',
query: '(nwr[~"^traffic_sign"~"ES:S50a-70"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50a-70.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50a-70.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50a-70.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S50a',
query: '(nwr[~"^traffic_sign"~"ES:S50a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S50b-60',
query: '(nwr[~"^traffic_sign"~"ES:S50b-60"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50b-60.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50b-60.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50b-60.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S50b-70',
query: '(nwr[~"^traffic_sign"~"ES:S50b-70"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50b-70.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50b-70.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50b-70.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S50b',
query: '(nwr[~"^traffic_sign"~"ES:S50b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S50c',
query: '(nwr[~"^traffic_sign"~"ES:S50c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50c.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50c.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50c.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S50d-50',
query: '(nwr[~"^traffic_sign"~"ES:S50d-50"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50d-50.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50d-50.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50d-50.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S50d-60',
query: '(nwr[~"^traffic_sign"~"ES:S50d-60"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50d-60.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50d-60.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50d-60.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S50d-70',
query: '(nwr[~"^traffic_sign"~"ES:S50d-70"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50d-70.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50d-70.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50d-70.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S50d',
query: '(nwr[~"^traffic_sign"~"ES:S50d"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50d.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50d.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50d.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S50e-50',
query: '(nwr[~"^traffic_sign"~"ES:S50e-50"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50e-50.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50e-50.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50e-50.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S50e-60',
query: '(nwr[~"^traffic_sign"~"ES:S50e-60"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50e-60.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50e-60.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50e-60.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S50e-70',
query: '(nwr[~"^traffic_sign"~"ES:S50e-70"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50e-70.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50e-70.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50e-70.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S50e',
query: '(nwr[~"^traffic_sign"~"ES:S50e"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50e.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50e.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S50e.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S51',
query: '(nwr[~"^traffic_sign"~"ES:S51"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S51.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S51.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S51.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S510',
query: '(nwr[~"^traffic_sign"~"ES:S510"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S510.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S510.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S510.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S52',
query: '(nwr[~"^traffic_sign"~"ES:S52"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S520',
query: '(nwr[~"^traffic_sign"~"ES:S520"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S520.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S520.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S520.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S52a',
query: '(nwr[~"^traffic_sign"~"ES:S52a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S52b',
query: '(nwr[~"^traffic_sign"~"ES:S52b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S52b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S53',
query: '(nwr[~"^traffic_sign"~"ES:S53"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S53.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S53.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S53.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S53a',
query: '(nwr[~"^traffic_sign"~"ES:S53a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S53a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S53a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S53a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S53b',
query: '(nwr[~"^traffic_sign"~"ES:S53b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S53b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S53b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S53b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S53c',
query: '(nwr[~"^traffic_sign"~"ES:S53c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S53c.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S53c.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S53c.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S540',
query: '(nwr[~"^traffic_sign"~"ES:S540"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S540.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S540.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S540.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S550',
query: '(nwr[~"^traffic_sign"~"ES:S550"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S550.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S550.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S550.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S560',
query: '(nwr[~"^traffic_sign"~"ES:S560"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S560.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S560.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S560.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S570',
query: '(nwr[~"^traffic_sign"~"ES:S570"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S570.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S570.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S570.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S570a',
query: '(nwr[~"^traffic_sign"~"ES:S570a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S570a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S570a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S570a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S571',
query: '(nwr[~"^traffic_sign"~"ES:S571"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S571.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S571.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S571.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S572',
query: '(nwr[~"^traffic_sign"~"ES:S572"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S572a',
query: '(nwr[~"^traffic_sign"~"ES:S572a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S572n',
query: '(nwr[~"^traffic_sign"~"ES:S572n"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572n.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572n.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572n.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S572r',
query: '(nwr[~"^traffic_sign"~"ES:S572r"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572r.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572r.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572r.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S572v',
query: '(nwr[~"^traffic_sign"~"ES:S572v"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572v.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572v.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S572v.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S573',
query: '(nwr[~"^traffic_sign"~"ES:S573"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S573.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S573.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S573.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S574',
query: '(nwr[~"^traffic_sign"~"ES:S574"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S574.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S574.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S574.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S574a',
query: '(nwr[~"^traffic_sign"~"ES:S574a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S574a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S574a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S574a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S574b',
query: '(nwr[~"^traffic_sign"~"ES:S574b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S574b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S574b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S574b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S575',
query: '(nwr[~"^traffic_sign"~"ES:S575"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S575.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S575.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S575.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S575a',
query: '(nwr[~"^traffic_sign"~"ES:S575a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S575a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S575a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S575a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S575n',
query: '(nwr[~"^traffic_sign"~"ES:S575n"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S575n.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S575n.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S575n.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S575v',
query: '(nwr[~"^traffic_sign"~"ES:S575v"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S575v.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S575v.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S575v.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S6',
query: '(nwr[~"^traffic_sign"~"ES:S6"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S6.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S6.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S6.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S600',
query: '(nwr[~"^traffic_sign"~"ES:S600"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S600.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S600.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S600.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S602',
query: '(nwr[~"^traffic_sign"~"ES:S602"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S602.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S602.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S602.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S60a',
query: '(nwr[~"^traffic_sign"~"ES:S60a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S60a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S60a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S60a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S60b',
query: '(nwr[~"^traffic_sign"~"ES:S60b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S60b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S60b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S60b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S610',
query: '(nwr[~"^traffic_sign"~"ES:S610"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S610.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S610.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S610.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S61a',
query: '(nwr[~"^traffic_sign"~"ES:S61a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S61a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S61a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S61a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S61b',
query: '(nwr[~"^traffic_sign"~"ES:S61b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S61b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S61b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S61b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S61b:(variant)',
query: '(nwr[~"^traffic_sign"~"ES:S61b:(variant)"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S61b_(variant).svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S61b_(variant).svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S61b_(variant).svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S62a',
query: '(nwr[~"^traffic_sign"~"ES:S62a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S62a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S62a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S62a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S62b',
query: '(nwr[~"^traffic_sign"~"ES:S62b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S62b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S62b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S62b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S62c',
query: '(nwr[~"^traffic_sign"~"ES:S62c"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S62c.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S62c.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S62c.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S63',
query: '(nwr[~"^traffic_sign"~"ES:S63"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S63.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S63.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S63.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S64a',
query: '(nwr[~"^traffic_sign"~"ES:S64a"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S64a.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S64a.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S64a.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S64b',
query: '(nwr[~"^traffic_sign"~"ES:S64b"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S64b.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S64b.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S64b.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S7',
query: '(nwr[~"^traffic_sign"~"ES:S7"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S700',
query: '(nwr[~"^traffic_sign"~"ES:S700"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S700.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S700.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S700.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S710',
query: '(nwr[~"^traffic_sign"~"ES:S710"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S710.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S710.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S710.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S720',
query: '(nwr[~"^traffic_sign"~"ES:S720"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S720.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S720.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S720.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S730',
query: '(nwr[~"^traffic_sign"~"ES:S730"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S730.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S730.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S730.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S740',
query: '(nwr[~"^traffic_sign"~"ES:S740"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S740.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S740.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S740.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S750',
query: '(nwr[~"^traffic_sign"~"ES:S750"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S750.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S750.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S750.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S760',
query: '(nwr[~"^traffic_sign"~"ES:S760"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S760.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S760.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S760.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S770',
query: '(nwr[~"^traffic_sign"~"ES:S770"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S770.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S770.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S770.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S7:10',
query: '(nwr[~"^traffic_sign"~"ES:S7:10"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_10.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_10.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_10.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S7:100',
query: '(nwr[~"^traffic_sign"~"ES:S7:100"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_100.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_100.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_100.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S7:20',
query: '(nwr[~"^traffic_sign"~"ES:S7:20"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_20.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_20.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_20.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S7:30',
query: '(nwr[~"^traffic_sign"~"ES:S7:30"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_30.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_30.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_30.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S7:40',
query: '(nwr[~"^traffic_sign"~"ES:S7:40"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_40.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_40.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_40.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S7:50',
query: '(nwr[~"^traffic_sign"~"ES:S7:50"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_50.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_50.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_50.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S7:60',
query: '(nwr[~"^traffic_sign"~"ES:S7:60"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_60.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_60.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_60.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S7:70',
query: '(nwr[~"^traffic_sign"~"ES:S7:70"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_70.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_70.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_70.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S7:80',
query: '(nwr[~"^traffic_sign"~"ES:S7:80"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_80.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_80.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_80.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S7:90',
query: '(nwr[~"^traffic_sign"~"ES:S7:90"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_90.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_90.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S7_90.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S800-100',
query: '(nwr[~"^traffic_sign"~"ES:S800-100"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-100.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-100.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-100.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S800-1000',
query: '(nwr[~"^traffic_sign"~"ES:S800-1000"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-1000.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-1000.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-1000.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S800-1300',
query: '(nwr[~"^traffic_sign"~"ES:S800-1300"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-1300.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-1300.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-1300.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S800-150',
query: '(nwr[~"^traffic_sign"~"ES:S800-150"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-150.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-150.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-150.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S800-1500',
query: '(nwr[~"^traffic_sign"~"ES:S800-1500"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-1500.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-1500.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-1500.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S800-1km',
query: '(nwr[~"^traffic_sign"~"ES:S800-1km"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-1km.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-1km.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-1km.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S800-200',
query: '(nwr[~"^traffic_sign"~"ES:S800-200"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-200.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-200.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-200.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S800-250',
query: '(nwr[~"^traffic_sign"~"ES:S800-250"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-250.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-250.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-250.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S800-300',
query: '(nwr[~"^traffic_sign"~"ES:S800-300"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-300.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-300.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-300.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S800-350',
query: '(nwr[~"^traffic_sign"~"ES:S800-350"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-350.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-350.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-350.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S800-400',
query: '(nwr[~"^traffic_sign"~"ES:S800-400"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-400.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-400.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-400.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S800-450',
query: '(nwr[~"^traffic_sign"~"ES:S800-450"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-450.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-450.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-450.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S800-50',
query: '(nwr[~"^traffic_sign"~"ES:S800-50"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-50.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-50.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-50.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S800-500',
query: '(nwr[~"^traffic_sign"~"ES:S800-500"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-500.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-500.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-500.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S800-5km',
query: '(nwr[~"^traffic_sign"~"ES:S800-5km"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-5km.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-5km.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-5km.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S800-600',
query: '(nwr[~"^traffic_sign"~"ES:S800-600"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-600.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-600.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-600.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S800-700',
query: '(nwr[~"^traffic_sign"~"ES:S800-700"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-700.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-700.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-700.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S800-800',
query: '(nwr[~"^traffic_sign"~"ES:S800-800"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-800.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-800.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-800.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S800-900',
query: '(nwr[~"^traffic_sign"~"ES:S800-900"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-900.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-900.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800-900.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S800',
query: '(nwr[~"^traffic_sign"~"ES:S800"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S800.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S810-100',
query: '(nwr[~"^traffic_sign"~"ES:S810-100"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-100.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-100.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-100.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S810-15km',
query: '(nwr[~"^traffic_sign"~"ES:S810-15km"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-15km.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-15km.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-15km.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S810-1km',
query: '(nwr[~"^traffic_sign"~"ES:S810-1km"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-1km.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-1km.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-1km.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S810-200',
query: '(nwr[~"^traffic_sign"~"ES:S810-200"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-200.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-200.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-200.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S810-25km',
query: '(nwr[~"^traffic_sign"~"ES:S810-25km"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-25km.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-25km.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-25km.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S810-2km',
query: '(nwr[~"^traffic_sign"~"ES:S810-2km"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-2km.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-2km.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-2km.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S810-350',
query: '(nwr[~"^traffic_sign"~"ES:S810-350"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-350.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-350.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-350.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S810-3500m',
query: '(nwr[~"^traffic_sign"~"ES:S810-3500m"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-3500m.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-3500m.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-3500m.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S810-35km',
query: '(nwr[~"^traffic_sign"~"ES:S810-35km"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-35km.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-35km.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-35km.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S810-3km',
query: '(nwr[~"^traffic_sign"~"ES:S810-3km"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-3km.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-3km.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-3km.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S810-425km',
query: '(nwr[~"^traffic_sign"~"ES:S810-425km"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-425km.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-425km.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-425km.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S810-4km',
query: '(nwr[~"^traffic_sign"~"ES:S810-4km"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-4km.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-4km.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-4km.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S810-5km',
query: '(nwr[~"^traffic_sign"~"ES:S810-5km"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-5km.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-5km.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810-5km.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S810',
query: '(nwr[~"^traffic_sign"~"ES:S810"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S810.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S820',
query: '(nwr[~"^traffic_sign"~"ES:S820"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S820.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S820.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S820.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S821',
query: '(nwr[~"^traffic_sign"~"ES:S821"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S821.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S821.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S821.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S830',
query: '(nwr[~"^traffic_sign"~"ES:S830"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S830.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S830.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S830.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S840-1000m',
query: '(nwr[~"^traffic_sign"~"ES:S840-1000m"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-1000m.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-1000m.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-1000m.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S840-100m',
query: '(nwr[~"^traffic_sign"~"ES:S840-100m"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-100m.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-100m.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-100m.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S840-150m',
query: '(nwr[~"^traffic_sign"~"ES:S840-150m"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-150m.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-150m.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-150m.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S840-200m',
query: '(nwr[~"^traffic_sign"~"ES:S840-200m"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-200m.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-200m.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-200m.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S840-300m',
query: '(nwr[~"^traffic_sign"~"ES:S840-300m"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-300m.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-300m.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-300m.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S840-50m',
query: '(nwr[~"^traffic_sign"~"ES:S840-50m"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-50m.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-50m.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-50m.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S840-900m',
query: '(nwr[~"^traffic_sign"~"ES:S840-900m"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-900m.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-900m.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S840-900m.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S850',
query: '(nwr[~"^traffic_sign"~"ES:S850"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S850.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S850.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S850.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S851',
query: '(nwr[~"^traffic_sign"~"ES:S851"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S851.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S851.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S851.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S852',
query: '(nwr[~"^traffic_sign"~"ES:S852"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S852.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S852.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S852.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S853',
query: '(nwr[~"^traffic_sign"~"ES:S853"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S853.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S853.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S853.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S860-tow',
query: '(nwr[~"^traffic_sign"~"ES:S860-tow"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S860-tow.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S860-tow.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S860-tow.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S860',
query: '(nwr[~"^traffic_sign"~"ES:S860"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S860.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S860.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S860.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S860g',
query: '(nwr[~"^traffic_sign"~"ES:S860g"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S860g.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S860g.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S860g.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S870',
query: '(nwr[~"^traffic_sign"~"ES:S870"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S870.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S870.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S870.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S880-bicycle',
query: '(nwr[~"^traffic_sign"~"ES:S880-bicycle"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S880-bicycle.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S880-bicycle.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S880-bicycle.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S880-bus',
query: '(nwr[~"^traffic_sign"~"ES:S880-bus"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S880-bus.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S880-bus.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S880-bus.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S880-hgv',
query: '(nwr[~"^traffic_sign"~"ES:S880-hgv"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S880-hgv.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S880-hgv.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S880-hgv.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S880-truck',
query: '(nwr[~"^traffic_sign"~"ES:S880-truck"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S880-truck.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S880-truck.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S880-truck.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S890',
query: '(nwr[~"^traffic_sign"~"ES:S890"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S890.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S890.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S890.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S8:10',
query: '(nwr[~"^traffic_sign"~"ES:S8:10"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_10.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_10.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_10.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S8:100',
query: '(nwr[~"^traffic_sign"~"ES:S8:100"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_100.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_100.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_100.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S8:20',
query: '(nwr[~"^traffic_sign"~"ES:S8:20"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_20.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_20.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_20.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S8:30',
query: '(nwr[~"^traffic_sign"~"ES:S8:30"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_30.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_30.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_30.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S8:40',
query: '(nwr[~"^traffic_sign"~"ES:S8:40"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_40.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_40.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_40.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S8:50',
query: '(nwr[~"^traffic_sign"~"ES:S8:50"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_50.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_50.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_50.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S8:60',
query: '(nwr[~"^traffic_sign"~"ES:S8:60"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_60.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_60.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_60.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S8:70',
query: '(nwr[~"^traffic_sign"~"ES:S8:70"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_70.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_70.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_70.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S8:80',
query: '(nwr[~"^traffic_sign"~"ES:S8:80"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_80.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_80.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_80.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S8:90',
query: '(nwr[~"^traffic_sign"~"ES:S8:90"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_90.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_90.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S8_90.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S9',
query: '(nwr[~"^traffic_sign"~"ES:S9"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S9.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S9.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S9.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S900',
query: '(nwr[~"^traffic_sign"~"ES:S900"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S900.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S900.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S900.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S910',
query: '(nwr[~"^traffic_sign"~"ES:S910"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S910.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S910.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S910.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S920',
query: '(nwr[~"^traffic_sign"~"ES:S920"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S920.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S920.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S920.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S930',
query: '(nwr[~"^traffic_sign"~"ES:S930"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S930.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S930.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S930.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S940',
query: '(nwr[~"^traffic_sign"~"ES:S940"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S940.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S940.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S940.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S950',
query: '(nwr[~"^traffic_sign"~"ES:S950"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S950.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S950.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S950.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S960',
query: '(nwr[~"^traffic_sign"~"ES:S960"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S960.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S960.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S960.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S970',
query: '(nwr[~"^traffic_sign"~"ES:S970"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S970.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S970.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S970.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S980',
query: '(nwr[~"^traffic_sign"~"ES:S980"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S980.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S980.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S980.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S980l',
query: '(nwr[~"^traffic_sign"~"ES:S980l"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S980l.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S980l.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S980l.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S980r',
query: '(nwr[~"^traffic_sign"~"ES:S980r"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S980r.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S980r.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S980r.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S990',
query: '(nwr[~"^traffic_sign"~"ES:S990"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S990.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S990.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S990.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S990l',
query: '(nwr[~"^traffic_sign"~"ES:S990l"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S990l.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S990l.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S990l.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:S990r',
query: '(nwr[~"^traffic_sign"~"ES:S990r"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S990r.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S990r.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_S990r.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:TCA',
query: '(nwr[~"^traffic_sign"~"ES:TCA"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_TCA.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_TCA.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_TCA.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:TCAF',
query: '(nwr[~"^traffic_sign"~"ES:TCAF"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_TCAF.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_TCAF.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_TCAF.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
return styles[key][regexp];
}
}
}
}
return null;
}
},

{
group: 'ES',
title: 'ES:traffic:sign:dir',
query: '(nwr[~"^traffic_sign"~"ES:traffic:sign:dir"]({{bbox}});node(w););out meta;',
iconSrc:'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_traffic_sign_dir.svg',
iconStyle: 'background-color:rgba(255,255,255,0.4)',
style: function (feature) {
var name = feature.get('name') || '';
var styles = {
'direction': {
'forward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_traffic_sign_dir.svg',
rotation:0,
rotateWithView: false,
anchor: [1,0],
scale: 0.03
}),
text: new ol.style.Text({
text: name,
font: 'small-caps bold 10px/1 sans-serif',
offsetX : 80,
offsetY : -4,
fill: new ol.style.Fill({
color: 'rgba(0,0,0,1)'
})
})
}),
'backward':  new ol.style.Style({
image: new ol.style.Icon({
src: 'https://raw.githubusercontent.com/yopaseopor/beta_preset_josm/master/ES/traffic_signs/ES/ES_traffic_sign_dir.svg',
rotation:3.14,
rotateWithView: false,
anchor: [-1,0],
scale: 0.03
})
})
}
};
for (var key in styles) {
var value = feature.get(key);
if (value !== undefined) {
for (var regexp in styles[key]) {
if (new RegExp(regexp).test(value)) {
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
