const express = require('express');

const app = module.exports = express();

const Post = require('./PostFunction.js');
const Reply = require('./GetFunction.js');

app.post('/Person/:Name', Post);
app.get('/Person/:Name', Reply);