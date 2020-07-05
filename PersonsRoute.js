const express = require('express');

const app = module.exports = express();

const Post = require('./PostFunction.js');
const Reply = require('./GetFunction.js');

app.post('/Persons/:Person', Post);
app.get('/Persons/:Person', Reply);

app.post('/Persons', Post);
app.get('/Persons', Reply);