
const request = require('request');


var getNasaImage = (planet) => {
    return new Promise((resolve, reject) => {

        request({
            url: `https://images-api.nasa.gov/search?q=${planet}`,
            json: true

        }, (error, response, body) => {

            if (error) {

                reject('Cannot connect to card API')

            } else {
                resolve(eval('body.collection.items'))
            }

        })
    });
}

module.exports = {
    getNasaImage
}