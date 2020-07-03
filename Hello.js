const express = require('express'); // Add express module.

var app = express();
require('./GetFunction.js'); // Add GetFunction module.

const port = 8080; // Port number.

app.get('/', GetReply); // Use the function inside the GetFunction.js.

app.listen(port,() => 
{
    console.log(`Hello app listening at http://localhost:${port}`)
}); // Listen to port 8080.