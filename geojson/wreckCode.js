var OSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
        })

var geojsonMarkerOptions = {
    radius: 6,
    fillColor: "#b22222",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};

var circles = L.geoJSON(wrecks, {
    pointToLayer: function (feature, latlng) {
        console.log(feature)
        // var yearsunk = features.properties.yearsunk
        return L.circleMarker(latlng, geojsonMarkerOptions).bindPopup('Sunk in: ' +feature.properties.yearsunk);
    }
}).addTo(map);

var baseLayers = {
    "Open Street Map": OSM,
    "ESRI": Esri_WorldImagery
    };

var overlayMaps = {
    "Circles": circles,
};

var layerControl = L.control.layers(baseLayers,overlayMaps).addTo(map);
