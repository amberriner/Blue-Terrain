//function to start the Leaflet map
function createMap(){

    //Varibles for attribution box on the map.
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' +' <a href="http://mapbox.com">Mapbox</a>';
    
    //Variable for storing your Mapbox API Token
    var apitoken = 'pk.eyJ1IjoiYW1iZXJyaW5lciIsImEiOiJja3Z4N3p3aGQ0ajJiMnVtdG96bm9iZ3N3In0.wq4cOx-afA1vpxb0fyo2eA' 
    
    //URL used for Stanard MaxBox Styles
    var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}';
    
    //URL used for Custom MapBox Style
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}';
    
    var satelliteTerrain = L.tileLayer(mbStyleUrl, {id: 'amberriner/ckvzj1cui0n5r15p1es9845z1', token: apitoken,  attribution: mbAttr});
    
    var blueTerrain = L.tileLayer(mbStyleUrl, {id: 'amberriner/ckvx8vlqk3yyj14p8lcigq0n9', token: apitoken,  attribution: mbAttr});
    
    //For MabBox Standard Basemaps
    var standardBasemap   = L.tileLayer(mbUrl, {id: 'mapbox.light', token: apitoken, attribution: mbAttr});
    
    //create the map*/
    var map = L.map('map', {
        center: [31.00, -5],//Coordinated to center the map
        zoom: 6, //zoom level
        layers:blueTerrain //basemap
    });
    
    //create the basemap control layer*/
    var baseLayers = {
		"Blue Terrain": blueTerrain,
        "Satellite Terrain": satelliteTerrain
    };
    
    L.control.layers(baseLayers).addTo(map);
};

//calling the funcation
$(document).ready(createMap);