var weather = require('./app.js')
var location = require('./location.js')

var argv = require('yargs')
    .option('location', {
        alias: 'l',
        demand: false,
        type: 'string'
    }).help('help').argv

if (typeof argv.l === 'string' && argv.l.length > 0) {
    weather(argv.l).then(function(currentWeather){
        console.log(currentWeather)
    }).catch(function(error){
        console.log(error)
    })
} else {
    console.log('Getting location automatically...')
    location().then(function(loc){
        return weather(loc.city)
    }).then(function(currentWeather){
        console.log(currentWeather)
    }).catch(function(error){
        console.log(error)
    })
}