const request = require('request');


var getCardDeck = (code) => {
    return new Promise((resolve, reject) => {

        request({
            url: `https://api.coindesk.com/v1/bpi/currentprice/${code}.json`,
            json: true

        }, (error, response, body) => {

            if (error) {

                reject('Cannot connect to card API')

            } else {
                resolve(eval('body.bpi.' + code + '.rate'))
            }

        })
    });
}

module.exports = {
    getCardDeck
}