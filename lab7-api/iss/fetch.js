
let url = 'https://api.wheretheiss.at/v1/satellites/25544'

let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')

let map = L.map('iss-map').setView([0, 0], 1)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',    
}).addTo(map)


fetch(url)
    .then(res => res.json())
    .then(issData => {
        console.log(issData)
        let lat = issData.latitude
        let long = issData.longitude
        issLat.innerHTML = lat
        issLong.innerHTML = long

        let issMarker = L.marker([lat, long]).addTo(map)
        //TODO change icon to iss-icon
        let date = new Date();
        document.querySelector('#dt_curr').innerHTML = `At ${date} the ISS is over the following coordinates:`
    })
    .catch( err => {
        console.log(err)
    })    
