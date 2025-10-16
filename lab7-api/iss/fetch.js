let url = 'https://api.wheretheiss.at/v1/satellites/25544'

// html elements
let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')

var issMarker
var update = 10000 // 10000 milliseconds == 10 sec

let map = L.map('iss-map').setView([0, 0], 1) // center

// tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map)

// icon
var icon = L.icon({
    iconUrl: 'icon.png',
    iconSize: [50,50],
    iconAnchor: [25,25]
})

iss()

function iss() {

    fetch(url)
        .then(res => res.json())
        .then(issData => {
            console.log(issData) //double check
            let lat = issData.latitude
            let long = issData.longitude
            issLat.innerHTML = lat
            issLong.innerHTML = long
            
            if (!issMarker) {
                issMarker = L.marker([lat,long], {icon: icon}).addTo(map) //if not exist, create marker
            } else {
                issMarker.setLatLng([lat,long]) //if already exist, update location
            }

            let date = new Date();
            document.querySelector('#dt_curr').innerHTML = `At ${date} the ISS is over the following coordinates:`
        })
        .catch( err => {
            console.log(err)
        })
   
        .finally( () => {
            setTimeout(iss, update) // call iss() after delay of 'update'
        })
}
