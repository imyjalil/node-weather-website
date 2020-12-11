const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/e6af5b5feb891b272e18f5e2fc0370a6/' + latitude + ',' + longitude
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('unable to find location', undefined)
        }
        else {
            callback(undefined, (body.daily.summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.'))
        }
    })
}
module.exports = forecast