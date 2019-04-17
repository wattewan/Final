const request = require('request');
const cards = require('./cards.js')
const five = require('./draw_five.js')
//const shuffle = require('./shuffle.js')


var getDeck = async (deck_code) => {
    const code = await cards.getCardDeck()
    //const shuffle = await shuffle.getShuffle(code)
    //console.log(shuffle);
    const five_cards = await five.getCardFive(code)


    return five_cards
       
}

module.exports = {
    getDeck
}