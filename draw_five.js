const request = require('request');
const cards = require('./cards.js')


var getCardFive = (deck_code) => {
    return new Promise((resolve, reject) => {
            
       request({
            url: `https://deckofcardsapi.com/api/deck/${deck_code}/draw/?count=5`,
            json: true

        }, (error, response, body) => {


            if (error) {

                reject('Cannot connect to card API')

            } else {
                resolve(eval('body'))            
            }

        })
    });
}

module.exports = {
    getCardFive
}