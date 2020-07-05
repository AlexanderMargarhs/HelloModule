const express = require('express'); // Add express module.
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const Reply = require('./Functions/GetFunction.js'); // Add GetFunction module.
const Post = require('./Functions/PostFunction.js'); // Add PostFunction module.

const Person = require('./Routes/PersonRoute.js'); // Add Person module.
const ID = require('./Routes/IDRoute.js'); // Add ID module.
const Gender = require('./Routes/GenderRoute.js'); // Add Gender module.
const Cats = require('./Routes/CatsRoute.js'); // Add Cats module.
const Persons = require('./Routes/PersonsRoute.js'); // Add Persons module.

const port = 8080; // Port number.


app.use(Person);
app.use(ID);
app.use(Gender);
app.use(Cats);
app.use(Persons);


app.get('/', Reply); // Use the function inside the GetFunction.js.
app.post('/', Post); // Use the function inside the PostFunction.js.

app.listen(port,() => 
{
    console.log(`App listening at http://localhost:${port}`)
}); // Listen to port 8080.