const request = require('request')


const geoCodingBaseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
const access_token = 'pk.eyJ1Ijoic2hhaHJ1a2hwYXNoYTAwNCIsImEiOiJjbGJ0a2RyM2UxZW9iM29rZWpianFrcG13In0.bfByYqqN0I-4BYbktZ-_fQ'


const geoCode = (address,callback) => {
    const url = `${geoCodingBaseUrl}${encodeURIComponent(address)}.json?access_token=${access_token}`

    request({url,json:true}, (error,response) => {
        if(error){
            callback("Unable to connect Geolocation Api",undefined)
        }
        else if(response.body.features.length === 0){
            callback('unable to find co-ordinates',undefined) 
        }
        else{
            callback(undefined,{
                latitude:  response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}


module.exports = geoCode