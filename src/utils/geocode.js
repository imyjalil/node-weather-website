const request = require('request')

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoieW91bnVzamFsaWwiLCJhIjoiY2tpYmE2eHU3MHhpMDJ5bzVvaGFjbWVnbyJ9.fv-mN34qGU3olklE5X7bbQ&limit=1'
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            return console.log(error)
        } else if (body.features.length == 0) {
            callback('unable to find location. Try another search.', undefined)
        }
        else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}
module.exports = geoCode