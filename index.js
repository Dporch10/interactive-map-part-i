const myMap = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(myMap);
//adding markers//

const redMarker = L.marker([48.87007, 2.346453])

redMarker.addTo(myMap).bindPopup('<p1><b>The Hoxton, Paris</b></p1>').openPopup()

 

const bus1 = L.marker([48.87007, 2.346453]).addTo(myMap).bindPopup('<p1><b>Bus One</b></p1>').openPopup()

 

const bus2 = L.marker( [48.86933262048345, 2.3542531602919805]).addTo(myMap).bindPopup('<p1><b>Bus Two</b></p1>').openPopup()

 

const bus3 = L.marker([48.87199261164275, 2.3400569901592183]).addTo(myMap).bindPopup('<p1><b>Bus Three</b></p1>').openPopup()

 

const bus4 = L.marker([48.86993336274516, 2.3280142476578813]).addTo(myMap).bindPopup('<p1><b>Bus Four</b></p1>').openPopup()

 

const bus5 = L.marker([48.86834104280146, 2.330308418109664]).addTo(myMap).bindPopup('<p1><b>Bus Five</b></p1>').openPopup()







const polygon = L.polygon ([
                                        
[48.863368120198004, 2.3509079846928516]
[48.86933262048345, 2.3542531602919805]
[48.87199261164275, 2.3400569901592183]
[48.86993336274516, 2.3280142476578813] 
[48.86834104280146, 2.330308418109664]
],{
    color: "red", fillOpacity: .2
} ).addTo(myMap)
