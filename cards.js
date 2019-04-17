const request = require('request');


var getCardDeck = () => {
    return new Promise((resolve, reject) => {

        request({
            url: `https://deckofcardsapi.com/api/deck/new/`,
            json: true

        }, (error, response, body) => {

            if (error) {

                reject('Cannot connect to card API')

            } else {
                resolve(eval('body.deck_id'))
            }

        })
    });
}

module.exports = {
    getCardDeck
}