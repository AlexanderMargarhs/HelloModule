const express = require('express');

const app = module.exports = express();

const Post = require('../Functions/PostFunction.js');
const Reply = require('../Functions/GetFunction.js');

app.post('/Persons/:Person', Post);
app.get('/Persons/:Person', Reply);

app.post('/Persons', Post);
app.get('/Persons', Reply);