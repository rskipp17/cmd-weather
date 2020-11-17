var request = require('request')

module.exports = function (location) {
    return new Promise(function (resolve, reject) {
        var el = encodeURIComponent(location)
        var url = //open weather api link

        if (!location) {
            reject('No Location was provided.')
        }

        request({
            url: url,
            json: true
        }, function (error, response, body) {
            if (error) {
                reject('An error has occured!')
            } else {
                resolve(`its ${body.main.temp} in ${body.name}`)
            }
        })
    })
}