

const request = require('request');
const cards = require('./cards.js')


var getShuffle = (deck_code) => {
    return new Promise((resolve, reject) => {
            
       request({
            url: `https://deckofcardsapi.com/api/deck/${deck_code}/shuffle/`,
            json: true

        }, (error, response, body) => {


            if (error) {

                reject('Cannot connect to card API')

            } else {solve('shuffled')      
                re      
            }

        })
    });
}

module.exports = {
    getShuffle
}