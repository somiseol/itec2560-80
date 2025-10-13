let apodApiUrl = 'https://api.nasa.gov/planetary/apod?api_key=o4YbYxYNhpKtVwNeht7gr7t4M9MwU8SV4pZitIus&date=1998-12-08'
//APOD service: 1996-06-16 ~ current

// var for html elements
let apodTitle = document.querySelector('#apod-title')
let apodExplanation = document.querySelector('#apod-explanation')
let apodImage = document.querySelector('#apod-image')
let apodVideo = document.querySelector('#apod-video')

// returns Promise
fetch(apodApiUrl)
    .then( response => response.json() ) //receive entire response as json string; returns another promise
    .then( data => { //handles result of resolved promise
	//data is json object 
        console.log(data) 

        let title = data.title 
        apodTitle.innerHTML = title 

        let explanation = data.explanation
        apodExplanation.innerHTML = explanation

        let mediaType = data.media_type 
        let url = data.url 

        if (mediaType === 'image') {
            apodImage.src = url 
            apodImage.style.display = 'block'
        }
        else if (mediaType === 'video') {
            apodVideo.src = url
            apodVideo.style.display = 'block'
        } 
        else {
		//TODO
        }
        
    })
    .catch( err => { //handle result of rejected promise
        console.log(err)
        apodExplanation.innerHTML = 'could not fetch APOD'
    })



