const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const location = process.argv[2]

if (location != undefined) {

    // geocode(location, (error, data) => {
    geocode(location, (error, { longitude, latitude, place }) => {
        if (error) {
            return console.log(error)
        }



        // forecast(data.longitude, data.latitude, (error, fdata) => {
        forecast(longitude, latitude, (error, fdata) => {
            console.log('..............................................................')
            if (error) {
                return console.log(error)
            }
            // console.log(data.place)
            console.log(place)
            console.log('Data: ', fdata)
        })
    })

} else {
    console.log("Please Provide a Valid Location!")
}