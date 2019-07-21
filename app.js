var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var mongojs = require('mongojs');

var app = express();

//middleware 
//should be placed immediately after express
//using lattest javascript function style
//should be made before declaring route
// var logger = (req, res, next)=>{
// 	console.log('Logging...');
// 	next();
// }

// app.use(logger);
//set up views 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


///middle ware for the body parser
//use the middle  ware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//middleware to set staticpart of our site like css.
app.use(express.static(path.join(__dirname, 'public')));

var users = [
{
	id:1,
	Name:"Stephen Kamau",
	email:"stevekamahertz@gmail.com"
},

{
	id:2,
	Name:"Silvannah Wandoe",
	email:"stevekamahertz@gmail.com"
}
]

//declare the route for the app
//what is gonna run on the route
app.get('/', (req, res)=>{
	res.render('index', {
		title:"Customer App || Admin",
		users:users
	});
});

//post request 
app.post('/users/add', (req, res) => {
	var new_user = {
		name: req.body.names,
		email: req.body.email
	}
	console.log(new_user);
});
var port = 3000;
app.listen(port, ()=>{
	console.log('Server started on port: '+port);
});