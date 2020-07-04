const express = require('express');

const app = module.exports = express();

const Reply = require('./GetFunction.js');
const Post = require('./PostFunction.js');

app.get('/ID/:UserID', Reply);

app.post('/ID/:UserID', Post);