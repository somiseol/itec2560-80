let weatherUrl = 'https://api.weather.gov/gridpoints/MPX/116,72/forecast'

let weatherTable = document.querySelector('#weather-forecast')

fetch(weatherUrl)
    .then(response => response.json())
    .then( weatherJson => {
        displayWeatherTable(weatherJson)
    }).catch(error => {
        console.log(error)
        alert('Sorry, could not fetch the weather forecast')
    })


function displayWeatherTable(weatherJson) {
    console.log(weatherJson)
    let forecastArray = weatherJson.properties.periods
    console.log(forecastArray)
    forecastArray.forEach( forecastPeriodData => {
        console.log(forecastPeriodData)    

        // create table row for each forecast period
        let tableRow = document.createElement('tr')

        // create td element for period name, 
        // get name from JSON, set innerHTML, add to table row
        let periodNameTableData = document.createElement('td')
        let periodName = forecastPeriodData.name 
        periodNameTableData.innerHTML = periodName
        tableRow.appendChild(periodNameTableData)

        // Create td for temperature and the unit temperature is measured in
        // The API can return American/Fahrenheit or metric/Celsius units, the default is Fahrenheit
        let temperatureTableData = document.createElement('td')
        let temperature = forecastPeriodData.temperature 
        let temperatureUnit = forecastPeriodData.temperatureUnit
        temperatureTableData.innerHTML = temperature + temperatureUnit
        tableRow.appendChild(temperatureTableData)

        // Icon
        let weatherIconTableData = document.createElement('td')
        let weatherIconImage = document.createElement('img')
        let weatherIconSource = forecastPeriodData.icon
        weatherIconImage.src = weatherIconSource
        // Add the image to the td 
        weatherIconTableData.appendChild(weatherIconImage)
        // Add the td (with the image inside it) to the table row 
        tableRow.appendChild(weatherIconTableData)


        // Detailed forecast description 
        let detailForecastTableData = document.createElement('td') //create col
        let detailedForecast = forecastPeriodData.detailedForecast // assign detail
        detailForecastTableData.innerHTML = detailedForecast //output to html
        tableRow.appendChild(detailForecastTableData) //append

	//TODO

	let windTableData = document.createElement('td') //new col
	let windspeed = forecastPeriodData.windSpeed //assign windspeed
	let winddirection = forecastPeriodData.windDirection //asign wind dir
	windTableData.innerHTML = windspeed + winddirection //output to html
	tableRow.appendChild(windTableData) //append to table row

        // Add the new row to the table
        weatherTable.appendChild(tableRow)
    })
}

