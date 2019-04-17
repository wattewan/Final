const express = require('express');
const hbs = require('hbs')
const port = process.env.PORT || 8080;

var app = express();



app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});


app.get('/', function(request, response) {
	response.render('homepage.hbs')
});