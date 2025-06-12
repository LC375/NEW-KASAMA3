ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:20935").setExtent([704977.379658, 8765375.982636, 709404.516837, 8768085.253844]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_New_Kasama2_1 = new ol.format.GeoJSON();
var features_New_Kasama2_1 = format_New_Kasama2_1.readFeatures(json_New_Kasama2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20935'});
var jsonSource_New_Kasama2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_New_Kasama2_1.addFeatures(features_New_Kasama2_1);
var lyr_New_Kasama2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_New_Kasama2_1, 
                style: style_New_Kasama2_1,
                popuplayertitle: 'New_Kasama2',
                interactive: true,
                title: '<img src="styles/legend/New_Kasama2_1.png" /> New_Kasama2'
            });
var format_FieldData_2 = new ol.format.GeoJSON();
var features_FieldData_2 = format_FieldData_2.readFeatures(json_FieldData_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20935'});
var jsonSource_FieldData_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FieldData_2.addFeatures(features_FieldData_2);
var lyr_FieldData_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FieldData_2, 
                style: style_FieldData_2,
                popuplayertitle: 'Field Data',
                interactive: true,
                title: '<img src="styles/legend/FieldData_2.png" /> Field Data'
            });
var format_FieldDatashp_3 = new ol.format.GeoJSON();
var features_FieldDatashp_3 = format_FieldDatashp_3.readFeatures(json_FieldDatashp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20935'});
var jsonSource_FieldDatashp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FieldDatashp_3.addFeatures(features_FieldDatashp_3);
var lyr_FieldDatashp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FieldDatashp_3, 
                style: style_FieldDatashp_3,
                popuplayertitle: 'Field Data shp',
                interactive: true,
                title: '<img src="styles/legend/FieldDatashp_3.png" /> Field Data shp'
            });
var format_NewKasamaCentroids_4 = new ol.format.GeoJSON();
var features_NewKasamaCentroids_4 = format_NewKasamaCentroids_4.readFeatures(json_NewKasamaCentroids_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:20935'});
var jsonSource_NewKasamaCentroids_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NewKasamaCentroids_4.addFeatures(features_NewKasamaCentroids_4);
var lyr_NewKasamaCentroids_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NewKasamaCentroids_4, 
                style: style_NewKasamaCentroids_4,
                popuplayertitle: 'New Kasama Centroids',
                interactive: true,
                title: '<img src="styles/legend/NewKasamaCentroids_4.png" /> New Kasama Centroids'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_New_Kasama2_1.setVisible(true);lyr_FieldData_2.setVisible(true);lyr_FieldDatashp_3.setVisible(true);lyr_NewKasamaCentroids_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_New_Kasama2_1,lyr_FieldData_2,lyr_FieldDatashp_3,lyr_NewKasamaCentroids_4];
lyr_New_Kasama2_1.set('fieldAliases', {'FID': 'FID', 'Numbers': 'Numbers', });
lyr_FieldData_2.set('fieldAliases', {'Easting': 'Easting', 'Northing': 'Northing', 'Beacon': 'Beacon', });
lyr_FieldDatashp_3.set('fieldAliases', {'Easting': 'Easting', 'Northing': 'Northing', 'Beacon': 'Beacon', });
lyr_NewKasamaCentroids_4.set('fieldAliases', {'FID': 'FID', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_New_Kasama2_1.set('fieldImages', {'FID': 'TextEdit', 'Numbers': 'Range', });
lyr_FieldData_2.set('fieldImages', {'Easting': 'Range', 'Northing': 'Range', 'Beacon': 'TextEdit', });
lyr_FieldDatashp_3.set('fieldImages', {'Easting': '', 'Northing': '', 'Beacon': '', });
lyr_NewKasamaCentroids_4.set('fieldImages', {'FID': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', });
lyr_New_Kasama2_1.set('fieldLabels', {'FID': 'inline label - always visible', 'Numbers': 'inline label - always visible', });
lyr_FieldData_2.set('fieldLabels', {'Easting': 'no label', 'Northing': 'no label', 'Beacon': 'no label', });
lyr_FieldDatashp_3.set('fieldLabels', {'Easting': 'inline label - always visible', 'Northing': 'inline label - always visible', 'Beacon': 'inline label - always visible', });
lyr_NewKasamaCentroids_4.set('fieldLabels', {'FID': 'no label', 'Easting': 'no label', 'Northing': 'no label', });
lyr_NewKasamaCentroids_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});