const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

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


app.get('/', function(request, response) {
	response.render('homepage.hbs')
});

app.post('/auth', async (request, response) => {

	console.log(request.body.username);
    // var username = request.body.username;
    // console.log(username);
    response.redirect(`/`);

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