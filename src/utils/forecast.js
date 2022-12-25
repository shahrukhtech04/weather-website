const request = require("request")


const weatherBaseUrl = 'http://api.weatherstack.com/current'
const access_key = '4a728c02bd62933bf47d0a4ae5c376e5'


const forecast = (latitude,longitude,callback) => {

    const url = `${weatherBaseUrl}?access_key=${access_key}&query=${latitude},${longitude}`

        request({url,json:true},(error,{ body }) => {


            if(error){
                callback('unable to connect weather api',undefined)
            }
            else if(body.error){
                callback('unable to find location',undefined)
            }
            else{
                const { temperature,feelslike,weather_descriptions } = body.current
                const weatherUpdate = `${weather_descriptions}. Its currently ${temperature} degrees out,But feels like ${feelslike} degree out`
                callback(undefined,weatherUpdate)
            }

        })

}


module.exports = forecast