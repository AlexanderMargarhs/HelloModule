const express = require('express');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Reply = require('./Functions/GetFunction.js');
const Post = require('./Functions/PostFunction.js');

const Person = require('./Routes/PersonRoute.js');
const ID = require('./Routes/IDRoute.js');
const Gender = require('./Routes/GenderRoute.js');
const Cats = require('./Routes/CatsRoute.js');
const Persons = require('./Routes/PersonsRoute.js');

const port = 8080;


app.use(Person);
app.use(ID);
app.use(Gender);
app.use(Cats);
app.use(Persons);


app.get('/', Reply);
app.post('/', Post);

app.listen(port,() => 
{
    console.log(`App listening at http://localhost:${port}`)
});