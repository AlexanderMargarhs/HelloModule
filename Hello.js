const express = require('express'); // Add express module.

const app = express();
const Reply = require('./GetFunction.js'); // Add GetFunction module.
const Post = require('./PostFunction.js'); // Add Post module.

const Alex = require('./PersonRoute.js'); // Add Alex module.
const Deimos = require('./IDRoute.js'); // Add Deimos module.
const Nick = require('./GenderRoute.js'); // Add Nick module.
const Timo = require('./CatsRoute.js'); // Add Timo module.

const port = 8080; // Port number.

app.use(Alex);
app.use(Deimos);
app.use(Nick);
app.use(Timo);
app.get('/', Reply); // Use the function inside the GetFunction.js.

app.post('/', Post);

app.listen(port,() => 
{
    console.log(`Hello app listening at http://localhost:${port}`)
}); // Listen to port 8080.