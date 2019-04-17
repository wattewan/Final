const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const nasa = require('./nasa.js')
const cards = require('./cards.js')
const five = require('./draw_five.js')
const deck = require('./deck.js')

var session = require('express-session');
const port = process.env.PORT || 8080;

var app = express();


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});


app.get('/home', function(request, response) {
	response.render('homepage.hbs', {
		pages: ['planet_finder', 'cards']
	})
});


app.get('/planet_finder', function(request, response) {
	response.render('planet_finder.hbs', {
		pages: ['home', 'cards']
	})
})
// app.get('/planet', function(request, response) {
// 	response.render('planet.hbs')
// })

app.get('/cards', function(request, response) {
	deck.getDeck().then((results) => {
		response.render(`cards.hbs`, {
			images: [results.cards[0].image, 
			results.cards[1].image,
			results.cards[2].image,
			results.cards[3].image,
			results.cards[4].image
			],
			pages: ['', 'planet_finder', 'home']
		});
		console.log(results.cards[0].image);
    }).catch((e) => {
    	response.render("error.hbs", {
    		error: "Error: " + e
    	})
    })
})



app.post('/auth', async (request, response) => {

	nasa.getNasaImage(request.body.username).then((results) => {
		response.render(`planet.hbs`, {
			images: [results[0].links[0].href, 
			results[1].links[0].href,
			results[2].links[0].href
			]
		});
    }).catch((e) => {
    	response.render("error.hbs", {
    		error: "Error: " + e
    	})
    })
    // var username = request.body.username;
    // console.log(username);
    

});



//     if (username && password) {
//         db.collection('bank').find({username: username, password: password}).toArray((err, userinfo) => {

//                 if (userinfo.length > 0) {
//                     //console.log(userinfo);
                    
//                     // response.redirect(`/home/${username}`);
//                     response.redirect(`/phone/${username}`);

//                 } else {
//                     response.send('Incorrect Username and/or Password!');
//                 }
//                 response.end();
//             }
//         )
//     } else {
//         response.send('Please enter Username and Password!');
//         response.end();
//     }
// });